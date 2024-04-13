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
import type { Activity } from './Activity';
import {
    ActivityFromJSON,
    ActivityFromJSONTyped,
    ActivityToJSON,
} from './Activity';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is the plural of activity
 * @export
 * @interface Activities
 */
export interface Activities {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Activities
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Activity>}
     * @memberof Activities
     */
    iterable: Array<Activity>;
}

/**
 * Check if a given object implements the Activities interface.
 */
export function instanceOfActivities(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {*} json
 * @returns {Activities}
 */
export function ActivitiesFromJSON(json: any): Activities {
    return ActivitiesFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {Activities}
 */
export function ActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ActivityFromJSON)),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {?(Activities | null)} [value]
 * @returns {*}
 */
export function ActivitiesToJSON(value?: Activities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ActivityToJSON)),
    };
}

