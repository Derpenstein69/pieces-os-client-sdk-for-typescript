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
 * The redirect URI for you Auth 0 Service
 * @export
 * @interface Auth0Redirects
 */
export interface Auth0Redirects {
    /**
     * Where the Auth0 redirects after the user is authorized
     * @type {string}
     * @memberof Auth0Redirects
     */
    authenticated?: string;
    /**
     * The redirect where a user returns once unauthenticated
     * @type {string}
     * @memberof Auth0Redirects
     */
    unauthenticated?: string;
}

export function Auth0RedirectsFromJSON(json: any): Auth0Redirects {
    return Auth0RedirectsFromJSONTyped(json, false);
}

export function Auth0RedirectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0Redirects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authenticated': !exists(json, 'authenticated') ? undefined : json['authenticated'],
        'unauthenticated': !exists(json, 'unauthenticated') ? undefined : json['unauthenticated'],
    };
}

export function Auth0RedirectsToJSON(value?: Auth0Redirects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authenticated': value.authenticated,
        'unauthenticated': value.unauthenticated,
    };
}

