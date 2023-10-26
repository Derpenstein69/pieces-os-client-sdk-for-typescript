/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
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
} from './';

/**
 * 
 * @export
 * @interface SeededTrackedKeyboardEventIdentifierDescriptionPairs
 */
export interface SeededTrackedKeyboardEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedKeyboardEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededTrackedKeyboardEventIdentifierDescriptionPairs
     */
    assetsListRefreshed?: SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum;
}

/**
* @export
* @enum {string}
*/
export enum SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum {
    TheAssetsListWasRefreshedThroughAKeyboardShortcut = 'the_assets_list_was_refreshed_through_a_keyboard_shortcut'
}

export function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON(json: any): SeededTrackedKeyboardEventIdentifierDescriptionPairs {
    return SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedKeyboardEventIdentifierDescriptionPairs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assetsListRefreshed': !exists(json, 'assets_list_refreshed') ? undefined : json['assets_list_refreshed'],
    };
}

export function SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON(value?: SeededTrackedKeyboardEventIdentifierDescriptionPairs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'assets_list_refreshed': value.assetsListRefreshed,
    };
}

