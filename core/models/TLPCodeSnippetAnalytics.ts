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
import type { TLPCodeFragmentClassification } from './TLPCodeFragmentClassification';
import {
    TLPCodeFragmentClassificationFromJSON,
    TLPCodeFragmentClassificationFromJSONTyped,
    TLPCodeFragmentClassificationToJSON,
} from './TLPCodeFragmentClassification';
import type { TLPCodeFragmentDescription } from './TLPCodeFragmentDescription';
import {
    TLPCodeFragmentDescriptionFromJSON,
    TLPCodeFragmentDescriptionFromJSONTyped,
    TLPCodeFragmentDescriptionToJSON,
} from './TLPCodeFragmentDescription';
import type { TLPCodeFragmentReclassification } from './TLPCodeFragmentReclassification';
import {
    TLPCodeFragmentReclassificationFromJSON,
    TLPCodeFragmentReclassificationFromJSONTyped,
    TLPCodeFragmentReclassificationToJSON,
} from './TLPCodeFragmentReclassification';
import type { TLPCodeFragmentStatistics } from './TLPCodeFragmentStatistics';
import {
    TLPCodeFragmentStatisticsFromJSON,
    TLPCodeFragmentStatisticsFromJSONTyped,
    TLPCodeFragmentStatisticsToJSON,
} from './TLPCodeFragmentStatistics';
import type { TLPCodeFragmentTagify } from './TLPCodeFragmentTagify';
import {
    TLPCodeFragmentTagifyFromJSON,
    TLPCodeFragmentTagifyFromJSONTyped,
    TLPCodeFragmentTagifyToJSON,
} from './TLPCodeFragmentTagify';
import type { TLPCodeSnippetSuggestedInteractions } from './TLPCodeSnippetSuggestedInteractions';
import {
    TLPCodeSnippetSuggestedInteractionsFromJSON,
    TLPCodeSnippetSuggestedInteractionsFromJSONTyped,
    TLPCodeSnippetSuggestedInteractionsToJSON,
} from './TLPCodeSnippetSuggestedInteractions';

/**
 * 
 * @export
 * @interface TLPCodeSnippetAnalytics
 */
export interface TLPCodeSnippetAnalytics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetAnalytics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeFragmentStatistics}
     * @memberof TLPCodeSnippetAnalytics
     */
    statistics?: TLPCodeFragmentStatistics;
    /**
     * 
     * @type {TLPCodeFragmentClassification}
     * @memberof TLPCodeSnippetAnalytics
     */
    classification?: TLPCodeFragmentClassification;
    /**
     * 
     * @type {TLPCodeFragmentReclassification}
     * @memberof TLPCodeSnippetAnalytics
     */
    reclassification?: TLPCodeFragmentReclassification;
    /**
     * 
     * @type {TLPCodeSnippetSuggestedInteractions}
     * @memberof TLPCodeSnippetAnalytics
     */
    suggested?: TLPCodeSnippetSuggestedInteractions;
    /**
     * 
     * @type {TLPCodeFragmentTagify}
     * @memberof TLPCodeSnippetAnalytics
     */
    tagify?: TLPCodeFragmentTagify;
    /**
     * 
     * @type {TLPCodeFragmentDescription}
     * @memberof TLPCodeSnippetAnalytics
     */
    description?: TLPCodeFragmentDescription;
}

/**
 * Check if a given object implements the TLPCodeSnippetAnalytics interface.
 */
export function instanceOfTLPCodeSnippetAnalytics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TLPCodeSnippetAnalyticsFromJSON(json: any): TLPCodeSnippetAnalytics {
    return TLPCodeSnippetAnalyticsFromJSONTyped(json, false);
}

export function TLPCodeSnippetAnalyticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetAnalytics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'statistics': !exists(json, 'statistics') ? undefined : TLPCodeFragmentStatisticsFromJSON(json['statistics']),
        'classification': !exists(json, 'classification') ? undefined : TLPCodeFragmentClassificationFromJSON(json['classification']),
        'reclassification': !exists(json, 'reclassification') ? undefined : TLPCodeFragmentReclassificationFromJSON(json['reclassification']),
        'suggested': !exists(json, 'suggested') ? undefined : TLPCodeSnippetSuggestedInteractionsFromJSON(json['suggested']),
        'tagify': !exists(json, 'tagify') ? undefined : TLPCodeFragmentTagifyFromJSON(json['tagify']),
        'description': !exists(json, 'description') ? undefined : TLPCodeFragmentDescriptionFromJSON(json['description']),
    };
}

export function TLPCodeSnippetAnalyticsToJSON(value?: TLPCodeSnippetAnalytics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'statistics': TLPCodeFragmentStatisticsToJSON(value.statistics),
        'classification': TLPCodeFragmentClassificationToJSON(value.classification),
        'reclassification': TLPCodeFragmentReclassificationToJSON(value.reclassification),
        'suggested': TLPCodeSnippetSuggestedInteractionsToJSON(value.suggested),
        'tagify': TLPCodeFragmentTagifyToJSON(value.tagify),
        'description': TLPCodeFragmentDescriptionToJSON(value.description),
    };
}

