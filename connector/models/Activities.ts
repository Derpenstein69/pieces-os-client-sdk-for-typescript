/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Activity,
    ActivityFromJSON,
    ActivityFromJSONTyped,
    ActivityToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

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

export function ActivitiesFromJSON(json: any): Activities {
    return ActivitiesFromJSONTyped(json, false);
}

export function ActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ActivityFromJSON)),
    };
}

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

