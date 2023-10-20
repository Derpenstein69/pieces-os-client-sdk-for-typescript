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
import {
    ApplicationNameEnum,
    ApplicationNameEnumFromJSON,
    ApplicationNameEnumFromJSONTyped,
    ApplicationNameEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    PlatformEnum,
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
} from './';

/**
 * A Model to describe what application a format/analytics event originated.
 * @export
 * @interface TrackedApplication
 */
export interface TrackedApplication {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     * The ID of the tracked application.
     * @type {string}
     * @memberof TrackedApplication
     */
    id: string;
    /**
     * 
     * @type {ApplicationNameEnum}
     * @memberof TrackedApplication
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof TrackedApplication
     */
    version: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof TrackedApplication
     */
    platform: PlatformEnum;
}

export function TrackedApplicationFromJSON(json: any): TrackedApplication {
    return TrackedApplicationFromJSONTyped(json, false);
}

export function TrackedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedApplication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': ApplicationNameEnumFromJSON(json['name']),
        'version': json['version'],
        'platform': PlatformEnumFromJSON(json['platform']),
    };
}

export function TrackedApplicationToJSON(value?: TrackedApplication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'name': ApplicationNameEnumToJSON(value.name),
        'version': value.version,
        'platform': PlatformEnumToJSON(value.platform),
    };
}

