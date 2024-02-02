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
import { EmbeddedModelSchema, GraphicalOCRDescriptiveStatisticsConfidence } from './';
/**
 * Model for monitoring and evaluating the OCR feature
 * @export
 * @interface GraphicalOCRDescriptiveStatistics
 */
export interface GraphicalOCRDescriptiveStatistics {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    asset: string;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    user: string;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    model: string;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    created: string;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    os: string;
    /**
     *
     * @type {GraphicalOCRDescriptiveStatisticsConfidence}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    confidence: GraphicalOCRDescriptiveStatisticsConfidence;
    /**
     *
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    duration: string;
}
export declare function GraphicalOCRDescriptiveStatisticsFromJSON(json: any): GraphicalOCRDescriptiveStatistics;
export declare function GraphicalOCRDescriptiveStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRDescriptiveStatistics;
export declare function GraphicalOCRDescriptiveStatisticsToJSON(value?: GraphicalOCRDescriptiveStatistics | null): any;
