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
import type { AssetFilter } from './AssetFilter';
import {
    AssetFilterFromJSON,
    AssetFilterFromJSONTyped,
    AssetFilterToJSON,
} from './AssetFilter';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FilterOperationTypeEnum } from './FilterOperationTypeEnum';
import {
    FilterOperationTypeEnumFromJSON,
    FilterOperationTypeEnumFromJSONTyped,
    FilterOperationTypeEnumToJSON,
} from './FilterOperationTypeEnum';

/**
 * 
 * @export
 * @interface AssetFilters
 */
export interface AssetFilters {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilters
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<AssetFilter>}
     * @memberof AssetFilters
     */
    iterable: Array<AssetFilter>;
    /**
     * 
     * @type {FilterOperationTypeEnum}
     * @memberof AssetFilters
     */
    type?: FilterOperationTypeEnum;
}

/**
 * Check if a given object implements the AssetFilters interface.
 */
export function instanceOfAssetFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function AssetFiltersFromJSON(json: any): AssetFilters {
    return AssetFiltersFromJSONTyped(json, false);
}

export function AssetFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(AssetFilterFromJSON)),
        'type': !exists(json, 'type') ? undefined : FilterOperationTypeEnumFromJSON(json['type']),
    };
}

export function AssetFiltersToJSON(value?: AssetFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(AssetFilterToJSON)),
        'type': FilterOperationTypeEnumToJSON(value.type),
    };
}

