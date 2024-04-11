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
import type { AssetFilters } from './AssetFilters';
import {
    AssetFiltersFromJSON,
    AssetFiltersFromJSONTyped,
    AssetFiltersToJSON,
} from './AssetFilters';
import type { AssetSearchSpace } from './AssetSearchSpace';
import {
    AssetSearchSpaceFromJSON,
    AssetSearchSpaceFromJSONTyped,
    AssetSearchSpaceToJSON,
} from './AssetSearchSpace';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface AssetsSearchWithFiltersInput
 */
export interface AssetsSearchWithFiltersInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetsSearchWithFiltersInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof AssetsSearchWithFiltersInput
     */
    query?: string;
    /**
     * 
     * @type {AssetSearchSpace}
     * @memberof AssetsSearchWithFiltersInput
     */
    space?: AssetSearchSpace;
    /**
     * 
     * @type {AssetFilters}
     * @memberof AssetsSearchWithFiltersInput
     */
    filters?: AssetFilters;
    /**
     * This is an optional bool that will let us know, if we want to ignore case or not.(default is to allow casing)ie casing:true.
     * @type {boolean}
     * @memberof AssetsSearchWithFiltersInput
     */
    casing?: boolean;
}

/**
 * Check if a given object implements the AssetsSearchWithFiltersInput interface.
 */
export function instanceOfAssetsSearchWithFiltersInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetsSearchWithFiltersInputFromJSON(json: any): AssetsSearchWithFiltersInput {
    return AssetsSearchWithFiltersInputFromJSONTyped(json, false);
}

export function AssetsSearchWithFiltersInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetsSearchWithFiltersInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': !exists(json, 'query') ? undefined : json['query'],
        'space': !exists(json, 'space') ? undefined : AssetSearchSpaceFromJSON(json['space']),
        'filters': !exists(json, 'filters') ? undefined : AssetFiltersFromJSON(json['filters']),
        'casing': !exists(json, 'casing') ? undefined : json['casing'],
    };
}

export function AssetsSearchWithFiltersInputToJSON(value?: AssetsSearchWithFiltersInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'query': value.query,
        'space': AssetSearchSpaceToJSON(value.space),
        'filters': AssetFiltersToJSON(value.filters),
        'casing': value.casing,
    };
}

