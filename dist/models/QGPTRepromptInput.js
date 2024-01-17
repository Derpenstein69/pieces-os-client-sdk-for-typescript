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
exports.QGPTRepromptInputToJSON = exports.QGPTRepromptInputFromJSONTyped = exports.QGPTRepromptInputFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function QGPTRepromptInputFromJSON(json) {
    return QGPTRepromptInputFromJSONTyped(json, false);
}
exports.QGPTRepromptInputFromJSON = QGPTRepromptInputFromJSON;
function QGPTRepromptInputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'query': json['query'],
        'conversation': (0, _1.QGPTConversationFromJSON)(json['conversation']),
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : json['application'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : json['model'],
    };
}
exports.QGPTRepromptInputFromJSONTyped = QGPTRepromptInputFromJSONTyped;
function QGPTRepromptInputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'query': value.query,
        'conversation': (0, _1.QGPTConversationToJSON)(value.conversation),
        'application': value.application,
        'model': value.model,
    };
}
exports.QGPTRepromptInputToJSON = QGPTRepromptInputToJSON;
