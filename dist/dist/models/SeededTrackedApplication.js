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
exports.SeededTrackedApplicationToJSON = exports.SeededTrackedApplicationFromJSONTyped = exports.SeededTrackedApplicationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededTrackedApplicationFromJSON(json) {
    return SeededTrackedApplicationFromJSONTyped(json, false);
}
exports.SeededTrackedApplicationFromJSON = SeededTrackedApplicationFromJSON;
function SeededTrackedApplicationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'name': (0, _1.ApplicationNameEnumFromJSON)(json['name']),
        'version': json['version'],
        'platform': (0, _1.PlatformEnumFromJSON)(json['platform']),
        'capabilities': !(0, runtime_1.exists)(json, 'capabilities') ? undefined : (0, _1.CapabilitiesEnumFromJSON)(json['capabilities']),
        'privacy': !(0, runtime_1.exists)(json, 'privacy') ? undefined : (0, _1.PrivacyEnumFromJSON)(json['privacy']),
        'automaticUnload': !(0, runtime_1.exists)(json, 'automaticUnload') ? undefined : json['automaticUnload'],
    };
}
exports.SeededTrackedApplicationFromJSONTyped = SeededTrackedApplicationFromJSONTyped;
function SeededTrackedApplicationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'name': (0, _1.ApplicationNameEnumToJSON)(value.name),
        'version': value.version,
        'platform': (0, _1.PlatformEnumToJSON)(value.platform),
        'capabilities': (0, _1.CapabilitiesEnumToJSON)(value.capabilities),
        'privacy': (0, _1.PrivacyEnumToJSON)(value.privacy),
        'automaticUnload': value.automaticUnload,
    };
}
exports.SeededTrackedApplicationToJSON = SeededTrackedApplicationToJSON;
