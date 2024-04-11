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
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './ReferencedConversation';
import type { TrackedConversationEventIdentifierDescriptionPairs } from './TrackedConversationEventIdentifierDescriptionPairs';
import {
    TrackedConversationEventIdentifierDescriptionPairsFromJSON,
    TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped,
    TrackedConversationEventIdentifierDescriptionPairsToJSON,
} from './TrackedConversationEventIdentifierDescriptionPairs';
import type { TrackedConversationEventMetadata } from './TrackedConversationEventMetadata';
import {
    TrackedConversationEventMetadataFromJSON,
    TrackedConversationEventMetadataFromJSONTyped,
    TrackedConversationEventMetadataToJSON,
} from './TrackedConversationEventMetadata';

/**
 * This is a pre-created(seed) TrackedConversationEvent
 * @export
 * @interface SeededTrackedConversationEvent
 */
export interface SeededTrackedConversationEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedConversationEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TrackedConversationEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedConversationEvent
     */
    identifierDescriptionPair: TrackedConversationEventIdentifierDescriptionPairs;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof SeededTrackedConversationEvent
     */
    conversation: ReferencedConversation;
    /**
     * 
     * @type {TrackedConversationEventMetadata}
     * @memberof SeededTrackedConversationEvent
     */
    metadata?: TrackedConversationEventMetadata;
}

/**
 * Check if a given object implements the SeededTrackedConversationEvent interface.
 */
export function instanceOfSeededTrackedConversationEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifierDescriptionPair" in value;
    isInstance = isInstance && "conversation" in value;

    return isInstance;
}

export function SeededTrackedConversationEventFromJSON(json: any): SeededTrackedConversationEvent {
    return SeededTrackedConversationEventFromJSONTyped(json, false);
}

export function SeededTrackedConversationEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedConversationEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'identifierDescriptionPair': TrackedConversationEventIdentifierDescriptionPairsFromJSON(json['identifier_description_pair']),
        'conversation': ReferencedConversationFromJSON(json['conversation']),
        'metadata': !exists(json, 'metadata') ? undefined : TrackedConversationEventMetadataFromJSON(json['metadata']),
    };
}

export function SeededTrackedConversationEventToJSON(value?: SeededTrackedConversationEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'identifier_description_pair': TrackedConversationEventIdentifierDescriptionPairsToJSON(value.identifierDescriptionPair),
        'conversation': ReferencedConversationToJSON(value.conversation),
        'metadata': TrackedConversationEventMetadataToJSON(value.metadata),
    };
}

