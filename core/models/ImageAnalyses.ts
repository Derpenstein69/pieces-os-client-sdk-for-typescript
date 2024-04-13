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
import type { ImageAnalysis } from './ImageAnalysis';
import {
    ImageAnalysisFromJSON,
    ImageAnalysisFromJSONTyped,
    ImageAnalysisToJSON,
} from './ImageAnalysis';

/**
 *
 * @export
 * @interface ImageAnalyses
 */
export interface ImageAnalyses {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ImageAnalyses
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ImageAnalysis>}
     * @memberof ImageAnalyses
     */
    iterable: Array<ImageAnalysis>;
}

/**
 * Check if a given object implements the ImageAnalyses interface.
 */
export function instanceOfImageAnalyses(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @returns {ImageAnalyses}
 */
export function ImageAnalysesFromJSON(json: any): ImageAnalyses {
    return ImageAnalysesFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ImageAnalyses}
 */
export function ImageAnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageAnalyses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ImageAnalysisFromJSON)),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {?(ImageAnalyses | null)} [value]
 * @returns {*}
 */
export function ImageAnalysesToJSON(value?: ImageAnalyses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ImageAnalysisToJSON)),
    };
}

