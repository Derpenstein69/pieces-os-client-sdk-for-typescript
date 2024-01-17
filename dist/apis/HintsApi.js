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
exports.HintsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class HintsApi extends runtime.BaseAPI {
    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    async hintsCreateNewHintRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hints/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededHintToJSON)(requestParameters.seededHint),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.HintFromJSON)(jsonValue));
    }
    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    async hintsCreateNewHint(requestParameters) {
        const response = await this.hintsCreateNewHintRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    async hintsDeleteSpecificHintRaw(requestParameters) {
        if (requestParameters.hint === null || requestParameters.hint === undefined) {
            throw new runtime.RequiredError('hint', 'Required parameter requestParameters.hint was null or undefined when calling hintsDeleteSpecificHint.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/hints/{hint}/delete`.replace(`{${"hint"}}`, encodeURIComponent(String(requestParameters.hint))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    async hintsDeleteSpecificHint(requestParameters) {
        await this.hintsDeleteSpecificHintRaw(requestParameters);
    }
    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    async hintsSnapshotRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/hints`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.HintsFromJSON)(jsonValue));
    }
    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    async hintsSnapshot() {
        const response = await this.hintsSnapshotRaw();
        return await response.value();
    }
}
exports.HintsApi = HintsApi;
