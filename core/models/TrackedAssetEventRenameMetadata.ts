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
} from './';

/**
 * This will give specific metadata need to determine what the rename was to/from.
 * @export
 * @interface TrackedAssetEventRenameMetadata
 */
export interface TrackedAssetEventRenameMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventRenameMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof TrackedAssetEventRenameMetadata
     */
    previous: string;
    /**
     * 
     * @type {string}
     * @memberof TrackedAssetEventRenameMetadata
     */
    current: string;
}

export function TrackedAssetEventRenameMetadataFromJSON(json: any): TrackedAssetEventRenameMetadata {
    return TrackedAssetEventRenameMetadataFromJSONTyped(json, false);
}

export function TrackedAssetEventRenameMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventRenameMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'previous': json['previous'],
        'current': json['current'],
    };
}

export function TrackedAssetEventRenameMetadataToJSON(value?: TrackedAssetEventRenameMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'previous': value.previous,
        'current': value.current,
    };
}


