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
import { EmbeddedModelSchema, FlattenedShare, GitHubDistribution, GroupedTimestamp, MailgunDistribution } from './';
/**
 * This is a fully referenced version of a Distribution.
 * TODO add additional distributions such as slack, google_chat, ...etc
 * @export
 * @interface Distribution
 */
export interface Distribution {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Distribution
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Distribution
     */
    id: string;
    /**
     *
     * @type {FlattenedShare}
     * @memberof Distribution
     */
    share: FlattenedShare;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Distribution
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {MailgunDistribution}
     * @memberof Distribution
     */
    mailgun?: MailgunDistribution;
    /**
     *
     * @type {GitHubDistribution}
     * @memberof Distribution
     */
    github?: GitHubDistribution;
}
export declare function DistributionFromJSON(json: any): Distribution;
export declare function DistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Distribution;
export declare function DistributionToJSON(value?: Distribution | null): any;
