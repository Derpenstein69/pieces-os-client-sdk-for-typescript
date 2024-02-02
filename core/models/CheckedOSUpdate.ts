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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    UpdatingStatusEnum,
    UpdatingStatusEnumFromJSON,
    UpdatingStatusEnumFromJSONTyped,
    UpdatingStatusEnumToJSON,
} from './';

/**
 * This is the returnable for /os/update/check
 * @export
 * @interface CheckedOSUpdate
 */
export interface CheckedOSUpdate {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof CheckedOSUpdate
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {UpdatingStatusEnum}
     * @memberof CheckedOSUpdate
     */
    status: UpdatingStatusEnum;
}

export function CheckedOSUpdateFromJSON(json: any): CheckedOSUpdate {
    return CheckedOSUpdateFromJSONTyped(json, false);
}

export function CheckedOSUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckedOSUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'status': UpdatingStatusEnumFromJSON(json['status']),
    };
}

export function CheckedOSUpdateToJSON(value?: CheckedOSUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'status': UpdatingStatusEnumToJSON(value.status),
    };
}


