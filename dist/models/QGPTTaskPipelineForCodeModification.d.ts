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
 * This task is for modifying a bit of code, IE modify this code to do xyz.
 *
 * This is a class so that we can add optional properties in the future.
 *
 * Note: the snippet && language that needs to be modified should be within the QGPTQuestionInput.relevant
 * @export
 * @interface QGPTTaskPipelineForCodeModification
 */
export interface QGPTTaskPipelineForCodeModification {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeModification
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the instruction that we will use to modify this snippet.
     * @type {string}
     * @memberof QGPTTaskPipelineForCodeModification
     */
    instruction?: string;
}
export declare function QGPTTaskPipelineForCodeModificationFromJSON(json: any): QGPTTaskPipelineForCodeModification;
export declare function QGPTTaskPipelineForCodeModificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeModification;
export declare function QGPTTaskPipelineForCodeModificationToJSON(value?: QGPTTaskPipelineForCodeModification | null): any;
