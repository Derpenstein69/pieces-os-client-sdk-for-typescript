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
exports.ModelUsageEnumToJSON = exports.ModelUsageEnumFromJSONTyped = exports.ModelUsageEnumFromJSON = exports.ModelUsageEnum = void 0;
/**
 * These are all the possible uses for a model, i.e. code classification, OCR, text vs code,  tagify code, tag-based code search, neural code search, tagify color and code description.
 * @export
 * @enum {string}
 */
var ModelUsageEnum;
(function (ModelUsageEnum) {
    ModelUsageEnum["Ocr"] = "OCR";
    ModelUsageEnum["CodeClassification"] = "CODE_CLASSIFICATION";
    ModelUsageEnum["TextVsCode"] = "TEXT_VS_CODE";
    ModelUsageEnum["TagifyCode"] = "TAGIFY_CODE";
    ModelUsageEnum["TlpTagSearch"] = "TLP_TAG_SEARCH";
    ModelUsageEnum["TlpNeuralCodeSearch"] = "TLP_NEURAL_CODE_SEARCH";
    ModelUsageEnum["TagifyColorFromCode"] = "TAGIFY_COLOR_FROM_CODE";
    ModelUsageEnum["CodeDescription"] = "CODE_DESCRIPTION";
    ModelUsageEnum["CodeTitle"] = "CODE_TITLE";
    ModelUsageEnum["CodeSearchQueries"] = "CODE_SEARCH_QUERIES";
    ModelUsageEnum["CodeExtractiveTags"] = "CODE_EXTRACTIVE_TAGS";
    ModelUsageEnum["CodeExtractiveLinks"] = "CODE_EXTRACTIVE_LINKS";
    ModelUsageEnum["CodeConversation"] = "CODE_CONVERSATION";
    ModelUsageEnum["CodeGeneration"] = "CODE_GENERATION";
    ModelUsageEnum["CodeSearch"] = "CODE_SEARCH";
    ModelUsageEnum["CodeDiscovery"] = "CODE_DISCOVERY";
    ModelUsageEnum["CodeRelatedPeople"] = "CODE_RELATED_PEOPLE";
    ModelUsageEnum["CodeFramework"] = "CODE_FRAMEWORK";
    ModelUsageEnum["VideoOcr"] = "VIDEO_OCR";
    ModelUsageEnum["TextVsCodeSegmentation"] = "TEXT_VS_CODE_SEGMENTATION";
    ModelUsageEnum["TextEmbedding"] = "TEXT_EMBEDDING";
})(ModelUsageEnum || (exports.ModelUsageEnum = ModelUsageEnum = {}));
function ModelUsageEnumFromJSON(json) {
    return ModelUsageEnumFromJSONTyped(json, false);
}
exports.ModelUsageEnumFromJSON = ModelUsageEnumFromJSON;
function ModelUsageEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ModelUsageEnumFromJSONTyped = ModelUsageEnumFromJSONTyped;
function ModelUsageEnumToJSON(value) {
    return value;
}
exports.ModelUsageEnumToJSON = ModelUsageEnumToJSON;
