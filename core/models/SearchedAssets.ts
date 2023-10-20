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
    SearchedAsset,
    SearchedAssetFromJSON,
    SearchedAssetFromJSONTyped,
    SearchedAssetToJSON,
} from './';

/**
 * This is a modle that will return fro mthe search endpoint that will just contain an array of assets!
 * @export
 * @interface SearchedAssets
 */
export interface SearchedAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedAsset>}
     * @memberof SearchedAssets
     */
    iterable: Array<SearchedAsset>;
    /**
     * the number of fuzzy/suggested search results.
     * @type {number}
     * @memberof SearchedAssets
     */
    suggested: number;
    /**
     * the number of exact results
     * @type {number}
     * @memberof SearchedAssets
     */
    exact: number;
}

export function SearchedAssetsFromJSON(json: any): SearchedAssets {
    return SearchedAssetsFromJSONTyped(json, false);
}

export function SearchedAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAssets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedAssetFromJSON)),
        'suggested': json['suggested'],
        'exact': json['exact'],
    };
}

export function SearchedAssetsToJSON(value?: SearchedAssets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SearchedAssetToJSON)),
        'suggested': value.suggested,
        'exact': value.exact,
    };
}

