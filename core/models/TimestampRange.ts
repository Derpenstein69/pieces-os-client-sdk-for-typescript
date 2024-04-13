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
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * if you want a range between you can use from && to.
 *
 * if you want anything before, use to and NO from.
 *
 * if you want anything after, use from and NO to.
 * @export
 * @interface TimestampRange
 */
export interface TimestampRange {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TimestampRange
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof TimestampRange
     */
    from?: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof TimestampRange
     */
    to?: GroupedTimestamp;
    /**
     *
     * @type {boolean}
     * @memberof TimestampRange
     */
    between?: boolean;
}

/**
 * Check if a given object implements the TimestampRange interface.
 */
export function instanceOfTimestampRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {*} json
 * @returns {TimestampRange}
 */
export function TimestampRangeFromJSON(json: any): TimestampRange {
    return TimestampRangeFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {TimestampRange}
 */
export function TimestampRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimestampRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'from': !exists(json, 'from') ? undefined : GroupedTimestampFromJSON(json['from']),
        'to': !exists(json, 'to') ? undefined : GroupedTimestampFromJSON(json['to']),
        'between': !exists(json, 'between') ? undefined : json['between'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:22 AM
 *
 * @export
 * @param {?(TimestampRange | null)} [value]
 * @returns {*}
 */
export function TimestampRangeToJSON(value?: TimestampRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'from': GroupedTimestampToJSON(value.from),
        'to': GroupedTimestampToJSON(value.to),
        'between': value.between,
    };
}

