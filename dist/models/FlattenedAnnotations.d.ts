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
import { EmbeddedModelSchema, ReferencedAnnotation, Score } from './';
/**
 * This is a flattened plural of Annotation, typically this will just be a list of uuids.
 * @export
 * @interface FlattenedAnnotations
 */
export interface FlattenedAnnotations {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnnotations
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedAnnotation>}
     * @memberof FlattenedAnnotations
     */
    iterable: Array<ReferencedAnnotation>;
    /**
     * This is a Map<String, int> where the the key is an annotation id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAnnotations
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof FlattenedAnnotations
     */
    score?: Score;
}
export declare function FlattenedAnnotationsFromJSON(json: any): FlattenedAnnotations;
export declare function FlattenedAnnotationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnnotations;
export declare function FlattenedAnnotationsToJSON(value?: FlattenedAnnotations | null): any;
