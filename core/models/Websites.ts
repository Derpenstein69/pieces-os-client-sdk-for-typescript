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
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { Website } from './Website';
import {
    WebsiteFromJSON,
    WebsiteFromJSONTyped,
    WebsiteToJSON,
} from './Website';

/**
 * This is a specific model for related websites to an asset.
 * @export
 * @interface Websites
 */
export interface Websites {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Websites
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Website>}
     * @memberof Websites
     */
    iterable: Array<Website>;
    /**
     * This is a Map<String, int> where the the key is an website id.
     * @type {{ [key: string]: number; }}
     * @memberof Websites
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Websites
     */
    score?: Score;
}

/**
 * Check if a given object implements the Websites interface.
 */
export function instanceOfWebsites(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function WebsitesFromJSON(json: any): Websites {
    return WebsitesFromJSONTyped(json, false);
}

export function WebsitesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Websites {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(WebsiteFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function WebsitesToJSON(value?: Websites | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(WebsiteToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

