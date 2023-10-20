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
import {HtmlWebpage, HtmlWebpageToJSON} from "../models/HtmlWebpage";
// import {
//     HtmlWebpage,
//     HtmlWebpageFromJSON,
//     HtmlWebpageToJSON,
// } from '../models';

export interface WebpageRequest {
    htmlWebpage?: HtmlWebpage;
}

/**
 * 
 */
export class HtmlApi extends runtime.BaseAPI {

    /**
     * This is the webpage endpoint.
     * /html/webpage [POST]
     */
    async webpageRaw(requestParameters: WebpageRequest): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/html/webpage`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HtmlWebpageToJSON(requestParameters.htmlWebpage),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * This is the webpage endpoint.
     * /html/webpage [POST]
     */
    async webpage(requestParameters: WebpageRequest): Promise<string> {
        const response = await this.webpageRaw(requestParameters);
        return await response.value();
    }

}