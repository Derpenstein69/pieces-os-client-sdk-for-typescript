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
import { EmbeddedModelSchema } from './';
/**
 * config model for notification invoking
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Notification
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {number}
     * @memberof Notification
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof Notification
     */
    payload?: string;
}
export declare function NotificationFromJSON(json: any): Notification;
export declare function NotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notification;
export declare function NotificationToJSON(value?: Notification | null): any;
