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
exports.RelevantQGPTSeedToJSON = exports.RelevantQGPTSeedFromJSONTyped = exports.RelevantQGPTSeedFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function RelevantQGPTSeedFromJSON(json) {
    return RelevantQGPTSeedFromJSONTyped(json, false);
}
exports.RelevantQGPTSeedFromJSON = RelevantQGPTSeedFromJSON;
function RelevantQGPTSeedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'seed': !(0, runtime_1.exists)(json, 'seed') ? undefined : (0, _1.SeedFromJSON)(json['seed']),
        'path': !(0, runtime_1.exists)(json, 'path') ? undefined : json['path'],
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, _1.ReferencedAssetFromJSON)(json['asset']),
    };
}
exports.RelevantQGPTSeedFromJSONTyped = RelevantQGPTSeedFromJSONTyped;
function RelevantQGPTSeedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'seed': (0, _1.SeedToJSON)(value.seed),
        'path': value.path,
        'asset': (0, _1.ReferencedAssetToJSON)(value.asset),
    };
}
exports.RelevantQGPTSeedToJSON = RelevantQGPTSeedToJSON;
