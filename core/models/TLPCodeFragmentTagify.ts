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
import type { TLPCodeSnippetTagifyCode } from './TLPCodeSnippetTagifyCode';
import {
    TLPCodeSnippetTagifyCodeFromJSON,
    TLPCodeSnippetTagifyCodeFromJSONTyped,
    TLPCodeSnippetTagifyCodeToJSON,
} from './TLPCodeSnippetTagifyCode';

/**
 * 
 * @export
 * @interface TLPCodeFragmentTagify
 */
export interface TLPCodeFragmentTagify {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentTagify
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeSnippetTagifyCode}
     * @memberof TLPCodeFragmentTagify
     */
    code?: TLPCodeSnippetTagifyCode;
}

/**
 * Check if a given object implements the TLPCodeFragmentTagify interface.
 */
export function instanceOfTLPCodeFragmentTagify(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TLPCodeFragmentTagifyFromJSON(json: any): TLPCodeFragmentTagify {
    return TLPCodeFragmentTagifyFromJSONTyped(json, false);
}

export function TLPCodeFragmentTagifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentTagify {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'code': !exists(json, 'code') ? undefined : TLPCodeSnippetTagifyCodeFromJSON(json['code']),
    };
}

export function TLPCodeFragmentTagifyToJSON(value?: TLPCodeFragmentTagify | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'code': TLPCodeSnippetTagifyCodeToJSON(value.code),
    };
}

