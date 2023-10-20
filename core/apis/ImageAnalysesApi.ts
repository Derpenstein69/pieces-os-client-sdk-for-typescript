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
import {
    ImageAnalyses,
    ImageAnalysesFromJSON,
    ImageAnalysesToJSON,
} from '../models';

export interface ImageAnalysesSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class ImageAnalysesApi extends runtime.BaseAPI {

    /**
     * This will get a snapshot of all of your code analyses, a code analysis is attached to an image analysis.
     * Your GET endpoint
     */
    async imageAnalysesSnapshotRaw(requestParameters: ImageAnalysesSnapshotRequest): Promise<runtime.ApiResponse<ImageAnalyses>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/image_analyses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageAnalysesFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of your code analyses, a code analysis is attached to an image analysis.
     * Your GET endpoint
     */
    async imageAnalysesSnapshot(requestParameters: ImageAnalysesSnapshotRequest): Promise<ImageAnalyses> {
        const response = await this.imageAnalysesSnapshotRaw(requestParameters);
        return await response.value();
    }

}