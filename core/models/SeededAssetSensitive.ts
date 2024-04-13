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
import type { SensitiveCategoryEnum } from './SensitiveCategoryEnum';
import {
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
} from './SensitiveCategoryEnum';
import type { SensitiveMetadata } from './SensitiveMetadata';
import {
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
} from './SensitiveMetadata';
import type { SensitiveSeverityEnum } from './SensitiveSeverityEnum';
import {
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
} from './SensitiveSeverityEnum';

/**
 * This is the seededAssetSensitive, this does not have an id yet as we will add it on the server side.
 *
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 *
 * This is different that hte SeededSensitive as this is pre-before the asset has been created.(but added when the asset is created.
 * @export
 * @interface SeededAssetSensitive
 */
export interface SeededAssetSensitive {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the string representative of the sensative piece of data.
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    text: string;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededAssetSensitive
     */
    mechanism?: MechanismEnum;
    /**
     *
     * @type {SensitiveCategoryEnum}
     * @memberof SeededAssetSensitive
     */
    category: SensitiveCategoryEnum;
    /**
     *
     * @type {SensitiveSeverityEnum}
     * @memberof SeededAssetSensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     *
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    description: string;
    /**
     *
     * @type {SensitiveMetadata}
     * @memberof SeededAssetSensitive
     */
    metadata?: SensitiveMetadata;
}

/**
 * Check if a given object implements the SeededAssetSensitive interface.
 */
export function instanceOfSeededAssetSensitive(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededAssetSensitive}
 */
export function SeededAssetSensitiveFromJSON(json: any): SeededAssetSensitive {
    return SeededAssetSensitiveFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededAssetSensitive}
 */
export function SeededAssetSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': SensitiveCategoryEnumFromJSON(json['category']),
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : SensitiveMetadataFromJSON(json['metadata']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {?(SeededAssetSensitive | null)} [value]
 * @returns {*}
 */
export function SeededAssetSensitiveToJSON(value?: SeededAssetSensitive | null): any {
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
        'category': SensitiveCategoryEnumToJSON(value.category),
        'severity': SensitiveSeverityEnumToJSON(value.severity),
        'name': value.name,
        'description': value.description,
        'metadata': SensitiveMetadataToJSON(value.metadata),
    };
}

