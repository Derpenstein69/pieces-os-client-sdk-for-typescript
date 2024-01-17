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
exports.ConversationsCreateFromAssetOutputToJSON = exports.ConversationsCreateFromAssetOutputFromJSONTyped = exports.ConversationsCreateFromAssetOutputFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ConversationsCreateFromAssetOutputFromJSON(json) {
    return ConversationsCreateFromAssetOutputFromJSONTyped(json, false);
}
exports.ConversationsCreateFromAssetOutputFromJSON = ConversationsCreateFromAssetOutputFromJSON;
function ConversationsCreateFromAssetOutputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'conversation': (0, _1.ReferencedConversationFromJSON)(json['conversation']),
    };
}
exports.ConversationsCreateFromAssetOutputFromJSONTyped = ConversationsCreateFromAssetOutputFromJSONTyped;
function ConversationsCreateFromAssetOutputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'conversation': (0, _1.ReferencedConversationToJSON)(value.conversation),
    };
}
exports.ConversationsCreateFromAssetOutputToJSON = ConversationsCreateFromAssetOutputToJSON;
