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
exports.AssetFilterToJSON = exports.AssetFilterFromJSONTyped = exports.AssetFilterFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AssetFilterFromJSON(json) {
    return AssetFilterFromJSONTyped(json, false);
}
exports.AssetFilterFromJSON = AssetFilterFromJSON;
function AssetFilterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'classification': !(0, runtime_1.exists)(json, 'classification') ? undefined : (0, _1.ClassificationSpecificEnumFromJSON)(json['classification']),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : json['websites'],
        'persons': !(0, runtime_1.exists)(json, 'persons') ? undefined : json['persons'],
        'phrase': !(0, runtime_1.exists)(json, 'phrase') ? undefined : (0, _1.AssetFilterPhraseFromJSON)(json['phrase']),
        'created': !(0, runtime_1.exists)(json, 'created') ? undefined : (0, _1.AssetFilterTimestampFromJSON)(json['created']),
        'updated': !(0, runtime_1.exists)(json, 'updated') ? undefined : (0, _1.AssetFilterTimestampFromJSON)(json['updated']),
        'operations': !(0, runtime_1.exists)(json, 'operations') ? undefined : (0, _1.AssetFiltersFromJSON)(json['operations']),
    };
}
exports.AssetFilterFromJSONTyped = AssetFilterFromJSONTyped;
function AssetFilterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'classification': (0, _1.ClassificationSpecificEnumToJSON)(value.classification),
        'tags': value.tags,
        'websites': value.websites,
        'persons': value.persons,
        'phrase': (0, _1.AssetFilterPhraseToJSON)(value.phrase),
        'created': (0, _1.AssetFilterTimestampToJSON)(value.created),
        'updated': (0, _1.AssetFilterTimestampToJSON)(value.updated),
        'operations': (0, _1.AssetFiltersToJSON)(value.operations),
    };
}
exports.AssetFilterToJSON = AssetFilterToJSON;
