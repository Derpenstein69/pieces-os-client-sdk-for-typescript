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
import { EmbeddedModelSchema, FlattenedTag } from './';
/**
 * [DAG Safe] version of a Tag Model.
 * @export
 * @interface ReferencedTag
 */
export interface ReferencedTag {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedTag
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedTag
     */
    id: string;
    /**
     *
     * @type {FlattenedTag}
     * @memberof ReferencedTag
     */
    reference?: FlattenedTag;
}
export declare function ReferencedTagFromJSON(json: any): ReferencedTag;
export declare function ReferencedTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedTag;
export declare function ReferencedTagToJSON(value?: ReferencedTag | null): any;