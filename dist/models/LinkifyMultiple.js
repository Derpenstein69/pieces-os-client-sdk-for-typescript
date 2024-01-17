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
exports.LinkifyMultipleToJSON = exports.LinkifyMultipleFromJSONTyped = exports.LinkifyMultipleFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function LinkifyMultipleFromJSON(json) {
    return LinkifyMultipleFromJSONTyped(json, false);
}
exports.LinkifyMultipleFromJSON = LinkifyMultipleFromJSON;
function LinkifyMultipleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'assets': json['assets'],
        'users': !(0, runtime_1.exists)(json, 'users') ? undefined : (json['users'].map(_1.SeededUserFromJSON)),
        'access': (0, _1.AccessEnumFromJSON)(json['access']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.LinkifyMultipleFromJSONTyped = LinkifyMultipleFromJSONTyped;
function LinkifyMultipleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'assets': value.assets,
        'users': value.users === undefined ? undefined : (value.users.map(_1.SeededUserToJSON)),
        'access': (0, _1.AccessEnumToJSON)(value.access),
        'name': value.name,
    };
}
exports.LinkifyMultipleToJSON = LinkifyMultipleToJSON;
