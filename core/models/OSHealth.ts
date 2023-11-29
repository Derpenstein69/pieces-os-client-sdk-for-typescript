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
} from './index';

/**
 * This is a specific model for the health of our OS Server.
 * @export
 * @interface OSHealth
 */
export interface OSHealth {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSHealth
     */
    schema?: EmbeddedModelSchema;
    /**
     * id of your OS
     * @type {string}
     * @memberof OSHealth
     */
    id: string;
    /**
     * this is the current OS version
     * @type {string}
     * @memberof OSHealth
     */
    version: string;
}

export function OSHealthFromJSON(json: any): OSHealth {
    return OSHealthFromJSONTyped(json, false);
}

export function OSHealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSHealth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'version': json['version'],
    };
}

export function OSHealthToJSON(value?: OSHealth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'version': value.version,
    };
}

