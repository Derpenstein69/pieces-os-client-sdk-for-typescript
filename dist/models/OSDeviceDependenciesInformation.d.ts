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
import { EmbeddedModelSchema } from './';
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
export declare function OSDeviceDependenciesInformationFromJSON(json: any): OSDeviceDependenciesInformation;
export declare function OSDeviceDependenciesInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceDependenciesInformation;
export declare function OSDeviceDependenciesInformationToJSON(value?: OSDeviceDependenciesInformation | null): any;
