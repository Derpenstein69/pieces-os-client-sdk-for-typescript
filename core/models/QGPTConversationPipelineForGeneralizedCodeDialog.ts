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
 * This is for the users that wants to have generalized code conversations without any context.
 * 
 * This is a class so that we can add optional properties in the future.
 * @export
 * @interface QGPTConversationPipelineForGeneralizedCodeDialog
 */
export interface QGPTConversationPipelineForGeneralizedCodeDialog {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTConversationPipelineForGeneralizedCodeDialog
     */
    schema?: EmbeddedModelSchema;
}

export function QGPTConversationPipelineForGeneralizedCodeDialogFromJSON(json: any): QGPTConversationPipelineForGeneralizedCodeDialog {
    return QGPTConversationPipelineForGeneralizedCodeDialogFromJSONTyped(json, false);
}

export function QGPTConversationPipelineForGeneralizedCodeDialogFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversationPipelineForGeneralizedCodeDialog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function QGPTConversationPipelineForGeneralizedCodeDialogToJSON(value?: QGPTConversationPipelineForGeneralizedCodeDialog | null): any {
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


