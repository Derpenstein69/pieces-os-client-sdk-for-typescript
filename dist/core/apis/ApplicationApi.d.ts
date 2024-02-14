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
import { Application } from '../models';
export interface ApplicationUpdateRequest {
    application?: Application;
}
/**
 *
 */
export declare class ApplicationApi extends runtime.BaseAPI {
    /**
     * This is an endpoint for updating an application.
     * /application/update [GET]
     */
    applicationUpdateRaw(requestParameters: ApplicationUpdateRequest): Promise<runtime.ApiResponse<Application>>;
    /**
     * This is an endpoint for updating an application.
     * /application/update [GET]
     */
    applicationUpdate(requestParameters: ApplicationUpdateRequest): Promise<Application>;
}
