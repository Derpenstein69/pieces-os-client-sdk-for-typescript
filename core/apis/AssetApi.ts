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


import * as runtime from '../runtime';
import type {
  Activities,
  Asset,
  AssetReclassification,
  Conversations,
  ExportedAsset,
  Formats,
  SeededAccessor,
  SeededScoreIncrement,
} from '../models/index';
import {
    ActivitiesFromJSON,
    ActivitiesToJSON,
    AssetFromJSON,
    AssetToJSON,
    AssetReclassificationFromJSON,
    AssetReclassificationToJSON,
    ConversationsFromJSON,
    ConversationsToJSON,
    ExportedAssetFromJSON,
    ExportedAssetToJSON,
    FormatsFromJSON,
    FormatsToJSON,
    SeededAccessorFromJSON,
    SeededAccessorToJSON,
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
} from '../models/index';

export interface AssetAssociateTagRequest {
    asset: string;
    tag: string;
}

export interface AssetAssociateWebsiteRequest {
    asset: string;
    website: string;
}

export interface AssetAssociateWorkstreamSummaryRequest {
    asset: string;
    workstreamSummary: string;
}

export interface AssetDisassociateTagRequest {
    tag: string;
    asset: string;
}

export interface AssetDisassociateWebsiteRequest {
    website: string;
    asset: string;
}

export interface AssetDisassociateWorkstreamSummaryRequest {
    asset: string;
    workstreamSummary: string;
}

export interface AssetFormatsRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetReclassifyRequest {
    transferables?: boolean;
    assetReclassification?: AssetReclassification;
}

export interface AssetScoresIncrementRequest {
    asset: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface AssetSnapshotRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetSnapshotPostRequest {
    asset: string;
    transferables?: boolean;
    seededAccessor?: SeededAccessor;
}

export interface AssetSpecificAssetActivitiesRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetSpecificAssetConversationsRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetSpecificAssetExportRequest {
    asset: string;
    exportType: AssetSpecificAssetExportExportTypeEnum;
}

export interface AssetUpdateRequest {
    transferables?: boolean;
    asset?: Asset;
}

/**
 * 
 */
export class AssetApi extends runtime.BaseAPI {

    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivalent.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTagRaw(requestParameters: AssetAssociateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetAssociateTag.');
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling assetAssociateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/tags/associate/{tag}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivalent.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTag(requestParameters: AssetAssociateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetAssociateTagRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a website with a asset. This will do the same thing as the website equivalent.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async assetAssociateWebsiteRaw(requestParameters: AssetAssociateWebsiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetAssociateWebsite.');
        }

        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling assetAssociateWebsite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/websites/associate/{website}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a asset. This will do the same thing as the website equivalent.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async assetAssociateWebsite(requestParameters: AssetAssociateWebsiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetAssociateWebsiteRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /asset/{asset}/workstream_summaries/associate/{workstream_summary} [POST]
     */
    async assetAssociateWorkstreamSummaryRaw(requestParameters: AssetAssociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetAssociateWorkstreamSummary.');
        }

        if (requestParameters.workstreamSummary === null || requestParameters.workstreamSummary === undefined) {
            throw new runtime.RequiredError('workstreamSummary','Required parameter requestParameters.workstreamSummary was null or undefined when calling assetAssociateWorkstreamSummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/workstream_summaries/associate/{workstream_summary}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"workstream_summary"}}`, encodeURIComponent(String(requestParameters.workstreamSummary))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a asset with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /asset/{asset}/workstream_summaries/associate/{workstream_summary} [POST]
     */
    async assetAssociateWorkstreamSummary(requestParameters: AssetAssociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetAssociateWorkstreamSummaryRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivalent.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTagRaw(requestParameters: AssetDisassociateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling assetDisassociateTag.');
        }

        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetDisassociateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/tags/disassociate/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivalent.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTag(requestParameters: AssetDisassociateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetDisassociateTagRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivalent.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async assetDisassociateWebsiteRaw(requestParameters: AssetDisassociateWebsiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling assetDisassociateWebsite.');
        }

        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetDisassociateWebsite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/websites/disassociate/{website}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivalent.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async assetDisassociateWebsite(requestParameters: AssetDisassociateWebsiteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetDisassociateWebsiteRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /asset/{asset}/workstream_summaries/disassociate/{workstream_summary} [POST]
     */
    async assetDisassociateWorkstreamSummaryRaw(requestParameters: AssetDisassociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetDisassociateWorkstreamSummary.');
        }

        if (requestParameters.workstreamSummary === null || requestParameters.workstreamSummary === undefined) {
            throw new runtime.RequiredError('workstreamSummary','Required parameter requestParameters.workstreamSummary was null or undefined when calling assetDisassociateWorkstreamSummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/workstream_summaries/disassociate/{workstream_summary}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"workstream_summary"}}`, encodeURIComponent(String(requestParameters.workstreamSummary))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to disassociate an asset from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /asset/{asset}/workstream_summaries/disassociate/{workstream_summary} [POST]
     */
    async assetDisassociateWorkstreamSummary(requestParameters: AssetDisassociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetDisassociateWorkstreamSummaryRaw(requestParameters, initOverrides);
    }

    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormatsRaw(requestParameters: AssetFormatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Formats>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetFormats.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/formats`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FormatsFromJSON(jsonValue));
    }

    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormats(requestParameters: AssetFormatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Formats> {
        const response = await this.assetFormatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassifyRaw(requestParameters: AssetReclassifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/reclassify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetReclassificationToJSON(requestParameters.assetReclassification),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassify(requestParameters: AssetReclassifyRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetReclassifyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrementRaw(requestParameters: AssetScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/{asset}/scores/increment`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrement(requestParameters: AssetScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assetScoresIncrementRaw(requestParameters, initOverrides);
    }

    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshotRaw(requestParameters: AssetSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshot(requestParameters: AssetSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPostRaw(requestParameters: AssetSnapshotPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSnapshotPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededAccessorToJSON(requestParameters.seededAccessor),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPost(requestParameters: AssetSnapshotPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetSnapshotPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will get a specific asset\'s activity events
     * /asset/{asset}/activities [GET]
     */
    async assetSpecificAssetActivitiesRaw(requestParameters: AssetSpecificAssetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Activities>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetActivities.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/activities`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActivitiesFromJSON(jsonValue));
    }

    /**
     * This will get a specific asset\'s activity events
     * /asset/{asset}/activities [GET]
     */
    async assetSpecificAssetActivities(requestParameters: AssetSpecificAssetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Activities> {
        const response = await this.assetSpecificAssetActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversationsRaw(requestParameters: AssetSpecificAssetConversationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Conversations>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetConversations.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/conversations`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationsFromJSON(jsonValue));
    }

    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversations(requestParameters: AssetSpecificAssetConversationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Conversations> {
        const response = await this.assetSpecificAssetConversationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExportRaw(requestParameters: AssetSpecificAssetExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportedAsset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetExport.');
        }

        if (requestParameters.exportType === null || requestParameters.exportType === undefined) {
            throw new runtime.RequiredError('exportType','Required parameter requestParameters.exportType was null or undefined when calling assetSpecificAssetExport.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportType !== undefined) {
            queryParameters['export_type'] = requestParameters.exportType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/export`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportedAssetFromJSON(jsonValue));
    }

    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExport(requestParameters: AssetSpecificAssetExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportedAsset> {
        const response = await this.assetSpecificAssetExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdateRaw(requestParameters: AssetUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetToJSON(requestParameters.asset),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdate(requestParameters: AssetUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset> {
        const response = await this.assetUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AssetSpecificAssetExportExportTypeEnum = {
    Html: 'HTML',
    Md: 'MD'
} as const;
export type AssetSpecificAssetExportExportTypeEnum = typeof AssetSpecificAssetExportExportTypeEnum[keyof typeof AssetSpecificAssetExportExportTypeEnum];
