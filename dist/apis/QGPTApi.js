"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QGPTApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class QGPTApi extends runtime.BaseAPI {
    /**
     * This is only to generate suggested questions that the user can ask. ( we will provide the answer we displayed to the user, the relevant snippets used for the answer, and the previous query.  We will return a list of questions that can be displayed to the user.
     * /qgpt/hints [POST]
     */
    async hintsRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/hints`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTHintsInputToJSON)(requestParameters.qGPTHintsInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTQuestionOutputFromJSON)(jsonValue));
    }
    /**
     * This is only to generate suggested questions that the user can ask. ( we will provide the answer we displayed to the user, the relevant snippets used for the answer, and the previous query.  We will return a list of questions that can be displayed to the user.
     * /qgpt/hints [POST]
     */
    async hints(requestParameters) {
        const response = await this.hintsRaw(requestParameters);
        return await response.value();
    }
    /**
     * This Endpoint is used for Who Support.  IE given context like a Seed, or a qgptConversation, who will be able to help out.   Input: - (optional) seed: Seed - ONLY GOING TO SUPPORT fragments.for now. - (optional) conversation: QGPTConversation.  Output: - persons: Persons
     * /qgpt/persons/related [POST]
     */
    async personsRelatedRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/persons/related`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTPersonsRelatedInputToJSON)(requestParameters.qGPTPersonsRelatedInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTPersonsRelatedOutputFromJSON)(jsonValue));
    }
    /**
     * This Endpoint is used for Who Support.  IE given context like a Seed, or a qgptConversation, who will be able to help out.   Input: - (optional) seed: Seed - ONLY GOING TO SUPPORT fragments.for now. - (optional) conversation: QGPTConversation.  Output: - persons: Persons
     * /qgpt/persons/related [POST]
     */
    async personsRelated(requestParameters) {
        const response = await this.personsRelatedRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is a version of qGPT stream that will stream the inputs.  This will handle relevance.  This will handle question.  This will throw an error if both are passed in. That being said if you want to utalize question && relevant, you can get stream results by passing in relevance with options.question:true.  This will handle multiple conversations.  This is a Websocket.  StatusCodes of the output of this will be on the output of the websocket: 200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded
     * /qgpt/stream [GET]
     */
    async qgptStreamRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTStreamInputToJSON)(requestParameters.qGPTStreamInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTStreamOutputFromJSON)(jsonValue));
    }
    /**
     * This is a version of qGPT stream that will stream the inputs.  This will handle relevance.  This will handle question.  This will throw an error if both are passed in. That being said if you want to utalize question && relevant, you can get stream results by passing in relevance with options.question:true.  This will handle multiple conversations.  This is a Websocket.  StatusCodes of the output of this will be on the output of the websocket: 200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded
     * /qgpt/stream [GET]
     */
    async qgptStream(requestParameters) {
        const response = await this.qgptStreamRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is going to accept, relevant code snippets or uuids returned from the /qgpt/relevance endpoint, as well as a question query and we will return possible results to answer your question.  NOTE: - The relevant seeds, must require either an id, that was used within the /qgpt/relevance endpoint or a seed with afragment/string. or else we will throw and error.  This endpoint will take your query and your relevant snippets and use them to answer your question, returning multiple answers to your question all of which with scores.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded
     * /qgpt/question [POST]
     */
    async questionRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/question`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTQuestionInputToJSON)(requestParameters.qGPTQuestionInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTQuestionOutputFromJSON)(jsonValue));
    }
    /**
     * This is going to accept, relevant code snippets or uuids returned from the /qgpt/relevance endpoint, as well as a question query and we will return possible results to answer your question.  NOTE: - The relevant seeds, must require either an id, that was used within the /qgpt/relevance endpoint or a seed with afragment/string. or else we will throw and error.  This endpoint will take your query and your relevant snippets and use them to answer your question, returning multiple answers to your question all of which with scores.  200: success 401: invalid authentication/api key 429: Rate limit/Quota exceeded 500: server had an error 503: the engine is currently overloaded
     * /qgpt/question [POST]
     */
    async question(requestParameters) {
        const response = await this.questionRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)
     * /qgpt/relevance [POST]
     */
    async relevanceRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/relevance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTRelevanceInputToJSON)(requestParameters.qGPTRelevanceInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTRelevanceOutputFromJSON)(jsonValue));
    }
    /**
     * This is the first phase to the QGPT flow.  Please one of the following. 1. provide an absolute path on the users machine that we can use locally. 2. provide Seeds that you want to compare to, which will be ONLY fragment/string values(all other values will be ignored) 3. provide assets, here you can provide an iterable of the asset id, and we will do the rest 4. you can set your database boolean to true which will tell us to use your entire DB as the query space.  required - query: string; This is the question of the user. optional - question: boolean; This will by-pass the second endpoint and just ask the question and return the results(as an ease of use bool)  This endpoint will embed everything. and will return the relevance snippets that we will use in the next phase, to answer your question.  on the UI: we can show this to users (around this is the snippets we used to answer your question.)  Next: feed this information to the /qgpt/question [POST] endpoint to get your question answered.(unless you included the question:true optional boolean, then you will get the results from here.)
     * /qgpt/relevance [POST]
     */
    async relevance(requestParameters) {
        const response = await this.relevanceRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.
     * /qgpt/reprompt [POST]
     */
    async repromptRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/qgpt/reprompt`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.QGPTRepromptInputToJSON)(requestParameters.qGPTRepromptInput),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.QGPTRepromptOutputFromJSON)(jsonValue));
    }
    /**
     * This will take in a followup question and the history of the conversation, and emit your a prompt or query that you can pass to the /qgpt/relevance and then the /qgpt/question endpoint to get your next answer.
     * /qgpt/reprompt [POST]
     */
    async reprompt(requestParameters) {
        const response = await this.repromptRaw(requestParameters);
        return await response.value();
    }
}
exports.QGPTApi = QGPTApi;
