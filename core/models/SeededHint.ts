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
import type { HintTypeEnum } from './HintTypeEnum';
import {
    HintTypeEnumFromJSON,
    HintTypeEnumFromJSONTyped,
    HintTypeEnumToJSON,
} from './HintTypeEnum';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';

/**
 *
 * @export
 * @interface SeededHint
 */
export interface SeededHint {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededHint
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededHint
     */
    mechanism?: MechanismEnum;
    /**
     * This is an asset id that we are using to link this to an asset.
     * @type {string}
     * @memberof SeededHint
     */
    asset?: string;
    /**
     *
     * @type {HintTypeEnum}
     * @memberof SeededHint
     */
    type: HintTypeEnum;
    /**
     * This is the text of the hint.
     * @type {string}
     * @memberof SeededHint
     */
    text: string;
    /**
     * this is a model id. that we are using to link this to a model.
     * @type {string}
     * @memberof SeededHint
     */
    model?: string;
}

/**
 * Check if a given object implements the SeededHint interface.
 */
export function instanceOfSeededHint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededHint}
 */
export function SeededHintFromJSON(json: any): SeededHint {
    return SeededHintFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededHint}
 */
export function SeededHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededHint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'type': HintTypeEnumFromJSON(json['type']),
        'text': json['text'],
        'model': !exists(json, 'model') ? undefined : json['model'],
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:25 AM
 *
 * @export
 * @param {?(SeededHint | null)} [value]
 * @returns {*}
 */
export function SeededHintToJSON(value?: SeededHint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'asset': value.asset,
        'type': HintTypeEnumToJSON(value.type),
        'text': value.text,
        'model': value.model,
    };
}

