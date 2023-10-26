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
import { EmbeddedModelSchema } from './';
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
export declare enum SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum {
    TheAssetsListWasRefreshedThroughAKeyboardShortcut = "the_assets_list_was_refreshed_through_a_keyboard_shortcut"
}
export declare function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON(json: any): SeededTrackedKeyboardEventIdentifierDescriptionPairs;
export declare function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedKeyboardEventIdentifierDescriptionPairs;
export declare function SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON(value?: SeededTrackedKeyboardEventIdentifierDescriptionPairs | null): any;