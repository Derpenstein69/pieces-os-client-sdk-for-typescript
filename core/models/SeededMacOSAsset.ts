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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * An Seeded Asset specific to MacOS which takes in a Value, and Application
 * @export
 * @interface SeededMacOSAsset
 */
export interface SeededMacOSAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededMacOSAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Application}
     * @memberof SeededMacOSAsset
     */
    application?: Application;
    /**
     * The value of the text that you want to save as an asset.
     * @type {string}
     * @memberof SeededMacOSAsset
     */
    value: string;
}

/**
 * Check if a given object implements the SeededMacOSAsset interface.
 */
export function instanceOfSeededMacOSAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededMacOSAsset}
 */
export function SeededMacOSAssetFromJSON(json: any): SeededMacOSAsset {
    return SeededMacOSAssetFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededMacOSAsset}
 */
export function SeededMacOSAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededMacOSAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': !exists(json, 'application') ? undefined : ApplicationFromJSON(json['application']),
        'value': json['value'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {?(SeededMacOSAsset | null)} [value]
 * @returns {*}
 */
export function SeededMacOSAssetToJSON(value?: SeededMacOSAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'application': ApplicationToJSON(value.application),
        'value': value.value,
    };
}

