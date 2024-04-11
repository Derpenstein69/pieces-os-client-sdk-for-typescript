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
import type { FlattenedHint } from './FlattenedHint';
import {
    FlattenedHintFromJSON,
    FlattenedHintFromJSONTyped,
    FlattenedHintToJSON,
} from './FlattenedHint';

/**
 * This is the referenced version of a hint, main used for the uuid.
 * @export
 * @interface ReferencedHint
 */
export interface ReferencedHint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedHint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedHint
     */
    id: string;
    /**
     * 
     * @type {FlattenedHint}
     * @memberof ReferencedHint
     */
    reference?: FlattenedHint;
}

/**
 * Check if a given object implements the ReferencedHint interface.
 */
export function instanceOfReferencedHint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReferencedHintFromJSON(json: any): ReferencedHint {
    return ReferencedHintFromJSONTyped(json, false);
}

export function ReferencedHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedHint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedHintFromJSON(json['reference']),
    };
}

export function ReferencedHintToJSON(value?: ReferencedHint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedHintToJSON(value.reference),
    };
}

