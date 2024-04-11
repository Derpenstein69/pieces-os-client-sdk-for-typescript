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
  Application,
  Applications,
  DetectedExternalApplications,
  SeededTrackedInteractionEvent,
  SeededTrackedKeyboardEvent,
  Session,
  TrackedApplicationInstall,
  TrackedApplicationUpdate,
  TrackedInteractionEvent,
  TrackedKeyboardEvent,
} from '../models/index';
import {
    ApplicationFromJSON,
    ApplicationToJSON,
    ApplicationsFromJSON,
    ApplicationsToJSON,
    DetectedExternalApplicationsFromJSON,
    DetectedExternalApplicationsToJSON,
    SeededTrackedInteractionEventFromJSON,
    SeededTrackedInteractionEventToJSON,
    SeededTrackedKeyboardEventFromJSON,
    SeededTrackedKeyboardEventToJSON,
    SessionFromJSON,
    SessionToJSON,
    TrackedApplicationInstallFromJSON,
    TrackedApplicationInstallToJSON,
    TrackedApplicationUpdateFromJSON,
    TrackedApplicationUpdateToJSON,
    TrackedInteractionEventFromJSON,
    TrackedInteractionEventToJSON,
    TrackedKeyboardEventFromJSON,
    TrackedKeyboardEventToJSON,
} from '../models/index';

export interface ApplicationsRegisterRequest {
    application?: Application;
}

export interface ApplicationsSessionCloseRequest {
    body?: string;
}

export interface ApplicationsSessionSnapshotRequest {
    session: string;
}

export interface ApplicationsSpecificApplicationSnapshotRequest {
    application: string;
}

export interface ApplicationsUsageEngagementInteractionRequest {
    seededTrackedInteractionEvent?: SeededTrackedInteractionEvent;
}

export interface ApplicationsUsageEngagementKeyboardRequest {
    seededTrackedKeyboardEvent?: SeededTrackedKeyboardEvent;
}

export interface ApplicationsUsageInstallationRequest {
    trackedApplicationInstall?: TrackedApplicationInstall;
}

export interface PostApplicationsUsageUpdatedRequest {
    trackedApplicationUpdate?: TrackedApplicationUpdate;
}

/**
 * 
 */
export class ApplicationsApi extends runtime.BaseAPI {

    /**
     * This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.
     * /applications/external/related [GET]
     */
    async applicationsExternalRelatedRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DetectedExternalApplications>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/external/related`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DetectedExternalApplicationsFromJSON(jsonValue));
    }

    /**
     * This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.
     * /applications/external/related [GET]
     */
    async applicationsExternalRelated(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DetectedExternalApplications> {
        const response = await this.applicationsExternalRelatedRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will get a snapshot of your installed applications on your local Machine. Applications like \"Microsoft Teams classic\", \"Google Chat\", \"Obsidian\", etc...
     * /applications/external [GET]
     */
    async applicationsExternalSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DetectedExternalApplications>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/external`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DetectedExternalApplicationsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of your installed applications on your local Machine. Applications like \"Microsoft Teams classic\", \"Google Chat\", \"Obsidian\", etc...
     * /applications/external [GET]
     */
    async applicationsExternalSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DetectedExternalApplications> {
        const response = await this.applicationsExternalSnapshotRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    async applicationsRegisterRaw(requestParameters: ApplicationsRegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationToJSON(requestParameters.application),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    async applicationsRegister(requestParameters: ApplicationsRegisterRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application> {
        const response = await this.applicationsRegisterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    async applicationsSessionCloseRaw(requestParameters: ApplicationsSessionCloseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/session/close`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    async applicationsSessionClose(requestParameters: ApplicationsSessionCloseRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session> {
        const response = await this.applicationsSessionCloseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    async applicationsSessionOpenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/session/open`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    async applicationsSessionOpen(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session> {
        const response = await this.applicationsSessionOpenRaw(initOverrides);
        return await response.value();
    }

    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    async applicationsSessionSnapshotRaw(requestParameters: ApplicationsSessionSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>> {
        if (requestParameters.session === null || requestParameters.session === undefined) {
            throw new runtime.RequiredError('session','Required parameter requestParameters.session was null or undefined when calling applicationsSessionSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/sessions/{session}`.replace(`{${"session"}}`, encodeURIComponent(String(requestParameters.session))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    async applicationsSessionSnapshot(requestParameters: ApplicationsSessionSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session> {
        const response = await this.applicationsSessionSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /applications [GET]
     */
    async applicationsSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Applications>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationsFromJSON(jsonValue));
    }

    /**
     * 
     * /applications [GET]
     */
    async applicationsSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Applications> {
        const response = await this.applicationsSnapshotRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    async applicationsSpecificApplicationSnapshotRaw(requestParameters: ApplicationsSpecificApplicationSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling applicationsSpecificApplicationSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/{application}`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    async applicationsSpecificApplicationSnapshot(requestParameters: ApplicationsSpecificApplicationSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application> {
        const response = await this.applicationsSpecificApplicationSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    async applicationsUsageEngagementInteractionRaw(requestParameters: ApplicationsUsageEngagementInteractionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackedInteractionEvent>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/engagement/interaction`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededTrackedInteractionEventToJSON(requestParameters.seededTrackedInteractionEvent),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackedInteractionEventFromJSON(jsonValue));
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    async applicationsUsageEngagementInteraction(requestParameters: ApplicationsUsageEngagementInteractionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackedInteractionEvent> {
        const response = await this.applicationsUsageEngagementInteractionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    async applicationsUsageEngagementKeyboardRaw(requestParameters: ApplicationsUsageEngagementKeyboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackedKeyboardEvent>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/engagement/keyboard`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededTrackedKeyboardEventToJSON(requestParameters.seededTrackedKeyboardEvent),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackedKeyboardEventFromJSON(jsonValue));
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    async applicationsUsageEngagementKeyboard(requestParameters: ApplicationsUsageEngagementKeyboardRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackedKeyboardEvent> {
        const response = await this.applicationsUsageEngagementKeyboardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    async applicationsUsageInstallationRaw(requestParameters: ApplicationsUsageInstallationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/installation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrackedApplicationInstallToJSON(requestParameters.trackedApplicationInstall),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    async applicationsUsageInstallation(requestParameters: ApplicationsUsageInstallationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.applicationsUsageInstallationRaw(requestParameters, initOverrides);
    }

    /**
     * This is an endpoint to determine when an application has been updated 
     * /applications/usage/updated [POST]
     */
    async postApplicationsUsageUpdatedRaw(requestParameters: PostApplicationsUsageUpdatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/updated`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrackedApplicationUpdateToJSON(requestParameters.trackedApplicationUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is an endpoint to determine when an application has been updated 
     * /applications/usage/updated [POST]
     */
    async postApplicationsUsageUpdated(requestParameters: PostApplicationsUsageUpdatedRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postApplicationsUsageUpdatedRaw(requestParameters, initOverrides);
    }

}
