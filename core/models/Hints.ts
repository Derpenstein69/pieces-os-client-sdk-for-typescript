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
    Hint,
    HintFromJSON,
    HintFromJSONTyped,
    HintToJSON,
} from './';

/**
 * This is the plural of a Hint.
 * @export
 * @interface Hints
 */
export interface Hints {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Hints
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Hint>}
     * @memberof Hints
     */
    iterable: Array<Hint>;
    /**
     * This is a Map<String, int> where the the key is an hint id.
     * @type {{ [key: string]: number; }}
     * @memberof Hints
     */
    indices?: { [key: string]: number; };
}

export function HintsFromJSON(json: any): Hints {
    return HintsFromJSONTyped(json, false);
}

export function HintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(HintFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
    };
}

export function HintsToJSON(value?: Hints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(HintToJSON)),
        'indices': value.indices,
    };
}

