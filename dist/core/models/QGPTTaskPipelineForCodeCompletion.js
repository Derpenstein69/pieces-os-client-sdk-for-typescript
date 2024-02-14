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
exports.QGPTTaskPipelineForCodeCompletionToJSON = exports.QGPTTaskPipelineForCodeCompletionFromJSONTyped = exports.QGPTTaskPipelineForCodeCompletionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function QGPTTaskPipelineForCodeCompletionFromJSON(json) {
    return QGPTTaskPipelineForCodeCompletionFromJSONTyped(json, false);
}
exports.QGPTTaskPipelineForCodeCompletionFromJSON = QGPTTaskPipelineForCodeCompletionFromJSON;
function QGPTTaskPipelineForCodeCompletionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'context': !(0, runtime_1.exists)(json, 'context') ? undefined : json['context'],
    };
}
exports.QGPTTaskPipelineForCodeCompletionFromJSONTyped = QGPTTaskPipelineForCodeCompletionFromJSONTyped;
function QGPTTaskPipelineForCodeCompletionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'context': value.context,
    };
}
exports.QGPTTaskPipelineForCodeCompletionToJSON = QGPTTaskPipelineForCodeCompletionToJSON;
