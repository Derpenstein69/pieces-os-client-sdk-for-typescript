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
import { Activities, Anchors, Annotations, Conversations, EmbeddedModelSchema, Formats, GroupedTimestamp, Hints, MechanismEnum, Persons, Preview, ReferencedFormat, Score, Sensitives, Shares, Tags, Websites } from './';
/**
 * An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.
 *
 * Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it's child leaf nodes will prevent cycles agressively.
 * @export
 * @interface Asset
 */
export interface Asset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Asset
     */
    schema?: EmbeddedModelSchema;
    /**
     * The globally available UID representing the asset in the Database, both locally and in the cloud.
     * @type {string}
     * @memberof Asset
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Asset
     */
    creator: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Asset
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Asset
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Asset
     */
    synced?: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Asset
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {Formats}
     * @memberof Asset
     */
    formats: Formats;
    /**
     *
     * @type {Preview}
     * @memberof Asset
     */
    preview: Preview;
    /**
     *
     * @type {ReferencedFormat}
     * @memberof Asset
     */
    original: ReferencedFormat;
    /**
     *
     * @type {Shares}
     * @memberof Asset
     */
    shares?: Shares;
    /**
     *
     * @type {MechanismEnum}
     * @memberof Asset
     */
    mechanism: MechanismEnum;
    /**
     *
     * @type {Websites}
     * @memberof Asset
     */
    websites?: Websites;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Asset
     */
    interacted?: GroupedTimestamp;
    /**
     *
     * @type {Tags}
     * @memberof Asset
     */
    tags?: Tags;
    /**
     *
     * @type {Sensitives}
     * @memberof Asset
     */
    sensitives?: Sensitives;
    /**
     *
     * @type {Persons}
     * @memberof Asset
     */
    persons?: Persons;
    /**
     * This is an optional boolean that will flag that this asset came from a currated collection.
     * @type {boolean}
     * @memberof Asset
     */
    curated?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Asset
     */
    discovered?: boolean;
    /**
     *
     * @type {Activities}
     * @memberof Asset
     */
    activities?: Activities;
    /**
     *
     * @type {Score}
     * @memberof Asset
     */
    score?: Score;
    /**
     *
     * @type {boolean}
     * @memberof Asset
     */
    favorited?: boolean;
    /**
     * This will determine if this is a asset that the user did not explicitly save.
     * @type {boolean}
     * @memberof Asset
     */
    pseudo?: boolean;
    /**
     *
     * @type {Annotations}
     * @memberof Asset
     */
    annotations?: Annotations;
    /**
     *
     * @type {Hints}
     * @memberof Asset
     */
    hints?: Hints;
    /**
     *
     * @type {Anchors}
     * @memberof Asset
     */
    anchors?: Anchors;
    /**
     *
     * @type {Conversations}
     * @memberof Asset
     */
    conversations?: Conversations;
    /**
     * This will let us know if this asset was generated as a 'demo' snippet
     * @type {boolean}
     * @memberof Asset
     */
    demo?: boolean;
}
export declare function AssetFromJSON(json: any): Asset;
export declare function AssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Asset;
export declare function AssetToJSON(value?: Asset | null): any;
