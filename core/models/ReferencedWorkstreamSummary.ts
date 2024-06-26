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
import type { FlattenedWorkstreamSummary } from './FlattenedWorkstreamSummary';
import {
    FlattenedWorkstreamSummaryFromJSON,
    FlattenedWorkstreamSummaryFromJSONTyped,
    FlattenedWorkstreamSummaryToJSON,
} from './FlattenedWorkstreamSummary';

/**
 * this is a referenced minimal version of a WorkstreamSummary typically just our uuid.
 * @export
 * @interface ReferencedWorkstreamSummary
 */
export interface ReferencedWorkstreamSummary {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedWorkstreamSummary
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedWorkstreamSummary
     */
    id: string;
    /**
     * 
     * @type {FlattenedWorkstreamSummary}
     * @memberof ReferencedWorkstreamSummary
     */
    reference?: FlattenedWorkstreamSummary;
}

/**
 * Check if a given object implements the ReferencedWorkstreamSummary interface.
 */
export function instanceOfReferencedWorkstreamSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReferencedWorkstreamSummaryFromJSON(json: any): ReferencedWorkstreamSummary {
    return ReferencedWorkstreamSummaryFromJSONTyped(json, false);
}

export function ReferencedWorkstreamSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedWorkstreamSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedWorkstreamSummaryFromJSON(json['reference']),
    };
}

export function ReferencedWorkstreamSummaryToJSON(value?: ReferencedWorkstreamSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedWorkstreamSummaryToJSON(value.reference),
    };
}

