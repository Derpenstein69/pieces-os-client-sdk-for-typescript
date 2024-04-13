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
import type { OSDeviceCPUHardwareInformation } from './OSDeviceCPUHardwareInformation';
import {
    OSDeviceCPUHardwareInformationFromJSON,
    OSDeviceCPUHardwareInformationFromJSONTyped,
    OSDeviceCPUHardwareInformationToJSON,
} from './OSDeviceCPUHardwareInformation';
import type { OSDeviceGPUHardwareInformation } from './OSDeviceGPUHardwareInformation';
import {
    OSDeviceGPUHardwareInformationFromJSON,
    OSDeviceGPUHardwareInformationFromJSONTyped,
    OSDeviceGPUHardwareInformationToJSON,
} from './OSDeviceGPUHardwareInformation';

/**
 * this will let us know specific hardware information
 * @export
 * @interface OSDeviceHardwareInformation
 */
export interface OSDeviceHardwareInformation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof OSDeviceHardwareInformation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {OSDeviceCPUHardwareInformation}
     * @memberof OSDeviceHardwareInformation
     */
    cpu?: OSDeviceCPUHardwareInformation;
    /**
     *
     * @type {OSDeviceGPUHardwareInformation}
     * @memberof OSDeviceHardwareInformation
     */
    gpu?: OSDeviceGPUHardwareInformation;
}

/**
 * Check if a given object implements the OSDeviceHardwareInformation interface.
 */
export function instanceOfOSDeviceHardwareInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:33 AM
 *
 * @export
 * @param {*} json
 * @returns {OSDeviceHardwareInformation}
 */
export function OSDeviceHardwareInformationFromJSON(json: any): OSDeviceHardwareInformation {
    return OSDeviceHardwareInformationFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:33 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {OSDeviceHardwareInformation}
 */
export function OSDeviceHardwareInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceHardwareInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'cpu': !exists(json, 'cpu') ? undefined : OSDeviceCPUHardwareInformationFromJSON(json['cpu']),
        'gpu': !exists(json, 'gpu') ? undefined : OSDeviceGPUHardwareInformationFromJSON(json['gpu']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:33 AM
 *
 * @export
 * @param {?(OSDeviceHardwareInformation | null)} [value]
 * @returns {*}
 */
export function OSDeviceHardwareInformationToJSON(value?: OSDeviceHardwareInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'cpu': OSDeviceCPUHardwareInformationToJSON(value.cpu),
        'gpu': OSDeviceGPUHardwareInformationToJSON(value.gpu),
    };
}

