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
import { EmbeddedModelSchema, GroupedTimestamp } from './';
/**
 * if you want a range between you can use from && to.
 *
 * if you want anything before, use to and NO from.
 *
 * if you want anything after, use from and NO to.
 * @export
 * @interface AssetFilterTimestamp
 */
export interface AssetFilterTimestamp {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilterTimestamp
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof AssetFilterTimestamp
     */
    from?: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof AssetFilterTimestamp
     */
    to?: GroupedTimestamp;
    /**
     *
     * @type {boolean}
     * @memberof AssetFilterTimestamp
     */
    between?: boolean;
}
export declare function AssetFilterTimestampFromJSON(json: any): AssetFilterTimestamp;
export declare function AssetFilterTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilterTimestamp;
export declare function AssetFilterTimestampToJSON(value?: AssetFilterTimestamp | null): any;
