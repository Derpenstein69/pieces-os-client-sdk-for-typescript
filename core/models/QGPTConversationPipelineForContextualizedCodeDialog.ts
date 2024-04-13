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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is for the users that wants to have contextualized code conversations, meaning conversations around code with Context provided.
 *
 * This is a class so that we can add optional properties in the future.
 * @export
 * @interface QGPTConversationPipelineForContextualizedCodeDialog
 */
export interface QGPTConversationPipelineForContextualizedCodeDialog {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTConversationPipelineForContextualizedCodeDialog
     */
    schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the QGPTConversationPipelineForContextualizedCodeDialog interface.
 */
export function instanceOfQGPTConversationPipelineForContextualizedCodeDialog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {*} json
 * @returns {QGPTConversationPipelineForContextualizedCodeDialog}
 */
export function QGPTConversationPipelineForContextualizedCodeDialogFromJSON(json: any): QGPTConversationPipelineForContextualizedCodeDialog {
    return QGPTConversationPipelineForContextualizedCodeDialogFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {QGPTConversationPipelineForContextualizedCodeDialog}
 */
export function QGPTConversationPipelineForContextualizedCodeDialogFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversationPipelineForContextualizedCodeDialog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {?(QGPTConversationPipelineForContextualizedCodeDialog | null)} [value]
 * @returns {*}
 */
export function QGPTConversationPipelineForContextualizedCodeDialogToJSON(value?: QGPTConversationPipelineForContextualizedCodeDialog | null): any {
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

