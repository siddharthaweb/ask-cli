const fs = require('fs-extra');
const path = require('path');

const { AbstractCommand } = require('@src/commands/abstract-command');
const optionModel = require('@src/commands/option-model');
const CliError = require('@src/exceptions/cli-error');
const CliFileNotFoundError = require('@src/exceptions/cli-file-not-found-error');
const CliWarn = require('@src/exceptions/cli-warn');
const ResourcesConfig = require('@src/model/resources-config');
const Manifest = require('@src/model/manifest');
const CONSTANTS = require('@src/utils/constants');
const profileHelper = require('@src/utils/profile-helper');
const stringUtils = require('@src/utils/string-utils');
const Messenger = require('@src/view/messenger');
const SpinnerView = require('@src/view/spinner-view');

const helper = require('./helper');

class DeployCommand extends AbstractCommand {
    name() {
        return 'deploy';
    }

    description() {
        return 'deploy the skill project';
    }

    requiredOptions() {
        return [];
    }

    optionalOptions() {
        return ['profile', 'debug'];
    }

    handle(cmd, cb) {
        let profile;
        try {
            profile = profileHelper.runtimeProfile(cmd.profile);
            new ResourcesConfig(path.join(process.cwd(), CONSTANTS.FILE_PATH.ASK_RESOURCES_JSON_CONFIG));
            this._filterAlexaHostedSkill(profile);
            this._initiateManifestModel(profile);
        } catch (err) {
            if (err instanceof CliWarn) {
                Messenger.getInstance().warn(err.message);
            } else if (err instanceof CliFileNotFoundError) {
                Messenger.getInstance().warn('Please make sure you are in the root directory of the project.');
            } else {
                Messenger.getInstance().error(err);
            }
            return cb(err);
        }
        deployResources(profile, cmd.debug, (deployErr) => {
            // Write updates back to resources file
            if (deployErr) {
                Messenger.getInstance().error(deployErr);
                return cb(deployErr);
            }

            ResourcesConfig.getInstance().write();
            Manifest.getInstance().write();

            // Post deploy logic
            // call smapiClient to enable skill
            helper.enableSkill(profile, cmd.debug, (enableError) => {
                if (enableError) {
                    Messenger.getInstance().error(enableError);
                    return cb(enableError);
                }
                cb();
            });
        });
    }

    _filterAlexaHostedSkill(profile) {
        const deployerType = ResourcesConfig.getInstance().getSkillInfraType(profile);
        if (deployerType === CONSTANTS.DEPLOYER_TYPE.HOSTED.NAME) {
            throw new CliWarn('Alexa hosted skills can be deployed by performing a git push.\n'
            + 'The master branch gets deployed to skill\'s development stage\n'
            + 'The prod branch gets deployed to skill\'s live stage\n'
            + 'Please run "git push" at the proper branch to deploy hosted skill to your targeted stage.');
        }
    }

    _initiateManifestModel(profile) {
        const skillPackageSrc = ResourcesConfig.getInstance().getSkillMetaSrc(profile);
        if (!stringUtils.isNonBlankString(skillPackageSrc)) {
            throw new CliError('Skill package src is not found in ask-resources.json.');
        }
        if (!fs.existsSync(skillPackageSrc)) {
            throw new CliError(`The skillMetadata src file ${skillPackageSrc} does not exist.`);
        }
        const manifestPath = path.join(skillPackageSrc, CONSTANTS.FILE_PATH.SKILL_PACKAGE.MANIFEST);
        new Manifest(manifestPath);
    }
}

/**
 * The deploy function used to deploy all skill related resources
 * This steps includes the deploy of skillMeta, skillCode and skillInfra using the deployDelegate plugin
 * @param {String} profile The profile name
 * @param {Boolean} doDebug The flag of debug or not
 * @param {Function} callback
 */
function deployResources(profile, doDebug, callback) {
    // Skill Metadata
    Messenger.getInstance().info('==================== Deploy Skill Metadata ====================');
    const skillMetaSpinner = new SpinnerView();
    skillMetaSpinner.start('Uploading the entire skill package (it may take few minutes to build the skill metadata)...');
    helper.deploySkillMetadata(profile, doDebug, (metaErr) => {
        skillMetaSpinner.terminate();
        if (metaErr && metaErr !== 'The hash of current skill package folder does not change compared to the last deploy hash result, '
            + 'CLI will skip the deploy of skill package.') {
            return callback(metaErr);
        }
        if (metaErr) {
            // this case is the warning message of the same hash skip, deploy will continue
            Messenger.getInstance().warn(metaErr);
        } else {
            ResourcesConfig.getInstance().write();
            Messenger.getInstance().info('Skill package deployed successfully.');
        }
        Messenger.getInstance().info(`Skill ID: ${ResourcesConfig.getInstance().getSkillId(profile)}`);

        // Skill Code
        Messenger.getInstance().info('\n==================== Build Skill Code ====================');
        helper.buildSkillCode(profile, doDebug, (buildErr, uniqueCodeList) => {
            if (buildErr) {
                return callback(buildErr);
            }
            Messenger.getInstance().info('Skill code built successfully.');
            uniqueCodeList.forEach((codeProperty) => {
                const buildFilePath = codeProperty.build.file;
                Messenger.getInstance().info(`Code for region ${codeProperty.regionsList.join('+')} built to ${buildFilePath} successfully \
with build flow ${codeProperty.buildFlow}.`);
            });

            // Skill Infrastructure
            const infraType = ResourcesConfig.getInstance().getSkillInfraType(profile);
            if (!stringUtils.isNonBlankString(infraType)) {
                return callback();
            }
            Messenger.getInstance().info('\n==================== Deploy Skill Infrastructure ====================');
            helper.deploySkillInfrastructure(profile, doDebug, (infraErr) => {
                if (infraErr) {
                    return callback(infraErr);
                }
                Messenger.getInstance().info(`Skill infrastructures deployed successfully through ${infraType}.`);
                callback();
            });
        });
    });
}

module.exports = DeployCommand;
module.exports.createCommand = new DeployCommand(optionModel).createCommand();
