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
  Relationship,
} from '../models/index';
import {
    RelationshipFromJSON,
    RelationshipToJSON,
} from '../models/index';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @interface RelationshipsSpecificRelationshipSnapshotRequest
 * @typedef {RelationshipsSpecificRelationshipSnapshotRequest}
 */
export interface RelationshipsSpecificRelationshipSnapshotRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @type {string}
 */
relationship: string;
}

/**
 *
 */
export class RelationshipApi extends runtime.BaseAPI {

    /**
     * This will return a single relationship object.
     * /relationship/{relationship} [GET]
     */
    async relationshipsSpecificRelationshipSnapshotRaw(requestParameters: RelationshipsSpecificRelationshipSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Relationship>> {
        if (requestParameters.relationship === null || requestParameters.relationship === undefined) {
            throw new runtime.RequiredError('relationship','Required parameter requestParameters.relationship was null or undefined when calling relationshipsSpecificRelationshipSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/relationship/{relationship}`.replace(`{${"relationship"}}`, encodeURIComponent(String(requestParameters.relationship))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RelationshipFromJSON(jsonValue));
    }

    /**
     * This will return a single relationship object.
     * /relationship/{relationship} [GET]
     */
    async relationshipsSpecificRelationshipSnapshot(requestParameters: RelationshipsSpecificRelationshipSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Relationship> {
        const response = await this.relationshipsSpecificRelationshipSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
