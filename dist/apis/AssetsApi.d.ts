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
import * as runtime from '../runtime';
import { Asset, Assets, AssetsSearchWithFiltersInput, AssetsSearchWithFiltersOutput, FlattenedAssets, Formats, PseudoAssets, SearchedAssets, Seed, SeededAssetsRecommendation, StreamedIdentifiers } from '../models';
export interface AssetsCreateNewAssetRequest {
    transferables?: boolean;
    seed?: Seed;
}
export interface AssetsDeleteAssetRequest {
    asset: string;
}
export interface AssetsDraftRequest {
    transferables?: boolean;
    seed?: Seed;
}
export interface AssetsGetRecommendedAssetsRequest {
    seededAssetsRecommendation?: SeededAssetsRecommendation;
}
export interface AssetsGetRelatedAssetsRequest {
    assets?: Assets;
}
export interface AssetsIdentifiersSnapshotRequest {
    pseudo?: boolean;
}
export interface AssetsSearchAssetsRequest {
    query?: string;
    transferables?: boolean;
    searchableTags?: string;
    pseudo?: boolean;
}
export interface AssetsSearchWithFiltersRequest {
    transferables?: boolean;
    pseudo?: boolean;
    assetsSearchWithFiltersInput?: AssetsSearchWithFiltersInput;
}
export interface AssetsSnapshotRequest {
    transferables?: boolean;
    suggested?: boolean;
    pseudo?: boolean;
}
export interface AssetsSpecificAssetFormatsSnapshotRequest {
    asset: string;
    transferables?: boolean;
}
export interface AssetsSpecificAssetSnapshotRequest {
    asset: string;
    transferables?: boolean;
}
/**
 *
 */
export declare class AssetsApi extends runtime.BaseAPI {
    /**
     * This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!
     * /assets/create [POST] Scoped to Asset
     */
    assetsCreateNewAssetRaw(requestParameters: AssetsCreateNewAssetRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!
     * /assets/create [POST] Scoped to Asset
     */
    assetsCreateNewAsset(requestParameters: AssetsCreateNewAssetRequest): Promise<Asset>;
    /**
     * This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.
     * /assets/delete [POST] Scoped to Asset
     */
    assetsDeleteAssetRaw(requestParameters: AssetsDeleteAssetRequest): Promise<runtime.ApiResponse<string>>;
    /**
     * This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.
     * /assets/delete [POST] Scoped to Asset
     */
    assetsDeleteAsset(requestParameters: AssetsDeleteAssetRequest): Promise<string>;
    /**
     * This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.
     * /assets/draft [POST]
     */
    assetsDraftRaw(requestParameters: AssetsDraftRequest): Promise<runtime.ApiResponse<Seed>>;
    /**
     * This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.
     * /assets/draft [POST]
     */
    assetsDraft(requestParameters: AssetsDraftRequest): Promise<Seed>;
    /**
     * An endpoint that takes in a SeededAssetsRecommendation Model within it\'s request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.
     * Your GET endpoint
     */
    assetsGetRecommendedAssetsRaw(requestParameters: AssetsGetRecommendedAssetsRequest): Promise<runtime.ApiResponse<Assets>>;
    /**
     * An endpoint that takes in a SeededAssetsRecommendation Model within it\'s request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.
     * Your GET endpoint
     */
    assetsGetRecommendedAssets(requestParameters: AssetsGetRecommendedAssetsRequest): Promise<Assets>;
    /**
     * Gets one or more related assets when provided one or more input assets. The body will expect the shape of
     * /assets/related [GET]
     */
    assetsGetRelatedAssetsRaw(requestParameters: AssetsGetRelatedAssetsRequest): Promise<runtime.ApiResponse<Assets>>;
    /**
     * Gets one or more related assets when provided one or more input assets. The body will expect the shape of
     * /assets/related [GET]
     */
    assetsGetRelatedAssets(requestParameters: AssetsGetRelatedAssetsRequest): Promise<Assets>;
    /**
     * This will get all of your asset ids
     * /assets/identifiers [GET]
     */
    assetsIdentifiersSnapshotRaw(requestParameters: AssetsIdentifiersSnapshotRequest): Promise<runtime.ApiResponse<FlattenedAssets>>;
    /**
     * This will get all of your asset ids
     * /assets/identifiers [GET]
     */
    assetsIdentifiersSnapshot(requestParameters: AssetsIdentifiersSnapshotRequest): Promise<FlattenedAssets>;
    /**
     * This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.
     * /assets/pseudo [GET]
     */
    assetsPseudoSnapshotRaw(): Promise<runtime.ApiResponse<PseudoAssets>>;
    /**
     * This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.
     * /assets/pseudo [GET]
     */
    assetsPseudoSnapshot(): Promise<PseudoAssets>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.
     * /assets/search?query=string [GET]
     */
    assetsSearchAssetsRaw(requestParameters: AssetsSearchAssetsRequest): Promise<runtime.ApiResponse<SearchedAssets>>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.
     * /assets/search?query=string [GET]
     */
    assetsSearchAssets(requestParameters: AssetsSearchAssetsRequest): Promise<SearchedAssets>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.
     * /assets/search [POST]
     */
    assetsSearchWithFiltersRaw(requestParameters: AssetsSearchWithFiltersRequest): Promise<runtime.ApiResponse<AssetsSearchWithFiltersOutput>>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.
     * /assets/search [POST]
     */
    assetsSearchWithFilters(requestParameters: AssetsSearchWithFiltersRequest): Promise<AssetsSearchWithFiltersOutput>;
    /**
     * Get all of the users Assets.
     * /assets [GET] Scoped to Assets
     */
    assetsSnapshotRaw(requestParameters: AssetsSnapshotRequest): Promise<runtime.ApiResponse<Assets>>;
    /**
     * Get all of the users Assets.
     * /assets [GET] Scoped to Assets
     */
    assetsSnapshot(requestParameters: AssetsSnapshotRequest): Promise<Assets>;
    /**
     * This will query the formats for agiven asset when provided that asset\'s id.
     * /assets/{asset}/formats [GET] Scoped To Assets
     */
    assetsSpecificAssetFormatsSnapshotRaw(requestParameters: AssetsSpecificAssetFormatsSnapshotRequest): Promise<runtime.ApiResponse<Formats>>;
    /**
     * This will query the formats for a given asset when provided that asset\'s id.
     * /assets/{asset}/formats [GET] Scoped To Assets
     */
    assetsSpecificAssetFormatsSnapshot(requestParameters: AssetsSpecificAssetFormatsSnapshotRequest): Promise<Formats>;
    /**
     * This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.
     * /assets/{asset} [GET] Scoped to Assets
     */
    assetsSpecificAssetSnapshotRaw(requestParameters: AssetsSpecificAssetSnapshotRequest): Promise<runtime.ApiResponse<Asset>>;
    /**
     * This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.
     * /assets/{asset} [GET] Scoped to Assets
     */
    assetsSpecificAssetSnapshot(requestParameters: AssetsSpecificAssetSnapshotRequest): Promise<Asset>;
    /**
     * This will stream the asset identifiers(uuids) that have changed via a websocket connection.
     * /assets/stream/identifiers [GET]
     */
    assetsStreamIdentifiersRaw(): Promise<runtime.ApiResponse<StreamedIdentifiers>>;
    /**
     * This will stream the asset identifiers(uuids) that have changed via a websocket connection.
     * /assets/stream/identifiers [GET]
     */
    assetsStreamIdentifiers(): Promise<StreamedIdentifiers>;
    /**
     * This will emit changes of your assets with your transferables included. This is a websocket connection.
     * Your GET endpoint
     */
    getAssetsStreamTransferablesRaw(): Promise<runtime.ApiResponse<Assets>>;
    /**
     * This will emit changes of your assets with your transferables included. This is a websocket connection.
     * Your GET endpoint
     */
    getAssetsStreamTransferables(): Promise<Assets>;
    /**
     * *** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables
     * /assets/stream [GET]
     */
    streamAssetsRaw(): Promise<runtime.ApiResponse<Assets>>;
    /**
     * *** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables
     * /assets/stream [GET]
     */
    streamAssets(): Promise<Assets>;
}