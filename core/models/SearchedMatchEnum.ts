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


/**
 *
 * @export
 */
export const SearchedMatchEnum = {
    Title: 'TITLE',
    Annotation: 'ANNOTATION',
    Hint: 'HINT',
    Content: 'CONTENT',
    Fuzzy: 'FUZZY',
    Multiple: 'MULTIPLE',
    Tags: 'TAGS',
    Websites: 'WEBSITES',
    Persons: 'PERSONS'
} as const;
/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @typedef {SearchedMatchEnum}
 */
export type SearchedMatchEnum = typeof SearchedMatchEnum[keyof typeof SearchedMatchEnum];


/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @returns {SearchedMatchEnum}
 */
export function SearchedMatchEnumFromJSON(json: any): SearchedMatchEnum {
    return SearchedMatchEnumFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {SearchedMatchEnum}
 */
export function SearchedMatchEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedMatchEnum {
    return json as SearchedMatchEnum;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:27 AM
 *
 * @export
 * @param {?(SearchedMatchEnum | null)} [value]
 * @returns {*}
 */
export function SearchedMatchEnumToJSON(value?: SearchedMatchEnum | null): any {
    return value as any;
}

