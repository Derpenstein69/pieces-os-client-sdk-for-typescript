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
  EmbeddedModelSchema,
  PKCE,
  SeededPKCE,
  TokenizedPKCE,
} from '../models/index';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaToJSON,
    PKCEFromJSON,
    PKCEToJSON,
    SeededPKCEFromJSON,
    SeededPKCEToJSON,
    TokenizedPKCEFromJSON,
    TokenizedPKCEToJSON,
} from '../models/index';

export interface GenerateCodeRequest {
    seededPKCE?: SeededPKCE;
}

export interface GenerateTokenRequest {
    tokenizedPKCE?: TokenizedPKCE;
}

export interface RespondWithCodeRequest {
    code: string;
    state: string;
    schema?: EmbeddedModelSchema;
}

/**
 * 
 */
export class PKCEApi extends runtime.BaseAPI {

    /**
     * This is a function to Clear a PKCE Authentication Flow
     * /pkce/clear [POST]
     */
    async clearPKCERaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/pkce/clear`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is a function to Clear a PKCE Authentication Flow
     * /pkce/clear [POST]
     */
    async clearPKCE(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.clearPKCERaw(initOverrides);
    }

    /**
     * An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0
     * /pkce/code [POST]
     */
    async generateCodeRaw(requestParameters: GenerateCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PKCE>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/pkce/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededPKCEToJSON(requestParameters.seededPKCE),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PKCEFromJSON(jsonValue));
    }

    /**
     * An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0
     * /pkce/code [POST]
     */
    async generateCode(requestParameters: GenerateCodeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PKCE> {
        const response = await this.generateCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token
     * /pkce/token [POST]
     */
    async generateTokenRaw(requestParameters: GenerateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PKCE>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/pkce/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenizedPKCEToJSON(requestParameters.tokenizedPKCE),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PKCEFromJSON(jsonValue));
    }

    /**
     * A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token
     * /pkce/token [POST]
     */
    async generateToken(requestParameters: GenerateTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PKCE> {
        const response = await this.generateTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * An endpoint that returns a PKCE Challenge
     * Your GET endpoint
     */
    async getChallengeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PKCE>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/pkce/challenge`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PKCEFromJSON(jsonValue));
    }

    /**
     * An endpoint that returns a PKCE Challenge
     * Your GET endpoint
     */
    async getChallenge(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PKCE> {
        const response = await this.getChallengeRaw(initOverrides);
        return await response.value();
    }

    /**
     * This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.
     * /pkce/response/code [POST]
     */
    async respondWithCodeRaw(requestParameters: RespondWithCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PKCE>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling respondWithCode.');
        }

        if (requestParameters.state === null || requestParameters.state === undefined) {
            throw new runtime.RequiredError('state','Required parameter requestParameters.state was null or undefined when calling respondWithCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.schema !== undefined) {
            formParams.append('schema', new Blob([JSON.stringify(EmbeddedModelSchemaToJSON(requestParameters.schema))], { type: "application/json", }));
                    }

        if (requestParameters.code !== undefined) {
            formParams.append('code', requestParameters.code as any);
        }

        if (requestParameters.state !== undefined) {
            formParams.append('state', requestParameters.state as any);
        }

        const response = await this.request({
            path: `/pkce/response/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PKCEFromJSON(jsonValue));
    }

    /**
     * This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.
     * /pkce/response/code [POST]
     */
    async respondWithCode(requestParameters: RespondWithCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PKCE> {
        const response = await this.respondWithCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
