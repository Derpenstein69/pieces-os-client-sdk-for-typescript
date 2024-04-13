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
  Activities,
  Activity,
  SeededActivity,
} from '../models/index';
import {
    ActivitiesFromJSON,
    ActivitiesToJSON,
    ActivityFromJSON,
    ActivityToJSON,
    SeededActivityFromJSON,
    SeededActivityToJSON,
} from '../models/index';

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @interface ActivitiesCreateNewActivityRequest
 * @typedef {ActivitiesCreateNewActivityRequest}
 */
export interface ActivitiesCreateNewActivityRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @type {?SeededActivity}
 */
seededActivity?: SeededActivity;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @interface ActivitiesDeleteSpecificActivityRequest
 * @typedef {ActivitiesDeleteSpecificActivityRequest}
 */
export interface ActivitiesDeleteSpecificActivityRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @type {string}
 */
activity: string;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @export
 * @interface ActivitiesSnapshotRequest
 * @typedef {ActivitiesSnapshotRequest}
 */
export interface ActivitiesSnapshotRequest {
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @type {?boolean}
 */
transferables?: boolean;
    /**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:14 AM
 *
 * @type {?boolean}
 */
pseudo?: boolean;
}

/**
 *
 */
export class ActivitiesApi extends runtime.BaseAPI {

    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    async activitiesCreateNewActivityRaw(requestParameters: ActivitiesCreateNewActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Activity>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/activities/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededActivityToJSON(requestParameters.seededActivity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivityFromJSON(jsonValue));
    }

    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    async activitiesCreateNewActivity(requestParameters: ActivitiesCreateNewActivityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Activity> {
        const response = await this.activitiesCreateNewActivityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    async activitiesDeleteSpecificActivityRaw(requestParameters: ActivitiesDeleteSpecificActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.activity === null || requestParameters.activity === undefined) {
            throw new runtime.RequiredError('activity','Required parameter requestParameters.activity was null or undefined when calling activitiesDeleteSpecificActivity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/activities/{activity}/delete`.replace(`{${"activity"}}`, encodeURIComponent(String(requestParameters.activity))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    async activitiesDeleteSpecificActivity(requestParameters: ActivitiesDeleteSpecificActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.activitiesDeleteSpecificActivityRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    async activitiesSnapshotRaw(requestParameters: ActivitiesSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Activities>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        if (requestParameters.pseudo !== undefined) {
            queryParameters['pseudo'] = requestParameters.pseudo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/activities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivitiesFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    async activitiesSnapshot(requestParameters: ActivitiesSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Activities> {
        const response = await this.activitiesSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
