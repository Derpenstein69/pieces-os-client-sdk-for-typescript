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


/**
 * This is a type of conversation, for now just COPILOT.
 * @export
 */
export const ConversationTypeEnum = {
    Copilot: 'COPILOT'
} as const;
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @typedef {ConversationTypeEnum}
 */
export type ConversationTypeEnum = typeof ConversationTypeEnum[keyof typeof ConversationTypeEnum];


/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @param {*} json
 * @returns {ConversationTypeEnum}
 */
export function ConversationTypeEnumFromJSON(json: any): ConversationTypeEnum {
    return ConversationTypeEnumFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ConversationTypeEnum}
 */
export function ConversationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationTypeEnum {
    return json as ConversationTypeEnum;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:11 AM
 *
 * @export
 * @param {?(ConversationTypeEnum | null)} [value]
 * @returns {*}
 */
export function ConversationTypeEnumToJSON(value?: ConversationTypeEnum | null): any {
    return value as any;
}

