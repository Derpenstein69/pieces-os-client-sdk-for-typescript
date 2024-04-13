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
import type { ConversationMessageSentimentEnum } from './ConversationMessageSentimentEnum';
import {
    ConversationMessageSentimentEnumFromJSON,
    ConversationMessageSentimentEnumFromJSONTyped,
    ConversationMessageSentimentEnumToJSON,
} from './ConversationMessageSentimentEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
} from './FlattenedAnnotations';
import type { FragmentFormat } from './FragmentFormat';
import {
    FragmentFormatFromJSON,
    FragmentFormatFromJSONTyped,
    FragmentFormatToJSON,
} from './FragmentFormat';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';
import type { QGPTConversationMessageRoleEnum } from './QGPTConversationMessageRoleEnum';
import {
    QGPTConversationMessageRoleEnumFromJSON,
    QGPTConversationMessageRoleEnumFromJSONTyped,
    QGPTConversationMessageRoleEnumToJSON,
} from './QGPTConversationMessageRoleEnum';
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './ReferencedConversation';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a flattened DAG safe version of a ConversationMessage.
 * @export
 * @interface FlattenedConversationMessage
 */
export interface FlattenedConversationMessage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof FlattenedConversationMessage
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {Model}
     * @memberof FlattenedConversationMessage
     */
    model?: Model;
    /**
     *
     * @type {FragmentFormat}
     * @memberof FlattenedConversationMessage
     */
    fragment?: FragmentFormat;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof FlattenedConversationMessage
     */
    conversation: ReferencedConversation;
    /**
     *
     * @type {ConversationMessageSentimentEnum}
     * @memberof FlattenedConversationMessage
     */
    sentiment?: ConversationMessageSentimentEnum;
    /**
     *
     * @type {QGPTConversationMessageRoleEnum}
     * @memberof FlattenedConversationMessage
     */
    role: QGPTConversationMessageRoleEnum;
    /**
     *
     * @type {Score}
     * @memberof FlattenedConversationMessage
     */
    score?: Score;
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof FlattenedConversationMessage
     */
    annotations?: FlattenedAnnotations;
}

/**
 * Check if a given object implements the FlattenedConversationMessage interface.
 */
export function instanceOfFlattenedConversationMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "conversation" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {*} json
 * @returns {FlattenedConversationMessage}
 */
export function FlattenedConversationMessageFromJSON(json: any): FlattenedConversationMessage {
    return FlattenedConversationMessageFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {FlattenedConversationMessage}
 */
export function FlattenedConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'model': !exists(json, 'model') ? undefined : ModelFromJSON(json['model']),
        'fragment': !exists(json, 'fragment') ? undefined : FragmentFormatFromJSON(json['fragment']),
        'conversation': ReferencedConversationFromJSON(json['conversation']),
        'sentiment': !exists(json, 'sentiment') ? undefined : ConversationMessageSentimentEnumFromJSON(json['sentiment']),
        'role': QGPTConversationMessageRoleEnumFromJSON(json['role']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @param {?(FlattenedConversationMessage | null)} [value]
 * @returns {*}
 */
export function FlattenedConversationMessageToJSON(value?: FlattenedConversationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'model': ModelToJSON(value.model),
        'fragment': FragmentFormatToJSON(value.fragment),
        'conversation': ReferencedConversationToJSON(value.conversation),
        'sentiment': ConversationMessageSentimentEnumToJSON(value.sentiment),
        'role': QGPTConversationMessageRoleEnumToJSON(value.role),
        'score': ScoreToJSON(value.score),
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
    };
}

