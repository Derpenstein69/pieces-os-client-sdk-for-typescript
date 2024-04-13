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
import type { ReferencedModel } from './ReferencedModel';
import {
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
} from './ReferencedModel';

/**
 * This is the output model for '/model/{model}/delete/cache'
 * @export
 * @interface ModelDeleteCacheOutput
 */
export interface ModelDeleteCacheOutput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ModelDeleteCacheOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ReferencedModel}
     * @memberof ModelDeleteCacheOutput
     */
    model: ReferencedModel;
}

/**
 * Check if a given object implements the ModelDeleteCacheOutput interface.
 */
export function instanceOfModelDeleteCacheOutput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:34 AM
 *
 * @export
 * @param {*} json
 * @returns {ModelDeleteCacheOutput}
 */
export function ModelDeleteCacheOutputFromJSON(json: any): ModelDeleteCacheOutput {
    return ModelDeleteCacheOutputFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:34 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ModelDeleteCacheOutput}
 */
export function ModelDeleteCacheOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDeleteCacheOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'model': ReferencedModelFromJSON(json['model']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:34 AM
 *
 * @export
 * @param {?(ModelDeleteCacheOutput | null)} [value]
 * @returns {*}
 */
export function ModelDeleteCacheOutputToJSON(value?: ModelDeleteCacheOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'model': ReferencedModelToJSON(value.model),
    };
}

