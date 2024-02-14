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
exports.OSDeviceHardwareInformationToJSON = exports.OSDeviceHardwareInformationFromJSONTyped = exports.OSDeviceHardwareInformationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function OSDeviceHardwareInformationFromJSON(json) {
    return OSDeviceHardwareInformationFromJSONTyped(json, false);
}
exports.OSDeviceHardwareInformationFromJSON = OSDeviceHardwareInformationFromJSON;
function OSDeviceHardwareInformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'cpu': !(0, runtime_1.exists)(json, 'cpu') ? undefined : (0, _1.OSDeviceCPUHardwareInformationFromJSON)(json['cpu']),
        'gpu': !(0, runtime_1.exists)(json, 'gpu') ? undefined : (0, _1.OSDeviceGPUHardwareInformationFromJSON)(json['gpu']),
    };
}
exports.OSDeviceHardwareInformationFromJSONTyped = OSDeviceHardwareInformationFromJSONTyped;
function OSDeviceHardwareInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'cpu': (0, _1.OSDeviceCPUHardwareInformationToJSON)(value.cpu),
        'gpu': (0, _1.OSDeviceGPUHardwareInformationToJSON)(value.gpu),
    };
}
exports.OSDeviceHardwareInformationToJSON = OSDeviceHardwareInformationToJSON;
