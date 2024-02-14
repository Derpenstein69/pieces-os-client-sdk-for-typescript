"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationMessageSentimentEnumToJSON = exports.ConversationMessageSentimentEnumFromJSONTyped = exports.ConversationMessageSentimentEnumFromJSON = exports.ConversationMessageSentimentEnum = void 0;
/**
 * This will describe the sentiment of a specific message ie if the message was liked/disliked/reported
 * @export
 * @enum {string}
 */
var ConversationMessageSentimentEnum;
(function (ConversationMessageSentimentEnum) {
    ConversationMessageSentimentEnum["Like"] = "LIKE";
    ConversationMessageSentimentEnum["Dislike"] = "DISLIKE";
    ConversationMessageSentimentEnum["Report"] = "REPORT";
})(ConversationMessageSentimentEnum || (exports.ConversationMessageSentimentEnum = ConversationMessageSentimentEnum = {}));
function ConversationMessageSentimentEnumFromJSON(json) {
    return ConversationMessageSentimentEnumFromJSONTyped(json, false);
}
exports.ConversationMessageSentimentEnumFromJSON = ConversationMessageSentimentEnumFromJSON;
function ConversationMessageSentimentEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ConversationMessageSentimentEnumFromJSONTyped = ConversationMessageSentimentEnumFromJSONTyped;
function ConversationMessageSentimentEnumToJSON(value) {
    return value;
}
exports.ConversationMessageSentimentEnumToJSON = ConversationMessageSentimentEnumToJSON;
