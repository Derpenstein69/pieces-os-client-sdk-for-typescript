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
    SystemExecutionCpuInformation,
    SystemExecutionCpuInformationFromJSON,
    SystemExecutionCpuInformationFromJSONTyped,
    SystemExecutionCpuInformationToJSON,
} from './';

/**
 * This is system information that we are able to get from the users machine(rust package TBD). TODO potentially pull this out of TLP.
 * @export
 * @interface SystemExecutionInformation
 */
export interface SystemExecutionInformation {
    /**
     * 
     * @type {number}
     * @memberof SystemExecutionInformation
     */
    memory: number;
    /**
     * 
     * @type {string}
     * @memberof SystemExecutionInformation
     */
    os: string;
    /**
     * 
     * @type {string}
     * @memberof SystemExecutionInformation
     */
    kernel: string;
    /**
     * 
     * @type {SystemExecutionCpuInformation}
     * @memberof SystemExecutionInformation
     */
    cpu: SystemExecutionCpuInformation;
}

export function SystemExecutionInformationFromJSON(json: any): SystemExecutionInformation {
    return SystemExecutionInformationFromJSONTyped(json, false);
}

export function SystemExecutionInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemExecutionInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memory': json['memory'],
        'os': json['os'],
        'kernel': json['kernel'],
        'cpu': SystemExecutionCpuInformationFromJSON(json['cpu']),
    };
}

export function SystemExecutionInformationToJSON(value?: SystemExecutionInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memory': value.memory,
        'os': value.os,
        'kernel': value.kernel,
        'cpu': SystemExecutionCpuInformationToJSON(value.cpu),
    };
}

