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
import type { ReferencedWebsite } from './ReferencedWebsite';
import {
    ReferencedWebsiteFromJSON,
    ReferencedWebsiteFromJSONTyped,
    ReferencedWebsiteToJSON,
} from './ReferencedWebsite';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a specific model for related websites to an asset.[DAG SAFE]
 * @export
 * @interface FlattenedWebsites
 */
export interface FlattenedWebsites {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWebsites
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedWebsite>}
     * @memberof FlattenedWebsites
     */
    iterable: Array<ReferencedWebsite>;
    /**
     * This is a Map<String, int> where the the key is an website id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedWebsites
     */
    indices?: { [key: string]: number; };
    /**
     *
     * @type {Score}
     * @memberof FlattenedWebsites
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedWebsites interface.
 */
export function instanceOfFlattenedWebsites(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @returns {FlattenedWebsites}
 */
export function FlattenedWebsitesFromJSON(json: any): FlattenedWebsites {
    return FlattenedWebsitesFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {FlattenedWebsites}
 */
export function FlattenedWebsitesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWebsites {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedWebsiteFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {?(FlattenedWebsites | null)} [value]
 * @returns {*}
 */
export function FlattenedWebsitesToJSON(value?: FlattenedWebsites | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedWebsiteToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

