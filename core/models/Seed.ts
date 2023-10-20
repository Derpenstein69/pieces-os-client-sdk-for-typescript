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
    SeededAsset,
    SeededAssetFromJSON,
    SeededAssetFromJSONTyped,
    SeededAssetToJSON,
} from './';

/**
 * A seed Model used to wrap a format or asset
 * @export
 * @interface Seed
 */
export interface Seed {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Seed
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededAsset}
     * @memberof Seed
     */
    asset?: SeededAsset;
    /**
     * 
     * @type {string}
     * @memberof Seed
     */
    type: SeedTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum SeedTypeEnum {
    Format = 'SEEDED_FORMAT',
    Asset = 'SEEDED_ASSET'
}

export function SeedFromJSON(json: any): Seed {
    return SeedFromJSONTyped(json, false);
}

export function SeedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : SeededAssetFromJSON(json['asset']),
        'type': json['type'],
    };
}

export function SeedToJSON(value?: Seed | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': SeededAssetToJSON(value.asset),
        'type': value.type,
    };
}

