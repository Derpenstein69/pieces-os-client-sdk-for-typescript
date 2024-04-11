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
import type { SeededDiscoverableRelatedTag } from './SeededDiscoverableRelatedTag';
import {
    SeededDiscoverableRelatedTagFromJSON,
    SeededDiscoverableRelatedTagFromJSONTyped,
    SeededDiscoverableRelatedTagToJSON,
} from './SeededDiscoverableRelatedTag';

/**
 * 
 * @export
 * @interface SeededDiscoverableRelatedTags
 */
export interface SeededDiscoverableRelatedTags {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableRelatedTags
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SeededDiscoverableRelatedTag>}
     * @memberof SeededDiscoverableRelatedTags
     */
    iterable: Array<SeededDiscoverableRelatedTag>;
    /**
     * This is the application id that this request is sent from.
     * @type {string}
     * @memberof SeededDiscoverableRelatedTags
     */
    application: string;
}

/**
 * Check if a given object implements the SeededDiscoverableRelatedTags interface.
 */
export function instanceOfSeededDiscoverableRelatedTags(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;
    isInstance = isInstance && "application" in value;

    return isInstance;
}

export function SeededDiscoverableRelatedTagsFromJSON(json: any): SeededDiscoverableRelatedTags {
    return SeededDiscoverableRelatedTagsFromJSONTyped(json, false);
}

export function SeededDiscoverableRelatedTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableRelatedTags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SeededDiscoverableRelatedTagFromJSON)),
        'application': json['application'],
    };
}

export function SeededDiscoverableRelatedTagsToJSON(value?: SeededDiscoverableRelatedTags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SeededDiscoverableRelatedTagToJSON)),
        'application': value.application,
    };
}

