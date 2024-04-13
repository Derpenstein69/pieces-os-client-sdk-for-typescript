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
import type { FragmentMetadata } from './FragmentMetadata';
import {
    FragmentMetadataFromJSON,
    FragmentMetadataFromJSONTyped,
    FragmentMetadataToJSON,
} from './FragmentMetadata';
import type { TransferableBytes } from './TransferableBytes';
import {
    TransferableBytesFromJSON,
    TransferableBytesFromJSONTyped,
    TransferableBytesToJSON,
} from './TransferableBytes';
import type { TransferableString } from './TransferableString';
import {
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
} from './TransferableString';

/**
 * This will be either a TransferableString or TransferableBytes that represent your fragment. ONLY Pass one or the other DONT pass both or neither.
 * @export
 * @interface SeededFragment
 */
export interface SeededFragment {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededFragment
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TransferableString}
     * @memberof SeededFragment
     */
    string?: TransferableString;
    /**
     *
     * @type {TransferableBytes}
     * @memberof SeededFragment
     */
    bytes?: TransferableBytes;
    /**
     *
     * @type {FragmentMetadata}
     * @memberof SeededFragment
     */
    metadata?: FragmentMetadata;
}

/**
 * Check if a given object implements the SeededFragment interface.
 */
export function instanceOfSeededFragment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededFragment}
 */
export function SeededFragmentFromJSON(json: any): SeededFragment {
    return SeededFragmentFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededFragment}
 */
export function SeededFragmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededFragment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'string': !exists(json, 'string') ? undefined : TransferableStringFromJSON(json['string']),
        'bytes': !exists(json, 'bytes') ? undefined : TransferableBytesFromJSON(json['bytes']),
        'metadata': !exists(json, 'metadata') ? undefined : FragmentMetadataFromJSON(json['metadata']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {?(SeededFragment | null)} [value]
 * @returns {*}
 */
export function SeededFragmentToJSON(value?: SeededFragment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'string': TransferableStringToJSON(value.string),
        'bytes': TransferableBytesToJSON(value.bytes),
        'metadata': FragmentMetadataToJSON(value.metadata),
    };
}

