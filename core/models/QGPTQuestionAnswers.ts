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
import type { QGPTQuestionAnswer } from './QGPTQuestionAnswer';
import {
    QGPTQuestionAnswerFromJSON,
    QGPTQuestionAnswerFromJSONTyped,
    QGPTQuestionAnswerToJSON,
} from './QGPTQuestionAnswer';

/**
 * This is the plural of QGPTQuestionAnswer
 * @export
 * @interface QGPTQuestionAnswers
 */
export interface QGPTQuestionAnswers {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTQuestionAnswers
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<QGPTQuestionAnswer>}
     * @memberof QGPTQuestionAnswers
     */
    iterable: Array<QGPTQuestionAnswer>;
}

/**
 * Check if a given object implements the QGPTQuestionAnswers interface.
 */
export function instanceOfQGPTQuestionAnswers(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {*} json
 * @returns {QGPTQuestionAnswers}
 */
export function QGPTQuestionAnswersFromJSON(json: any): QGPTQuestionAnswers {
    return QGPTQuestionAnswersFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {QGPTQuestionAnswers}
 */
export function QGPTQuestionAnswersFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTQuestionAnswers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(QGPTQuestionAnswerFromJSON)),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:31 AM
 *
 * @export
 * @param {?(QGPTQuestionAnswers | null)} [value]
 * @returns {*}
 */
export function QGPTQuestionAnswersToJSON(value?: QGPTQuestionAnswers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(QGPTQuestionAnswerToJSON)),
    };
}

