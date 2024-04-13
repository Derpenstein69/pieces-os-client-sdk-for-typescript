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
 */
export const SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum = {
    TheAssetsListWasRefreshedThroughAKeyboardShortcut: 'the_assets_list_was_refreshed_through_a_keyboard_shortcut'
} as const;
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @typedef {SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum}
 */
export type SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum = typeof SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum[keyof typeof SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum];


/**
 * Check if a given object implements the SeededTrackedKeyboardEventIdentifierDescriptionPairs interface.
 */
export function instanceOfSeededTrackedKeyboardEventIdentifierDescriptionPairs(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededTrackedKeyboardEventIdentifierDescriptionPairs}
 */
export function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON(json: any): SeededTrackedKeyboardEventIdentifierDescriptionPairs {
    return SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededTrackedKeyboardEventIdentifierDescriptionPairs}
 */
export function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedKeyboardEventIdentifierDescriptionPairs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assetsListRefreshed': !exists(json, 'assets_list_refreshed') ? undefined : json['assets_list_refreshed'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:24 AM
 *
 * @export
 * @param {?(SeededTrackedKeyboardEventIdentifierDescriptionPairs | null)} [value]
 * @returns {*}
 */
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

