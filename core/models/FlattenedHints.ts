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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { ReferencedHint } from './ReferencedHint';
import {
    ReferencedHintFromJSON,
    ReferencedHintFromJSONTyped,
    ReferencedHintToJSON,
} from './ReferencedHint';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is the flattened Version of plural hints.
 * @export
 * @interface FlattenedHints
 */
export interface FlattenedHints {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedHints
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedHint>}
     * @memberof FlattenedHints
     */
    iterable: Array<ReferencedHint>;
    /**
     * This is a Map<String, int> where the the key is an hint id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedHints
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedHints
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedHints interface.
 */
export function instanceOfFlattenedHints(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function FlattenedHintsFromJSON(json: any): FlattenedHints {
    return FlattenedHintsFromJSONTyped(json, false);
}

export function FlattenedHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedHints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedHintFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedHintsToJSON(value?: FlattenedHints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedHintToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

