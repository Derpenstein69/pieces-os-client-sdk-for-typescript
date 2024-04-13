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
import type { Hint } from './Hint';
import {
    HintFromJSON,
    HintFromJSONTyped,
    HintToJSON,
} from './Hint';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

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
    /**
     *
     * @type {Score}
     * @memberof Hints
     */
    score?: Score;
}

/**
 * Check if a given object implements the Hints interface.
 */
export function instanceOfHints(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {*} json
 * @returns {Hints}
 */
export function HintsFromJSON(json: any): Hints {
    return HintsFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {Hints}
 */
export function HintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(HintFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {?(Hints | null)} [value]
 * @returns {*}
 */
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
        'score': ScoreToJSON(value.score),
    };
}

