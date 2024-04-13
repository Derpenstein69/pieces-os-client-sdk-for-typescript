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
 * This is a shared output model for all the exists endpoints:
 * /tags/exists : value here is the tag that you want to see if it exists.
 * /websites/exists: value here is the url you want to see if it exists
 * @export
 * @interface ExistentMetadata
 */
export interface ExistentMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ExistentMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ExistentMetadata
     */
    value: string;
}

/**
 * Check if a given object implements the ExistentMetadata interface.
 */
export function instanceOfExistentMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @returns {ExistentMetadata}
 */
export function ExistentMetadataFromJSON(json: any): ExistentMetadata {
    return ExistentMetadataFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ExistentMetadata}
 */
export function ExistentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExistentMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': json['value'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {?(ExistentMetadata | null)} [value]
 * @returns {*}
 */
export function ExistentMetadataToJSON(value?: ExistentMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'value': value.value,
    };
}

