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
exports.SeededAssetWebsiteToJSON = exports.SeededAssetWebsiteFromJSONTyped = exports.SeededAssetWebsiteFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededAssetWebsiteFromJSON(json) {
    return SeededAssetWebsiteFromJSONTyped(json, false);
}
exports.SeededAssetWebsiteFromJSON = SeededAssetWebsiteFromJSON;
function SeededAssetWebsiteFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'url': json['url'],
        'name': json['name'],
        'mechanism': !(0, runtime_1.exists)(json, 'mechanism') ? undefined : (0, _1.MechanismEnumFromJSON)(json['mechanism']),
    };
}
exports.SeededAssetWebsiteFromJSONTyped = SeededAssetWebsiteFromJSONTyped;
function SeededAssetWebsiteToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'url': value.url,
        'name': value.name,
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
    };
}
exports.SeededAssetWebsiteToJSON = SeededAssetWebsiteToJSON;
