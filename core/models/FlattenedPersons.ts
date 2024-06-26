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
import type { ReferencedPerson } from './ReferencedPerson';
import {
    ReferencedPersonFromJSON,
    ReferencedPersonFromJSONTyped,
    ReferencedPersonToJSON,
} from './ReferencedPerson';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface FlattenedPersons
 */
export interface FlattenedPersons {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPersons
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedPerson>}
     * @memberof FlattenedPersons
     */
    iterable: Array<ReferencedPerson>;
    /**
     * This is a Map<String, int> where the the key is an person id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedPersons
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedPersons
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedPersons interface.
 */
export function instanceOfFlattenedPersons(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function FlattenedPersonsFromJSON(json: any): FlattenedPersons {
    return FlattenedPersonsFromJSONTyped(json, false);
}

export function FlattenedPersonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPersons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedPersonFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedPersonsToJSON(value?: FlattenedPersons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedPersonToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

