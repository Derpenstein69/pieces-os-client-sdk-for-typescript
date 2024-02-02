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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * This task is for explaining a bit of code.
 * 
 * This is a class so that we can add optional properties in the future.
 * @export
 * @interface QGPTTaskPipelineForCodeExplanation
 */
export interface QGPTTaskPipelineForCodeExplanation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeExplanation
     */
    schema?: EmbeddedModelSchema;
}

export function QGPTTaskPipelineForCodeExplanationFromJSON(json: any): QGPTTaskPipelineForCodeExplanation {
    return QGPTTaskPipelineForCodeExplanationFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeExplanationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeExplanation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function QGPTTaskPipelineForCodeExplanationToJSON(value?: QGPTTaskPipelineForCodeExplanation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
    };
}


