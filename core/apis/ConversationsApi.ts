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


import * as runtime from '../runtime';
import type {
  Conversation,
  Conversations,
  ConversationsCreateFromAssetOutput,
  FlattenedConversations,
  SeededConversation,
} from '../models/index';
import {
    ConversationFromJSON,
    ConversationToJSON,
    ConversationsFromJSON,
    ConversationsToJSON,
    ConversationsCreateFromAssetOutputFromJSON,
    ConversationsCreateFromAssetOutputToJSON,
    FlattenedConversationsFromJSON,
    FlattenedConversationsToJSON,
    SeededConversationFromJSON,
    SeededConversationToJSON,
} from '../models/index';

export interface ConversationsCreateFromAssetRequest {
    asset: string;
}

export interface ConversationsCreateSpecificConversationRequest {
    transferables?: boolean;
    seededConversation?: SeededConversation;
}

export interface ConversationsDeleteSpecificConversationRequest {
    conversation: string;
}

export interface ConversationsSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class ConversationsApi extends runtime.BaseAPI {

    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    async conversationsCreateFromAssetRaw(requestParameters: ConversationsCreateFromAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConversationsCreateFromAssetOutput>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling conversationsCreateFromAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversations/create/from_asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationsCreateFromAssetOutputFromJSON(jsonValue));
    }

    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    async conversationsCreateFromAsset(requestParameters: ConversationsCreateFromAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationsCreateFromAssetOutput> {
        const response = await this.conversationsCreateFromAssetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    async conversationsCreateSpecificConversationRaw(requestParameters: ConversationsCreateSpecificConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Conversation>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/conversations/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededConversationToJSON(requestParameters.seededConversation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    async conversationsCreateSpecificConversation(requestParameters: ConversationsCreateSpecificConversationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Conversation> {
        const response = await this.conversationsCreateSpecificConversationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    async conversationsDeleteSpecificConversationRaw(requestParameters: ConversationsDeleteSpecificConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.conversation === null || requestParameters.conversation === undefined) {
            throw new runtime.RequiredError('conversation','Required parameter requestParameters.conversation was null or undefined when calling conversationsDeleteSpecificConversation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversations/{conversation}/delete`.replace(`{${"conversation"}}`, encodeURIComponent(String(requestParameters.conversation))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    async conversationsDeleteSpecificConversation(requestParameters: ConversationsDeleteSpecificConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.conversationsDeleteSpecificConversationRaw(requestParameters, initOverrides);
    }

    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    async conversationsIdentifiersSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FlattenedConversations>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversations/identifiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FlattenedConversationsFromJSON(jsonValue));
    }

    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    async conversationsIdentifiersSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FlattenedConversations> {
        const response = await this.conversationsIdentifiersSnapshotRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    async conversationsSnapshotRaw(requestParameters: ConversationsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Conversations>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationsFromJSON(jsonValue));
    }

    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    async conversationsSnapshot(requestParameters: ConversationsSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Conversations> {
        const response = await this.conversationsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    async conversationsStreamIdentifiersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversations/stream/identifiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    async conversationsStreamIdentifiers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.conversationsStreamIdentifiersRaw(initOverrides);
    }

}
