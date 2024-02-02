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
import { EmbeddedModelSchema, TLPCodeFragmentReclassificationUpdates } from './';
/**
 * Model for ML big query Reclassification.
 * @export
 * @interface TLPCodeFragmentReclassification
 */
export interface TLPCodeFragmentReclassification {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentReclassification
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    asset: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    model: string;
    /**
     *
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    created: string;
    /**
     *
     * @type {TLPCodeFragmentReclassificationUpdates}
     * @memberof TLPCodeFragmentReclassification
     */
    updates: TLPCodeFragmentReclassificationUpdates;
    /**
     * this is the user that is reclassifying
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    user: string;
    /**
     * this is the application is which this is from.
     * @type {string}
     * @memberof TLPCodeFragmentReclassification
     */
    context: string;
}
export declare function TLPCodeFragmentReclassificationFromJSON(json: any): TLPCodeFragmentReclassification;
export declare function TLPCodeFragmentReclassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentReclassification;
export declare function TLPCodeFragmentReclassificationToJSON(value?: TLPCodeFragmentReclassification | null): any;
