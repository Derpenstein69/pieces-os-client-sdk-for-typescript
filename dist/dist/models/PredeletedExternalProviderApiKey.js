"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredeletedExternalProviderApiKeyToJSON = exports.PredeletedExternalProviderApiKeyFromJSONTyped = exports.PredeletedExternalProviderApiKeyFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function PredeletedExternalProviderApiKeyFromJSON(json) {
    return PredeletedExternalProviderApiKeyFromJSONTyped(json, false);
}
exports.PredeletedExternalProviderApiKeyFromJSON = PredeletedExternalProviderApiKeyFromJSON;
function PredeletedExternalProviderApiKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'user': json['user'],
        'openAI': !(0, runtime_1.exists)(json, 'open_AI') ? undefined : json['open_AI'],
    };
}
exports.PredeletedExternalProviderApiKeyFromJSONTyped = PredeletedExternalProviderApiKeyFromJSONTyped;
function PredeletedExternalProviderApiKeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'user': value.user,
        'open_AI': value.openAI,
    };
}
exports.PredeletedExternalProviderApiKeyToJSON = PredeletedExternalProviderApiKeyToJSON;
