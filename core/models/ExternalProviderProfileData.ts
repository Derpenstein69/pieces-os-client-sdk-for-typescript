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
 * All of these will be optional.
 *
 * Will support ProfileData from all our social providers.
 * @export
 * @interface ExternalProviderProfileData
 */
export interface ExternalProviderProfileData {
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    picture?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    email?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExternalProviderProfileData
     */
    emailVerified?: boolean;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    nodeId?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    gravatarId?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    htmlUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    followersUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    followingUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    gistsUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    starredUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    subscriptionsUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    organizationsUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    reposUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    eventsUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    receivedEventsUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExternalProviderProfileData
     */
    siteAdmin?: boolean;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    company?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    blog?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    anchor?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExternalProviderProfileData
     */
    hireable?: boolean;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    bio?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    twitterUsername?: string;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    publicRepos?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    publicGists?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    followers?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    following?: number;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof ExternalProviderProfileData
     */
    updatedAt?: string;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    privateGists?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    totalPrivateRepos?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    ownedPrivateRepos?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    diskUsage?: number;
    /**
     *
     * @type {number}
     * @memberof ExternalProviderProfileData
     */
    collaborators?: number;
    /**
     *
     * @type {boolean}
     * @memberof ExternalProviderProfileData
     */
    twoFactorAuthentication?: boolean;
}

/**
 * Check if a given object implements the ExternalProviderProfileData interface.
 */
export function instanceOfExternalProviderProfileData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @returns {ExternalProviderProfileData}
 */
export function ExternalProviderProfileDataFromJSON(json: any): ExternalProviderProfileData {
    return ExternalProviderProfileDataFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {ExternalProviderProfileData}
 */
export function ExternalProviderProfileDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProviderProfileData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emailVerified': !exists(json, 'email_verified') ? undefined : json['email_verified'],
        'nodeId': !exists(json, 'node_id') ? undefined : json['node_id'],
        'gravatarId': !exists(json, 'gravatar_id') ? undefined : json['gravatar_id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'htmlUrl': !exists(json, 'html_url') ? undefined : json['html_url'],
        'followersUrl': !exists(json, 'followers_url') ? undefined : json['followers_url'],
        'followingUrl': !exists(json, 'following_url') ? undefined : json['following_url'],
        'gistsUrl': !exists(json, 'gists_url') ? undefined : json['gists_url'],
        'starredUrl': !exists(json, 'starred_url') ? undefined : json['starred_url'],
        'subscriptionsUrl': !exists(json, 'subscriptions_url') ? undefined : json['subscriptions_url'],
        'organizationsUrl': !exists(json, 'organizations_url') ? undefined : json['organizations_url'],
        'reposUrl': !exists(json, 'repos_url') ? undefined : json['repos_url'],
        'eventsUrl': !exists(json, 'events_url') ? undefined : json['events_url'],
        'receivedEventsUrl': !exists(json, 'received_events_url') ? undefined : json['received_events_url'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'siteAdmin': !exists(json, 'site_admin') ? undefined : json['site_admin'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'blog': !exists(json, 'blog') ? undefined : json['blog'],
        'anchor': !exists(json, 'anchor') ? undefined : json['anchor'],
        'hireable': !exists(json, 'hireable') ? undefined : json['hireable'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
        'twitterUsername': !exists(json, 'twitter_username') ? undefined : json['twitter_username'],
        'publicRepos': !exists(json, 'public_repos') ? undefined : json['public_repos'],
        'publicGists': !exists(json, 'public_gists') ? undefined : json['public_gists'],
        'followers': !exists(json, 'followers') ? undefined : json['followers'],
        'following': !exists(json, 'following') ? undefined : json['following'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'privateGists': !exists(json, 'private_gists') ? undefined : json['private_gists'],
        'totalPrivateRepos': !exists(json, 'total_private_repos') ? undefined : json['total_private_repos'],
        'ownedPrivateRepos': !exists(json, 'owned_private_repos') ? undefined : json['owned_private_repos'],
        'diskUsage': !exists(json, 'disk_usage') ? undefined : json['disk_usage'],
        'collaborators': !exists(json, 'collaborators') ? undefined : json['collaborators'],
        'twoFactorAuthentication': !exists(json, 'two_factor_authentication') ? undefined : json['two_factor_authentication'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {?(ExternalProviderProfileData | null)} [value]
 * @returns {*}
 */
export function ExternalProviderProfileDataToJSON(value?: ExternalProviderProfileData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'picture': value.picture,
        'nickname': value.nickname,
        'email': value.email,
        'email_verified': value.emailVerified,
        'node_id': value.nodeId,
        'gravatar_id': value.gravatarId,
        'url': value.url,
        'html_url': value.htmlUrl,
        'followers_url': value.followersUrl,
        'following_url': value.followingUrl,
        'gists_url': value.gistsUrl,
        'starred_url': value.starredUrl,
        'subscriptions_url': value.subscriptionsUrl,
        'organizations_url': value.organizationsUrl,
        'repos_url': value.reposUrl,
        'events_url': value.eventsUrl,
        'received_events_url': value.receivedEventsUrl,
        'type': value.type,
        'site_admin': value.siteAdmin,
        'company': value.company,
        'blog': value.blog,
        'anchor': value.anchor,
        'hireable': value.hireable,
        'bio': value.bio,
        'twitter_username': value.twitterUsername,
        'public_repos': value.publicRepos,
        'public_gists': value.publicGists,
        'followers': value.followers,
        'following': value.following,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'private_gists': value.privateGists,
        'total_private_repos': value.totalPrivateRepos,
        'owned_private_repos': value.ownedPrivateRepos,
        'disk_usage': value.diskUsage,
        'collaborators': value.collaborators,
        'two_factor_authentication': value.twoFactorAuthentication,
    };
}

