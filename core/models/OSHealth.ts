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

/**
 * Check if a given object implements the OSHealth interface.
 */
export function instanceOfOSHealth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {*} json
 * @returns {OSHealth}
 */
export function OSHealthFromJSON(json: any): OSHealth {
    return OSHealthFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {OSHealth}
 */
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

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {?(OSHealth | null)} [value]
 * @returns {*}
 */
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

