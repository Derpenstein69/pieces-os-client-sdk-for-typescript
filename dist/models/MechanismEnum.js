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
exports.MechanismEnumToJSON = exports.MechanismEnumFromJSONTyped = exports.MechanismEnumFromJSON = exports.MechanismEnum = void 0;
/**
 * This will let us know how an asset was uploaded.
 *
 * MANUAL: this is an event such as a user driven send to pieces, or a paste to pieces.
 *
 * RECOMMENDED: This is an event that was initiall recommended via the suggestion flow, and a user decided totake the recommendation.
 *
 * AUTOMATIC: This is not user driven at all and the asset was automatically uploaded via the suggestion flow. or other methods.
 *
 * INTERNAL: This is an undelete able enum used for internal use only.
 * @export
 * @enum {string}
 */
var MechanismEnum;
(function (MechanismEnum) {
    MechanismEnum["Manual"] = "MANUAL";
    MechanismEnum["Recommended"] = "RECOMMENDED";
    MechanismEnum["Automatic"] = "AUTOMATIC";
    MechanismEnum["Internal"] = "INTERNAL";
    MechanismEnum["Deleted"] = "DELETED";
})(MechanismEnum || (exports.MechanismEnum = MechanismEnum = {}));
function MechanismEnumFromJSON(json) {
    return MechanismEnumFromJSONTyped(json, false);
}
exports.MechanismEnumFromJSON = MechanismEnumFromJSON;
function MechanismEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MechanismEnumFromJSONTyped = MechanismEnumFromJSONTyped;
function MechanismEnumToJSON(value) {
    return value;
}
exports.MechanismEnumToJSON = MechanismEnumToJSON;
