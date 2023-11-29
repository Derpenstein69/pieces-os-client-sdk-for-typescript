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
exports.ExportedDatabaseToJSON = exports.ExportedDatabaseFromJSONTyped = exports.ExportedDatabaseFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ExportedDatabaseFromJSON(json) {
    return ExportedDatabaseFromJSONTyped(json, false);
}
exports.ExportedDatabaseFromJSON = ExportedDatabaseFromJSON;
function ExportedDatabaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'analyses': json['analyses'],
        'applications': json['applications'],
        'assets': json['assets'],
        'codeAnalyses': json['codeAnalyses'],
        'files': json['files'],
        'formatMetrics': json['formatMetrics'],
        'formats': json['formats'],
        'fragments': json['fragments'],
        'imageAnalyses': json['imageAnalyses'],
        'models': json['models'],
        'ocrAnalyses': json['ocrAnalyses'],
        'persons': json['persons'],
        'sensitives': json['sensitives'],
        'tags': json['tags'],
        'websites': json['websites'],
        'values': (0, index_1.ExportedDatabaseFormatsFromJSON)(json['values']),
        'version': json['version'],
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : json['relationships'],
        'activities': !(0, runtime_1.exists)(json, 'activities') ? undefined : json['activities'],
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : json['annotations'],
        'hints': !(0, runtime_1.exists)(json, 'hints') ? undefined : json['hints'],
        'anchors': !(0, runtime_1.exists)(json, 'anchors') ? undefined : json['anchors'],
        'anchorPoints': !(0, runtime_1.exists)(json, 'anchorPoints') ? undefined : json['anchorPoints'],
        'conversations': !(0, runtime_1.exists)(json, 'conversations') ? undefined : json['conversations'],
        'conversationMessages': !(0, runtime_1.exists)(json, 'conversationMessages') ? undefined : json['conversationMessages'],
        'messageValues': !(0, runtime_1.exists)(json, 'messageValues') ? undefined : (0, index_1.ExportedDatabaseFormatsFromJSON)(json['messageValues']),
    };
}
exports.ExportedDatabaseFromJSONTyped = ExportedDatabaseFromJSONTyped;
function ExportedDatabaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'analyses': value.analyses,
        'applications': value.applications,
        'assets': value.assets,
        'codeAnalyses': value.codeAnalyses,
        'files': value.files,
        'formatMetrics': value.formatMetrics,
        'formats': value.formats,
        'fragments': value.fragments,
        'imageAnalyses': value.imageAnalyses,
        'models': value.models,
        'ocrAnalyses': value.ocrAnalyses,
        'persons': value.persons,
        'sensitives': value.sensitives,
        'tags': value.tags,
        'websites': value.websites,
        'values': (0, index_1.ExportedDatabaseFormatsToJSON)(value.values),
        'version': value.version,
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'relationships': value.relationships,
        'activities': value.activities,
        'annotations': value.annotations,
        'hints': value.hints,
        'anchors': value.anchors,
        'anchorPoints': value.anchorPoints,
        'conversations': value.conversations,
        'conversationMessages': value.conversationMessages,
        'messageValues': (0, index_1.ExportedDatabaseFormatsToJSON)(value.messageValues),
    };
}
exports.ExportedDatabaseToJSON = ExportedDatabaseToJSON;