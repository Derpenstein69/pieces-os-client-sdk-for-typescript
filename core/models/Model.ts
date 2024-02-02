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
import {
    ByteDescriptor,
    ByteDescriptorFromJSON,
    ByteDescriptorFromJSONTyped,
    ByteDescriptorToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    ExternalMLProviderEnum,
    ExternalMLProviderEnumFromJSON,
    ExternalMLProviderEnumFromJSONTyped,
    ExternalMLProviderEnumToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    ModelFoundationEnum,
    ModelFoundationEnumFromJSON,
    ModelFoundationEnumFromJSONTyped,
    ModelFoundationEnumToJSON,
    ModelMaxTokens,
    ModelMaxTokensFromJSON,
    ModelMaxTokensFromJSONTyped,
    ModelMaxTokensToJSON,
    ModelTypeEnum,
    ModelTypeEnumFromJSON,
    ModelTypeEnumFromJSONTyped,
    ModelTypeEnumToJSON,
    ModelUsageEnum,
    ModelUsageEnumFromJSON,
    ModelUsageEnumFromJSONTyped,
    ModelUsageEnumToJSON,
} from './';

/**
 * This is a Machine Learning Model, that will give readable information about the Machine Learning Model Used.
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Model
     */
    schema?: EmbeddedModelSchema;
    /**
     * uuid
     * @type {string}
     * @memberof Model
     */
    id: string;
    /**
     * this is a version of the model.
     * @type {string}
     * @memberof Model
     */
    version: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Model
     */
    created: GroupedTimestamp;
    /**
     * This is an Optional Name of the Model.
     * @type {string}
     * @memberof Model
     */
    name: string;
    /**
     * An Optional Description of the model itself.
     * @type {string}
     * @memberof Model
     */
    description?: string;
    /**
     * This will inform the user if this was a model that is hosted in the cloud
     * @type {boolean}
     * @memberof Model
     */
    cloud: boolean;
    /**
     * 
     * @type {ModelTypeEnum}
     * @memberof Model
     */
    type: ModelTypeEnum;
    /**
     * 
     * @type {ModelUsageEnum}
     * @memberof Model
     */
    usage: ModelUsageEnum;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof Model
     */
    bytes?: ByteDescriptor;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof Model
     */
    ram?: ByteDescriptor;
    /**
     * quantization is a string like: q8f16_0,  q4f16_1, etc...
     * @type {string}
     * @memberof Model
     */
    quantization?: string;
    /**
     * 
     * @type {ModelFoundationEnum}
     * @memberof Model
     */
    foundation?: ModelFoundationEnum;
    /**
     * This is an optional bool to let us know if this model has been downloaded locally.
     * @type {boolean}
     * @memberof Model
     */
    downloaded?: boolean;
    /**
     * This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.)
     * @type {boolean}
     * @memberof Model
     */
    loaded?: boolean;
    /**
     * This is the unique model name used to load the model.
     * @type {string}
     * @memberof Model
     */
    unique?: string;
    /**
     * This is the number of parameters in terms of billions.
     * @type {number}
     * @memberof Model
     */
    parameters?: number | null;
    /**
     * 
     * @type {ExternalMLProviderEnum}
     * @memberof Model
     */
    provider?: ExternalMLProviderEnum;
    /**
     * This is an optional bool that is optimized for CPU usage.
     * @type {boolean}
     * @memberof Model
     */
    cpu?: boolean;
    /**
     * This is a calculated property, that will say if this is currently downloading.
     * @type {boolean}
     * @memberof Model
     */
    downloading?: boolean;
    /**
     * 
     * @type {ModelMaxTokens}
     * @memberof Model
     */
    maxTokens?: ModelMaxTokens;
    /**
     * 
     * @type {boolean}
     * @memberof Model
     */
    custom?: boolean;
}

export function ModelFromJSON(json: any): Model {
    return ModelFromJSONTyped(json, false);
}

export function ModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Model {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'version': json['version'],
        'created': GroupedTimestampFromJSON(json['created']),
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'cloud': json['cloud'],
        'type': ModelTypeEnumFromJSON(json['type']),
        'usage': ModelUsageEnumFromJSON(json['usage']),
        'bytes': !exists(json, 'bytes') ? undefined : ByteDescriptorFromJSON(json['bytes']),
        'ram': !exists(json, 'ram') ? undefined : ByteDescriptorFromJSON(json['ram']),
        'quantization': !exists(json, 'quantization') ? undefined : json['quantization'],
        'foundation': !exists(json, 'foundation') ? undefined : ModelFoundationEnumFromJSON(json['foundation']),
        'downloaded': !exists(json, 'downloaded') ? undefined : json['downloaded'],
        'loaded': !exists(json, 'loaded') ? undefined : json['loaded'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'provider': !exists(json, 'provider') ? undefined : ExternalMLProviderEnumFromJSON(json['provider']),
        'cpu': !exists(json, 'cpu') ? undefined : json['cpu'],
        'downloading': !exists(json, 'downloading') ? undefined : json['downloading'],
        'maxTokens': !exists(json, 'maxTokens') ? undefined : ModelMaxTokensFromJSON(json['maxTokens']),
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
    };
}

export function ModelToJSON(value?: Model | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'version': value.version,
        'created': GroupedTimestampToJSON(value.created),
        'name': value.name,
        'description': value.description,
        'cloud': value.cloud,
        'type': ModelTypeEnumToJSON(value.type),
        'usage': ModelUsageEnumToJSON(value.usage),
        'bytes': ByteDescriptorToJSON(value.bytes),
        'ram': ByteDescriptorToJSON(value.ram),
        'quantization': value.quantization,
        'foundation': ModelFoundationEnumToJSON(value.foundation),
        'downloaded': value.downloaded,
        'loaded': value.loaded,
        'unique': value.unique,
        'parameters': value.parameters,
        'provider': ExternalMLProviderEnumToJSON(value.provider),
        'cpu': value.cpu,
        'downloading': value.downloading,
        'maxTokens': ModelMaxTokensToJSON(value.maxTokens),
        'custom': value.custom,
    };
}


