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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * This will let us know specific hardware information related to the CPU.
 * @export
 * @interface OSDeviceCPUHardwareInformation
 */
export interface OSDeviceCPUHardwareInformation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSDeviceCPUHardwareInformation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof OSDeviceCPUHardwareInformation
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof OSDeviceCPUHardwareInformation
     */
    memory?: number;
}

export function OSDeviceCPUHardwareInformationFromJSON(json: any): OSDeviceCPUHardwareInformation {
    return OSDeviceCPUHardwareInformationFromJSONTyped(json, false);
}

export function OSDeviceCPUHardwareInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceCPUHardwareInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'memory': !exists(json, 'memory') ? undefined : json['memory'],
    };
}

export function OSDeviceCPUHardwareInformationToJSON(value?: OSDeviceCPUHardwareInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'name': value.name,
        'memory': value.memory,
    };
}


