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
 * A helper classs to wrap Date-Time Values with Useful Helper Properties
 * @export
 * @interface GroupedTimestamp
 */
export interface GroupedTimestamp {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GroupedTimestamp
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Date}
     * @memberof GroupedTimestamp
     */
    value: Date;
    /**
     *
     * @type {string}
     * @memberof GroupedTimestamp
     */
    readable?: string;
}

/**
 * Check if a given object implements the GroupedTimestamp interface.
 */
export function instanceOfGroupedTimestamp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {*} json
 * @returns {GroupedTimestamp}
 */
export function GroupedTimestampFromJSON(json: any): GroupedTimestamp {
    return GroupedTimestampFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {GroupedTimestamp}
 */
export function GroupedTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupedTimestamp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': (new Date(json['value'])),
        'readable': !exists(json, 'readable') ? undefined : json['readable'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:16 AM
 *
 * @export
 * @param {?(GroupedTimestamp | null)} [value]
 * @returns {*}
 */
export function GroupedTimestampToJSON(value?: GroupedTimestamp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'value': (value.value.toISOString()),
        'readable': value.readable,
    };
}

