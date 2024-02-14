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
exports.ModelApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ModelApi extends runtime.BaseAPI {
    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    async modelSpecificModelDownloadRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownload.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}/download`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    async modelSpecificModelDownload(requestParameters) {
        const response = await this.modelSpecificModelDownloadRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    async modelSpecificModelDownloadCancelRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownloadCancel.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}/download/cancel`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    async modelSpecificModelDownloadCancel(requestParameters) {
        const response = await this.modelSpecificModelDownloadCancelRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    async modelSpecificModelDownloadProgressRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownloadProgress.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}/download/progress`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelDownloadProgressFromJSON)(jsonValue));
    }
    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    async modelSpecificModelDownloadProgress(requestParameters) {
        const response = await this.modelSpecificModelDownloadProgressRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    async modelSpecificModelLoadRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelSpecificModelLoad.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}/load`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    async modelSpecificModelLoad(requestParameters) {
        const response = await this.modelSpecificModelLoadRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    async modelSpecificModelUnloadRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelSpecificModelUnload.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}/unload`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    async modelSpecificModelUnload(requestParameters) {
        const response = await this.modelSpecificModelUnloadRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    async modelUpdateRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/model/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ModelToJSON)(requestParameters.model),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    async modelUpdate(requestParameters) {
        const response = await this.modelUpdateRaw(requestParameters);
        return await response.value();
    }
    /**
     * /model/{model} [GET]
     */
    async modelsSpecificModelSnapshotRaw(requestParameters) {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model', 'Required parameter requestParameters.model was null or undefined when calling modelsSpecificModelSnapshot.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/model/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ModelFromJSON)(jsonValue));
    }
    /**
     * /model/{model} [GET]
     */
    async modelsSpecificModelSnapshot(requestParameters) {
        const response = await this.modelsSpecificModelSnapshotRaw(requestParameters);
        return await response.value();
    }
}
exports.ModelApi = ModelApi;