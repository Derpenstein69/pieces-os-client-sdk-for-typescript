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
 *
 * @export
 * @interface TLPCodeFragmentSuggestedReuse
 */
export interface TLPCodeFragmentSuggestedReuse {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentSuggestedReuse
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentSuggestedReuse
     */
    id?: string;
}

/**
 * Check if a given object implements the TLPCodeFragmentSuggestedReuse interface.
 */
export function instanceOfTLPCodeFragmentSuggestedReuse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {*} json
 * @returns {TLPCodeFragmentSuggestedReuse}
 */
export function TLPCodeFragmentSuggestedReuseFromJSON(json: any): TLPCodeFragmentSuggestedReuse {
    return TLPCodeFragmentSuggestedReuseFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {TLPCodeFragmentSuggestedReuse}
 */
export function TLPCodeFragmentSuggestedReuseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentSuggestedReuse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {?(TLPCodeFragmentSuggestedReuse | null)} [value]
 * @returns {*}
 */
export function TLPCodeFragmentSuggestedReuseToJSON(value?: TLPCodeFragmentSuggestedReuse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
    };
}

