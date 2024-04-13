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
import type { SeededAssetMetadata } from './SeededAssetMetadata';
import {
    SeededAssetMetadataFromJSON,
    SeededAssetMetadataFromJSONTyped,
    SeededAssetMetadataToJSON,
} from './SeededAssetMetadata';
import type { SeededFormat } from './SeededFormat';
import {
    SeededFormatFromJSON,
    SeededFormatFromJSONTyped,
    SeededFormatToJSON,
} from './SeededFormat';

/**
 * A generic model to use with the Connector API that requires little to no additional information about the current application.
 * @export
 * @interface SeededConnectorAsset
 */
export interface SeededConnectorAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededAssetMetadata}
     * @memberof SeededConnectorAsset
     */
    metadata?: SeededAssetMetadata;
    /**
     *
     * @type {SeededFormat}
     * @memberof SeededConnectorAsset
     */
    format: SeededFormat;
}

/**
 * Check if a given object implements the SeededConnectorAsset interface.
 */
export function instanceOfSeededConnectorAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "format" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededConnectorAsset}
 */
export function SeededConnectorAssetFromJSON(json: any): SeededConnectorAsset {
    return SeededConnectorAssetFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededConnectorAsset}
 */
export function SeededConnectorAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'metadata': !exists(json, 'metadata') ? undefined : SeededAssetMetadataFromJSON(json['metadata']),
        'format': SeededFormatFromJSON(json['format']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {?(SeededConnectorAsset | null)} [value]
 * @returns {*}
 */
export function SeededConnectorAssetToJSON(value?: SeededConnectorAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'metadata': SeededAssetMetadataToJSON(value.metadata),
        'format': SeededFormatToJSON(value.format),
    };
}

