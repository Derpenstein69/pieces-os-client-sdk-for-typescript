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
import { EmbeddedModelSchema, OSDeviceGPUHardwareCapabilitiesInformation } from './';
/**
 * This will let us know specific hardware information related to the GPU.
 * @export
 * @interface OSDeviceGPUHardwareInformation
 */
export interface OSDeviceGPUHardwareInformation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof OSDeviceGPUHardwareInformation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof OSDeviceGPUHardwareInformation
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof OSDeviceGPUHardwareInformation
     */
    memory?: number;
    /**
     *
     * @type {OSDeviceGPUHardwareCapabilitiesInformation}
     * @memberof OSDeviceGPUHardwareInformation
     */
    capabilities?: OSDeviceGPUHardwareCapabilitiesInformation;
}
export declare function OSDeviceGPUHardwareInformationFromJSON(json: any): OSDeviceGPUHardwareInformation;
export declare function OSDeviceGPUHardwareInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceGPUHardwareInformation;
export declare function OSDeviceGPUHardwareInformationToJSON(value?: OSDeviceGPUHardwareInformation | null): any;
