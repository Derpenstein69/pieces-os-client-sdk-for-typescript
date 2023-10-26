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
exports.SeededConversationMessageToJSON = exports.SeededConversationMessageFromJSONTyped = exports.SeededConversationMessageFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededConversationMessageFromJSON(json) {
    return SeededConversationMessageFromJSONTyped(json, false);
}
exports.SeededConversationMessageFromJSON = SeededConversationMessageFromJSON;
function SeededConversationMessageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'created': !(0, runtime_1.exists)(json, 'created') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['created']),
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, _1.ModelFromJSON)(json['model']),
        'fragment': (0, _1.FragmentFormatFromJSON)(json['fragment']),
        'conversation': !(0, runtime_1.exists)(json, 'conversation') ? undefined : (0, _1.ReferencedConversationFromJSON)(json['conversation']),
        'sentiment': !(0, runtime_1.exists)(json, 'sentiment') ? undefined : (0, _1.ConversationMessageSentimentEnumFromJSON)(json['sentiment']),
        'role': (0, _1.ConversationMessageRoleEnumFromJSON)(json['role']),
    };
}
exports.SeededConversationMessageFromJSONTyped = SeededConversationMessageFromJSONTyped;
function SeededConversationMessageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'model': (0, _1.ModelToJSON)(value.model),
        'fragment': (0, _1.FragmentFormatToJSON)(value.fragment),
        'conversation': (0, _1.ReferencedConversationToJSON)(value.conversation),
        'sentiment': (0, _1.ConversationMessageSentimentEnumToJSON)(value.sentiment),
        'role': (0, _1.ConversationMessageRoleEnumToJSON)(value.role),
    };
}
exports.SeededConversationMessageToJSON = SeededConversationMessageToJSON;