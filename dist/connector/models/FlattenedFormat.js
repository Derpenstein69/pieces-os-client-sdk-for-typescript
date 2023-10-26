"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlattenedFormatToJSON = exports.FlattenedFormatFromJSONTyped = exports.FlattenedFormatFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedFormatFromJSON(json) {
    return FlattenedFormatFromJSONTyped(json, false);
}
exports.FlattenedFormatFromJSON = FlattenedFormatFromJSON;
function FlattenedFormatFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'creator': json['creator'],
        'classification': (0, _1.ClassificationFromJSON)(json['classification']),
        'icon': !(0, runtime_1.exists)(json, 'icon') ? undefined : json['icon'],
        'role': (0, _1.RoleFromJSON)(json['role']),
        'application': (0, _1.ApplicationFromJSON)(json['application']),
        'asset': json['asset'],
        'bytes': (0, _1.ByteDescriptorFromJSON)(json['bytes']),
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'synced': !(0, runtime_1.exists)(json, 'synced') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['synced']),
        'cloud': !(0, runtime_1.exists)(json, 'cloud') ? undefined : json['cloud'],
        'fragment': !(0, runtime_1.exists)(json, 'fragment') ? undefined : (0, _1.FragmentFormatFromJSON)(json['fragment']),
        'file': !(0, runtime_1.exists)(json, 'file') ? undefined : (0, _1.FileFormatFromJSON)(json['file']),
        'analysis': !(0, runtime_1.exists)(json, 'analysis') ? undefined : (0, _1.FlattenedAnalysisFromJSON)(json['analysis']),
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : (0, _1.FlattenedWebsitesFromJSON)(json['websites']),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : (0, _1.FlattenedTagsFromJSON)(json['tags']),
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : (0, _1.RelationshipFromJSON)(json['relationship']),
        'activities': !(0, runtime_1.exists)(json, 'activities') ? undefined : (0, _1.FlattenedActivitiesFromJSON)(json['activities']),
    };
}
exports.FlattenedFormatFromJSONTyped = FlattenedFormatFromJSONTyped;
function FlattenedFormatToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'creator': value.creator,
        'classification': (0, _1.ClassificationToJSON)(value.classification),
        'icon': value.icon,
        'role': (0, _1.RoleToJSON)(value.role),
        'application': (0, _1.ApplicationToJSON)(value.application),
        'asset': value.asset,
        'bytes': (0, _1.ByteDescriptorToJSON)(value.bytes),
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'synced': (0, _1.GroupedTimestampToJSON)(value.synced),
        'cloud': value.cloud,
        'fragment': (0, _1.FragmentFormatToJSON)(value.fragment),
        'file': (0, _1.FileFormatToJSON)(value.file),
        'analysis': (0, _1.FlattenedAnalysisToJSON)(value.analysis),
        'websites': (0, _1.FlattenedWebsitesToJSON)(value.websites),
        'tags': (0, _1.FlattenedTagsToJSON)(value.tags),
        'relationship': (0, _1.RelationshipToJSON)(value.relationship),
        'activities': (0, _1.FlattenedActivitiesToJSON)(value.activities),
    };
}
exports.FlattenedFormatToJSON = FlattenedFormatToJSON;