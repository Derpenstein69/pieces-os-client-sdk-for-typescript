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
  SeededFormat,
} from '../models/index';
import {
    SeededFormatFromJSON,
    SeededFormatToJSON,
} from '../models/index';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @export
 * @interface ConvertGenericClassificationRequest
 * @typedef {ConvertGenericClassificationRequest}
 */
export interface ConvertGenericClassificationRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:13 AM
 *
 * @type {?SeededFormat}
 */
seededFormat?: SeededFormat;
}

/**
 *
 */
export class ClassificationApi extends runtime.BaseAPI {

    /**
     * This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS
     * Convert Generic Classification
     */
    async convertGenericClassificationRaw(requestParameters: ConvertGenericClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SeededFormat>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/classification/generic/convert`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededFormatToJSON(requestParameters.seededFormat),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SeededFormatFromJSON(jsonValue));
    }

    /**
     * This endpoint converts on a best effort basis from one generic format to another, i.e. from Code to HLJS
     * Convert Generic Classification
     */
    async convertGenericClassification(requestParameters: ConvertGenericClassificationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SeededFormat> {
        const response = await this.convertGenericClassificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
