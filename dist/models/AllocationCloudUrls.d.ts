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
import { AllocationCloudUrl, EmbeddedModelSchema } from './';
/**
 * you will have at minimum 2 urls,
 *
 * base: is the default url of your cloud.
 *
 * id: is the branded url, uuid.pieces.cloud.
 *
 * (optional) vanity: is the custom branded url, mark.pieces.cloud
 * @export
 * @interface AllocationCloudUrls
 */
export interface AllocationCloudUrls {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AllocationCloudUrls
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {AllocationCloudUrl}
     * @memberof AllocationCloudUrls
     */
    base: AllocationCloudUrl;
    /**
     *
     * @type {AllocationCloudUrl}
     * @memberof AllocationCloudUrls
     */
    id: AllocationCloudUrl;
    /**
     *
     * @type {AllocationCloudUrl}
     * @memberof AllocationCloudUrls
     */
    vanity?: AllocationCloudUrl;
}
export declare function AllocationCloudUrlsFromJSON(json: any): AllocationCloudUrls;
export declare function AllocationCloudUrlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationCloudUrls;
export declare function AllocationCloudUrlsToJSON(value?: AllocationCloudUrls | null): any;
