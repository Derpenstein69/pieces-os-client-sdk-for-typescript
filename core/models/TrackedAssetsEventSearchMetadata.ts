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
import type { TrackedAssetsEventSearchMetadataResults } from './TrackedAssetsEventSearchMetadataResults';
import {
    TrackedAssetsEventSearchMetadataResultsFromJSON,
    TrackedAssetsEventSearchMetadataResultsFromJSONTyped,
    TrackedAssetsEventSearchMetadataResultsToJSON,
} from './TrackedAssetsEventSearchMetadataResults';

/**
 * Metadata attached to a search event on an Asset
 * @export
 * @interface TrackedAssetsEventSearchMetadata
 */
export interface TrackedAssetsEventSearchMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * The search query itself
     * @type {string}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    query?: string;
    /**
     *
     * @type {TrackedAssetsEventSearchMetadataResults}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    results?: TrackedAssetsEventSearchMetadataResults;
}

/**
 * Check if a given object implements the TrackedAssetsEventSearchMetadata interface.
 */
export function instanceOfTrackedAssetsEventSearchMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {*} json
 * @returns {TrackedAssetsEventSearchMetadata}
 */
export function TrackedAssetsEventSearchMetadataFromJSON(json: any): TrackedAssetsEventSearchMetadata {
    return TrackedAssetsEventSearchMetadataFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {TrackedAssetsEventSearchMetadata}
 */
export function TrackedAssetsEventSearchMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetsEventSearchMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': !exists(json, 'query') ? undefined : json['query'],
        'results': !exists(json, 'results') ? undefined : TrackedAssetsEventSearchMetadataResultsFromJSON(json['results']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {?(TrackedAssetsEventSearchMetadata | null)} [value]
 * @returns {*}
 */
export function TrackedAssetsEventSearchMetadataToJSON(value?: TrackedAssetsEventSearchMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'query': value.query,
        'results': TrackedAssetsEventSearchMetadataResultsToJSON(value.results),
    };
}

