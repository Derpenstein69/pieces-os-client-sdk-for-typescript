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
    Share,
    ShareFromJSON,
    ShareFromJSONTyped,
    ShareToJSON,
} from './';

/**
 * this is just an iterable of our individual share models.
 * @export
 * @interface Shares
 */
export interface Shares {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Shares
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is just an iterable of our individual share models.
     * @type {Array<Share>}
     * @memberof Shares
     */
    iterable: Array<Share>;
}

export function SharesFromJSON(json: any): Shares {
    return SharesFromJSONTyped(json, false);
}

export function SharesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Shares {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ShareFromJSON)),
    };
}

export function SharesToJSON(value?: Shares | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ShareToJSON)),
    };
}

