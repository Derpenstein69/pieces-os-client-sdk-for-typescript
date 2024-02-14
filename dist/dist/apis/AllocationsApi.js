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
exports.AllocationsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AllocationsApi extends runtime.BaseAPI {
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    async allocationsConnectNewCloudRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/allocations/connect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.UserProfileToJSON)(requestParameters.userProfile),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AllocationCloudFromJSON)(jsonValue));
    }
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    async allocationsConnectNewCloud(requestParameters) {
        const response = await this.allocationsConnectNewCloudRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    async allocationsCreateNewAllocationRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/allocations/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AllocationCloudToJSON)(requestParameters.allocationCloud),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AllocationCloudFromJSON)(jsonValue));
    }
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    async allocationsCreateNewAllocation(requestParameters) {
        const response = await this.allocationsCreateNewAllocationRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    async allocationsDeleteAllocationRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/allocations/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AllocationCloudToJSON)(requestParameters.allocationCloud),
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    async allocationsDeleteAllocation(requestParameters) {
        const response = await this.allocationsDeleteAllocationRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    async allocationsDisconnectCloudRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/allocations/disconnect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AllocationCloudToJSON)(requestParameters.allocationCloud),
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    async allocationsDisconnectCloud(requestParameters) {
        const response = await this.allocationsDisconnectCloudRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    async allocationsReconnectCloudRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/allocations/reconnect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AllocationCloudToJSON)(requestParameters.allocationCloud),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AllocationCloudFromJSON)(jsonValue));
    }
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    async allocationsReconnectCloud(requestParameters) {
        const response = await this.allocationsReconnectCloudRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    async allocationsSnapshotRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/allocations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AllocationsFromJSON)(jsonValue));
    }
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    async allocationsSnapshot() {
        const response = await this.allocationsSnapshotRaw();
        return await response.value();
    }
}
exports.AllocationsApi = AllocationsApi;
