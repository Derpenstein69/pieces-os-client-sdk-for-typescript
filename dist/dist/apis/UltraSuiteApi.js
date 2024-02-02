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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltraSuiteApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class UltraSuiteApi extends runtime.BaseAPI {
    /**
     * This Endpoint will create an Asset that is sent from UltraSuite.
     * /ultra_suite/assets/create [POST]
     */
    async assetsCreateUltraSuiteAssetRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/ultra_suite/assets/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededUltraSuiteAssetToJSON)(requestParameters.seededUltraSuiteAsset),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AssetFromJSON)(jsonValue));
    }
    /**
     * This Endpoint will create an Asset that is sent from UltraSuite.
     * /ultra_suite/assets/create [POST]
     */
    async assetsCreateUltraSuiteAsset(requestParameters) {
        const response = await this.assetsCreateUltraSuiteAssetRaw(requestParameters);
        return await response.value();
    }
}
exports.UltraSuiteApi = UltraSuiteApi;
