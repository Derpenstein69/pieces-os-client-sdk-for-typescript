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
import type { Auth0Identity } from './Auth0Identity';
import {
    Auth0IdentityFromJSON,
    Auth0IdentityFromJSONTyped,
    Auth0IdentityToJSON,
} from './Auth0Identity';
import type { Auth0UserMetadata } from './Auth0UserMetadata';
import {
    Auth0UserMetadataFromJSON,
    Auth0UserMetadataFromJSONTyped,
    Auth0UserMetadataToJSON,
} from './Auth0UserMetadata';

/**
 *
 * @export
 * @interface Auth0User
 */
export interface Auth0User {
    /**
     * 	User's full name.
     * @type {string}
     * @memberof Auth0User
     */
    name?: string;
    /**
     * mapped from picture.URL pointing to the user's profile picture.
     * @type {string}
     * @memberof Auth0User
     */
    picture?: string;
    /**
     *
     * @type {string}
     * @memberof Auth0User
     */
    email?: string;
    /**
     *
     * @type {Date}
     * @memberof Auth0User
     */
    createdAt?: Date;
    /**
     * Indicates whether the user has verified their email address. Mapped from email_verified -> emailVerified.
     * @type {boolean}
     * @memberof Auth0User
     */
    emailVerified?: boolean;
    /**
     * User's family name.
     * @type {string}
     * @memberof Auth0User
     */
    familyName?: string;
    /**
     * User's given name.
     *
     * @type {string}
     * @memberof Auth0User
     */
    givenName?: string;
    /**
     * Contains info retrieved from the identity provider with which the user originally authenticates.
     * @type {Array<Auth0Identity>}
     * @memberof Auth0User
     */
    identities?: Array<Auth0Identity>;
    /**
     * User's nickname.
     *
     * @type {string}
     * @memberof Auth0User
     */
    nickname?: string;
    /**
     *
     * @type {Date}
     * @memberof Auth0User
     */
    updatedAt?: Date;
    /**
     * 	(unique) User's username.
     *
     * @type {string}
     * @memberof Auth0User
     */
    username?: string;
    /**
     *
     * @type {Auth0UserMetadata}
     * @memberof Auth0User
     */
    userMetadata?: Auth0UserMetadata;
    /**
     *
     * @type {string}
     * @memberof Auth0User
     */
    locale?: string;
    /**
     *
     * @type {string}
     * @memberof Auth0User
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof Auth0User
     */
    lastIp?: string;
    /**
     *
     * @type {Date}
     * @memberof Auth0User
     */
    lastLogin?: Date;
    /**
     *
     * @type {number}
     * @memberof Auth0User
     */
    loginsCount?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof Auth0User
     */
    blockedFor?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof Auth0User
     */
    guardianAuthenticators?: Array<string>;
}

/**
 * Check if a given object implements the Auth0User interface.
 */
export function instanceOfAuth0User(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @returns {Auth0User}
 */
export function Auth0UserFromJSON(json: any): Auth0User {
    return Auth0UserFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {Auth0User}
 */
export function Auth0UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'emailVerified': !exists(json, 'email_verified') ? undefined : json['email_verified'],
        'familyName': !exists(json, 'family_name') ? undefined : json['family_name'],
        'givenName': !exists(json, 'given_name') ? undefined : json['given_name'],
        'identities': !exists(json, 'identities') ? undefined : ((json['identities'] as Array<any>).map(Auth0IdentityFromJSON)),
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'username': !exists(json, 'username') ? undefined : json['username'],
        'userMetadata': !exists(json, 'user_metadata') ? undefined : Auth0UserMetadataFromJSON(json['user_metadata']),
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'lastIp': !exists(json, 'last_ip') ? undefined : json['last_ip'],
        'lastLogin': !exists(json, 'last_login') ? undefined : (new Date(json['last_login'])),
        'loginsCount': !exists(json, 'logins_count') ? undefined : json['logins_count'],
        'blockedFor': !exists(json, 'blocked_for') ? undefined : json['blocked_for'],
        'guardianAuthenticators': !exists(json, 'guardian_authenticators') ? undefined : json['guardian_authenticators'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:12 AM
 *
 * @export
 * @param {?(Auth0User | null)} [value]
 * @returns {*}
 */
export function Auth0UserToJSON(value?: Auth0User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'picture': value.picture,
        'email': value.email,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'email_verified': value.emailVerified,
        'family_name': value.familyName,
        'given_name': value.givenName,
        'identities': value.identities === undefined ? undefined : ((value.identities as Array<any>).map(Auth0IdentityToJSON)),
        'nickname': value.nickname,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'username': value.username,
        'user_metadata': Auth0UserMetadataToJSON(value.userMetadata),
        'locale': value.locale,
        'user_id': value.userId,
        'last_ip': value.lastIp,
        'last_login': value.lastLogin === undefined ? undefined : (value.lastLogin.toISOString()),
        'logins_count': value.loginsCount,
        'blocked_for': value.blockedFor,
        'guardian_authenticators': value.guardianAuthenticators,
    };
}

