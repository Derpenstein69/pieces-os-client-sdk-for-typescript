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
exports.RoleToJSON = exports.RoleFromJSONTyped = exports.RoleFromJSON = exports.Role = void 0;
/**
 * This is the specific role of a format.
 * @export
 * @enum {string}
 */
var Role;
(function (Role) {
    Role["Original"] = "ORIGINAL";
    Role["Additional"] = "ADDITIONAL";
    Role["Both"] = "BOTH";
    Role["Preview"] = "PREVIEW";
})(Role || (exports.Role = Role = {}));
function RoleFromJSON(json) {
    return RoleFromJSONTyped(json, false);
}
exports.RoleFromJSON = RoleFromJSON;
function RoleFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RoleFromJSONTyped = RoleFromJSONTyped;
function RoleToJSON(value) {
    return value;
}
exports.RoleToJSON = RoleToJSON;
