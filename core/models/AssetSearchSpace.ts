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
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';

/**
 * This is provided search spaces, This is a provided assets, TODO in the future we might want to add seeds.
 * @export
 * @interface AssetSearchSpace
 */
export interface AssetSearchSpace {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AssetSearchSpace
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof AssetSearchSpace
     */
    identifers: FlattenedAssets;
}

/**
 * Check if a given object implements the AssetSearchSpace interface.
 */
export function instanceOfAssetSearchSpace(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifers" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @returns {AssetSearchSpace}
 */
export function AssetSearchSpaceFromJSON(json: any): AssetSearchSpace {
    return AssetSearchSpaceFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {AssetSearchSpace}
 */
export function AssetSearchSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetSearchSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'identifers': FlattenedAssetsFromJSON(json['identifers']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {?(AssetSearchSpace | null)} [value]
 * @returns {*}
 */
export function AssetSearchSpaceToJSON(value?: AssetSearchSpace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'identifers': FlattenedAssetsToJSON(value.identifers),
    };
}

