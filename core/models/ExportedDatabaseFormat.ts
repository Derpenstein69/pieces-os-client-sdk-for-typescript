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
 *
 * @export
 * @interface ExportedDatabaseFormat
 */
export interface ExportedDatabaseFormat {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ExportedDatabaseFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the id of the format
     * @type {string}
     * @memberof ExportedDatabaseFormat
     */
    id: string;
    /**
     * these are bytes.
     * @type {Array<number>}
     * @memberof ExportedDatabaseFormat
     */
    raw: Array<number>;
}

/**
 * Check if a given object implements the ExportedDatabaseFormat interface.
 */
export function instanceOfExportedDatabaseFormat(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "raw" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @returns {ExportedDatabaseFormat}
 */
export function ExportedDatabaseFormatFromJSON(json: any): ExportedDatabaseFormat {
    return ExportedDatabaseFormatFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ExportedDatabaseFormat}
 */
export function ExportedDatabaseFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedDatabaseFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'raw': json['raw'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {?(ExportedDatabaseFormat | null)} [value]
 * @returns {*}
 */
export function ExportedDatabaseFormatToJSON(value?: ExportedDatabaseFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'raw': value.raw,
    };
}

