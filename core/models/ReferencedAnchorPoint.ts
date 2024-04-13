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
import type { FlattenedAnchorPoint } from './FlattenedAnchorPoint';
import {
    FlattenedAnchorPointFromJSON,
    FlattenedAnchorPointFromJSONTyped,
    FlattenedAnchorPointToJSON,
} from './FlattenedAnchorPoint';

/**
 *
 * @export
 * @interface ReferencedAnchorPoint
 */
export interface ReferencedAnchorPoint {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedAnchorPoint
     */
    id: string;
    /**
     *
     * @type {FlattenedAnchorPoint}
     * @memberof ReferencedAnchorPoint
     */
    reference?: FlattenedAnchorPoint;
}

/**
 * Check if a given object implements the ReferencedAnchorPoint interface.
 */
export function instanceOfReferencedAnchorPoint(value: object): boolean {
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
 * @returns {ReferencedAnchorPoint}
 */
export function ReferencedAnchorPointFromJSON(json: any): ReferencedAnchorPoint {
    return ReferencedAnchorPointFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:29 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ReferencedAnchorPoint}
 */
export function ReferencedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAnchorPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedAnchorPointFromJSON(json['reference']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:29 AM
 *
 * @export
 * @param {?(ReferencedAnchorPoint | null)} [value]
 * @returns {*}
 */
export function ReferencedAnchorPointToJSON(value?: ReferencedAnchorPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedAnchorPointToJSON(value.reference),
    };
}

