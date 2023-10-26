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
exports.LinkExtractionReturnableToJSON = exports.LinkExtractionReturnableFromJSONTyped = exports.LinkExtractionReturnableFromJSON = void 0;
function LinkExtractionReturnableFromJSON(json) {
    return LinkExtractionReturnableFromJSONTyped(json, false);
}
exports.LinkExtractionReturnableFromJSON = LinkExtractionReturnableFromJSON;
function LinkExtractionReturnableFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'urls': json['urls'],
        'emails': json['emails'],
        'users': json['users'],
    };
}
exports.LinkExtractionReturnableFromJSONTyped = LinkExtractionReturnableFromJSONTyped;
function LinkExtractionReturnableToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'urls': value.urls,
        'emails': value.emails,
        'users': value.users,
    };
}
exports.LinkExtractionReturnableToJSON = LinkExtractionReturnableToJSON;