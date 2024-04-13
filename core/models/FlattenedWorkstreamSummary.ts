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
import type { Applications } from './Applications';
import {
    ApplicationsFromJSON,
    ApplicationsFromJSONTyped,
    ApplicationsToJSON,
} from './Applications';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
} from './FlattenedAnchors';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
} from './FlattenedAnnotations';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
} from './FlattenedConversations';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
} from './FlattenedPersons';
import type { FlattenedRanges } from './FlattenedRanges';
import {
    FlattenedRangesFromJSON,
    FlattenedRangesFromJSONTyped,
    FlattenedRangesToJSON,
} from './FlattenedRanges';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
} from './FlattenedWebsites';
import type { FlattenedWorkstreamEvents } from './FlattenedWorkstreamEvents';
import {
    FlattenedWorkstreamEventsFromJSON,
    FlattenedWorkstreamEventsFromJSONTyped,
    FlattenedWorkstreamEventsToJSON,
} from './FlattenedWorkstreamEvents';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a DAG-Safe minimal representation of a workstream summary
 * @export
 * @interface FlattenedWorkstreamSummary
 */
export interface FlattenedWorkstreamSummary {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamSummary
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof FlattenedWorkstreamSummary
     */
    id: string;
    /**
     *
     * @type {Score}
     * @memberof FlattenedWorkstreamSummary
     */
    score?: Score;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamSummary
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamSummary
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {FlattenedWorkstreamEvents}
     * @memberof FlattenedWorkstreamSummary
     */
    events?: FlattenedWorkstreamEvents;
    /**
     *
     * @type {string}
     * @memberof FlattenedWorkstreamSummary
     */
    name: string;
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof FlattenedWorkstreamSummary
     */
    annotations?: FlattenedAnnotations;
    /**
     *
     * @type {FlattenedRanges}
     * @memberof FlattenedWorkstreamSummary
     */
    ranges?: FlattenedRanges;
    /**
     *
     * @type {Model}
     * @memberof FlattenedWorkstreamSummary
     */
    model: Model;
    /**
     *
     * @type {FlattenedWebsites}
     * @memberof FlattenedWorkstreamSummary
     */
    websites?: FlattenedWebsites;
    /**
     *
     * @type {FlattenedAnchors}
     * @memberof FlattenedWorkstreamSummary
     */
    anchors?: FlattenedAnchors;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof FlattenedWorkstreamSummary
     */
    assets?: FlattenedAssets;
    /**
     *
     * @type {FlattenedConversations}
     * @memberof FlattenedWorkstreamSummary
     */
    conversations?: FlattenedConversations;
    /**
     *
     * @type {FlattenedPersons}
     * @memberof FlattenedWorkstreamSummary
     */
    persons?: FlattenedPersons;
    /**
     *
     * @type {Applications}
     * @memberof FlattenedWorkstreamSummary
     */
    applications?: Applications;
}

/**
 * Check if a given object implements the FlattenedWorkstreamSummary interface.
 */
export function instanceOfFlattenedWorkstreamSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @returns {FlattenedWorkstreamSummary}
 */
export function FlattenedWorkstreamSummaryFromJSON(json: any): FlattenedWorkstreamSummary {
    return FlattenedWorkstreamSummaryFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {FlattenedWorkstreamSummary}
 */
export function FlattenedWorkstreamSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'events': !exists(json, 'events') ? undefined : FlattenedWorkstreamEventsFromJSON(json['events']),
        'name': json['name'],
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'ranges': !exists(json, 'ranges') ? undefined : FlattenedRangesFromJSON(json['ranges']),
        'model': ModelFromJSON(json['model']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'applications': !exists(json, 'applications') ? undefined : ApplicationsFromJSON(json['applications']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {?(FlattenedWorkstreamSummary | null)} [value]
 * @returns {*}
 */
export function FlattenedWorkstreamSummaryToJSON(value?: FlattenedWorkstreamSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'score': ScoreToJSON(value.score),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'events': FlattenedWorkstreamEventsToJSON(value.events),
        'name': value.name,
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
        'ranges': FlattenedRangesToJSON(value.ranges),
        'model': ModelToJSON(value.model),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'assets': FlattenedAssetsToJSON(value.assets),
        'conversations': FlattenedConversationsToJSON(value.conversations),
        'persons': FlattenedPersonsToJSON(value.persons),
        'applications': ApplicationsToJSON(value.applications),
    };
}

