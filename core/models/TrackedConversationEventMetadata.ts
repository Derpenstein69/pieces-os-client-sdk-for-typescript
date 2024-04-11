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
import type { TrackedConversationEventRenameMetadata } from './TrackedConversationEventRenameMetadata';
import {
    TrackedConversationEventRenameMetadataFromJSON,
    TrackedConversationEventRenameMetadataFromJSONTyped,
    TrackedConversationEventRenameMetadataToJSON,
} from './TrackedConversationEventRenameMetadata';

/**
 * This is the metadata for the the ConversationEvent
 * @export
 * @interface TrackedConversationEventMetadata
 */
export interface TrackedConversationEventMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedConversationEventMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TrackedConversationEventRenameMetadata}
     * @memberof TrackedConversationEventMetadata
     */
    rename?: TrackedConversationEventRenameMetadata;
}

/**
 * Check if a given object implements the TrackedConversationEventMetadata interface.
 */
export function instanceOfTrackedConversationEventMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackedConversationEventMetadataFromJSON(json: any): TrackedConversationEventMetadata {
    return TrackedConversationEventMetadataFromJSONTyped(json, false);
}

export function TrackedConversationEventMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedConversationEventMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'rename': !exists(json, 'rename') ? undefined : TrackedConversationEventRenameMetadataFromJSON(json['rename']),
    };
}

export function TrackedConversationEventMetadataToJSON(value?: TrackedConversationEventMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'rename': TrackedConversationEventRenameMetadataToJSON(value.rename),
    };
}

