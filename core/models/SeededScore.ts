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

/**
 * This is the low level seeded score and will let us know what exactly we want to increment on our material.
 *
 * Note: ONLY include one of these, as we will only increment one of the following.
 * @export
 * @interface SeededScore
 */
export interface SeededScore {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededScore
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    reuse?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    update?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    reference?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    priority?: boolean;
}

/**
 * Check if a given object implements the SeededScore interface.
 */
export function instanceOfSeededScore(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededScore}
 */
export function SeededScoreFromJSON(json: any): SeededScore {
    return SeededScoreFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededScore}
 */
export function SeededScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededScore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'reuse': !exists(json, 'reuse') ? undefined : json['reuse'],
        'update': !exists(json, 'update') ? undefined : json['update'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {?(SeededScore | null)} [value]
 * @returns {*}
 */
export function SeededScoreToJSON(value?: SeededScore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'reuse': value.reuse,
        'update': value.update,
        'reference': value.reference,
        'priority': value.priority,
    };
}

