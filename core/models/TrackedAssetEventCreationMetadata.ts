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
import type { TrackedAssetEventCreationMetadataClipboard } from './TrackedAssetEventCreationMetadataClipboard';
import {
    TrackedAssetEventCreationMetadataClipboardFromJSON,
    TrackedAssetEventCreationMetadataClipboardFromJSONTyped,
    TrackedAssetEventCreationMetadataClipboardToJSON,
} from './TrackedAssetEventCreationMetadataClipboard';
import type { TrackedAssetEventCreationMetadataFile } from './TrackedAssetEventCreationMetadataFile';
import {
    TrackedAssetEventCreationMetadataFileFromJSON,
    TrackedAssetEventCreationMetadataFileFromJSONTyped,
    TrackedAssetEventCreationMetadataFileToJSON,
} from './TrackedAssetEventCreationMetadataFile';

/**
 * Metadata attached to a creation event on an Asset
 * @export
 * @interface TrackedAssetEventCreationMetadata
 */
export interface TrackedAssetEventCreationMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventCreationMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadataClipboard}
     * @memberof TrackedAssetEventCreationMetadata
     */
    clipboard?: TrackedAssetEventCreationMetadataClipboard;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadataFile}
     * @memberof TrackedAssetEventCreationMetadata
     */
    file?: TrackedAssetEventCreationMetadataFile;
}

/**
 * Check if a given object implements the TrackedAssetEventCreationMetadata interface.
 */
export function instanceOfTrackedAssetEventCreationMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackedAssetEventCreationMetadataFromJSON(json: any): TrackedAssetEventCreationMetadata {
    return TrackedAssetEventCreationMetadataFromJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'clipboard': !exists(json, 'clipboard') ? undefined : TrackedAssetEventCreationMetadataClipboardFromJSON(json['clipboard']),
        'file': !exists(json, 'file') ? undefined : TrackedAssetEventCreationMetadataFileFromJSON(json['file']),
    };
}

export function TrackedAssetEventCreationMetadataToJSON(value?: TrackedAssetEventCreationMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'clipboard': TrackedAssetEventCreationMetadataClipboardToJSON(value.clipboard),
        'file': TrackedAssetEventCreationMetadataFileToJSON(value.file),
    };
}

