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
  Format,
  Formats,
} from '../models/index';
import {
    FormatFromJSON,
    FormatToJSON,
    FormatsFromJSON,
    FormatsToJSON,
} from '../models/index';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @interface FormatsSnapshotRequest
 * @typedef {FormatsSnapshotRequest}
 */
export interface FormatsSnapshotRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @interface FormatsSpecificFormatSnapshotRequest
 * @typedef {FormatsSpecificFormatSnapshotRequest}
 */
export interface FormatsSpecificFormatSnapshotRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @type {string}
 */
format: string;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @type {?boolean}
 */
transferable?: boolean;
}

/**
 *
 */
export class FormatsApi extends runtime.BaseAPI {

    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    async formatsSnapshotRaw(requestParameters: FormatsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Formats>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/formats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FormatsFromJSON(jsonValue));
    }

    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    async formatsSnapshot(requestParameters: FormatsSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Formats> {
        const response = await this.formatsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    async formatsSpecificFormatSnapshotRaw(requestParameters: FormatsSpecificFormatSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Format>> {
        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format','Required parameter requestParameters.format was null or undefined when calling formatsSpecificFormatSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferable !== undefined) {
            queryParameters['transferable'] = requestParameters.transferable;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/formats/{format}`.replace(`{${"format"}}`, encodeURIComponent(String(requestParameters.format))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FormatFromJSON(jsonValue));
    }

    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    async formatsSpecificFormatSnapshot(requestParameters: FormatsSpecificFormatSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Format> {
        const response = await this.formatsSpecificFormatSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
