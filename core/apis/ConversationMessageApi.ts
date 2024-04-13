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
  ConversationMessage,
  SeededScoreIncrement,
} from '../models/index';
import {
    ConversationMessageFromJSON,
    ConversationMessageToJSON,
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
} from '../models/index';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageAssociateAnnotationRequest
 * @typedef {MessageAssociateAnnotationRequest}
 */
export interface MessageAssociateAnnotationRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
annotation: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
message: string;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageDisassociateAnnotationRequest
 * @typedef {MessageDisassociateAnnotationRequest}
 */
export interface MessageDisassociateAnnotationRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
annotation: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
message: string;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageScoresIncrementRequest
 * @typedef {MessageScoresIncrementRequest}
 */
export interface MessageScoresIncrementRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
message: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?SeededScoreIncrement}
 */
seededScoreIncrement?: SeededScoreIncrement;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageSpecificMessageSnapshotRequest
 * @typedef {MessageSpecificMessageSnapshotRequest}
 */
export interface MessageSpecificMessageSnapshotRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {string}
 */
message: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageSpecificMessageUpdateRequest
 * @typedef {MessageSpecificMessageUpdateRequest}
 */
export interface MessageSpecificMessageUpdateRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?ConversationMessage}
 */
conversationMessage?: ConversationMessage;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface MessageUpdateValueRequest
 * @typedef {MessageUpdateValueRequest}
 */
export interface MessageUpdateValueRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?ConversationMessage}
 */
conversationMessage?: ConversationMessage;
}

/**
 *
 */
export class ConversationMessageApi extends runtime.BaseAPI {

    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    async messageAssociateAnnotationRaw(requestParameters: MessageAssociateAnnotationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
            throw new runtime.RequiredError('annotation','Required parameter requestParameters.annotation was null or undefined when calling messageAssociateAnnotation.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageAssociateAnnotation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}/annotations/associate/{annotation}`.replace(`{${"annotation"}}`, encodeURIComponent(String(requestParameters.annotation))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    async messageAssociateAnnotation(requestParameters: MessageAssociateAnnotationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.messageAssociateAnnotationRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    async messageDisassociateAnnotationRaw(requestParameters: MessageDisassociateAnnotationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
            throw new runtime.RequiredError('annotation','Required parameter requestParameters.annotation was null or undefined when calling messageDisassociateAnnotation.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageDisassociateAnnotation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}/annotations/disassociate/{annotation}`.replace(`{${"annotation"}}`, encodeURIComponent(String(requestParameters.annotation))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    async messageDisassociateAnnotation(requestParameters: MessageDisassociateAnnotationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.messageDisassociateAnnotationRaw(requestParameters, initOverrides);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    async messageScoresIncrementRaw(requestParameters: MessageScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/{message}/scores/increment`.replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    async messageScoresIncrement(requestParameters: MessageScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.messageScoresIncrementRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    async messageSpecificMessageSnapshotRaw(requestParameters: MessageSpecificMessageSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConversationMessage>> {
        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageSpecificMessageSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}`.replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationMessageFromJSON(jsonValue));
    }

    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    async messageSpecificMessageSnapshot(requestParameters: MessageSpecificMessageSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationMessage> {
        const response = await this.messageSpecificMessageSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    async messageSpecificMessageUpdateRaw(requestParameters: MessageSpecificMessageUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConversationMessage>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConversationMessageToJSON(requestParameters.conversationMessage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationMessageFromJSON(jsonValue));
    }

    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    async messageSpecificMessageUpdate(requestParameters: MessageSpecificMessageUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationMessage> {
        const response = await this.messageSpecificMessageUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will update the value of a conversation message.
     * /message/update/value [POST]
     */
    async messageUpdateValueRaw(requestParameters: MessageUpdateValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConversationMessage>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/update/value`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConversationMessageToJSON(requestParameters.conversationMessage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationMessageFromJSON(jsonValue));
    }

    /**
     * This will update the value of a conversation message.
     * /message/update/value [POST]
     */
    async messageUpdateValue(requestParameters: MessageUpdateValueRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConversationMessage> {
        const response = await this.messageUpdateValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
