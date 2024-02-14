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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedActivities,
    FlattenedActivitiesFromJSON,
    FlattenedActivitiesFromJSONTyped,
    FlattenedActivitiesToJSON,
    FlattenedAnchors,
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
    FlattenedAnnotations,
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
    FlattenedConversations,
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
    FlattenedFormats,
    FlattenedFormatsFromJSON,
    FlattenedFormatsFromJSONTyped,
    FlattenedFormatsToJSON,
    FlattenedHints,
    FlattenedHintsFromJSON,
    FlattenedHintsFromJSONTyped,
    FlattenedHintsToJSON,
    FlattenedPersons,
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    FlattenedPreview,
    FlattenedPreviewFromJSON,
    FlattenedPreviewFromJSONTyped,
    FlattenedPreviewToJSON,
    FlattenedSensitives,
    FlattenedSensitivesFromJSON,
    FlattenedSensitivesFromJSONTyped,
    FlattenedSensitivesToJSON,
    FlattenedShares,
    FlattenedSharesFromJSON,
    FlattenedSharesFromJSONTyped,
    FlattenedSharesToJSON,
    FlattenedTags,
    FlattenedTagsFromJSON,
    FlattenedTagsFromJSONTyped,
    FlattenedTagsToJSON,
    FlattenedWebsites,
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './';

/**
 * An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * i.e. FlattenedFormat.formats is Type String[] or List\<String\>, FlattenedFormat.preview is Type String, and
 * FlattenedFormat.original is Type String
 * @export
 * @interface FlattenedAsset
 */
export interface FlattenedAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * The globally available UID representing the asset in the Database, both locally and in the cloud.
     * @type {string}
     * @memberof FlattenedAsset
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAsset
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAsset
     */
    creator: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    synced?: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedFormats}
     * @memberof FlattenedAsset
     */
    formats: FlattenedFormats;
    /**
     * 
     * @type {FlattenedPreview}
     * @memberof FlattenedAsset
     */
    preview: FlattenedPreview;
    /**
     * An identifier of the format that is a reference to the original.
     * @type {string}
     * @memberof FlattenedAsset
     */
    original: string;
    /**
     * 
     * @type {FlattenedShares}
     * @memberof FlattenedAsset
     */
    shares?: FlattenedShares;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedAsset
     */
    mechanism: MechanismEnum;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedAsset
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAsset
     */
    interacted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedTags}
     * @memberof FlattenedAsset
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {FlattenedSensitives}
     * @memberof FlattenedAsset
     */
    sensitives?: FlattenedSensitives;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof FlattenedAsset
     */
    persons?: FlattenedPersons;
    /**
     * This is an optional boolean that will flag that this asset came from a currated collection.
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    curated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    discovered?: boolean;
    /**
     * 
     * @type {FlattenedActivities}
     * @memberof FlattenedAsset
     */
    activities?: FlattenedActivities;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAsset
     */
    score?: Score;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    favorited?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    pseudo?: boolean;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedAsset
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedHints}
     * @memberof FlattenedAsset
     */
    hints?: FlattenedHints;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof FlattenedAsset
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedAsset
     */
    conversations?: FlattenedConversations;
    /**
     * This will let us know if this asset was generated as a 'demo' snippet
     * @type {boolean}
     * @memberof FlattenedAsset
     */
    demo?: boolean;
}

export function FlattenedAssetFromJSON(json: any): FlattenedAsset {
    return FlattenedAssetFromJSONTyped(json, false);
}

export function FlattenedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'creator': json['creator'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'synced': !exists(json, 'synced') ? undefined : GroupedTimestampFromJSON(json['synced']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'formats': FlattenedFormatsFromJSON(json['formats']),
        'preview': FlattenedPreviewFromJSON(json['preview']),
        'original': json['original'],
        'shares': !exists(json, 'shares') ? undefined : FlattenedSharesFromJSON(json['shares']),
        'mechanism': MechanismEnumFromJSON(json['mechanism']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'interacted': !exists(json, 'interacted') ? undefined : GroupedTimestampFromJSON(json['interacted']),
        'tags': !exists(json, 'tags') ? undefined : FlattenedTagsFromJSON(json['tags']),
        'sensitives': !exists(json, 'sensitives') ? undefined : FlattenedSensitivesFromJSON(json['sensitives']),
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'curated': !exists(json, 'curated') ? undefined : json['curated'],
        'discovered': !exists(json, 'discovered') ? undefined : json['discovered'],
        'activities': !exists(json, 'activities') ? undefined : FlattenedActivitiesFromJSON(json['activities']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'favorited': !exists(json, 'favorited') ? undefined : json['favorited'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'hints': !exists(json, 'hints') ? undefined : FlattenedHintsFromJSON(json['hints']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'demo': !exists(json, 'demo') ? undefined : json['demo'],
    };
}

export function FlattenedAssetToJSON(value?: FlattenedAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'name': value.name,
        'creator': value.creator,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'synced': GroupedTimestampToJSON(value.synced),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'formats': FlattenedFormatsToJSON(value.formats),
        'preview': FlattenedPreviewToJSON(value.preview),
        'original': value.original,
        'shares': FlattenedSharesToJSON(value.shares),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'interacted': GroupedTimestampToJSON(value.interacted),
        'tags': FlattenedTagsToJSON(value.tags),
        'sensitives': FlattenedSensitivesToJSON(value.sensitives),
        'persons': FlattenedPersonsToJSON(value.persons),
        'curated': value.curated,
        'discovered': value.discovered,
        'activities': FlattenedActivitiesToJSON(value.activities),
        'score': ScoreToJSON(value.score),
        'favorited': value.favorited,
        'pseudo': value.pseudo,
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
        'hints': FlattenedHintsToJSON(value.hints),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'conversations': FlattenedConversationsToJSON(value.conversations),
        'demo': value.demo,
    };
}


