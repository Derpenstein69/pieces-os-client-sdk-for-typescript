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
 * This is a String representaion of any of these changes.
 *
 * [NOT IMPLEMENTED] base64, base64_url, data_url
 * [IMPLEMENTED] raw
 * @export
 * @interface TransferableString
 */
export interface TransferableString {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TransferableString
     */
    schema?: EmbeddedModelSchema;
    /**
     * IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    raw?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    base64?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    base64Url?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    dataUrl?: string;
}

/**
 * Check if a given object implements the TransferableString interface.
 */
export function instanceOfTransferableString(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {*} json
 * @returns {TransferableString}
 */
export function TransferableStringFromJSON(json: any): TransferableString {
    return TransferableStringFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {TransferableString}
 */
export function TransferableStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferableString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'raw': !exists(json, 'raw') ? undefined : json['raw'],
        'base64': !exists(json, 'base64') ? undefined : json['base64'],
        'base64Url': !exists(json, 'base64_url') ? undefined : json['base64_url'],
        'dataUrl': !exists(json, 'data_url') ? undefined : json['data_url'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:20 AM
 *
 * @export
 * @param {?(TransferableString | null)} [value]
 * @returns {*}
 */
export function TransferableStringToJSON(value?: TransferableString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'raw': value.raw,
        'base64': value.base64,
        'base64_url': value.base64Url,
        'data_url': value.dataUrl,
    };
}

