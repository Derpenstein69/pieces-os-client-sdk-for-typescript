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
import { EmbeddedModelSchema, UserProfile } from './';
/**
 * A base class for a collection of users and some additional meta properties.
 * @export
 * @interface Users
 */
export interface Users {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Users
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<UserProfile>}
     * @memberof Users
     */
    iterable?: Array<UserProfile>;
}
export declare function UsersFromJSON(json: any): Users;
export declare function UsersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Users;
export declare function UsersToJSON(value?: Users | null): any;
