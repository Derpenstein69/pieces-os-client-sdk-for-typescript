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
  Model,
  ModelDownloadProgress,
} from '../models/index';
import {
    ModelFromJSON,
    ModelToJSON,
    ModelDownloadProgressFromJSON,
    ModelDownloadProgressToJSON,
} from '../models/index';

export interface ModelSpecificModelDownloadRequest {
    model: string;
}

export interface ModelSpecificModelDownloadCancelRequest {
    model: string;
}

export interface ModelSpecificModelDownloadProgressRequest {
    model: string;
}

export interface ModelSpecificModelLoadRequest {
    model: string;
}

export interface ModelSpecificModelUnloadRequest {
    model: string;
}

export interface ModelUpdateRequest {
    model?: Model;
}

export interface ModelsSpecificModelSnapshotRequest {
    model: string;
}

/**
 * 
 */
export class ModelApi extends runtime.BaseAPI {

    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    async modelSpecificModelDownloadRaw(requestParameters: ModelSpecificModelDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}/download`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    async modelSpecificModelDownload(requestParameters: ModelSpecificModelDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelSpecificModelDownloadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    async modelSpecificModelDownloadCancelRaw(requestParameters: ModelSpecificModelDownloadCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownloadCancel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}/download/cancel`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    async modelSpecificModelDownloadCancel(requestParameters: ModelSpecificModelDownloadCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelSpecificModelDownloadCancelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    async modelSpecificModelDownloadProgressRaw(requestParameters: ModelSpecificModelDownloadProgressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelDownloadProgress>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelSpecificModelDownloadProgress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}/download/progress`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelDownloadProgressFromJSON(jsonValue));
    }

    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    async modelSpecificModelDownloadProgress(requestParameters: ModelSpecificModelDownloadProgressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelDownloadProgress> {
        const response = await this.modelSpecificModelDownloadProgressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    async modelSpecificModelLoadRaw(requestParameters: ModelSpecificModelLoadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelSpecificModelLoad.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}/load`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    async modelSpecificModelLoad(requestParameters: ModelSpecificModelLoadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelSpecificModelLoadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    async modelSpecificModelUnloadRaw(requestParameters: ModelSpecificModelUnloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelSpecificModelUnload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}/unload`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    async modelSpecificModelUnload(requestParameters: ModelSpecificModelUnloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelSpecificModelUnloadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    async modelUpdateRaw(requestParameters: ModelUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/model/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelToJSON(requestParameters.model),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    async modelUpdate(requestParameters: ModelUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /model/{model} [GET]
     */
    async modelsSpecificModelSnapshotRaw(requestParameters: ModelsSpecificModelSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling modelsSpecificModelSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/model/{model}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     * 
     * /model/{model} [GET]
     */
    async modelsSpecificModelSnapshot(requestParameters: ModelsSpecificModelSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.modelsSpecificModelSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
