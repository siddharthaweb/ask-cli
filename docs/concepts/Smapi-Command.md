# SMAPI COMMAND

The `smapi` command provides a number of subcommandsthat map 1:1 to the underlying API operations in Alexa Skill Management API (SMAPI).The commands allow detailed control of API inputs and expose raw outputs. There are subcommands for creating and updating the skill, interaction model, and account linking information as well as starting the skill certification process.

`smapi` command format:

`$ ask smapi <subcommand> `

## Subcommands

| Task  | Subcommand |
|---|---|
| Lists catalogs associated with a vendor. | [list-catalogs-for-vendor](#list-catalogs-for-vendor) |
| Creates a new catalog based on information provided in the request. | [create-catalog](#create-catalog) |
| Returns information about a particular catalog. | [get-catalog](#get-catalog) |
| Lists all the catalogs associated with a skill. | [list-catalogs-for-skill](#list-catalogs-for-skill) |
| Associate skill with catalog. | [associate-catalog-with-skill](#associate-catalog-with-skill) |
| Lists all the uploads for a particular catalog. | [list-uploads-for-catalog](#list-uploads-for-catalog) |
| Creates a new upload for a catalog and returns presigned upload parts for uploading the file. | [create-content-upload](#create-content-upload) |
| Gets detailed information about an upload which was created for a specific catalog. Includes the upload's ingestion steps and a url for downloading the file. | [get-content-upload-by-id](#get-content-upload-by-id) |
| Completes an upload. To be called after the file is uploaded to the backend data store using presigned url(s). | [complete-catalog-upload](#complete-catalog-upload) |
| Lists the subscribers for a particular vendor. | [list-subscribers-for-development-events](#list-subscribers-for-development-events) |
| Creates a new subscriber resource for a vendor. | [create-subscriber-for-development-events](#create-subscriber-for-development-events) |
| Returns information about specified subscriber. | [get-subscriber-for-development-events](#get-subscriber-for-development-events) |
| Updates the properties of a subscriber. | [set-subscriber-for-development-events](#set-subscriber-for-development-events) |
| Deletes a specified subscriber. | [delete-subscriber-for-development-events](#delete-subscriber-for-development-events) |
| Lists all the subscriptions for a vendor/subscriber depending on the query parameter. | [list-subscriptions-for-development-events](#list-subscriptions-for-development-events) |
| Creates a new subscription for a subscriber. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event. | [create-subscription-for-development-events](#create-subscription-for-development-events) |
| Returns information about a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can retrieve this resource with appropriate authorization. | [get-subscription-for-development-events](#get-subscription-for-development-events) |
| Updates the mutable properties of a subscription. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event. The subscriberId cannot be updated. | [set-subscription-for-development-events](#set-subscription-for-development-events) |
| Deletes a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can delete this resource with appropriate authorization. | [delete-subscription-for-development-events](#delete-subscription-for-development-events) |
| Generate preSigned urls to upload data. | [generate-catalog-upload-url](#generate-catalog-upload-url) |
| Create a new upload for a catalog and returns location to track the upload process. | [create-catalog-upload](#create-catalog-upload) |
| Get the list of in-skill products for the vendor. | [get-isp-list-for-vendor](#get-isp-list-for-vendor) |
| Creates a new in-skill product for given vendorId. | [create-isp-for-vendor](#create-isp-for-vendor) |
| Get the list of in-skill products for the skillId. | [get-isp-list-for-skill-id](#get-isp-list-for-skill-id) |
| Returns the in-skill product definition for given productId. | [get-isp-definition](#get-isp-definition) |
| Updates in-skill product definition for given productId. Only development stage supported. | [update-isp-for-product](#update-isp-for-product) |
| Deletes the in-skill product for given productId. Only development stage supported. Live in-skill products or in-skill products associated with a skill cannot be deleted by this API. | [delete-isp-for-product](#delete-isp-for-product) |
| Get the summary information for an in-skill product. | [get-isp-summary](#get-isp-summary) |
| Get the associated skills for the in-skill product. | [get-isp-associated-skills](#get-isp-associated-skills) |
| Associates an in-skill product with a skill. | [associate-isp-with-skill](#associate-isp-with-skill) |
| Disassociates an in-skill product from a skill. | [disassociate-isp-with-skill](#disassociate-isp-with-skill) |
| Resets the entitlement(s) of the Product for the current user. | [reset-entitlement-for-product](#reset-entitlement-for-product) |
| Get AccountLinking information for the skill. | [get-account-linking-info](#get-account-linking-info) |
| Create AccountLinking information for the skill. | [update-account-linking-info](#update-account-linking-info) |
| Delete AccountLinking information of a skill for the given stage. | [delete-account-linking-info](#delete-account-linking-info) |
| Generates hosted skill repository credentials to access the hosted skill repository. | [generate-credentials-for-alexa-hosted-skill](#generate-credentials-for-alexa-hosted-skill) |
| Get Alexa hosted skill's metadata. | [get-alexa-hosted-skill-metadata](#get-alexa-hosted-skill-metadata) |
| Get the current user permissions about Alexa hosted skill features. | [get-alexa-hosted-skill-user-permissions](#get-alexa-hosted-skill-user-permissions) |
| Get beta test for a given Alexa skill. | [get-beta-test](#get-beta-test) |
| Create a beta test for a given Alexa skill. | [create-beta-test](#create-beta-test) |
| Update a beta test for a given Alexa skill. | [update-beta-test](#update-beta-test) |
| Start a beta test for a given Alexa skill. System will send invitation emails to each tester in the test, and add entitlement on the acceptance. | [start-beta-test](#start-beta-test) |
| End a beta test for a given Alexa skill. System will revoke the entitlement of each tester and send access-end notification email to them. | [end-beta-test](#end-beta-test) |
| List all testers in a beta test for the given Alexa skill. | [get-list-of-testers](#get-list-of-testers) |
| Add testers to a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. | [add-testers-to-beta-test](#add-testers-to-beta-test) |
| Remove testers from a beta test for the given Alexa skill.  System will send access end email to each tester and remove entitlement for them. | [remove-testers-from-beta-test](#remove-testers-from-beta-test) |
| Send reminder to the testers in a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. | [send-reminder-to-testers](#send-reminder-to-testers) |
| Request feedback from the testers in a beta test for the given Alexa skill.  System will send notification emails to testers to request feedback. | [request-feedback-from-testers](#request-feedback-from-testers) |
| Get list of all certifications available for a skill, including information about past certifications and any ongoing certification. The default sort order is descending on skillSubmissionTimestamp for Certifications. | [get-certifications-list](#get-certifications-list) |
| Gets a specific certification resource. The response contains the review tracking information for a skill to show how much time the skill is expected to remain under review by Amazon. Once the review is complete, the response also contains the outcome of the review. Old certifications may not be available, however any ongoing certification would always give a response. If the certification is unavailable the result will return a 404 HTTP status code. | [get-certification-review](#get-certification-review) |
| Checks whether an enablement exist for given skillId/stage and customerId (retrieved from Auth token). | [get-skill-enablement-status](#get-skill-enablement-status) |
| Creates/Updates the enablement for given skillId/stage and customerId (retrieved from Auth token). | [set-skill-enablement](#set-skill-enablement) |
| Deletes the enablement for given skillId/stage and customerId (retrieved from Auth token). | [delete-skill-enablement](#delete-skill-enablement) |
| This is a synchronous API that profiles an utterance against interaction model. | [profile-nlu](#profile-nlu) |
|  | [get-utterance-data](#get-utterance-data) |
| Gets the `InteractionModel` for the skill in the given stage.
The path params 
**skillId**, **stage** and **locale** are required. | [get-interaction-model](#get-interaction-model) |
| Get the latest metadata for the interaction model resource for the given stage. | [get-interaction-model-metadata](#get-interaction-model-metadata) |
| Creates an `InteractionModel` for the skill. | [set-interaction-model](#set-interaction-model) |
| List all catalogs for the vendor. | [list-interaction-model-catalogs](#list-interaction-model-catalogs) |
| Create a new version of catalog within the given catalogId. | [create-interaction-model-catalog](#create-interaction-model-catalog) |
| get the catalog definition. | [get-interaction-model-catalog-definition](#get-interaction-model-catalog-definition) |
| Delete the catalog. | [delete-interaction-model-catalog](#delete-interaction-model-catalog) |
| Get the status of catalog resource and its sub-resources for a given catalogId. | [get-interaction-model-catalog-update-status](#get-interaction-model-catalog-update-status) |
| update description and vendorGuidance string for certain version of a catalog. | [update-interaction-model-catalog](#update-interaction-model-catalog) |
| Create a new version of catalog entity for the given catalogId. | [create-interaction-model-catalog-version](#create-interaction-model-catalog-version) |
| Get catalog version data of given catalog version. | [get-interaction-model-catalog-version](#get-interaction-model-catalog-version) |
| Delete catalog version. | [delete-interaction-model-catalog-version](#delete-interaction-model-catalog-version) |
| Update description and vendorGuidance string for certain version of a catalog. | [update-interaction-model-catalog-version](#update-interaction-model-catalog-version) |
| Get catalog values from the given catalogId & version. | [get-interaction-model-catalog-values](#get-interaction-model-catalog-values) |
| Gets the specified version `InteractionModel` of a skill for the vendor. Use `~current` as version parameter to get the current version model. | [get-interaction-model-version](#get-interaction-model-version) |
| Get the list of interactionModel versions of a skill for the vendor. | [list-interaction-model-versions](#list-interaction-model-versions) |
| List all slot types for the vendor. | [list-interaction-model-slot-types](#list-interaction-model-slot-types) |
| Create a new version of slot type within the given slotTypeId. | [create-interaction-model-slot-type](#create-interaction-model-slot-type) |
| Get the slot type definition. | [get-interaction-model-slot-type-definition](#get-interaction-model-slot-type-definition) |
| Delete the slot type. | [delete-interaction-model-slot-type](#delete-interaction-model-slot-type) |
| Get the status of slot type resource and its sub-resources for a given slotTypeId. | [get-interaction-model-slot-type-build-status](#get-interaction-model-slot-type-build-status) |
| Update description and vendorGuidance string for certain version of a slot type. | [update-interaction-model-slot-type](#update-interaction-model-slot-type) |
| List all slot type versions for the slot type id. | [list-interaction-model-slot-type-versions](#list-interaction-model-slot-type-versions) |
| Create a new version of slot type entity for the given slotTypeId. | [create-interaction-model-slot-type-version](#create-interaction-model-slot-type-version) |
| Get slot type version data of given slot type version. | [get-interaction-model-slot-type-version](#get-interaction-model-slot-type-version) |
| Delete slot type version. | [delete-interaction-model-slot-type-version](#delete-interaction-model-slot-type-version) |
| Update description and vendorGuidance string for certain version of a slot type. | [update-interaction-model-slot-type-version](#update-interaction-model-slot-type-version) |
| Returns the skill manifest for given skillId and stage. | [get-skill-manifest](#get-skill-manifest) |
| Updates skill manifest for given skillId and stage. | [update-skill-manifest](#update-skill-manifest) |
| Get analytic metrics report of skill usage. | [get-skill-metrics](#get-skill-metrics) |
| Add an id to the private distribution accounts. | [set-private-distribution-account-id](#set-private-distribution-account-id) |
| Remove an id from the private distribution accounts. | [delete-private-distribution-account-id](#delete-private-distribution-account-id) |
| List private distribution accounts. | [list-private-distribution-accounts](#list-private-distribution-accounts) |
| This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must belong to and be enabled  by the user of this API. Concurrent requests per user is currently not supported. | [simulate-skill](#simulate-skill) |
| This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code. | [get-skill-simulation](#get-skill-simulation) |
| This is an asynchronous API which allows a skill developer to execute various validations against their skill. | [submit-skill-validation](#submit-skill-validation) |
| This API gets the result of a previously executed validation. A successful response will contain the status of the executed validation. If the validation successfully completed, the response will also contain information related to executed validations. In cases where requests to this API results in an error, the response will contain a description of the problem. In cases where the validation failed, the response will contain a status attribute indicating that a failure occurred. Note that validation results are stored for 60 minutes. A request for an expired validation result will return a 404 HTTP status code. | [get-skill-validations](#get-skill-validations) |
| Get the list of skills for the vendor. | [list-skills-for-vendor](#list-skills-for-vendor) |
| Creates a new skill for given vendorId. | [create-skill-for-vendor](#create-skill-for-vendor) |
| Delete the skill and model for given skillId. | [delete-skill](#delete-skill) |
| Get the status of skill resource and its sub-resources for a given skillId. | [get-skill-status](#get-skill-status) |
| Returns the ssl certificate sets currently associated with this skill. Sets consist of one ssl certificate blob associated with a region as well as the default certificate for the skill. | [get-ssl-certificates](#get-ssl-certificates) |
| Updates the ssl certificates associated with this skill. | [set-ssl-certificates](#set-ssl-certificates) |
| Submit the skill for certification. | [submit-skill-for-certification](#submit-skill-for-certification) |
| Withdraws the skill from certification. | [withdraw-skill-from-certification](#withdraw-skill-from-certification) |
| Creates a new export for a skill with given skillId and stage. | [create-export-request-for-skill](#create-export-request-for-skill) |
| Get status for given exportId. | [get-status-of-export-request](#get-status-of-export-request) |
| Creates a new import for a skill. | [create-skill-package](#create-skill-package) |
| Creates a new import for a skill with given skillId. | [import-skill-package](#import-skill-package) |
| Get status for given importId. | [get-import-status](#get-import-status) |
| Creates a new uploadUrl. | [create-upload-url](#create-upload-url) |
| Get the list of Vendor information. | [get-vendor-list](#get-vendor-list) |
| The SMAPI Audit Logs API provides customers with an audit history of all SMAPI calls made by a developer or developers with permissions on that account. | [query-development-audit-logs](#query-development-audit-logs) |
| This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also,  note that calls to the skill endpoint will timeout after 10 seconds. This  API is currently designed in a way that allows extension to an asynchronous  API if a significantly bigger timeout is required. | [invoke-skill-end-point](#invoke-skill-end-point) |
| upload a file for the catalog. | [upload-catalog](#upload-catalog) |
| download the skill package to "skill-package" folder in current directory. | [export-package](#export-package) |

### list-catalogs-for-vendor

Lists catalogs associated with a vendor.

`list-catalogs-for-vendor` command format:

`$ ask smapi list-catalogs-for-vendor [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-catalog

Creates a new catalog based on information provided in the request.

`create-catalog` command format:

`$ ask smapi create-catalog <--title <title>> <--type <type>> <--usage <usage>> <--vendor-id <vendor-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--title <title></dt>
    <dd markdown="span">[REQUIRED] Title of the catalog.</dd>
    <dt>--type <type></dt>
    <dd markdown="span">[REQUIRED] Type of catalog. 
[ENUM]: AMAZON.BroadcastChannel,AMAZON.Genre,AMAZON.MusicAlbum,AMAZON.MusicGroup,AMAZON.MusicPlaylist,AMAZON.MusicRecording,AMAZON.TerrestrialRadioChannel,AMAZON.AudioRecording.</dd>
    <dt>--usage <usage></dt>
    <dd markdown="span">[REQUIRED] Usage of the catalog. 
[ENUM]: AlexaMusic.Catalog.BroadcastChannel,AlexaMusic.Catalog.Genre,AlexaMusic.Catalog.MusicAlbum,AlexaMusic.Catalog.MusicGroup,AlexaMusic.Catalog.MusicPlaylist,AlexaMusic.Catalog.MusicRecording,AlexaMusic.Catalog.TerrestrialRadioChannel,AlexaTest.Catalog.AudioRecording.</dd>
    <dt>--vendor-id <vendor-id></dt>
    <dd markdown="span">[REQUIRED] ID of the vendor owning the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-catalog

Returns information about a particular catalog.

`get-catalog` command format:

`$ ask smapi get-catalog <-c|--catalog-id <catalog-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-catalogs-for-skill

Lists all the catalogs associated with a skill.

`list-catalogs-for-skill` command format:

`$ ask smapi list-catalogs-for-skill [--next-token <next-token>] [--max-results <max-results>] <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### associate-catalog-with-skill

Associate skill with catalog.

`associate-catalog-with-skill` command format:

`$ ask smapi associate-catalog-with-skill <-s|--skill-id <skill-id>> <-c|--catalog-id <catalog-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-uploads-for-catalog

Lists all the uploads for a particular catalog.

`list-uploads-for-catalog` command format:

`$ ask smapi list-uploads-for-catalog [--next-token <next-token>] [--max-results <max-results>] <-c|--catalog-id <catalog-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-content-upload

Creates a new upload for a catalog and returns presigned upload parts for uploading the file.

`create-content-upload` command format:

`$ ask smapi create-content-upload <-c|--catalog-id <catalog-id>> <--number-of-upload-parts <number-of-upload-parts>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--number-of-upload-parts <number-of-upload-parts></dt>
    <dd markdown="span">[REQUIRED] The number of parts the file will be split into. An equal number of presigned upload urls will be generated in response to facilitate each part's upload.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-content-upload-by-id

Gets detailed information about an upload which was created for a specific catalog. Includes the upload&#39;s ingestion steps and a url for downloading the file.

`get-content-upload-by-id` command format:

`$ ask smapi get-content-upload-by-id <-c|--catalog-id <catalog-id>> <--upload-id <upload-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--upload-id <upload-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the upload.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### complete-catalog-upload

Completes an upload. To be called after the file is uploaded to the backend data store using presigned url(s).

`complete-catalog-upload` command format:

`$ ask smapi complete-catalog-upload <-c|--catalog-id <catalog-id>> <--upload-id <upload-id>> <--part-e-tags <part-e-tags>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--upload-id <upload-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the upload.</dd>
    <dt>--part-e-tags <part-e-tags></dt>
    <dd markdown="span">[REQUIRED] List of (eTag, part number) pairs for each part of the file uploaded. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-subscribers-for-development-events

Lists the subscribers for a particular vendor.

`list-subscribers-for-development-events` command format:

`$ ask smapi list-subscribers-for-development-events [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-subscriber-for-development-events

Creates a new subscriber resource for a vendor.

`create-subscriber-for-development-events` command format:

`$ ask smapi create-subscriber-for-development-events [--create-subscriber-request <create-subscriber-request>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--create-subscriber-request <create-subscriber-request></dt>
    <dd markdown="span">[OPTIONAL] Defines the request body for createSubscriber API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-subscriber-for-development-events

Returns information about specified subscriber.

`get-subscriber-for-development-events` command format:

`$ ask smapi get-subscriber-for-development-events <--subscriber-id <subscriber-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscriber-id <subscriber-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscriber.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-subscriber-for-development-events

Updates the properties of a subscriber.

`set-subscriber-for-development-events` command format:

`$ ask smapi set-subscriber-for-development-events <--subscriber-id <subscriber-id>> [--update-subscriber-request <update-subscriber-request>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscriber-id <subscriber-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscriber.</dd>
    <dt>--update-subscriber-request <update-subscriber-request></dt>
    <dd markdown="span">[OPTIONAL] Defines the request body for updateSubscriber API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-subscriber-for-development-events

Deletes a specified subscriber.

`delete-subscriber-for-development-events` command format:

`$ ask smapi delete-subscriber-for-development-events <--subscriber-id <subscriber-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscriber-id <subscriber-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscriber.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-subscriptions-for-development-events

Lists all the subscriptions for a vendor&#x2F;subscriber depending on the query parameter.

`list-subscriptions-for-development-events` command format:

`$ ask smapi list-subscriptions-for-development-events [--next-token <next-token>] [--max-results <max-results>] [--subscriber-id <subscriber-id>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--subscriber-id <subscriber-id></dt>
    <dd markdown="span">[OPTIONAL] Unique identifier of the subscriber. If this query parameter is provided, the list would be filtered by the owning subscriberId.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-subscription-for-development-events

Creates a new subscription for a subscriber. This needs to be authorized by the client&#x2F;vendor who created the subscriber and the vendor who publishes the event.

`create-subscription-for-development-events` command format:

`$ ask smapi create-subscription-for-development-events [--name <name>] [--events <events>] [--vendor-id <vendor-id>] [--subscriber-id <subscriber-id>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--name <name></dt>
    <dd markdown="span">[OPTIONAL] Name of the subscription.</dd>
    <dt>--events <events></dt>
    <dd markdown="span">[OPTIONAL] The list of events that the subscriber should be notified for. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>--vendor-id <vendor-id></dt>
    <dd markdown="span">[OPTIONAL] The vendorId of the event publisher.</dd>
    <dt>--subscriber-id <subscriber-id></dt>
    <dd markdown="span">[OPTIONAL] The id of the subscriber that would receive the events.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-subscription-for-development-events

Returns information about a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can retrieve this resource with appropriate authorization.

`get-subscription-for-development-events` command format:

`$ ask smapi get-subscription-for-development-events <--subscription-id <subscription-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscription-id <subscription-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscription.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-subscription-for-development-events

Updates the mutable properties of a subscription. This needs to be authorized by the client&#x2F;vendor who created the subscriber and the vendor who publishes the event. The subscriberId cannot be updated.

`set-subscription-for-development-events` command format:

`$ ask smapi set-subscription-for-development-events <--subscription-id <subscription-id>> [--name <name>] [--events <events>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscription-id <subscription-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscription.</dd>
    <dt>--name <name></dt>
    <dd markdown="span">[OPTIONAL] Name of the subscription.</dd>
    <dt>--events <events></dt>
    <dd markdown="span">[OPTIONAL] The list of events that the subscriber should be notified for. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-subscription-for-development-events

Deletes a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can delete this resource with appropriate authorization.

`delete-subscription-for-development-events` command format:

`$ ask smapi delete-subscription-for-development-events <--subscription-id <subscription-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--subscription-id <subscription-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the subscription.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### generate-catalog-upload-url

Generate preSigned urls to upload data.

`generate-catalog-upload-url` command format:

`$ ask smapi generate-catalog-upload-url <-c|--catalog-id <catalog-id>> <--number-of-upload-parts <number-of-upload-parts>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--number-of-upload-parts <number-of-upload-parts></dt>
    <dd markdown="span">[REQUIRED] The number of parts the file will be split into. An equal number of presigned upload urls will be generated in response to facilitate each part's upload.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-catalog-upload

Create a new upload for a catalog and returns location to track the upload process.

`create-catalog-upload` command format:

`$ ask smapi create-catalog-upload <-c|--catalog-id <catalog-id>> <--catalog-upload-request-body <catalog-upload-request-body>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--catalog-upload-request-body <catalog-upload-request-body></dt>
    <dd markdown="span">[REQUIRED] Request body for create content upload 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-isp-list-for-vendor

Get the list of in-skill products for the vendor.

`get-isp-list-for-vendor` command format:

`$ ask smapi get-isp-list-for-vendor [--next-token <next-token>] [--max-results <max-results>] [--product-id <product-id>] [-g|--stage <stage>] [--type <type>] [--reference-name <reference-name>] [--status <status>] [--is-associated-with-skill <is-associated-with-skill>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[OPTIONAL] The list of in-skill product IDs that you wish to get the summary for. A maximum of 50 in-skill product IDs can be specified in a single listInSkillProducts call. Please note that this parameter must not be used with 'nextToken' and/or 'maxResults' parameter. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[OPTIONAL] Filter in-skill products by specified stage. 
[ENUM]: development,live.</dd>
    <dt>--type <type></dt>
    <dd markdown="span">[OPTIONAL] Type of in-skill product to filter on. 
[ENUM]: SUBSCRIPTION,ENTITLEMENT,CONSUMABLE.</dd>
    <dt>--reference-name <reference-name></dt>
    <dd markdown="span">[OPTIONAL] Filter in-skill products by reference name.</dd>
    <dt>--status <status></dt>
    <dd markdown="span">[OPTIONAL] Status of in-skill product. 
[ENUM]: INCOMPLETE,COMPLETE,CERTIFICATION,PUBLISHED,SUPPRESSED.</dd>
    <dt>--is-associated-with-skill <is-associated-with-skill></dt>
    <dd markdown="span">[OPTIONAL] Filter in-skill products by whether or not they are associated to a skill. 
[ENUM]: ASSOCIATED_WITH_SKILL,NO_SKILL_ASSOCIATIONS.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-isp-for-vendor

Creates a new in-skill product for given vendorId.

`create-isp-for-vendor` command format:

`$ ask smapi create-isp-for-vendor <--create-in-skill-product-request <create-in-skill-product-request>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--create-in-skill-product-request <create-in-skill-product-request></dt>
    <dd markdown="span">[REQUIRED] defines the request body for createInSkillProduct API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-isp-list-for-skill-id

Get the list of in-skill products for the skillId.

`get-isp-list-for-skill-id` command format:

`$ ask smapi get-isp-list-for-skill-id <-s|--skill-id <skill-id>> <-g|--stage <stage>> [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-isp-definition

Returns the in-skill product definition for given productId.

`get-isp-definition` command format:

`$ ask smapi get-isp-definition <--product-id <product-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-isp-for-product

Updates in-skill product definition for given productId. Only development stage supported.

`update-isp-for-product` command format:

`$ ask smapi update-isp-for-product [--if-match <if-match>] <--product-id <product-id>> <-g|--stage <stage>> <--in-skill-product <in-skill-product>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--in-skill-product <in-skill-product></dt>
    <dd markdown="span">[REQUIRED] defines the request body for updateInSkillProduct API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-isp-for-product

Deletes the in-skill product for given productId. Only development stage supported. Live in-skill products or in-skill products associated with a skill cannot be deleted by this API.

`delete-isp-for-product` command format:

`$ ask smapi delete-isp-for-product <--product-id <product-id>> <-g|--stage <stage>> [--if-match <if-match>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-isp-summary

Get the summary information for an in-skill product.

`get-isp-summary` command format:

`$ ask smapi get-isp-summary <--product-id <product-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-isp-associated-skills

Get the associated skills for the in-skill product.

`get-isp-associated-skills` command format:

`$ ask smapi get-isp-associated-skills <--product-id <product-id>> <-g|--stage <stage>> [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### associate-isp-with-skill

Associates an in-skill product with a skill.

`associate-isp-with-skill` command format:

`$ ask smapi associate-isp-with-skill <--product-id <product-id>> <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### disassociate-isp-with-skill

Disassociates an in-skill product from a skill.

`disassociate-isp-with-skill` command format:

`$ ask smapi disassociate-isp-with-skill <--product-id <product-id>> <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### reset-entitlement-for-product

Resets the entitlement(s) of the Product for the current user.

`reset-entitlement-for-product` command format:

`$ ask smapi reset-entitlement-for-product <--product-id <product-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--product-id <product-id></dt>
    <dd markdown="span">[REQUIRED] The in-skill product ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-account-linking-info

Get AccountLinking information for the skill.

`get-account-linking-info` command format:

`$ ask smapi get-account-linking-info <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-account-linking-info

Create AccountLinking information for the skill.

`update-account-linking-info` command format:

`$ ask smapi update-account-linking-info <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--account-linking-request <account-linking-request>> [--if-match <if-match>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>--account-linking-request <account-linking-request></dt>
    <dd markdown="span">[REQUIRED] The fields required to create accountLinking partner. 
[JSON].</dd>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-account-linking-info

Delete AccountLinking information of a skill for the given stage.

`delete-account-linking-info` command format:

`$ ask smapi delete-account-linking-info <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### generate-credentials-for-alexa-hosted-skill

Generates hosted skill repository credentials to access the hosted skill repository.

`generate-credentials-for-alexa-hosted-skill` command format:

`$ ask smapi generate-credentials-for-alexa-hosted-skill <-s|--skill-id <skill-id>> [--repository-url <repository-url>] [--repository-type <repository-type>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--repository-url <repository-url></dt>
    <dd markdown="span">[OPTIONAL] Alexa Hosted Skill's Repository Information.</dd>
    <dt>--repository-type <repository-type></dt>
    <dd markdown="span">[OPTIONAL] Alexa Hosted Skill's Repository Information 
[ENUM]: GIT.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-alexa-hosted-skill-metadata

Get Alexa hosted skill&#39;s metadata.

`get-alexa-hosted-skill-metadata` command format:

`$ ask smapi get-alexa-hosted-skill-metadata <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-alexa-hosted-skill-user-permissions

Get the current user permissions about Alexa hosted skill features.

`get-alexa-hosted-skill-user-permissions` command format:

`$ ask smapi get-alexa-hosted-skill-user-permissions <--permission <permission>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--permission <permission></dt>
    <dd markdown="span">[REQUIRED] The permission of a hosted skill feature that customer needs to check.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-beta-test

Get beta test for a given Alexa skill.

`get-beta-test` command format:

`$ ask smapi get-beta-test <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-beta-test

Create a beta test for a given Alexa skill.

`create-beta-test` command format:

`$ ask smapi create-beta-test <-s|--skill-id <skill-id>> [--feedback-email <feedback-email>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--feedback-email <feedback-email></dt>
    <dd markdown="span">[OPTIONAL] Email address for providing feedback.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-beta-test

Update a beta test for a given Alexa skill.

`update-beta-test` command format:

`$ ask smapi update-beta-test <-s|--skill-id <skill-id>> [--feedback-email <feedback-email>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--feedback-email <feedback-email></dt>
    <dd markdown="span">[OPTIONAL] Email address for providing feedback.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### start-beta-test

Start a beta test for a given Alexa skill. System will send invitation emails to each tester in the test, and add entitlement on the acceptance.

`start-beta-test` command format:

`$ ask smapi start-beta-test <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### end-beta-test

End a beta test for a given Alexa skill. System will revoke the entitlement of each tester and send access-end notification email to them.

`end-beta-test` command format:

`$ ask smapi end-beta-test <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-list-of-testers

List all testers in a beta test for the given Alexa skill.

`get-list-of-testers` command format:

`$ ask smapi get-list-of-testers <-s|--skill-id <skill-id>> [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### add-testers-to-beta-test

Add testers to a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance.

`add-testers-to-beta-test` command format:

`$ ask smapi add-testers-to-beta-test <-s|--skill-id <skill-id>> <--testers-emails <testers-emails>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--testers-emails <testers-emails></dt>
    <dd markdown="span">[REQUIRED] List of email address of beta testers. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### remove-testers-from-beta-test

Remove testers from a beta test for the given Alexa skill.  System will send access end email to each tester and remove entitlement for them.

`remove-testers-from-beta-test` command format:

`$ ask smapi remove-testers-from-beta-test <-s|--skill-id <skill-id>> <--testers-emails <testers-emails>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--testers-emails <testers-emails></dt>
    <dd markdown="span">[REQUIRED] List of email address of beta testers. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### send-reminder-to-testers

Send reminder to the testers in a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance.

`send-reminder-to-testers` command format:

`$ ask smapi send-reminder-to-testers <-s|--skill-id <skill-id>> <--testers-emails <testers-emails>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--testers-emails <testers-emails></dt>
    <dd markdown="span">[REQUIRED] List of email address of beta testers. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### request-feedback-from-testers

Request feedback from the testers in a beta test for the given Alexa skill.  System will send notification emails to testers to request feedback.

`request-feedback-from-testers` command format:

`$ ask smapi request-feedback-from-testers <-s|--skill-id <skill-id>> <--testers-emails <testers-emails>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--testers-emails <testers-emails></dt>
    <dd markdown="span">[REQUIRED] List of email address of beta testers. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-certifications-list

Get list of all certifications available for a skill, including information about past certifications and any ongoing certification. The default sort order is descending on skillSubmissionTimestamp for Certifications.

`get-certifications-list` command format:

`$ ask smapi get-certifications-list <-s|--skill-id <skill-id>> [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-certification-review

Gets a specific certification resource. The response contains the review tracking information for a skill to show how much time the skill is expected to remain under review by Amazon. Once the review is complete, the response also contains the outcome of the review. Old certifications may not be available, however any ongoing certification would always give a response. If the certification is unavailable the result will return a 404 HTTP status code.

`get-certification-review` command format:

`$ ask smapi get-certification-review [--accept-language <accept-language>] <-s|--skill-id <skill-id>> <-c|--certification-id <certification-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--accept-language <accept-language></dt>
    <dd markdown="span">[OPTIONAL] User's locale/language in context.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-c,--certification-id <certification-id></dt>
    <dd markdown="span">[REQUIRED] Id of the certification. Reserved word identifier of mostRecent can be used to get the most recent certification for the skill. Note that the behavior of the API in this case would be the same as when the actual certification id of the most recent certification is used in the request.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-enablement-status

Checks whether an enablement exist for given skillId&#x2F;stage and customerId (retrieved from Auth token).

`get-skill-enablement-status` command format:

`$ ask smapi get-skill-enablement-status <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-skill-enablement

Creates&#x2F;Updates the enablement for given skillId&#x2F;stage and customerId (retrieved from Auth token).

`set-skill-enablement` command format:

`$ ask smapi set-skill-enablement <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-skill-enablement

Deletes the enablement for given skillId&#x2F;stage and customerId (retrieved from Auth token).

`delete-skill-enablement` command format:

`$ ask smapi delete-skill-enablement <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### profile-nlu

This is a synchronous API that profiles an utterance against interaction model.

`profile-nlu` command format:

`$ ask smapi profile-nlu <-u|--utterance <utterance>> <--multi-turn-token <multi-turn-token>> <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-u,--utterance <utterance></dt>
    <dd markdown="span">[REQUIRED] Actual representation of user input to Alexa.</dd>
    <dt>--multi-turn-token <multi-turn-token></dt>
    <dd markdown="span">[REQUIRED] Opaque string which contains multi-turn related context.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-utterance-data



`get-utterance-data` command format:

`$ ask smapi get-utterance-data <-s|--skill-id <skill-id>> [--next-token <next-token>] [--max-results <max-results>] [--sort-direction <sort-direction>] [--sort-field <sort-field>] [-g|--stage <stage>] [-l|--locale <locale>] [--dialog-act-name <dialog-act-name>] [--intent-confidence-bin <intent-confidence-bin>] [--intent-name <intent-name>] [--intent-slots-name <intent-slots-name>] [--interaction-type <interaction-type>] [--publication-status <publication-status>] [--utterance-text <utterance-text>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'asc' these items are returned in ascending order of sortField value and when set to 'desc' these items are returned in descending order of sortField value.</dd>
    <dt>--sort-field <sort-field></dt>
    <dd markdown="span">[OPTIONAL] Sets the field on which the sorting would be applied.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the stage is equal to the given value. 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: development,live.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the locale is equal to the given value. 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: en-US,en-GB,en-IN,en-CA,en-AU,de-DE,ja-JP.</dd>
    <dt>--dialog-act-name <dialog-act-name></dt>
    <dd markdown="span">[OPTIONAL] Dialog act directive name.

* `Dialog.ElicitSlot`: Alexa asked the user for the value of a specific slot. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#elicitslot)
* `Dialog.ConfirmSlot`: Alexa confirmed the value of a specific slot before continuing with the dialog. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmslot)
* `Dialog.ConfirmIntent`: Alexa confirmed the all the information the user has provided for the intent before the skill took action. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmintent) 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: Dialog.ElicitSlot,Dialog.ConfirmSlot,Dialog.ConfirmIntent.</dd>
    <dt>--intent-confidence-bin <intent-confidence-bin></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the intent confidence bin is equal to the given value.

* `HIGH`: Intent was recognized with high confidence.
* `MEDIUM`: Intent was recognized with medium confidence.
* `LOW`: Intent was recognized with low confidence. Note: Low confidence intents are not sent to the skill. 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: HIGH,MEDIUM,LOW.</dd>
    <dt>--intent-name <intent-name></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the intent name is equal to the given value. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>--intent-slots-name <intent-slots-name></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the one of the slot names is equal to the given value. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>--interaction-type <interaction-type></dt>
    <dd markdown="span">[OPTIONAL] Indicates if the utterance was executed as a "ONE_SHOT" interaction or "MODAL" interaction.

* `ONE_SHOT`: The user invokes the skill and states their intent in a single phrase.
* `MODAL`: The user first invokes the skill and then states their intent. 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: ONE_SHOT,MODAL.</dd>
    <dt>--publication-status <publication-status></dt>
    <dd markdown="span">[OPTIONAL] The publication status of the skill when this interaction occurred 
[MULTIPLE]: Values can be separated by comma.
[ENUM]: Development,Certification.</dd>
    <dt>--utterance-text <utterance-text></dt>
    <dd markdown="span">[OPTIONAL] A filter used to retrieve items where the utterance text contains the given phrase. Each filter value can be at-least 1 character and at-most 100 characters long. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model

Gets the &#x60;InteractionModel&#x60; for the skill in the given stage.
The path params 
**skillId**, **stage** and **locale** are required.

`get-interaction-model` command format:

`$ ask smapi get-interaction-model <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-metadata

Get the latest metadata for the interaction model resource for the given stage.

`get-interaction-model-metadata` command format:

`$ ask smapi get-interaction-model-metadata <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-interaction-model

Creates an &#x60;InteractionModel&#x60; for the skill.

`set-interaction-model` command format:

`$ ask smapi set-interaction-model <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> <--interaction-model <interaction-model>> [--if-match <if-match>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>--interaction-model <interaction-model></dt>
    <dd markdown="span">[REQUIRED]  
[JSON].</dd>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-interaction-model-catalogs

List all catalogs for the vendor.

`list-interaction-model-catalogs` command format:

`$ ask smapi list-interaction-model-catalogs [--max-results <max-results>] [--next-token <next-token>] [--sort-direction <sort-direction>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'asc' these items are returned in ascending order of sortField value and when set to 'desc' these items are returned in descending order of sortField value.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-interaction-model-catalog

Create a new version of catalog within the given catalogId.

`create-interaction-model-catalog` command format:

`$ ask smapi create-interaction-model-catalog [--catalog-name <catalog-name>] [--catalog-description <catalog-description>] <--vendor-id <vendor-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--catalog-name <catalog-name></dt>
    <dd markdown="span">[OPTIONAL] Name of the catalog.</dd>
    <dt>--catalog-description <catalog-description></dt>
    <dd markdown="span">[OPTIONAL] Description string about the catalog.</dd>
    <dt>--vendor-id <vendor-id></dt>
    <dd markdown="span">[REQUIRED] The vendorId that the catalog should belong to.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-catalog-definition

get the catalog definition.

`get-interaction-model-catalog-definition` command format:

`$ ask smapi get-interaction-model-catalog-definition <-c|--catalog-id <catalog-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-interaction-model-catalog

Delete the catalog.

`delete-interaction-model-catalog` command format:

`$ ask smapi delete-interaction-model-catalog <-c|--catalog-id <catalog-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-catalog-update-status

Get the status of catalog resource and its sub-resources for a given catalogId.

`get-interaction-model-catalog-update-status` command format:

`$ ask smapi get-interaction-model-catalog-update-status <-c|--catalog-id <catalog-id>> <--update-request-id <update-request-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--update-request-id <update-request-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for slotType version creation process.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-interaction-model-catalog

update description and vendorGuidance string for certain version of a catalog.

`update-interaction-model-catalog` command format:

`$ ask smapi update-interaction-model-catalog <-c|--catalog-id <catalog-id>> [--slot-type-description <slot-type-description>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--slot-type-description <slot-type-description></dt>
    <dd markdown="span">[OPTIONAL] The slot type description with a 255 character maximum.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-interaction-model-catalog-version

Create a new version of catalog entity for the given catalogId.

`create-interaction-model-catalog-version` command format:

`$ ask smapi create-interaction-model-catalog-version <-c|--catalog-id <catalog-id>> [--source-type <source-type>] [--source-url <source-url>] <--description <description>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--source-type <source-type></dt>
    <dd markdown="span">[OPTIONAL] Type of catalog.</dd>
    <dt>--source-url <source-url></dt>
    <dd markdown="span">[OPTIONAL] Url to the catalog reference.</dd>
    <dt>--description <description></dt>
    <dd markdown="span">[REQUIRED] Description string for specific catalog version.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-catalog-version

Get catalog version data of given catalog version.

`get-interaction-model-catalog-version` command format:

`$ ask smapi get-interaction-model-catalog-version <-c|--catalog-id <catalog-id>> <--vers <vers>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-interaction-model-catalog-version

Delete catalog version.

`delete-interaction-model-catalog-version` command format:

`$ ask smapi delete-interaction-model-catalog-version <-c|--catalog-id <catalog-id>> <--vers <vers>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-interaction-model-catalog-version

Update description and vendorGuidance string for certain version of a catalog.

`update-interaction-model-catalog-version` command format:

`$ ask smapi update-interaction-model-catalog-version <-c|--catalog-id <catalog-id>> <--vers <vers>> [--description <description>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>--description <description></dt>
    <dd markdown="span">[OPTIONAL] The catalog description with a 255 character maximum.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-catalog-values

Get catalog values from the given catalogId &amp; version.

`get-interaction-model-catalog-values` command format:

`$ ask smapi get-interaction-model-catalog-values <-c|--catalog-id <catalog-id>> <--vers <vers>> [--max-results <max-results>] [--next-token <next-token>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c,--catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-version

Gets the specified version &#x60;InteractionModel&#x60; of a skill for the vendor. Use &#x60;~current&#x60; as version parameter to get the current version model.

`get-interaction-model-version` command format:

`$ ask smapi get-interaction-model-version <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> <--vers <vers>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-interaction-model-versions

Get the list of interactionModel versions of a skill for the vendor.

`list-interaction-model-versions` command format:

`$ ask smapi list-interaction-model-versions <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-l|--locale <locale>> [--next-token <next-token>] [--max-results <max-results>] [--sort-direction <sort-direction>] [--sort-field <sort-field>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[REQUIRED] The locale for the model requested e.g. en-GB, en-US, de-DE.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'asc' these items are returned in ascending order of sortField value and when set to 'desc' these items are returned in descending order of sortField value.</dd>
    <dt>--sort-field <sort-field></dt>
    <dd markdown="span">[OPTIONAL] Sets the field on which the sorting would be applied.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-interaction-model-slot-types

List all slot types for the vendor.

`list-interaction-model-slot-types` command format:

`$ ask smapi list-interaction-model-slot-types [--max-results <max-results>] [--next-token <next-token>] [--sort-direction <sort-direction>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'asc' these items are returned in ascending order of sortField value and when set to 'desc' these items are returned in descending order of sortField value.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-interaction-model-slot-type

Create a new version of slot type within the given slotTypeId.

`create-interaction-model-slot-type` command format:

`$ ask smapi create-interaction-model-slot-type <--slot-type <slot-type>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type <slot-type></dt>
    <dd markdown="span">[REQUIRED]  
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-slot-type-definition

Get the slot type definition.

`get-interaction-model-slot-type-definition` command format:

`$ ask smapi get-interaction-model-slot-type-definition <--slot-type-id <slot-type-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-interaction-model-slot-type

Delete the slot type.

`delete-interaction-model-slot-type` command format:

`$ ask smapi delete-interaction-model-slot-type <--slot-type-id <slot-type-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-slot-type-build-status

Get the status of slot type resource and its sub-resources for a given slotTypeId.

`get-interaction-model-slot-type-build-status` command format:

`$ ask smapi get-interaction-model-slot-type-build-status <--slot-type-id <slot-type-id>> <--update-request-id <update-request-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--update-request-id <update-request-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for slotType version creation process.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-interaction-model-slot-type

Update description and vendorGuidance string for certain version of a slot type.

`update-interaction-model-slot-type` command format:

`$ ask smapi update-interaction-model-slot-type <--slot-type-id <slot-type-id>> [--slot-type-description <slot-type-description>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--slot-type-description <slot-type-description></dt>
    <dd markdown="span">[OPTIONAL] The slot type description with a 255 character maximum.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-interaction-model-slot-type-versions

List all slot type versions for the slot type id.

`list-interaction-model-slot-type-versions` command format:

`$ ask smapi list-interaction-model-slot-type-versions <--slot-type-id <slot-type-id>> [--max-results <max-results>] [--next-token <next-token>] [--sort-direction <sort-direction>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'asc' these items are returned in ascending order of sortField value and when set to 'desc' these items are returned in descending order of sortField value.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-interaction-model-slot-type-version

Create a new version of slot type entity for the given slotTypeId.

`create-interaction-model-slot-type-version` command format:

`$ ask smapi create-interaction-model-slot-type-version <--slot-type-id <slot-type-id>> <--slot-type <slot-type>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--slot-type <slot-type></dt>
    <dd markdown="span">[REQUIRED]  
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-interaction-model-slot-type-version

Get slot type version data of given slot type version.

`get-interaction-model-slot-type-version` command format:

`$ ask smapi get-interaction-model-slot-type-version <--slot-type-id <slot-type-id>> <--vers <vers>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-interaction-model-slot-type-version

Delete slot type version.

`delete-interaction-model-slot-type-version` command format:

`$ ask smapi delete-interaction-model-slot-type-version <--slot-type-id <slot-type-id>> <--vers <vers>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-interaction-model-slot-type-version

Update description and vendorGuidance string for certain version of a slot type.

`update-interaction-model-slot-type-version` command format:

`$ ask smapi update-interaction-model-slot-type-version <--slot-type-id <slot-type-id>> <--vers <vers>> [--slot-type-description <slot-type-description>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--slot-type-id <slot-type-id></dt>
    <dd markdown="span">[REQUIRED] The identifier for a slot type.</dd>
    <dt>--vers <vers></dt>
    <dd markdown="span">[REQUIRED] Version for interaction model.</dd>
    <dt>--slot-type-description <slot-type-description></dt>
    <dd markdown="span">[OPTIONAL] The slot type description with a 255 character maximum.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-manifest

Returns the skill manifest for given skillId and stage.

`get-skill-manifest` command format:

`$ ask smapi get-skill-manifest <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### update-skill-manifest

Updates skill manifest for given skillId and stage.

`update-skill-manifest` command format:

`$ ask smapi update-skill-manifest [--if-match <if-match>] <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--manifest <manifest>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stages of a skill including the new certified stage.

* `development` - skills which are currently in development corresponds to this stage.
* `certified` -  skills which have completed certification and ready for publishing corresponds to this stage.
* `live` - skills which are currently live corresponds to this stage.</dd>
    <dt>--manifest <manifest></dt>
    <dd markdown="span">[REQUIRED] Defines the request body for updateSkill API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-metrics

Get analytic metrics report of skill usage.

`get-skill-metrics` command format:

`$ ask smapi get-skill-metrics <-s|--skill-id <skill-id>> <--start-time <start-time>> <--end-time <end-time>> <--period <period>> <--metric <metric>> <-g|--stage <stage>> <--skill-type <skill-type>> [--intent <intent>] [-l|--locale <locale>] [--max-results <max-results>] [--next-token <next-token>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--start-time <start-time></dt>
    <dd markdown="span">[REQUIRED] The start time of query.</dd>
    <dt>--end-time <end-time></dt>
    <dd markdown="span">[REQUIRED] The end time of query (The maximum time duration is 1 week).</dd>
    <dt>--period <period></dt>
    <dd markdown="span">[REQUIRED] The aggregation period to use when retrieving the metric, follows ISO_8601#Durations format.</dd>
    <dt>--metric <metric></dt>
    <dd markdown="span">[REQUIRED] A distinct set of logic which predictably returns a set of data.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] The stage of the skill (live, development).</dd>
    <dt>--skill-type <skill-type></dt>
    <dd markdown="span">[REQUIRED] The type of the skill (custom, smartHome and flashBriefing).</dd>
    <dt>--intent <intent></dt>
    <dd markdown="span">[OPTIONAL] The intent of the skill.</dd>
    <dt>-l,--locale <locale></dt>
    <dd markdown="span">[OPTIONAL] The locale for the skill. e.g. en-GB, en-US, de-DE and etc.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-private-distribution-account-id

Add an id to the private distribution accounts.

`set-private-distribution-account-id` command format:

`$ ask smapi set-private-distribution-account-id <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--id <id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--id <id></dt>
    <dd markdown="span">[REQUIRED] ARN that a skill can be privately distributed to.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-private-distribution-account-id

Remove an id from the private distribution accounts.

`delete-private-distribution-account-id` command format:

`$ ask smapi delete-private-distribution-account-id <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--id <id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--id <id></dt>
    <dd markdown="span">[REQUIRED] ARN that a skill can be privately distributed to.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-private-distribution-accounts

List private distribution accounts.

`list-private-distribution-accounts` command format:

`$ ask smapi list-private-distribution-accounts <-s|--skill-id <skill-id>> <-g|--stage <stage>> [--next-token <next-token>] [--max-results <max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### simulate-skill

This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must belong to and be enabled  by the user of this API. Concurrent requests per user is currently not supported.

`simulate-skill` command format:

`$ ask smapi simulate-skill <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--input-content <input-content>> <--device-locale <device-locale>> [--session-mode <session-mode>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--input-content <input-content></dt>
    <dd markdown="span">[REQUIRED] A string corresponding to the utterance text of what a customer would say to Alexa.</dd>
    <dt>--device-locale <device-locale></dt>
    <dd markdown="span">[REQUIRED] A valid locale (e.g "en-US") for the virtual device used in simulation.</dd>
    <dt>--session-mode <session-mode></dt>
    <dd markdown="span">[OPTIONAL] Indicate the session mode of the current simulation is using. 
[ENUM]: DEFAULT,FORCE_NEW_SESSION.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-simulation

This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code.

`get-skill-simulation` command format:

`$ ask smapi get-skill-simulation <-s|--skill-id <skill-id>> <-g|--stage <stage>> <-i|--simulation-id <simulation-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-i,--simulation-id <simulation-id></dt>
    <dd markdown="span">[REQUIRED] Id of the simulation.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### submit-skill-validation

This is an asynchronous API which allows a skill developer to execute various validations against their skill.

`submit-skill-validation` command format:

`$ ask smapi submit-skill-validation <-l|--locales <locales>> <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-l,--locales <locales></dt>
    <dd markdown="span">[REQUIRED]  
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-validations

This API gets the result of a previously executed validation. A successful response will contain the status of the executed validation. If the validation successfully completed, the response will also contain information related to executed validations. In cases where requests to this API results in an error, the response will contain a description of the problem. In cases where the validation failed, the response will contain a status attribute indicating that a failure occurred. Note that validation results are stored for 60 minutes. A request for an expired validation result will return a 404 HTTP status code.

`get-skill-validations` command format:

`$ ask smapi get-skill-validations <-s|--skill-id <skill-id>> <-i|--validation-id <validation-id>> <-g|--stage <stage>> [--accept-language <accept-language>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-i,--validation-id <validation-id></dt>
    <dd markdown="span">[REQUIRED] Id of the validation. Reserved word identifier of mostRecent can be used to get the most recent validation for the skill and stage. Note that the behavior of the API in this case would be the same as when the actual validation id of the most recent validation is used in the request.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--accept-language <accept-language></dt>
    <dd markdown="span">[OPTIONAL] User's locale/language in context.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### list-skills-for-vendor

Get the list of skills for the vendor.

`list-skills-for-vendor` command format:

`$ ask smapi list-skills-for-vendor [--next-token <next-token>] [--max-results <max-results>] [-s|--skill-id <skill-id>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--next-token <next-token></dt>
    <dd markdown="span">[OPTIONAL] When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.</dd>
    <dt>--max-results <max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated = true.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[OPTIONAL] the list of skillIds that you wish to get the summary for. A maximum of 10 skillIds can be specified to get the skill summary in single listSkills call. Please note that this parameter must not be used with 'nextToken' or/and 'maxResults' parameter. 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-skill-for-vendor

Creates a new skill for given vendorId.

`create-skill-for-vendor` command format:

`$ ask smapi create-skill-for-vendor <--manifest <manifest>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--manifest <manifest></dt>
    <dd markdown="span">[REQUIRED] Defines the request body for createSkill API. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### delete-skill

Delete the skill and model for given skillId.

`delete-skill` command format:

`$ ask smapi delete-skill <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-skill-status

Get the status of skill resource and its sub-resources for a given skillId.

`get-skill-status` command format:

`$ ask smapi get-skill-status <-s|--skill-id <skill-id>> [--resource <resource>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--resource <resource></dt>
    <dd markdown="span">[OPTIONAL] Resource name for which status information is desired.
It is an optional, filtering parameter and can be used more than once, to retrieve status for all the desired (sub)resources only, in single API call.
If this parameter is not specified, status for all the resources/sub-resources will be returned.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-ssl-certificates

Returns the ssl certificate sets currently associated with this skill. Sets consist of one ssl certificate blob associated with a region as well as the default certificate for the skill.

`get-ssl-certificates` command format:

`$ ask smapi get-ssl-certificates <-s|--skill-id <skill-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### set-ssl-certificates

Updates the ssl certificates associated with this skill.

`set-ssl-certificates` command format:

`$ ask smapi set-ssl-certificates <-s|--skill-id <skill-id>> <--ssl-certificate-payload <ssl-certificate-payload>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--ssl-certificate-payload <ssl-certificate-payload></dt>
    <dd markdown="span">[REQUIRED] Defines the input/output of the ssl certificates api for a skill. 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### submit-skill-for-certification

Submit the skill for certification.

`submit-skill-for-certification` command format:

`$ ask smapi submit-skill-for-certification <-s|--skill-id <skill-id>> [--publication-method <publication-method>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--publication-method <publication-method></dt>
    <dd markdown="span">[OPTIONAL] Determines if the skill should be submitted only for certification and manually publish later or publish immediately after the skill is certified. Omitting the publication method will default to auto publishing. 
[ENUM]: MANUAL_PUBLISHING,AUTO_PUBLISHING.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### withdraw-skill-from-certification

Withdraws the skill from certification.

`withdraw-skill-from-certification` command format:

`$ ask smapi withdraw-skill-from-certification <-s|--skill-id <skill-id>> [--reason <reason>] <--message <message>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--reason <reason></dt>
    <dd markdown="span">[OPTIONAL] The reason to withdraw. 
[ENUM]: TEST_SKILL,MORE_FEATURES,DISCOVERED_ISSUE,NOT_RECEIVED_CERTIFICATION_FEEDBACK,NOT_INTEND_TO_PUBLISH,OTHER.</dd>
    <dt>--message <message></dt>
    <dd markdown="span">[REQUIRED] The message only in case the reason in OTHER.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-export-request-for-skill

Creates a new export for a skill with given skillId and stage.

`create-export-request-for-skill` command format:

`$ ask smapi create-export-request-for-skill <-s|--skill-id <skill-id>> <-g|--stage <stage>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-status-of-export-request

Get status for given exportId.

`get-status-of-export-request` command format:

`$ ask smapi get-status-of-export-request <--export-id <export-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--export-id <export-id></dt>
    <dd markdown="span">[REQUIRED] The Export ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-skill-package

Creates a new import for a skill.

`create-skill-package` command format:

`$ ask smapi create-skill-package <--vendor-id <vendor-id>> <--location <location>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--vendor-id <vendor-id></dt>
    <dd markdown="span">[REQUIRED] ID of the vendor owning the skill.</dd>
    <dt>--location <location></dt>
    <dd markdown="span">[REQUIRED] Location of the package.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### import-skill-package

Creates a new import for a skill with given skillId.

`import-skill-package` command format:

`$ ask smapi import-skill-package <--location <location>> <-s|--skill-id <skill-id>> [--if-match <if-match>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--location <location></dt>
    <dd markdown="span">[REQUIRED] Location of the package.</dd>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>--if-match <if-match></dt>
    <dd markdown="span">[OPTIONAL] Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource's current eTag.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-import-status

Get status for given importId.

`get-import-status` command format:

`$ ask smapi get-import-status <--import-id <import-id>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--import-id <import-id></dt>
    <dd markdown="span">[REQUIRED] The Import ID.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### create-upload-url

Creates a new uploadUrl.

`create-upload-url` command format:

`$ ask smapi create-upload-url [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### get-vendor-list

Get the list of Vendor information.

`get-vendor-list` command format:

`$ ask smapi get-vendor-list [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### query-development-audit-logs

The SMAPI Audit Logs API provides customers with an audit history of all SMAPI calls made by a developer or developers with permissions on that account.

`query-development-audit-logs` command format:

`$ ask smapi query-development-audit-logs <--vendor-id <vendor-id>> [--request-filters-clients <request-filters-clients>] [--request-filters-operations <request-filters-operations>] [--request-filters-resources <request-filters-resources>] [--request-filters-requesters <request-filters-requesters>] [--request-filters-start-time <request-filters-start-time>] [--request-filters-end-time <request-filters-end-time>] [--request-filters-http-response-codes <request-filters-http-response-codes>] [--sort-direction <sort-direction>] [--sort-field <sort-field>] [--pagination-context-next-token <pagination-context-next-token>] [--pagination-context-max-results <pagination-context-max-results>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>--vendor-id <vendor-id></dt>
    <dd markdown="span">[REQUIRED] Vendor Id. See developer.amazon.com/mycid.html.</dd>
    <dt>--request-filters-clients <request-filters-clients></dt>
    <dd markdown="span">[OPTIONAL] List of Client IDs for filtering. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>--request-filters-operations <request-filters-operations></dt>
    <dd markdown="span">[OPTIONAL] Filters for a list of operation names and versions. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>--request-filters-resources <request-filters-resources></dt>
    <dd markdown="span">[OPTIONAL] Filters for a list of resources and/or their types. See documentation for allowed types. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>--request-filters-requesters <request-filters-requesters></dt>
    <dd markdown="span">[OPTIONAL] Request Filters for filtering audit logs. 
[MULTIPLE]: Values can be separated by comma.
[JSON].</dd>
    <dt>--request-filters-start-time <request-filters-start-time></dt>
    <dd markdown="span">[OPTIONAL] Sets the start time for this search. Any audit logs with timestamps after this time (inclusive) will be included in the response.</dd>
    <dt>--request-filters-end-time <request-filters-end-time></dt>
    <dd markdown="span">[OPTIONAL] Sets the end time for this search. Any audit logs with timestamps before this time (exclusive) will be included in the result.</dd>
    <dt>--request-filters-http-response-codes <request-filters-http-response-codes></dt>
    <dd markdown="span">[OPTIONAL] Filters for HTTP response codes. For example, '200' or '503' 
[MULTIPLE]: Values can be separated by comma.</dd>
    <dt>--sort-direction <sort-direction></dt>
    <dd markdown="span">[OPTIONAL] Sets the sorting direction of the result items. When set to 'ASC' these items are returned in ascending order of sortField value and when set to 'DESC' these items are returned in descending order of sortField value. 
[ENUM]: ASC,DESC.</dd>
    <dt>--sort-field <sort-field></dt>
    <dd markdown="span">[OPTIONAL] Sets the field on which the sorting would be applied. 
[ENUM]: timestamp,operation,resource.id,resource.type,requester.userId,client.id,httpResponseCode.</dd>
    <dt>--pagination-context-next-token <pagination-context-next-token></dt>
    <dd markdown="span">[OPTIONAL] When the response to this API call is truncated, the response includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that this API understands. Token has expiry of 1 hour.</dd>
    <dt>--pagination-context-max-results <pagination-context-max-results></dt>
    <dd markdown="span">[OPTIONAL] Sets the maximum number of results returned in the response body. If you want to retrieve more or less than the default of 50 results, you can add this parameter to your request. maxResults can exceed the upper limit of 250 but we will not return more items than that. The response might contain fewer results than maxResults for purpose of keeping SLA or because there are not enough items, but it will never contain more.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### invoke-skill-end-point

This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also,  note that calls to the skill endpoint will timeout after 10 seconds. This  API is currently designed in a way that allows extension to an asynchronous  API if a significantly bigger timeout is required.

`invoke-skill-end-point` command format:

`$ ask smapi invoke-skill-end-point <-s|--skill-id <skill-id>> <-g|--stage <stage>> <--endpoint-region <endpoint-region>> <--skill-request-body <skill-request-body>> [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s,--skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] The skill ID.</dd>
    <dt>-g,--stage <stage></dt>
    <dd markdown="span">[REQUIRED] Stage for skill.</dd>
    <dt>--endpoint-region <endpoint-region></dt>
    <dd markdown="span">[REQUIRED] Region of endpoint to be called. 
[ENUM]: NA,EU,FE.</dd>
    <dt>--skill-request-body <skill-request-body></dt>
    <dd markdown="span">[REQUIRED] ASK request body schema as defined in the public facing documentation (https://tiny.amazon.com/1h8keglep/deveamazpublsolualexalexdocs) 
[JSON].</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">The ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">When you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### upload-catalog

upload a file for the catalog.

`upload-catalog` command format:

`$ ask smapi upload-catalog [-c| --catalog-id <catalog-id>] [-f| --file <file>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-c, --catalog-id <catalog-id></dt>
    <dd markdown="span">[REQUIRED] Unique identifier of the catalog.</dd>
    <dt>-f, --file <file></dt>
    <dd markdown="span">[REQUIRED] path to the target file input.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">[OPTIONAL] the ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">[OPTIONAL] when you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>

### export-package

download the skill package to &quot;skill-package&quot; folder in current directory.

`export-package` command format:

`$ ask smapi export-package [-s| --skill-id <skill-id>] [-g| --stage <stage>] [-p| --profile <profile>] [--debug]`

**Options**

<dl>
    <dt>-s, --skill-id <skill-id></dt>
    <dd markdown="span">[REQUIRED] the skill ID.</dd>
    <dt>-g, --stage <stage></dt>
    <dd markdown="span">[REQUIRED] stage for skill.</dd>
    <dt>-p, --profile <profile></dt>
    <dd markdown="span">[OPTIONAL] the ASK CLI profile to use. When you don't include this option, ASK CLI uses the default profile.</dd>
    <dt>--debug</dt>
    <dd markdown="span">[OPTIONAL] when you include this option, ASK CLI shows debug messages in the output of the command.</dd>
</dl>



