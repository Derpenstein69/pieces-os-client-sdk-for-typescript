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
exports.FlattenedConversationToJSON = exports.FlattenedConversationFromJSONTyped = exports.FlattenedConversationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedConversationFromJSON(json) {
    return FlattenedConversationFromJSONTyped(json, false);
}
exports.FlattenedConversationFromJSON = FlattenedConversationFromJSON;
function FlattenedConversationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : (0, _1.ApplicationFromJSON)(json['application']),
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (0, _1.FlattenedAnnotationsFromJSON)(json['annotations']),
        'messages': (0, _1.FlattenedConversationMessagesFromJSON)(json['messages']),
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, _1.ReferencedModelFromJSON)(json['model']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, _1.FlattenedAssetsFromJSON)(json['assets']),
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : (0, _1.FlattenedWebsitesFromJSON)(json['websites']),
        'anchors': !(0, runtime_1.exists)(json, 'anchors') ? undefined : (0, _1.FlattenedAnchorsFromJSON)(json['anchors']),
        'type': (0, _1.ConversationTypeEnumFromJSON)(json['type']),
        'grounding': !(0, runtime_1.exists)(json, 'grounding') ? undefined : (0, _1.ConversationGroundingFromJSON)(json['grounding']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
        'pipeline': !(0, runtime_1.exists)(json, 'pipeline') ? undefined : (0, _1.QGPTPromptPipelineFromJSON)(json['pipeline']),
    };
}
exports.FlattenedConversationFromJSONTyped = FlattenedConversationFromJSONTyped;
function FlattenedConversationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'name': value.name,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'favorited': value.favorited,
        'application': (0, _1.ApplicationToJSON)(value.application),
        'annotations': (0, _1.FlattenedAnnotationsToJSON)(value.annotations),
        'messages': (0, _1.FlattenedConversationMessagesToJSON)(value.messages),
        'model': (0, _1.ReferencedModelToJSON)(value.model),
        'assets': (0, _1.FlattenedAssetsToJSON)(value.assets),
        'websites': (0, _1.FlattenedWebsitesToJSON)(value.websites),
        'anchors': (0, _1.FlattenedAnchorsToJSON)(value.anchors),
        'type': (0, _1.ConversationTypeEnumToJSON)(value.type),
        'grounding': (0, _1.ConversationGroundingToJSON)(value.grounding),
        'score': (0, _1.ScoreToJSON)(value.score),
        'pipeline': (0, _1.QGPTPromptPipelineToJSON)(value.pipeline),
    };
}
exports.FlattenedConversationToJSON = FlattenedConversationToJSON;
