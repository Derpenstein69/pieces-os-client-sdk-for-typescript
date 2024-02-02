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
exports.SeededAnchorToJSON = exports.SeededAnchorFromJSONTyped = exports.SeededAnchorFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededAnchorFromJSON(json) {
    return SeededAnchorFromJSONTyped(json, false);
}
exports.SeededAnchorFromJSON = SeededAnchorFromJSON;
function SeededAnchorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'type': (0, _1.AnchorTypeEnumFromJSON)(json['type']),
        'watch': !(0, runtime_1.exists)(json, 'watch') ? undefined : json['watch'],
        'fullpath': json['fullpath'],
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : json['asset'],
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : (0, _1.PlatformEnumFromJSON)(json['platform']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (json['annotations'].map(_1.SeededAnnotationFromJSON)),
        'conversation': !(0, runtime_1.exists)(json, 'conversation') ? undefined : json['conversation'],
    };
}
exports.SeededAnchorFromJSONTyped = SeededAnchorFromJSONTyped;
function SeededAnchorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'type': (0, _1.AnchorTypeEnumToJSON)(value.type),
        'watch': value.watch,
        'fullpath': value.fullpath,
        'asset': value.asset,
        'platform': (0, _1.PlatformEnumToJSON)(value.platform),
        'name': value.name,
        'annotations': value.annotations === undefined ? undefined : (value.annotations.map(_1.SeededAnnotationToJSON)),
        'conversation': value.conversation,
    };
}
exports.SeededAnchorToJSON = SeededAnchorToJSON;