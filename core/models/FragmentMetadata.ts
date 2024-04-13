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
import type { ClassificationSpecificEnum } from './ClassificationSpecificEnum';
import {
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
} from './ClassificationSpecificEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is a model for metadata of a file!
 * @export
 * @interface FragmentMetadata
 */
export interface FragmentMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FragmentMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ClassificationSpecificEnum}
     * @memberof FragmentMetadata
     */
    ext?: ClassificationSpecificEnum;
}

/**
 * Check if a given object implements the FragmentMetadata interface.
 */
export function instanceOfFragmentMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @returns {FragmentMetadata}
 */
export function FragmentMetadataFromJSON(json: any): FragmentMetadata {
    return FragmentMetadataFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {FragmentMetadata}
 */
export function FragmentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FragmentMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ext': !exists(json, 'ext') ? undefined : ClassificationSpecificEnumFromJSON(json['ext']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:17 AM
 *
 * @export
 * @param {?(FragmentMetadata | null)} [value]
 * @returns {*}
 */
export function FragmentMetadataToJSON(value?: FragmentMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'ext': ClassificationSpecificEnumToJSON(value.ext),
    };
}

