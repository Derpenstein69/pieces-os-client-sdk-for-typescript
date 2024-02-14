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
import { EmbeddedModelSchema, TransferableBytes, TransferableString } from './';
/**
 * This describes a FileFormat. If you need meta data you can get all of that from your format wrapper.
 * @export
 * @interface FileFormat
 */
export interface FileFormat {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FileFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TransferableBytes}
     * @memberof FileFormat
     */
    bytes?: TransferableBytes;
    /**
     *
     * @type {TransferableString}
     * @memberof FileFormat
     */
    string?: TransferableString;
}
export declare function FileFormatFromJSON(json: any): FileFormat;
export declare function FileFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileFormat;
export declare function FileFormatToJSON(value?: FileFormat | null): any;
