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
  OCRAnalyses,
} from '../models/index';
import {
    OCRAnalysesFromJSON,
    OCRAnalysesToJSON,
} from '../models/index';

export interface OcrAnalysesSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class OCRAnalysesApi extends runtime.BaseAPI {

    /**
     * This will get a snapshot of all of your ocr analyses, an ocr analysis is attached to an image analysis.
     * Your GET endpoint
     */
    async ocrAnalysesSnapshotRaw(requestParameters: OcrAnalysesSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OCRAnalyses>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ocr_analyses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OCRAnalysesFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of your ocr analyses, an ocr analysis is attached to an image analysis.
     * Your GET endpoint
     */
    async ocrAnalysesSnapshot(requestParameters: OcrAnalysesSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OCRAnalyses> {
        const response = await this.ocrAnalysesSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
