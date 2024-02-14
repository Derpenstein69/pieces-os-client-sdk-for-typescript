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
exports.FlattenedHintToJSON = exports.FlattenedHintFromJSONTyped = exports.FlattenedHintFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedHintFromJSON(json) {
    return FlattenedHintFromJSONTyped(json, false);
}
exports.FlattenedHintFromJSON = FlattenedHintFromJSON;
function FlattenedHintFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'mechanism': !(0, runtime_1.exists)(json, 'mechanism') ? undefined : (0, _1.MechanismEnumFromJSON)(json['mechanism']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, _1.ReferencedAssetFromJSON)(json['asset']),
        'type': (0, _1.HintTypeEnumFromJSON)(json['type']),
        'text': json['text'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, _1.ReferencedModelFromJSON)(json['model']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
    };
}
exports.FlattenedHintFromJSONTyped = FlattenedHintFromJSONTyped;
function FlattenedHintToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
        'asset': (0, _1.ReferencedAssetToJSON)(value.asset),
        'type': (0, _1.HintTypeEnumToJSON)(value.type),
        'text': value.text,
        'model': (0, _1.ReferencedModelToJSON)(value.model),
        'score': (0, _1.ScoreToJSON)(value.score),
    };
}
exports.FlattenedHintToJSON = FlattenedHintToJSON;
