if (self.CavalryLogger) { CavalryLogger.start_js(["xJ\/Dc"]); }

__d("XCometCommercePermalinkControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/commerce/listing/{listing_id}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"},d={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},g=[{kind:"Literal",name:"context",value:"comet_media_viewer"},c],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[h],j={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:i,storageKey:null},k=[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"timeline"}],l={alias:"video_cix_screen",args:k,concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometFeedAlbumGridWarningScreen_media__video_cix_screen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"timeline")'},m={alias:"photo_cix_screen",args:k,concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometFeedAlbumGridWarningScreen_media__photo_cix_screen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"timeline")'},n={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},p=[e,{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},d,f],q={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},r={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},s={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[r],storageKey:null};s=[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[n,o,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:p,storageKey:null},h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[n,o,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[n,o,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[a,{kind:"InlineFragment",selections:[h,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User"},h],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[a,h,q,{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null}],type:"Page"},{kind:"InlineFragment",selections:[s],type:"User"},{kind:"InlineFragment",selections:[s,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],storageKey:null},n,o],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];n={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:s,storageKey:null};o=[a,h];return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer"},name:"CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:5}],concreteType:"SubattachmentsConnection",kind:"LinkedField",name:"all_subattachments",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"deduplication_key",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{alias:null,args:[c,{kind:"Literal",name:"width",value:584}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d,e,f],storageKey:null},{kind:"InlineFragment",selections:[a,{alias:"viewer_image",args:g,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e,f,d],storageKey:null},h,{kind:"InlineFragment",selections:[h,j,l],type:"Video"},j,m,{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],type:"Photo"},{kind:"InlineFragment",selections:[a,h,{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_latency_tolerance_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},{alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},{alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},{alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},{alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null},{alias:"viewer_image",args:g,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d],storageKey:null},j,l,{kind:"InlineFragment",selections:[h,j,m],type:"Photo"},{alias:null,args:k,concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"cover_style",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"center_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},n,r],storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"bottom_actions",plural:!0,selections:[n],storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:p,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null}],type:"OverlayWarningScreenViewModel"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"timeline")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:o,storageKey:null}],type:"Video"},h,{kind:"InlineFragment",selections:i,type:"MontageImage"},{kind:"InlineFragment",selections:i,type:"MontageVideo"},{kind:"InlineFragment",selections:i,type:"GenericAttachmentMedia"}],storageKey:null},q],storageKey:null}],storageKey:"all_subattachments(first:5)"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:o,storageKey:null}],storageKey:null},h],storageKey:null}],type:"MediaContainerMediaSet"},h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mediaset_token",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:5}],concreteType:"SubattachmentsConnection",kind:"LinkedField",name:"all_subattachments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:"all_subattachments(first:5)"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"MediaContainerMediaSet"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryAlbumAttachment_attachment"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion"}],type:"StoryAttachmentAlbumSaleItemStyleRenderer"};e.exports=a}),null);
__d("CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},c=[b],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"is_sold",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},i={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer"},name:"CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[d,a,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"is_live",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pending",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_seller",plural:!1,selections:[a,f,d],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MessageThread",kind:"LinkedField",name:"seller_message_thread",plural:!1,selections:[{alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null},d],storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"story_id",storageKey:null},d,{alias:"should_show_txn_survey_on_mas",args:[{kind:"Literal",name:"action",value:"MARK_AS_SOLD"}],kind:"ScalarField",name:"should_show_txn_survey",storageKey:'should_show_txn_survey(action:"MARK_AS_SOLD")'},{alias:null,args:null,kind:"ScalarField",name:"inventory_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"delivery_types",storageKey:null}],type:"GroupCommerceProductItem"}],storageKey:null},{alias:null,args:null,concreteType:"AttachmentProperty",kind:"LinkedField",name:"properties",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"value",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[g,h,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[g,h,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[g,h,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[a,{kind:"InlineFragment",selections:[d,f],type:"User"},d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[a,d,{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null}],type:"Page"},{kind:"InlineFragment",selections:[i],type:"User"},{kind:"InlineFragment",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],storageKey:null},g,h],storageKey:null},b],storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_sold",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pending",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"marketplace_listing_seller",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MessageThread",kind:"LinkedField",name:"seller_message_thread",plural:!1,selections:[{alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null}],storageKey:null}],type:"GroupCommerceProductItem"},{args:null,kind:"FragmentSpread",name:"GroupsCometSaleListingAvailabilityButton_listing"}],storageKey:null},{alias:null,args:null,concreteType:"AttachmentProperty",kind:"LinkedField",name:"properties",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"value",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion"}],type:"StoryAttachmentGroupSellProductItemStyleRenderer"}}();e.exports=a}),null);
__d("CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"},d={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},f=[b];return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer"},name:"CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,b],storageKey:null}],storageKey:null},b],storageKey:null}],type:"Photo"},b],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{alias:"photo_image",args:[c,{kind:"Literal",name:"sizing",value:"cover-fill"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d,e],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"color_choice_algorithm",value:"MOST_PROMINENT_COLOR"},{kind:"Literal",name:"is_computed_if_missing",value:!1}],kind:"ScalarField",name:"accent_color",storageKey:'accent_color(color_choice_algorithm:"MOST_PROMINENT_COLOR",is_computed_if_missing:false)'},{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},c],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d,e],storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},b],type:"Photo"},b,{kind:"InlineFragment",selections:f,type:"MontageImage"},{kind:"InlineFragment",selections:f,type:"MontageVideo"},{kind:"InlineFragment",selections:f,type:"GenericAttachmentMedia"}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Photo"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryPhotoAttachment_attachment"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion"}],type:"StoryAttachmentPhotoSaleItemStyleRenderer"};e.exports=a}),null);
__d("GroupsCometSaleListingAvailabilityButton_listing.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometSaleListingAvailabilityButton_listing",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_sold",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"should_show_txn_survey_on_mas",args:[{kind:"Literal",name:"action",value:"MARK_AS_SOLD"}],kind:"ScalarField",name:"should_show_txn_survey",storageKey:'should_show_txn_survey(action:"MARK_AS_SOLD")'},{alias:null,args:null,kind:"ScalarField",name:"inventory_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"delivery_types",storageKey:null}],type:"GroupCommerceProductItem"};e.exports=a}),null);
__d("CometFeedStoryAlbumSaleItemAttachmentStyle.react",["CometFeedStoryAlbumAttachment.react","CometRelay","React","XCometCommercePermalinkControllerRouteBuilder","useCometFeedStoryAttachmentMatchDebugger","useNullthrowsViolation","CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){var c;b("useCometFeedStoryAttachmentMatchDebugger")(a.styleTypeRenderer);a=b("useNullthrowsViolation")(a.styleTypeRenderer.attachment,"attachment cannot be nullish in CometFeedStoryAlbumSaleItemAttachmentStyle");var d=null;c=((c=a.target)==null?void 0:(c=c.story)==null?void 0:c.attachments)||[];c=c.find(function(a){return(a==null?void 0:(a=a.target)==null?void 0:a.__typename)==="GroupCommerceProductItem"});c!=null&&(d=c.target);var e=(c=d)==null?void 0:c.id;c=b("useNullthrowsViolation")((d=a.all_subattachments)==null?void 0:d.count,"all_subattachments.count cannot be nullish in CometFeedStoryAlbumSaleItemAttachmentStyle");d=e!=null?Array.from(Array(c).keys()).map(function(a){return b("XCometCommercePermalinkControllerRouteBuilder").buildURL({listing_id:e,media_id:a,ref:"share_attachment"})}):[];return h.jsx(b("CometFeedStoryAlbumAttachment.react"),{attachment:a,urls:d})}e.exports=c(a,{styleTypeRenderer:g!==void 0?g:g=b("CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer.graphql")})}),null);
__d("CometBSGSurfaceContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.createContext({referralSurface:"unknown",surface:"unknown"})}),null);
__d("GroupsCometSaleListingAvailabilityButton.react",["CometBSGSurfaceContext","CometMarketplaceAvailabilityConstants","CometMarketplaceUtils","CometProductItemChangeAvailabilityMutation","CometRelay","JSResource","React","TetraButton.react","useCometLazyDialog","GroupsCometSaleListingAvailabilityButton_listing.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometMarketplaceAvailabilityConstants").MARK_AS_AVAILABLE_LABEL,i=b("CometMarketplaceAvailabilityConstants").MARK_AS_SOLD_LABEL,j=b("CometMarketplaceAvailabilityConstants").MARK_AS_SOLD_OUT_LABEL,k=b("CometMarketplaceUtils").isMultiQuantityListing;b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("React");c=b("React");var n=c.useCallback,o=c.useContext,p=b("JSResource")("MarketplaceSellerTransactionReportingDialog.react").__setRef("GroupsCometSaleListingAvailabilityButton.react");function a(a){a=l(g!==void 0?g:g=b("GroupsCometSaleListingAvailabilityButton_listing.graphql"),a.listing);var c=o(b("CometBSGSurfaceContext")),d=c.referralSurface,e=c.surface;c=(c=a)!=null?c:{};var f=c.delivery_types,q=c.id,r=c.inventory_count,s=c.is_sold,t=c.should_show_txn_survey_on_mas,u=c.story_id,v=n(function(a){if(u==null)return;b("CometProductItemChangeAvailabilityMutation").mutation({product_availability:a,story_id:u})},[u]);c=b("useCometLazyDialog")(p);var w=c[0],x=n(function(){return v("OUT_OF_STOCK")},[v]);c=n(function(){return v("IN_STOCK")},[v]);var y=n(function(){x(),q!=null&&t===!0&&w({action:"MARK_AS_SOLD",listingId:q,referralSurface:d,surface:e})},[x,q,t,w,d,e]);if(a==null)return null;a=k(r,f||[]);return s===!0?m.jsx(b("TetraButton.react"),{label:h,onPress:c,type:"secondary"}):m.jsx(b("TetraButton.react"),{label:a?j:i,onPress:y,type:"secondary"})}e.exports=a}),null);
__d("CometFeedStoryGroupSellProductItemAttachmentStyle.react",["ix","fbt","CometBSGSurfaceContext","CometEmojiTransform","CometEmoticonTransform","CometFeedStanardInlineAttachmentContainer.react","CometImage.react","CometLineBreakTransform","CometLinkedEntityRenderer","CometRelay","CometShortenedExternalUrlEntityRenderer","CometTextWithEntitiesRelay.react","GroupsCometSaleListingAvailabilityButton.react","MarketplaceMessageSellerTriggerButton.react","Middot.react","React","TetraText.react","TetraTextPairing.react","asset","stylex","unrecoverableViolation","useCometFeedStoryAttachmentMatchDebugger","CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var j=b("React"),k={referralSurface:"unknown",surface:"group_feed_story"},l={"*":[b("CometLinkedEntityRenderer")],ExternalUrl:[b("CometShortenedExternalUrlEntityRenderer")]},m=[b("CometEmoticonTransform")(),b("CometEmojiTransform")(),b("CometLineBreakTransform")];function a(a){var c,d,e;b("useCometFeedStoryAttachmentMatchDebugger")(a.styleTypeRenderer);a=a.styleTypeRenderer.attachment;var f=a==null?void 0:a.target;c=f==null?void 0:(c=f.seller_message_thread)==null?void 0:(c=c.thread_key)==null?void 0:c.thread_fbid;if(a==null)throw b("unrecoverableViolation")("CometFeedStoryGroupSellProductItemAttachmentStyle cannot render with a null attachment","marketplace-comet");var i=a.properties;a=a.title_with_entities;var n=f==null?void 0:f.id,o=Boolean(f==null?void 0:f.is_viewer_seller);d=(f==null?void 0:(d=f.marketplace_listing_seller)==null?void 0:d.name)||"";e=f==null?void 0:(e=f.formatted_price)==null?void 0:e.text;a=a==null?void 0:a.text;if(a==null||i==null)throw b("unrecoverableViolation")("CometFeedStoryGroupSellProductItemAttachmentStyle cannot render with null title or properties","marketplace-comet");var p="dati1w0a f10w8fjw hv4rvrfc jb3vyjys",q="dati1w0a f10w8fjw hv4rvrfc jb3vyjys",r={};i.forEach(function(a){var b=a.key;a=a.value;if(b==null||a==null)return;r[b]=a});i=r.description;var s=r.pickup_note,t=null;n!=null&&(t=o?j.jsx("div",{className:p,children:j.jsx(b("GroupsCometSaleListingAvailabilityButton.react"),{listing:f})}):j.jsx("div",{className:p,children:j.jsx(b("MarketplaceMessageSellerTriggerButton.react"),{existingThreadId:c,isBSGListing:!0,listingId:n,sellerName:d,text:h._("Message")})}));o=null;(f==null?void 0:f.is_sold)?o=h._("Sold"):(f==null?void 0:f.is_pending)?o=h._("Pending"):(f==null?void 0:f.is_live)!==!0&&(o=h._("Unavailable"));o!=null&&(o=j.jsx(b("TetraText.react"),{color:"negative",type:"bodyLink3",children:o}));c=e!==null?e:null;c=s!=null?j.jsxs(j.Fragment,{children:[c,j.jsx(b("Middot.react"),{}),j.jsx("span",{className:"j5wkysh0 q9uorilb",children:j.jsx(b("CometImage.react"),{src:g("528430")})}),j.jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:j.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:s})})]}):c;return j.jsx(b("CometFeedStanardInlineAttachmentContainer.react"),{children:j.jsxs(b("CometBSGSurfaceContext").Provider,{value:k,children:[j.jsxs("div",{className:"i1fnvgqd j83agx80",children:[j.jsx("div",{className:p,children:j.jsx(b("TetraTextPairing.react"),{body:j.jsx(b("TetraText.react"),{type:"bodyLink3",children:c}),headline:j.jsxs(b("TetraText.react"),{type:"bodyLink3",children:[o,o&&j.jsx(b("Middot.react"),{}),a]}),level:3})}),t]}),i!=null?j.jsx("div",{className:q,children:j.jsx(b("TetraText.react"),{type:"body3",children:j.jsx(b("CometTextWithEntitiesRelay.react"),{renderers:l,textWithEntities:i,transforms:m,truncationStyle:"see-more",withParagraphs:!0})})}):null]})})}e.exports=c(a,{styleTypeRenderer:i!==void 0?i:i=b("CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer.graphql")})}),null);
__d("CometFeedStoryPhotoSaleItemAttachmentStyle.react",["CometFeedStoryPhotoAttachment.react","CometRelay","React","XCometCommercePermalinkControllerRouteBuilder","useCometFeedStoryAttachmentMatchDebugger","CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){var c;b("useCometFeedStoryAttachmentMatchDebugger")(a.styleTypeRenderer);a=a.styleTypeRenderer.attachment;if(a==null)return null;c=((c=a.target)==null?void 0:(c=c.container_story)==null?void 0:c.attachments)||[];c=c.find(function(a){return(a==null?void 0:(a=a.target)==null?void 0:a.__typename)==="GroupCommerceProductItem"});c=c==null?void 0:(c=c.target)==null?void 0:c.id;c=c!=null?b("XCometCommercePermalinkControllerRouteBuilder").buildURL({listing_id:c,ref:"share_attachment"}):null;return h.jsx(b("CometFeedStoryPhotoAttachment.react"),{attachment:a,urlOverride:c})}e.exports=c(a,{styleTypeRenderer:g!==void 0?g:g=b("CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer.graphql")})}),null);