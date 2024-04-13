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

import { exists, mapValues } from '../runtime';
/**
 * This is specifically for our allocation server metadata.
 * @export
 * @interface Auth0UserAllocationMetadata
 */
export interface Auth0UserAllocationMetadata {
    /**
     *
     * @type {string}
     * @memberof Auth0UserAllocationMetadata
     */
    project: string;
    /**
     *
     * @type {string}
     * @memberof Auth0UserAllocationMetadata
     */
    region: string;
}

/**
 * Check if a given object implements the Auth0UserAllocationMetadata interface.
 */
export function instanceOfAuth0UserAllocationMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "region" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @returns {Auth0UserAllocationMetadata}
 */
export function Auth0UserAllocationMetadataFromJSON(json: any): Auth0UserAllocationMetadata {
    return Auth0UserAllocationMetadataFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {Auth0UserAllocationMetadata}
 */
export function Auth0UserAllocationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0UserAllocationMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'project': json['project'],
        'region': json['region'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {?(Auth0UserAllocationMetadata | null)} [value]
 * @returns {*}
 */
export function Auth0UserAllocationMetadataToJSON(value?: Auth0UserAllocationMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'project': value.project,
        'region': value.region,
    };
}

