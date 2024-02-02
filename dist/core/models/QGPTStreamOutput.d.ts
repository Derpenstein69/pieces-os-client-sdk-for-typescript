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
import { QGPTAgentRoutes, QGPTQuestionOutput, QGPTRelevanceOutput, QGPTStreamEnum } from './';
/**
 * This is the out for the /qgpt/stream endpoint.
 *
 * 200: success
 * 401: invalid authentication/api key
 * 429: Rate limit/Quota exceeded
 * 500: server had an error
 * 503: the engine is currently overloaded
 * @export
 * @interface QGPTStreamOutput
 */
export interface QGPTStreamOutput {
    /**
     * This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one.
     * @type {string}
     * @memberof QGPTStreamOutput
     */
    request?: string;
    /**
     *
     * @type {QGPTRelevanceOutput}
     * @memberof QGPTStreamOutput
     */
    relevance?: QGPTRelevanceOutput;
    /**
     *
     * @type {QGPTQuestionOutput}
     * @memberof QGPTStreamOutput
     */
    question?: QGPTQuestionOutput;
    /**
     *
     * @type {QGPTStreamEnum}
     * @memberof QGPTStreamOutput
     */
    status?: QGPTStreamEnum;
    /**
     * This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
     * @type {string}
     * @memberof QGPTStreamOutput
     */
    conversation: string;
    /**
     * This will be provided
     * @type {number}
     * @memberof QGPTStreamOutput
     */
    statusCode?: number | null;
    /**
     * optional error message is the status code is NOT 200
     * @type {string}
     * @memberof QGPTStreamOutput
     */
    errorMessage?: string;
    /**
     *
     * @type {QGPTAgentRoutes}
     * @memberof QGPTStreamOutput
     */
    agentRoutes?: QGPTAgentRoutes;
}
export declare function QGPTStreamOutputFromJSON(json: any): QGPTStreamOutput;
export declare function QGPTStreamOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTStreamOutput;
export declare function QGPTStreamOutputToJSON(value?: QGPTStreamOutput | null): any;