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
import type { FileMetadata } from './FileMetadata';
import {
    FileMetadataFromJSON,
    FileMetadataFromJSONTyped,
    FileMetadataToJSON,
} from './FileMetadata';
import type { TransferableBytes } from './TransferableBytes';
import {
    TransferableBytesFromJSON,
    TransferableBytesFromJSONTyped,
    TransferableBytesToJSON,
} from './TransferableBytes';
import type { TransferableString } from './TransferableString';
import {
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
} from './TransferableString';

/**
 * This is a base model for a File(Seeded).
 * 
 * We will Throw an Error, if the text and the bytes properties are both null && if both the text and bytes properties are both defined. Ensure that you pass either a text or bytes property.
 * 
 * bytes and string are both optionl but, if both are null or both are defined we will throw an error. So You will be required to pass one or the other, NOT both.
 * @export
 * @interface SeededFile
 */
export interface SeededFile {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededFile
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TransferableBytes}
     * @memberof SeededFile
     */
    bytes?: TransferableBytes;
    /**
     * 
     * @type {TransferableString}
     * @memberof SeededFile
     */
    string?: TransferableString;
    /**
     * 
     * @type {FileMetadata}
     * @memberof SeededFile
     */
    metadata?: FileMetadata;
}

/**
 * Check if a given object implements the SeededFile interface.
 */
export function instanceOfSeededFile(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SeededFileFromJSON(json: any): SeededFile {
    return SeededFileFromJSONTyped(json, false);
}

export function SeededFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'bytes': !exists(json, 'bytes') ? undefined : TransferableBytesFromJSON(json['bytes']),
        'string': !exists(json, 'string') ? undefined : TransferableStringFromJSON(json['string']),
        'metadata': !exists(json, 'metadata') ? undefined : FileMetadataFromJSON(json['metadata']),
    };
}

export function SeededFileToJSON(value?: SeededFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'bytes': TransferableBytesToJSON(value.bytes),
        'string': TransferableStringToJSON(value.string),
        'metadata': FileMetadataToJSON(value.metadata),
    };
}

