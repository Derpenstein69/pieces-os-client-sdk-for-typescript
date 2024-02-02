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
exports.QGPTStreamInputToJSON = exports.QGPTStreamInputFromJSONTyped = exports.QGPTStreamInputFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function QGPTStreamInputFromJSON(json) {
    return QGPTStreamInputFromJSONTyped(json, false);
}
exports.QGPTStreamInputFromJSON = QGPTStreamInputFromJSON;
function QGPTStreamInputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'relevance': !(0, runtime_1.exists)(json, 'relevance') ? undefined : (0, _1.QGPTRelevanceInputFromJSON)(json['relevance']),
        'question': !(0, runtime_1.exists)(json, 'question') ? undefined : (0, _1.QGPTQuestionInputFromJSON)(json['question']),
        'request': !(0, runtime_1.exists)(json, 'request') ? undefined : json['request'],
        'conversation': !(0, runtime_1.exists)(json, 'conversation') ? undefined : json['conversation'],
        'stop': !(0, runtime_1.exists)(json, 'stop') ? undefined : json['stop'],
        'agent': !(0, runtime_1.exists)(json, 'agent') ? undefined : json['agent'],
    };
}
exports.QGPTStreamInputFromJSONTyped = QGPTStreamInputFromJSONTyped;
function QGPTStreamInputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'relevance': (0, _1.QGPTRelevanceInputToJSON)(value.relevance),
        'question': (0, _1.QGPTQuestionInputToJSON)(value.question),
        'request': value.request,
        'conversation': value.conversation,
        'stop': value.stop,
        'agent': value.agent,
    };
}
exports.QGPTStreamInputToJSON = QGPTStreamInputToJSON;
