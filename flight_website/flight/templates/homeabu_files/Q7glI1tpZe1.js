if (self.CavalryLogger) { CavalryLogger.start_js(["qe0Gr"]); }

__d("CometWatchUFITopLevelCommentList_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d=[c],e={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},h={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometWatchUFITopLevelCommentList_renderer"},name:"CometWatchUFITopLevelCommentList_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[a,{alias:null,args:b,kind:"ScalarField",name:"can_viewer_comment",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_source",variableName:"feedbackSource"}],concreteType:"LiveCommentModerationSettings",kind:"LinkedField",name:"comment_moderation_settings",plural:!1,selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer",fragmentName:"CometLiveChatModeBanner_settings",fragmentPropName:"settings",kind:"ModuleImport"}],storageKey:null},{alias:"content_renderer_type",args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometDefaultCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"DefaultContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometLiveCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometLiveVODCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveVODContentBasedCommentListRenderer"}],storageKey:null},{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[c,a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Avatar",kind:"LinkedField",name:"user_avatar",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_fb_app_avatar",storageKey:null},a],storageKey:null}],type:"User"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"constituent_badge_banner_link",storageKey:null},{alias:"composer_renderer",args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{documentName:"CometUFIComposerWrapper_feedback",fragmentName:"CometDefaultCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"DefaultContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometUFIComposerWrapper_feedback",fragmentName:"CometLiveCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometUFIComposerWrapper_feedback",fragmentName:"CometLiveVODCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveVODContentBasedCommentListRenderer"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"have_comments_been_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_muted",storageKey:null},{alias:"display_comments_count",args:null,concreteType:"DisplayCommentsConnection",kind:"LinkedField",name:"display_comments",plural:!1,selections:[e],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"comments_disabled_notice",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[f,g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},a],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[f,g,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[f,g,e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User"},a],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,a,{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null}],type:"Page"},{kind:"InlineFragment",selections:[h],type:"User"},{kind:"InlineFragment",selections:[h,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],storageKey:null},f,g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_see_voice_switcher",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_file",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_gif",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_insight_point",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_photo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_sticker",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_stars",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_bot_mention",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_comment_with_marker",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_comment_markdown_eligible",storageKey:null},{alias:"flat_threading_config",args:[{kind:"Literal",name:"type",value:"FLAT_THREADING"}],concreteType:null,kind:"LinkedField",name:"threading_config",plural:!1,selections:d,storageKey:'threading_config(type:"FLAT_THREADING")'},{alias:null,args:null,kind:"ScalarField",name:"composer_tip",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mentions_datasource_js_constructor_args_json",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owning_profile",plural:!1,selections:[c,a],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupMentionsSectionsInfo",kind:"LinkedField",name:"group_mentions_sections_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"member_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"member_aux",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"nonmember_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"nonmember_aux",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bot_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bot_aux",storageKey:null}],storageKey:null},a],storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_source_integer",variableName:"feedbackSource"}],kind:"ScalarField",name:"is_eligible_for_real_time_updates",storageKey:null},{alias:null,args:null,concreteType:"FeedbackTypersConnection",kind:"LinkedField",name:"feedback_typers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"other_count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscription_target_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"share_fbid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"default_comment_ordering",storageKey:null},{alias:null,args:null,concreteType:"CommentOrderOption",kind:"LinkedField",name:"localized_comment_orderings",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null},{alias:"unfiltered_comment_count",args:null,concreteType:"TopLevelCommentsConnection",kind:"LinkedField",name:"top_level_comments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometWatchUFITopLevelCommentList_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],b=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}];return{argumentDefinitions:[{defaultValue:!0,kind:"LocalArgument",name:"canShowSeenState",type:"Boolean!"},{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"},{kind:"RootArgument",name:"feedbackSource",type:"Int"}],kind:"Fragment",metadata:null,name:"CometWatchUFITopLevelCommentList_renderer",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:a,kind:"ScalarField",name:"can_viewer_comment",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_source",variableName:"feedbackSource"}],concreteType:"LiveCommentModerationSettings",kind:"LinkedField",name:"comment_moderation_settings",plural:!1,selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer",fragmentName:"CometLiveChatModeBanner_settings",fragmentPropName:"settings",kind:"ModuleImport"}],storageKey:null},{alias:"content_renderer_type",args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometDefaultCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"DefaultContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometLiveCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveContentBasedCommentListRenderer"},{kind:"InlineFragment",selections:[{documentName:"CometWatchUFITopLevelCommentList_renderer__content_based_comment_list_renderer",fragmentName:"CometLiveVODCommentListRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveVODContentBasedCommentListRenderer"}],storageKey:null},{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:b,storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIComposerWrapper_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFIComposerWrapperUseComposerPluginProps_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFITypingIndicator_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFIViewOptions_feedback"}],storageKey:null}],type:"WatchTopLevelCommentListRenderer"}}();e.exports=a}),null);
__d("CometVideoHomeLiveUFIContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({renderConfig:"default"});e.exports=c}),null);
__d("CometWatchUFITopLevelCommentList.react",["fbt","invariant","CometLiveCommentReplyContext","CometPlaceholder.react","CometRelay","CometTahoeUFIContext","CometUFIAccessibleCommentsHeading.react","CometUFICommentPager.react","CometUFICommentPaginationProgressElement.react","CometUFICommentsFilterFallbackWarning.react","CometUFICommentsListPlaceholder.react","CometUFIComposerWrapper.react","CometUFITypingIndicator.react","CometUFIViewOptions.react","CometVideoHomeLiveUFIContext","FBLogger","JSResourceForInteraction","React","TetraText.react","lazyLoadComponent","stylex","CometWatchUFITopLevelCommentList_renderer.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("CometLiveCommentReplyContext").CometLiveCommentReplyContext,l=b("CometRelay").MatchContainer;b("CometRelay").graphql;var m=b("CometRelay").useFragment,n=b("CometTahoeUFIContext").CometTahoeUFIContext,o=b("CometTahoeUFIContext").TahoeCommentComposerConfigEnum,p=b("CometUFIComposerWrapper.react").CometUFIComposerWrapper,q=b("CometUFIComposerWrapper.react").useComposerPluginProps,r=b("React");c=b("React");var s=c.useContext;d=b("React");var t=d.useMemo,u=b("lazyLoadComponent")(b("JSResourceForInteraction")("CometTahoeUFIReplyList.react",{"class":"fluid",name:"Comet Tahoe Live Video Reply View",oncall:"live_core_www"}).__setRef("CometWatchUFITopLevelCommentList.react"));function a(a){var c,d=s(n),e=s(k);e=e.replyCommentID;var f=s(b("CometVideoHomeLiveUFIContext")),v=a.renderer,w=babelHelpers.objectWithoutPropertiesLoose(a,["renderer"]),x=w.commentsListRenderProps,y=w.feedbackSource,z=w.feedbackTargetID,A=w.onCommitCommentCreate;x.depth===0||h(0,14621);var B=x.Selectors,C=x.depth,D=x.getFilterWarningPropsForOlderComments,E=x.listState,F=x.onCommentsListMouseEnter,G=x.onCommentsListMouseLeave,H=x.viewOption;v=m(i!==void 0?i:i=b("CometWatchUFITopLevelCommentList_renderer.graphql"),v);var I=v.feedback;v=I==null?void 0:I.viewer_actor;var J=q(!!v,I),K=I==null?void 0:I.content_based_comment_list_renderer;c=I==null?void 0:(c=I.content_renderer_type)==null?void 0:c.__typename;var L=I==null?void 0:I.comment_moderation_settings,M=t(function(){return{can_viewer_comment:I==null?void 0:I.can_viewer_comment,id:I==null?void 0:I.id}},[I]);if(I==null||K==null)return null;var N=B.isListLoading({depth:C,state:E});B=B.getVisibleCommentsCount({depth:C,state:E});C=r.jsx("div",{className:"eg9m0zos d76ob5m9 buofh1pr cbu4d94t j83agx80 cwj9ozl2",children:r.jsx(b("CometUFICommentsListPlaceholder.react"),{})});if(e!=null&&c==="LiveContentBasedCommentListRenderer")return r.jsx(b("CometPlaceholder.react"),{fallback:C,children:r.jsx(u,babelHelpers["extends"]({commentID:e,topLevelFeedback:M},w))});if(B===0&&N)return C;v||b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",z||"UNKNOWN").mustfix("CometUFI: Cant render composer without actor");E=r.jsx(l,{match:L,props:{feedbackSource:y,liveCommentModerationSettings:L}});c={className:(j||(j=b("stylex"))).dedupe({"margin-top-1":"km676qkl","padding-top-1":"ecm0bbzt","padding-end-1":"hv4rvrfc","padding-bottom-1":"e5nlhep0","padding-start-1":"dati1w0a","z-index-1":"du4w35lb"},B===0?{"padding-top-1":"cxgpxx05"}:null,y===41?{"background-color-1":"cwj9ozl2","padding-top-1":"discj3wi","padding-end-1":"hv4rvrfc","padding-bottom-1":"ihqw7lf3","padding-start-1":"dati1w0a"}:null,y===60?{"padding-top-1":"cxgpxx05","padding-end-1":"hv4rvrfc","padding-bottom-1":"sj5x9vvc","padding-start-1":"dati1w0a"}:null),commentsListRenderProps:x,composerPluginProps:J,feedback:I,onCommitCommentCreate:A};e=r.jsx(p,babelHelpers["extends"]({},c));M=H!=="LIVE_STREAMING";w=H==="LIVE_STREAMING"||B>0;N=f.renderConfig==="www_live_tab_hero";return r.jsx(b("CometPlaceholder.react"),{fallback:C,children:r.jsxs("div",{className:j.dedupe({"background-color-1":"cwj9ozl2","display-1":"j83agx80","flex-direction-1":"cbu4d94t","flex-grow-1":"buofh1pr","overflow-x-1":"d76ob5m9","overflow-y-1":"eg9m0zos"},N?{"position-1":"l9j0dhe7"}:null,y===41?{"overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs"}:null),"data-testid":void 0,onMouseEnter:F,onMouseLeave:G,children:[r.jsxs("div",{className:j.dedupe(d.tahoeCommentComposerConfig===o.COMPOSER_AND_ALL_COMMENTS?{"flex-grow-1":"buofh1pr","overflow-y-1":"eg9m0zos"}:{},d.tahoeCommentComposerConfig!==o.COMPOSER_AND_ALL_COMMENTS?{"overflow-y-1":"stjgntxs"}:null),style:{height:N?230:d.tahoeCommentComposerConfig===o.COMPOSER_ONLY?0:"auto"},children:[r.jsx(b("CometUFIAccessibleCommentsHeading.react"),{}),r.jsxs("div",{className:j.dedupe({"border-top-0.3":"l6v480f0","margin-top-1":"kvgmc6g5","margin-end-1":"wkznzc2l","margin-bottom-1":"oygrvhab","margin-start-1":"dhix69tm"},{"display-1":"j83agx80","justify-content-1":"bkfpd7mw","margin-top-1":"kvgmc6g5","margin-end-1":"wkznzc2l","margin-bottom-1":"oygrvhab","margin-start-1":"dhix69tm"},d.tahoeCommentComposerConfig!==o.COMPOSER_AND_ALL_COMMENTS?{"display-1":"mkhogb32"}:null),children:[r.jsx(b("CometUFICommentPager.react").Top,{commentsListRenderProps:x}),(v=r.jsx(b("CometUFIViewOptions.react"),{commentsListRenderProps:x,feedback:I}))!=null?v:r.jsx(b("CometUFICommentPaginationProgressElement.react").Top,{commentsListRenderProps:x})]}),w?r.jsx(l,{match:K,props:a}):r.jsx("div",{className:"gh1tjcio dhix69tm",children:r.jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:g._("Be the first to leave a comment.")})}),H==="RANKED_THREADED"&&r.jsx(b("CometUFICommentsFilterFallbackWarning.react"),babelHelpers["extends"]({},D(),{className:"du4w35lb dati1w0a e5nlhep0 hv4rvrfc ecm0bbzt km676qkl"})),r.jsxs("div",{className:j.dedupe({"display-1":"j83agx80","justify-content-1":"bkfpd7mw","margin-top-1":"kvgmc6g5","margin-end-1":"wkznzc2l","margin-bottom-1":"oygrvhab","margin-start-1":"dhix69tm"},d.tahoeCommentComposerConfig!==o.COMPOSER_AND_ALL_COMMENTS?{"display-1":"mkhogb32"}:null),children:[r.jsx(b("CometUFICommentPager.react").Bottom,{commentsListRenderProps:x}),r.jsx(b("CometUFICommentPaginationProgressElement.react").Bottom,{commentsListRenderProps:x})]}),M&&r.jsx(b("CometUFITypingIndicator.react"),{feedback:I})]}),E,e]})})}e.exports=a}),null);