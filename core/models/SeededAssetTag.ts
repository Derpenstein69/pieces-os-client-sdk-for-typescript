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
import type { TagCategoryEnum } from './TagCategoryEnum';
import {
    TagCategoryEnumFromJSON,
    TagCategoryEnumFromJSONTyped,
    TagCategoryEnumToJSON,
} from './TagCategoryEnum';

/**
 * This is similar to an SeededTag, where this is the minimum information of a tag, but this can get added to a seededAsset,  where you may not yet have an asset id.
 * @export
 * @interface SeededAssetTag
 */
export interface SeededAssetTag {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the text that represents the tag.
     * @type {string}
     * @memberof SeededAssetTag
     */
    text: string;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededAssetTag
     */
    mechanism?: MechanismEnum;
    /**
     *
     * @type {TagCategoryEnum}
     * @memberof SeededAssetTag
     */
    category?: TagCategoryEnum;
}

/**
 * Check if a given object implements the SeededAssetTag interface.
 */
export function instanceOfSeededAssetTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededAssetTag}
 */
export function SeededAssetTagFromJSON(json: any): SeededAssetTag {
    return SeededAssetTagFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededAssetTag}
 */
export function SeededAssetTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': !exists(json, 'category') ? undefined : TagCategoryEnumFromJSON(json['category']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {?(SeededAssetTag | null)} [value]
 * @returns {*}
 */
export function SeededAssetTagToJSON(value?: SeededAssetTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'text': value.text,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'category': TagCategoryEnumToJSON(value.category),
    };
}

