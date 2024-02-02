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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class FormatApi extends runtime.BaseAPI {
    /**
     * This will get an analysis from a format\'s id.
     * /format/{format}/analysis [GET]
     */
    async formatAnalysisRaw(requestParameters) {
        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format', 'Required parameter requestParameters.format was null or undefined when calling formatAnalysis.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/format/{format}/analysis`.replace(`{${"format"}}`, encodeURIComponent(String(requestParameters.format))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnalysisFromJSON)(jsonValue));
    }
    /**
     * This will get an analysis from a format\'s id.
     * /format/{format}/analysis [GET]
     */
    async formatAnalysis(requestParameters) {
        const response = await this.formatAnalysisRaw(requestParameters);
        return await response.value();
    }
    /**
     * This endpoint will be used to reclassify a single Format.
     * /format/reclassify [POST]
     */
    async formatReclassifyRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferable !== undefined) {
            queryParameters['transferable'] = requestParameters.transferable;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/format/reclassify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.FormatReclassificationToJSON)(requestParameters.formatReclassification),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FormatFromJSON)(jsonValue));
    }
    /**
     * This endpoint will be used to reclassify a single Format.
     * /format/reclassify [POST]
     */
    async formatReclassify(requestParameters) {
        const response = await this.formatReclassifyRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get a snapshot of a specific format.
     * /format/{format} [GET] Scoped to Format
     */
    async formatSnapshotRaw(requestParameters) {
        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format', 'Required parameter requestParameters.format was null or undefined when calling formatSnapshot.');
        }
        const queryParameters = {};
        if (requestParameters.transferable !== undefined) {
            queryParameters['transferable'] = requestParameters.transferable;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/format/{format}`.replace(`{${"format"}}`, encodeURIComponent(String(requestParameters.format))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FormatFromJSON)(jsonValue));
    }
    /**
     * Get a snapshot of a specific format.
     * /format/{format} [GET] Scoped to Format
     */
    async formatSnapshot(requestParameters) {
        const response = await this.formatSnapshotRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will update a format\'s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original\'s value. if this format is an asset.preview.original we will update the asset.preview.base\'s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original\'s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base\'s fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)
     * [POST] /format/update/value
     */
    async formatUpdateValueRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferable !== undefined) {
            queryParameters['transferable'] = requestParameters.transferable;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/format/update/value`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.FormatToJSON)(requestParameters.format),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FormatFromJSON)(jsonValue));
    }
    /**
     * This will update a format\'s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original\'s value. if this format is an asset.preview.original we will update the asset.preview.base\'s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original\'s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base\'s fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)
     * [POST] /format/update/value
     */
    async formatUpdateValue(requestParameters) {
        const response = await this.formatUpdateValueRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.
     * /format/usage/event [POST] Scoped to Format
     */
    async formatUsageEventRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/format/usage/event`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededTrackedFormatEventToJSON)(requestParameters.seededTrackedFormatEvent),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TrackedFormatEventFromJSON)(jsonValue));
    }
    /**
     * This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.
     * /format/usage/event [POST] Scoped to Format
     */
    async formatUsageEvent(requestParameters) {
        const response = await this.formatUsageEventRaw(requestParameters);
        return await response.value();
    }
}
exports.FormatApi = FormatApi;
