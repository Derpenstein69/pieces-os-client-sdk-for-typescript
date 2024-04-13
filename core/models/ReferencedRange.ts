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
import type { FlattenedRange } from './FlattenedRange';
import {
    FlattenedRangeFromJSON,
    FlattenedRangeFromJSONTyped,
    FlattenedRangeToJSON,
} from './FlattenedRange';

/**
 * This is a minimal version of a Range, with mainly an Id.
 * @export
 * @interface ReferencedRange
 */
export interface ReferencedRange {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedRange
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedRange
     */
    id: string;
    /**
     *
     * @type {FlattenedRange}
     * @memberof ReferencedRange
     */
    reference?: FlattenedRange;
}

/**
 * Check if a given object implements the ReferencedRange interface.
 */
export function instanceOfReferencedRange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:29 AM
 *
 * @export
 * @param {*} json
 * @returns {ReferencedRange}
 */
export function ReferencedRangeFromJSON(json: any): ReferencedRange {
    return ReferencedRangeFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:29 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ReferencedRange}
 */
export function ReferencedRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedRangeFromJSON(json['reference']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:29 AM
 *
 * @export
 * @param {?(ReferencedRange | null)} [value]
 * @returns {*}
 */
export function ReferencedRangeToJSON(value?: ReferencedRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedRangeToJSON(value.reference),
    };
}

