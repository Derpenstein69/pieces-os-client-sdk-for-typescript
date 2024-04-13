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
import type { SeededTrackedAdoptionEvent } from './SeededTrackedAdoptionEvent';
import {
    SeededTrackedAdoptionEventFromJSON,
    SeededTrackedAdoptionEventFromJSONTyped,
    SeededTrackedAdoptionEventToJSON,
} from './SeededTrackedAdoptionEvent';
import type { SeededTrackedAssetEvent } from './SeededTrackedAssetEvent';
import {
    SeededTrackedAssetEventFromJSON,
    SeededTrackedAssetEventFromJSONTyped,
    SeededTrackedAssetEventToJSON,
} from './SeededTrackedAssetEvent';
import type { SeededTrackedAssetsEvent } from './SeededTrackedAssetsEvent';
import {
    SeededTrackedAssetsEventFromJSON,
    SeededTrackedAssetsEventFromJSONTyped,
    SeededTrackedAssetsEventToJSON,
} from './SeededTrackedAssetsEvent';
import type { SeededTrackedConversationEvent } from './SeededTrackedConversationEvent';
import {
    SeededTrackedConversationEventFromJSON,
    SeededTrackedConversationEventFromJSONTyped,
    SeededTrackedConversationEventToJSON,
} from './SeededTrackedConversationEvent';
import type { SeededTrackedFormatEvent } from './SeededTrackedFormatEvent';
import {
    SeededTrackedFormatEventFromJSON,
    SeededTrackedFormatEventFromJSONTyped,
    SeededTrackedFormatEventToJSON,
} from './SeededTrackedFormatEvent';
import type { SeededTrackedInteractionEvent } from './SeededTrackedInteractionEvent';
import {
    SeededTrackedInteractionEventFromJSON,
    SeededTrackedInteractionEventFromJSONTyped,
    SeededTrackedInteractionEventToJSON,
} from './SeededTrackedInteractionEvent';
import type { SeededTrackedKeyboardEvent } from './SeededTrackedKeyboardEvent';
import {
    SeededTrackedKeyboardEventFromJSON,
    SeededTrackedKeyboardEventFromJSONTyped,
    SeededTrackedKeyboardEventToJSON,
} from './SeededTrackedKeyboardEvent';
import type { SeededTrackedMachineLearningEvent } from './SeededTrackedMachineLearningEvent';
import {
    SeededTrackedMachineLearningEventFromJSON,
    SeededTrackedMachineLearningEventFromJSONTyped,
    SeededTrackedMachineLearningEventToJSON,
} from './SeededTrackedMachineLearningEvent';
import type { SeededTrackedSessionEvent } from './SeededTrackedSessionEvent';
import {
    SeededTrackedSessionEventFromJSON,
    SeededTrackedSessionEventFromJSONTyped,
    SeededTrackedSessionEventToJSON,
} from './SeededTrackedSessionEvent';

/**
 * This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.
 *
 * This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID's)
 * @export
 * @interface SeededConnectorTracking
 */
export interface SeededConnectorTracking {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorTracking
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededTrackedFormatEvent}
     * @memberof SeededConnectorTracking
     */
    format?: SeededTrackedFormatEvent;
    /**
     *
     * @type {SeededTrackedAssetEvent}
     * @memberof SeededConnectorTracking
     */
    asset?: SeededTrackedAssetEvent;
    /**
     *
     * @type {SeededTrackedInteractionEvent}
     * @memberof SeededConnectorTracking
     */
    interaction?: SeededTrackedInteractionEvent;
    /**
     *
     * @type {SeededTrackedKeyboardEvent}
     * @memberof SeededConnectorTracking
     */
    keyboard?: SeededTrackedKeyboardEvent;
    /**
     *
     * @type {SeededTrackedSessionEvent}
     * @memberof SeededConnectorTracking
     */
    session?: SeededTrackedSessionEvent;
    /**
     *
     * @type {SeededTrackedAssetsEvent}
     * @memberof SeededConnectorTracking
     */
    assets?: SeededTrackedAssetsEvent;
    /**
     *
     * @type {SeededTrackedMachineLearningEvent}
     * @memberof SeededConnectorTracking
     */
    ml?: SeededTrackedMachineLearningEvent;
    /**
     *
     * @type {SeededTrackedAdoptionEvent}
     * @memberof SeededConnectorTracking
     */
    adoption?: SeededTrackedAdoptionEvent;
    /**
     *
     * @type {SeededTrackedConversationEvent}
     * @memberof SeededConnectorTracking
     */
    conversation?: SeededTrackedConversationEvent;
}

/**
 * Check if a given object implements the SeededConnectorTracking interface.
 */
export function instanceOfSeededConnectorTracking(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {*} json
 * @returns {SeededConnectorTracking}
 */
export function SeededConnectorTrackingFromJSON(json: any): SeededConnectorTracking {
    return SeededConnectorTrackingFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SeededConnectorTracking}
 */
export function SeededConnectorTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'format': !exists(json, 'format') ? undefined : SeededTrackedFormatEventFromJSON(json['format']),
        'asset': !exists(json, 'asset') ? undefined : SeededTrackedAssetEventFromJSON(json['asset']),
        'interaction': !exists(json, 'interaction') ? undefined : SeededTrackedInteractionEventFromJSON(json['interaction']),
        'keyboard': !exists(json, 'keyboard') ? undefined : SeededTrackedKeyboardEventFromJSON(json['keyboard']),
        'session': !exists(json, 'session') ? undefined : SeededTrackedSessionEventFromJSON(json['session']),
        'assets': !exists(json, 'assets') ? undefined : SeededTrackedAssetsEventFromJSON(json['assets']),
        'ml': !exists(json, 'ml') ? undefined : SeededTrackedMachineLearningEventFromJSON(json['ml']),
        'adoption': !exists(json, 'adoption') ? undefined : SeededTrackedAdoptionEventFromJSON(json['adoption']),
        'conversation': !exists(json, 'conversation') ? undefined : SeededTrackedConversationEventFromJSON(json['conversation']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:26 AM
 *
 * @export
 * @param {?(SeededConnectorTracking | null)} [value]
 * @returns {*}
 */
export function SeededConnectorTrackingToJSON(value?: SeededConnectorTracking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'format': SeededTrackedFormatEventToJSON(value.format),
        'asset': SeededTrackedAssetEventToJSON(value.asset),
        'interaction': SeededTrackedInteractionEventToJSON(value.interaction),
        'keyboard': SeededTrackedKeyboardEventToJSON(value.keyboard),
        'session': SeededTrackedSessionEventToJSON(value.session),
        'assets': SeededTrackedAssetsEventToJSON(value.assets),
        'ml': SeededTrackedMachineLearningEventToJSON(value.ml),
        'adoption': SeededTrackedAdoptionEventToJSON(value.adoption),
        'conversation': SeededTrackedConversationEventToJSON(value.conversation),
    };
}

