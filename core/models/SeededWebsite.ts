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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';

/**
 * This is the minimum information required to create a website for a specific asset.
 *
 * you can optionally add an asset, or person id to attach this website directly to it
 *
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededWebsite
 */
export interface SeededWebsite {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the specific asset that this website is going to get attached to!!
     * @type {string}
     * @memberof SeededWebsite
     */
    asset?: string;
    /**
     * This is the specific conversation that this website is going to get attached to!!
     * @type {string}
     * @memberof SeededWebsite
     */
    conversation?: string;
    /**
     * this is the url of the website.
     * @type {string}
     * @memberof SeededWebsite
     */
    url: string;
    /**
     * name of the website.(customizable and updateable as well.)
     * @type {string}
     * @memberof SeededWebsite
     */
    name: string;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededWebsite
     */
    mechanism?: MechanismEnum;
    /**
     * this is a uuid of a person that we are going to add the website too.
     * @type {string}
     * @memberof SeededWebsite
     */
    person?: string;
}

/**
 * Check if a given object implements the SeededWebsite interface.
 */
export function instanceOfSeededWebsite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededWebsite}
 */
export function SeededWebsiteFromJSON(json: any): SeededWebsite {
    return SeededWebsiteFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededWebsite}
 */
export function SeededWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededWebsite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'conversation': !exists(json, 'conversation') ? undefined : json['conversation'],
        'url': json['url'],
        'name': json['name'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'person': !exists(json, 'person') ? undefined : json['person'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {?(SeededWebsite | null)} [value]
 * @returns {*}
 */
export function SeededWebsiteToJSON(value?: SeededWebsite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'conversation': value.conversation,
        'url': value.url,
        'name': value.name,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'person': value.person,
    };
}

