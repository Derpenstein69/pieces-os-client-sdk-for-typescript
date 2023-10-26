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
exports.FlattenedAssetToJSON = exports.FlattenedAssetFromJSONTyped = exports.FlattenedAssetFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedAssetFromJSON(json) {
    return FlattenedAssetFromJSONTyped(json, false);
}
exports.FlattenedAssetFromJSON = FlattenedAssetFromJSON;
function FlattenedAssetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'creator': json['creator'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'synced': !(0, runtime_1.exists)(json, 'synced') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['synced']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'formats': (0, _1.FlattenedFormatsFromJSON)(json['formats']),
        'preview': (0, _1.FlattenedPreviewFromJSON)(json['preview']),
        'original': json['original'],
        'shares': !(0, runtime_1.exists)(json, 'shares') ? undefined : (0, _1.FlattenedSharesFromJSON)(json['shares']),
        'mechanism': (0, _1.MechanismEnumFromJSON)(json['mechanism']),
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : (0, _1.FlattenedWebsitesFromJSON)(json['websites']),
        'interacted': !(0, runtime_1.exists)(json, 'interacted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['interacted']),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : (0, _1.FlattenedTagsFromJSON)(json['tags']),
        'sensitives': !(0, runtime_1.exists)(json, 'sensitives') ? undefined : (0, _1.FlattenedSensitivesFromJSON)(json['sensitives']),
        'persons': !(0, runtime_1.exists)(json, 'persons') ? undefined : (0, _1.FlattenedPersonsFromJSON)(json['persons']),
        'curated': !(0, runtime_1.exists)(json, 'curated') ? undefined : json['curated'],
        'discovered': !(0, runtime_1.exists)(json, 'discovered') ? undefined : json['discovered'],
        'activities': !(0, runtime_1.exists)(json, 'activities') ? undefined : (0, _1.FlattenedActivitiesFromJSON)(json['activities']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (0, _1.FlattenedAnnotationsFromJSON)(json['annotations']),
        'hints': !(0, runtime_1.exists)(json, 'hints') ? undefined : (0, _1.FlattenedHintsFromJSON)(json['hints']),
        'anchors': !(0, runtime_1.exists)(json, 'anchors') ? undefined : (0, _1.FlattenedAnchorsFromJSON)(json['anchors']),
        'conversations': !(0, runtime_1.exists)(json, 'conversations') ? undefined : (0, _1.FlattenedConversationsFromJSON)(json['conversations']),
    };
}
exports.FlattenedAssetFromJSONTyped = FlattenedAssetFromJSONTyped;
function FlattenedAssetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'name': value.name,
        'creator': value.creator,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'synced': (0, _1.GroupedTimestampToJSON)(value.synced),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'formats': (0, _1.FlattenedFormatsToJSON)(value.formats),
        'preview': (0, _1.FlattenedPreviewToJSON)(value.preview),
        'original': value.original,
        'shares': (0, _1.FlattenedSharesToJSON)(value.shares),
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
        'websites': (0, _1.FlattenedWebsitesToJSON)(value.websites),
        'interacted': (0, _1.GroupedTimestampToJSON)(value.interacted),
        'tags': (0, _1.FlattenedTagsToJSON)(value.tags),
        'sensitives': (0, _1.FlattenedSensitivesToJSON)(value.sensitives),
        'persons': (0, _1.FlattenedPersonsToJSON)(value.persons),
        'curated': value.curated,
        'discovered': value.discovered,
        'activities': (0, _1.FlattenedActivitiesToJSON)(value.activities),
        'score': (0, _1.ScoreToJSON)(value.score),
        'favorited': value.favorited,
        'pseudo': value.pseudo,
        'annotations': (0, _1.FlattenedAnnotationsToJSON)(value.annotations),
        'hints': (0, _1.FlattenedHintsToJSON)(value.hints),
        'anchors': (0, _1.FlattenedAnchorsToJSON)(value.anchors),
        'conversations': (0, _1.FlattenedConversationsToJSON)(value.conversations),
    };
}
exports.FlattenedAssetToJSON = FlattenedAssetToJSON;