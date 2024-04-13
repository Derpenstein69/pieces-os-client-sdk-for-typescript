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
import type { InteractedAssetInteractions } from './InteractedAssetInteractions';
import {
    InteractedAssetInteractionsFromJSON,
    InteractedAssetInteractionsFromJSONTyped,
    InteractedAssetInteractionsToJSON,
} from './InteractedAssetInteractions';

/**
 * A model that represents an asset that has been interacted with.
 * @export
 * @interface InteractedAsset
 */
export interface InteractedAsset {
    /**
     * A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters)
     * @type {string}
     * @memberof InteractedAsset
     */
    asset?: string;
    /**
     *
     * @type {InteractedAssetInteractions}
     * @memberof InteractedAsset
     */
    interactions?: InteractedAssetInteractions;
}

/**
 * Check if a given object implements the InteractedAsset interface.
 */
export function instanceOfInteractedAsset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @returns {InteractedAsset}
 */
export function InteractedAssetFromJSON(json: any): InteractedAsset {
    return InteractedAssetFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {InteractedAsset}
 */
export function InteractedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): InteractedAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'interactions': !exists(json, 'interactions') ? undefined : InteractedAssetInteractionsFromJSON(json['interactions']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:15 AM
 *
 * @export
 * @param {?(InteractedAsset | null)} [value]
 * @returns {*}
 */
export function InteractedAssetToJSON(value?: InteractedAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'asset': value.asset,
        'interactions': InteractedAssetInteractionsToJSON(value.interactions),
    };
}

