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
import type { ExternallySourcedEnum } from './ExternallySourcedEnum';
import {
    ExternallySourcedEnumFromJSON,
    ExternallySourcedEnumFromJSONTyped,
    ExternallySourcedEnumToJSON,
} from './ExternallySourcedEnum';
import type { MailgunMetadata } from './MailgunMetadata';
import {
    MailgunMetadataFromJSON,
    MailgunMetadataFromJSONTyped,
    MailgunMetadataToJSON,
} from './MailgunMetadata';

/**
 * This is all optional properties around the most basic information around a non-pieces user.
 *
 * A Basic type will NOT have a scope as it is not an actual pieces user.
 * @export
 * @interface PersonBasicType
 */
export interface PersonBasicType {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof PersonBasicType
     */
    schema?: EmbeddedModelSchema;
    /**
     * username or twitter handle...etc
     * @type {string}
     * @memberof PersonBasicType
     */
    username?: string;
    /**
     * This is the name of the basic user.
     * @type {string}
     * @memberof PersonBasicType
     */
    name?: string;
    /**
     * this is a url picture representation of a user.
     * @type {string}
     * @memberof PersonBasicType
     */
    picture?: string;
    /**
     * an email that was extracted.
     * @type {string}
     * @memberof PersonBasicType
     */
    email?: string;
    /**
     *
     * @type {ExternallySourcedEnum}
     * @memberof PersonBasicType
     */
    sourced?: ExternallySourcedEnum;
    /**
     * This is a specific url that this basic user came from.
     * @type {string}
     * @memberof PersonBasicType
     */
    url?: string;
    /**
     *
     * @type {MailgunMetadata}
     * @memberof PersonBasicType
     */
    mailgun?: MailgunMetadata;
}

/**
 * Check if a given object implements the PersonBasicType interface.
 */
export function instanceOfPersonBasicType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {*} json
 * @returns {PersonBasicType}
 */
export function PersonBasicTypeFromJSON(json: any): PersonBasicType {
    return PersonBasicTypeFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {PersonBasicType}
 */
export function PersonBasicTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonBasicType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'username': !exists(json, 'username') ? undefined : json['username'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'sourced': !exists(json, 'sourced') ? undefined : ExternallySourcedEnumFromJSON(json['sourced']),
        'url': !exists(json, 'url') ? undefined : json['url'],
        'mailgun': !exists(json, 'mailgun') ? undefined : MailgunMetadataFromJSON(json['mailgun']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:32 AM
 *
 * @export
 * @param {?(PersonBasicType | null)} [value]
 * @returns {*}
 */
export function PersonBasicTypeToJSON(value?: PersonBasicType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'username': value.username,
        'name': value.name,
        'picture': value.picture,
        'email': value.email,
        'sourced': ExternallySourcedEnumToJSON(value.sourced),
        'url': value.url,
        'mailgun': MailgunMetadataToJSON(value.mailgun),
    };
}

