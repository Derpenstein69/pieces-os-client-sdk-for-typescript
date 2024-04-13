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
import type { Edges } from './Edges';
import {
    EdgesFromJSON,
    EdgesFromJSONTyped,
    EdgesToJSON,
} from './Edges';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Embeddings } from './Embeddings';
import {
    EmbeddingsFromJSON,
    EmbeddingsFromJSONTyped,
    EmbeddingsToJSON,
} from './Embeddings';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * A relationship expresses a graph of like types, to build a relationship graph.
 *  To get the type of relationship, this is for ie Asset, tag, website, format ...etc, you will need to iterate through the edges and get the root or you can just get the first edge's type as a relationship can only be expressed through same type
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     *
     * @type {string}
     * @memberof Relationship
     */
    id: string;
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Relationship
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Embeddings}
     * @memberof Relationship
     */
    embeddings: Embeddings;
    /**
     *
     * @type {Edges}
     * @memberof Relationship
     */
    edges: Edges;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    deleted?: GroupedTimestamp;
}

/**
 * Check if a given object implements the Relationship interface.
 */
export function instanceOfRelationship(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "embeddings" in value;
    isInstance = isInstance && "edges" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:28 AM
 *
 * @export
 * @param {*} json
 * @returns {Relationship}
 */
export function RelationshipFromJSON(json: any): Relationship {
    return RelationshipFromJSONTyped(json, false);
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:28 AM
 *
 * @export
 * @param {*} json
 * @param {boolean} ignoreDiscriminator
 * @returns {Relationship}
 */
export function RelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relationship {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': json['id'],
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'embeddings': EmbeddingsFromJSON(json['embeddings']),
        'edges': EdgesFromJSON(json['edges']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
    };
}

/**
 * ${1:Description placeholder}
 * @date 4/12/2024 - 4:03:28 AM
 *
 * @export
 * @param {?(Relationship | null)} [value]
 * @returns {*}
 */
export function RelationshipToJSON(value?: Relationship | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'embeddings': EmbeddingsToJSON(value.embeddings),
        'edges': EdgesToJSON(value.edges),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
    };
}

