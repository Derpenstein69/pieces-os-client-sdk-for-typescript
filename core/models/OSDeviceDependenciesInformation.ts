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
 * This will lets us know about specific dependencies that we are looking for on the device that are needed for specific tasks.
 * @export
 * @interface OSDeviceDependenciesInformation
 */
export interface OSDeviceDependenciesInformation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSDeviceDependenciesInformation
     */
    schema?: EmbeddedModelSchema;
    /**
     * This will let us know if vulkan is present = true or not there ==false
     * @type {boolean}
     * @memberof OSDeviceDependenciesInformation
     */
    vulkan: boolean;
}

/**
 * Check if a given object implements the OSDeviceDependenciesInformation interface.
 */
export function instanceOfOSDeviceDependenciesInformation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vulkan" in value;

    return isInstance;
}

export function OSDeviceDependenciesInformationFromJSON(json: any): OSDeviceDependenciesInformation {
    return OSDeviceDependenciesInformationFromJSONTyped(json, false);
}

export function OSDeviceDependenciesInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceDependenciesInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'vulkan': json['vulkan'],
    };
}

export function OSDeviceDependenciesInformationToJSON(value?: OSDeviceDependenciesInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'vulkan': value.vulkan,
    };
}

