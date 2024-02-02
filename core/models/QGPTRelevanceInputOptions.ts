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
    QGPTPromptPipeline,
    QGPTPromptPipelineFromJSON,
    QGPTPromptPipelineFromJSONTyped,
    QGPTPromptPipelineToJSON,
} from './';

/**
 * 
 * @export
 * @interface QGPTRelevanceInputOptions
 */
export interface QGPTRelevanceInputOptions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTRelevanceInputOptions
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is an optional boolen that will tell us to use our entire snippet database as the sample.
     * @type {boolean}
     * @memberof QGPTRelevanceInputOptions
     */
    database?: boolean;
    /**
     * This is an optional boolean, that will let the serve know if you want to combine the 2 endpointsboth relevance && the Question endpoint to return the final results.
     * @type {boolean}
     * @memberof QGPTRelevanceInputOptions
     */
    question?: boolean;
    /**
     * 
     * @type {QGPTPromptPipeline}
     * @memberof QGPTRelevanceInputOptions
     */
    pipeline?: QGPTPromptPipeline;
}

export function QGPTRelevanceInputOptionsFromJSON(json: any): QGPTRelevanceInputOptions {
    return QGPTRelevanceInputOptionsFromJSONTyped(json, false);
}

export function QGPTRelevanceInputOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTRelevanceInputOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'database': !exists(json, 'database') ? undefined : json['database'],
        'question': !exists(json, 'question') ? undefined : json['question'],
        'pipeline': !exists(json, 'pipeline') ? undefined : QGPTPromptPipelineFromJSON(json['pipeline']),
    };
}

export function QGPTRelevanceInputOptionsToJSON(value?: QGPTRelevanceInputOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'database': value.database,
        'question': value.question,
        'pipeline': QGPTPromptPipelineToJSON(value.pipeline),
    };
}


