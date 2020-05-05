if (self.CavalryLogger) { CavalryLogger.start_js(["Zn8M5"]); }

__d("CometMessengerReshareDialogSuggestionsSectionPaginationQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:5,kind:"LocalArgument",name:"count",type:"Int"},{defaultValue:null,kind:"LocalArgument",name:"cursor",type:"ID"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float"},{defaultValue:null,kind:"LocalArgument",name:"id",type:"ID!"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],h={alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:g,storageKey:null},i=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"MessagingParticipant",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"messaging_actor",plural:!1,selections:[e,f,c,h],storageKey:null},c],storageKey:null}],j={alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"other_user_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMessengerReshareDialogSuggestionsSectionPaginationQuery",selections:[{alias:null,args:b,concreteType:"MessengerBroadcastSection",kind:"LinkedField",name:"fetch__MessengerBroadcastSection",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"CometMessengerReshareDialogSuggestionsSection_section"}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMessengerReshareDialogSuggestionsSectionPaginationQuery",selections:[{alias:null,args:b,concreteType:"MessengerBroadcastSection",kind:"LinkedField",name:"fetch__MessengerBroadcastSection",plural:!1,selections:[c,{alias:null,args:d,concreteType:"SuggestedRecipientsAttachmentsConnection",kind:"LinkedField",name:"attachments_pageable",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedRecipientsAttachmentsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,e,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3}],concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:i,storageKey:"other_participants(first:3)"},{alias:null,args:null,kind:"ScalarField",name:"thread_name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:g,storageKey:null},j],type:"MessengerViewerGroupThread"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:i,storageKey:"other_participants(first:1)"},j],type:"MessengerViewer1To1Thread"},{kind:"InlineFragment",selections:[f,h],type:"User"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:null,handle:"connection",key:"CometMessengerReshareDialogSuggestionsSection_section_attachments_pageable",kind:"LinkedHandle",name:"attachments_pageable"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2660288670760117",metadata:{derivedFrom:"CometMessengerReshareDialogSuggestionsSection_section",isRefetchableQuery:!0},name:"CometMessengerReshareDialogSuggestionsSectionPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometMessengerReshareDialogSuggestionsSection_section.graphql",["CometMessengerReshareDialogSuggestionsSectionPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["attachments_pageable"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:5,kind:"LocalArgument",name:"count",type:"Int"},{defaultValue:null,kind:"LocalArgument",name:"cursor",type:"ID"},{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["fetch__MessengerBroadcastSection"],operation:b("CometMessengerReshareDialogSuggestionsSectionPaginationQuery.graphql"),identifierField:"id"}},name:"CometMessengerReshareDialogSuggestionsSection_section",selections:[c,{alias:"attachments_pageable",args:null,concreteType:"SuggestedRecipientsAttachmentsConnection",kind:"LinkedField",name:"__CometMessengerReshareDialogSuggestionsSection_section_attachments_pageable_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedRecipientsAttachmentsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometMessengerReshareTargetRow_thread"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"MessengerBroadcastSection"}}();e.exports=a}),null);
__d("CometMessengerReshareSuggestions_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMessengerReshareSuggestions_viewer",selections:[{alias:null,args:[{kind:"Literal",name:"broadcast_list_type",value:"WEB"}],concreteType:"SuggestedRecipientsConnection",kind:"LinkedField",name:"messenger_suggested_recipients",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerBroadcastSection",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometMessengerReshareDialogSuggestionsSection_section"}],storageKey:null}],storageKey:'messenger_suggested_recipients(broadcast_list_type:"WEB")'}],type:"Viewer"};e.exports=a}),null);
__d("CometMessengerReshareTargetRow_thread.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"MessageThreadKey",kind:"LinkedField",name:"thread_key",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"other_user_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"thread_fbid",storageKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMessengerReshareTargetRow_thread",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometMessengerReshareActorImage_thread"},{args:null,kind:"FragmentSpread",name:"useCometMessengerReshareName_thread"},{kind:"InlineFragment",selections:a,type:"MessengerViewerGroupThread"},{kind:"InlineFragment",selections:a,type:"MessengerViewer1To1Thread"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"User"}],type:"MessengerSearchable"}}();e.exports=a}),null);
__d("CometMessengerResharesTargets_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMessengerResharesTargets_viewer",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometMessengerReshareSuggestions_viewer"}],type:"Viewer"};e.exports=a}),null);
__d("useCometMessengerReshareActorImage_thread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometMessengerReshareActorImage_thread",selections:[{args:null,kind:"FragmentSpread",name:"useCometMessengerReshareThreadParticipants_thread"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"thread_name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"MessengerViewerGroupThread"}],type:"MessengerSearchable"};e.exports=a}),null);
__d("useCometMessengerReshareName_thread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometMessengerReshareName_thread",selections:[{args:null,kind:"FragmentSpread",name:"useCometMessengerReshareThreadParticipants_thread"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"thread_name",storageKey:null}],type:"MessengerViewerGroupThread"}],type:"MessengerSearchable"};e.exports=a}),null);
__d("useCometMessengerReshareThreadParticipants_thread.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},d=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"MessagingParticipant",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"messaging_actor",plural:!1,selections:[a,b,c],storageKey:null}],storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"useCometMessengerReshareThreadParticipants_thread",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:3}],concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:d,storageKey:"other_participants(first:3)"}],type:"MessengerViewerGroupThread"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"MessagingParticipantsOfThreadConnection",kind:"LinkedField",name:"other_participants",plural:!1,selections:d,storageKey:"other_participants(first:1)"}],type:"MessengerViewer1To1Thread"},{kind:"InlineFragment",selections:[b,a,c],type:"User"}],type:"MessengerSearchable"}}();e.exports=a}),null);
__d("PagesCometProfilePictureViewMenu.react",["ix","fbt","CometMenu.react","CometMenuItem.react","React","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){var c=a.photoViewerURL;a=a.storyURL;return i.jsxs(b("CometMenu.react"),{withArrow:!0,children:[i.jsx(b("CometMenuItem.react"),{href:a,icon:b("fbicon")._(g("1429721"),20),primaryText:h._("View Story"),testid:void 0}),c!=null?i.jsx(b("CometMenuItem.react"),{href:c,icon:b("fbicon")._(g("1030605"),20),primaryText:h._("View Profile Picture"),testid:void 0}):null]})}e.exports=a}),null);
__d("getCometMessengerReshareAction",["ix","fbt","CometProgressRing.react","CometResharesConstants","React","TetraIcon.react","fbicon","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){a=a.targetAction;switch(a.type){case"SEND":return{label:h._("Send"),onPress:a.trigger,reduceEmphasis:!0,type:"primary-button"};case"UNDO":return{addOnSecondary:i.jsx(b("CometProgressRing.react"),{color:"blue",duration:b("CometResharesConstants").UNDO_DELAY_MS/1e3,size:16,type:"count-down"}),label:h._("Undo"),onPress:a.trigger,reduceEmphasis:!0,type:"secondary-button"};case"OPTIMISTIC_VIEW":return{addOnSecondary:i.jsx(b("TetraIcon.react"),{color:"disabled",icon:b("fbicon")._(g("477813"),16),size:16}),disabled:!0,label:h._("Sent"),reduceEmphasis:!0,type:"primary-button"};case"VIEW":return{addOnSecondary:i.jsx(b("TetraIcon.react"),{color:"disabled",icon:b("fbicon")._(g("477813"),16),size:16}),disabled:!0,label:h._("Sent"),reduceEmphasis:!0,testid:"ReshareActionButtonSent",type:"primary-button"};default:a.type,b("recoverableViolation")("Got an unexpected reshare target status","comet_feed")}return null}e.exports=a}),null);
__d("useCometMessengerReshareThreadParticipants",["CometRelay","compactArray","orEmptyArray","recoverableViolation","useCometMessengerReshareThreadParticipants_thread.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){a=h(g!==void 0?g:g=b("useCometMessengerReshareThreadParticipants_thread.graphql"),a);switch(a.__typename){case"User":var c,d=a.id,e=a.name;c=(c=a.profile_picture)==null?void 0:c.uri;return e==null||c==null||d==null?b("recoverableViolation")("Could not render actor","comet_feed"):[[{id:d,name:e,profilePictureUri:c}],1];case"MessengerViewer1To1Thread":case"MessengerViewerGroupThread":d=a.other_participants;e=d==null?void 0:d.count;if(e==null)return b("recoverableViolation")("Could not find the number of participants for this thread","comet_feed");c=b("orEmptyArray")(d==null?void 0:d.nodes);a=b("compactArray")(c.map(function(a){return a==null?void 0:a.messaging_actor}));d=a.map(function(d){var a=d.id,c=d.name;d=(d=d.profile_picture)==null?void 0:d.uri;return c==null||d==null||a==null?b("recoverableViolation")("Could not render actor","comet_feed"):{id:a,name:c,profilePictureUri:d}}).filter(Boolean);return[d,e];default:return b("recoverableViolation")("Unknown thread type","comet_feed")}}e.exports=a}),null);
__d("useCometMessengerReshareActorImage",["CometRelay","recoverableViolation","useCometMessengerReshareThreadParticipants","useCometMessengerReshareActorImage_thread.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){var c;a=h(g!==void 0?g:g=b("useCometMessengerReshareActorImage_thread.graphql"),a);var d=b("useCometMessengerReshareThreadParticipants")(a);if(d==null)return b("recoverableViolation")("Could not derive any participants","comet_feed");d=d[0];c=(c=a.image)==null?void 0:c.uri;a=a==null?void 0:a.thread_name;if(d.length===0)return null;if(d.length===1){var e=d[0];return{alt:(a=a)!=null?a:e.name,shape:"circle",size:40,source:{uri:(a=c)!=null?a:e.profilePictureUri},type:"profile-photo"}}c=d.map(function(a){var b=a.name;a=a.profilePictureUri;return{alt:b,source:{uri:a}}});a=c[0];e=c[1];return{primaryPhoto:a,secondaryPhoto:e,size:40,type:"messenger-facepile"}}e.exports=a}),null);
__d("useCometMessengerReshareName",["CometRelay","MercuryParticipantListRenderer","useCometMessengerReshareThreadParticipants","useCometMessengerReshareName_thread.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;function a(a){a=h(g!==void 0?g:g=b("useCometMessengerReshareName_thread.graphql"),a);var c=b("useCometMessengerReshareThreadParticipants")(a);if(c==null)return null;var d=c[0];c=c[1];return a.thread_name!=null?a.thread_name:new(b("MercuryParticipantListRenderer"))().setTotalParticipantCount(c).renderParticipantList(d.map(function(a){var b=a.id;a=a.name;return{id:b,name:a,short_name:a}}))}e.exports=a}),null);
__d("CometMessengerReshareTargetRow.react",["CometRelay","React","TetraListCell.react","getCometMessengerReshareAction","recoverableViolation","useCometMessengerReshareActorImage","useCometMessengerReshareName","CometMessengerReshareTargetRow_thread.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function j(a){var b;switch(a.__typename){case"MessengerViewer1To1Thread":return a==null?void 0:(b=a.thread_key)==null?void 0:b.other_user_id;case"MessengerViewerGroupThread":return a==null?void 0:(b=a.thread_key)==null?void 0:b.thread_fbid;case"User":return a==null?void 0:a.id}}function k(a){switch(a){case"User":return"USER";case"MessengerViewer1To1Thread":return"USER";case"MessengerViewerGroupThread":return"GROUP";default:b("recoverableViolation")("Unknown __typename for getDispatchAction messenger dispatch","messenger_web_product");break}return null}function a(a){var c=a.testid;c=a.thread;c=h(g!==void 0?g:g=b("CometMessengerReshareTargetRow_thread.graphql"),c);var d=b("useCometMessengerReshareActorImage")(c),e=b("useCometMessengerReshareName")(c),f=j(c);if(e==null)return b("recoverableViolation")("Could not derive a name for this tread","comet_feed");if(d==null)return null;if(f==null)return b("recoverableViolation")("Could not derive enough thread info for this reshare target","comet_feed");c=k(c.__typename);if(c==null)return b("recoverableViolation")("Could not derive an action button for this reshare target","comet_feed");f={targetID:f,targetType:c};c=b("getCometMessengerReshareAction")({targetAction:a.getTargetAction(f)});return c==null?b("recoverableViolation")("Could not derive an action button for this reshare target","comet_feed"):i.jsx(b("TetraListCell.react"),{addOnPrimary:d,addOnSecondary:c,headline:e,level:3,role:"option",testid:void 0})}e.exports=a}),null);
__d("CometMessengerReshareDialogSuggestionsSection.react",["CometInfiniteScrollSuspenseList.react","CometMessengerReshareTargetRow.react","CometProgressRingIndeterminate.react","CometRelay","CometReshareDialogTargetSection.react","React","recoverableViolation","stylex","CometMessengerReshareDialogSuggestionsSection_section.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").usePaginationFragment,i=b("React");c=b("React");var j=c.useCallback;function a(a){var c=a.getTargetAction,d=a.section;a=a.shouldPaginate;d=h(g!==void 0?g:g=b("CometMessengerReshareDialogSuggestionsSection_section.graphql"),d);var e=d.data,f=e.attachments_pageable;e=e.title;var k=d.hasNext,l=d.isLoadingNext,m=d.loadNext;d=j(function(){m(5)},[m]);if(e==null||e.text==null){b("recoverableViolation")("Cannot render a target section without a title","comet_feed");return null}if(f==null||f.edges==null||f.edges.length===0)return null;f=f.edges.map(function(a){a=a.node;if(a==null||a.id==null){b("recoverableViolation")("Can't render a Messenger reshare target without an id","comet_feed");return null}return i.jsx(b("CometMessengerReshareTargetRow.react"),{getTargetAction:c,testid:void 0,thread:a},a.id)});return i.jsx(b("CometReshareDialogTargetSection.react"),{sectionTitle:e.text,children:i.jsx(b("CometInfiniteScrollSuspenseList.react"),{hasMore:a&&k,isLoading:l,listGlimmer:i.jsx("div",{className:"sjgh65i0 taijpn5t k7cz35w2 j83agx80 bp9cbjyn",children:i.jsx(b("CometProgressRingIndeterminate.react"),{color:"disabled",size:24})}),onLoadMore:d,children:f})})}e.exports=a}),null);
__d("CometMessengerReshareSuggestions.react",["CometMessengerReshareDialogSuggestionsSection.react","CometRelay","React","orEmptyArray","CometMessengerReshareSuggestions_viewer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=a.getTargetAction;a=a.viewer;a=h(g!==void 0?g:g=b("CometMessengerReshareSuggestions_viewer.graphql"),a);var d=b("orEmptyArray")((a=a.messenger_suggested_recipients)==null?void 0:a.nodes);return i.jsx(i.Fragment,{children:d.map(function(a,e){return i.jsx(b("CometMessengerReshareDialogSuggestionsSection.react"),{getTargetAction:c,section:a,shouldPaginate:e===d.length-1},a.section_type)})})}e.exports=a}),null);
__d("CometMessengerResharesSearchDataSource",["Promise","CometSearchTypeaheadBaseDataProvider","CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder","MWChatKeywordDataSource.query","WebPixelRatio","mwChatKeywordQueryVariablesBuilder","mwChatSearchPayloadDecoratorRemoveDuplicates"],(function(a,b,c,d,e,f){"use strict";var g=b("MWChatKeywordDataSource.query").normalize,h=b("MWChatKeywordDataSource.query").query;a=function(){function a(a){var c=a.limit;a=a.relayEnvironment;this.$2=[];c=new(b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(b("mwChatKeywordQueryVariablesBuilder")).setDefaultVariables({query:"",scale:b("WebPixelRatio").get(),supportedTypes:[{limit:c,result_type:"USER"},{limit:c,result_type:"GROUP"},{limit:c,result_type:"PAGE"}]});this.$1=new(b("CometSearchTypeaheadBaseDataProvider"))({query:h,queryVariablesBuilder:c,relayEnvironment:a})}var c=a.prototype;c.fetchNetwork=function(a){var c=this;return a.query===""?b("Promise").resolve({entries:[],params:a}):this.$1.fetch(a).then(function(d){var e=d.requestQueryVariables;d=d.response;var f=b("mwChatSearchPayloadDecoratorRemoveDuplicates")(c.$2);return f({entries:(f=g(d,e))!=null?f:[],params:a})})};return a}();e.exports=a}),null);
__d("CometMessengerResharesTypeaheadViewListStrategy.react",["fbt","CometReshareDialogTargetSection.react","React","TetraListCell.react","getCometMessengerReshareAction","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function i(a){var b=a.displayName,c=a.imageUrl;a=a.secondaryImageUrl;return a===""?{alt:b,shape:"circle",size:40,source:{uri:c},type:"profile-photo"}:{primaryPhoto:{alt:b,source:{uri:c}},secondaryPhoto:{alt:b,source:{uri:a}},size:40,type:"messenger-facepile"}}function j(a){switch(a){case"user":return"USER";case"page":return"PAGE";case"group":return"GROUP";default:throw b("unrecoverableViolation")("Got an unexpected resultType:"+a,"comet_feed")}}function a(a){var c=a.entries,d=a.getTargetAction,e=[],f=[],k=[],l=[];c.forEach(function(a){a=a.getRawData();switch(a.resultType){case"group":e.push(a);break;case"page":l.push(a);break;case"user":a.isContact?f.push(a):k.push(a);break}});a=[{sectionEntries:f,title:g._("Contacts")},{sectionEntries:e,title:g._("Groups")},{sectionEntries:l,title:g._("Pages")},{sectionEntries:k,title:g._("More people")}];return h.jsx(h.Fragment,{children:a.map(function(a,c){var e=a.sectionEntries;a=a.title;return e.length===0?null:h.jsx(b("CometReshareDialogTargetSection.react"),{sectionTitle:a,children:e.map(function(a){var c=a.displayName,e=a.id,f=a.resultType;f=j(f);f=b("getCometMessengerReshareAction")({targetAction:d({targetID:e,targetType:f})});return h.jsx(b("TetraListCell.react"),{addOnPrimary:i(a),addOnSecondary:f,headline:c,level:3},e)})},c)})})}e.exports=a}),null);
__d("CometMessengerResharesTargets.react",["fbt","CometMessengerResharesSearchDataSource","CometMessengerResharesTypeaheadViewListStrategy.react","CometMessengerReshareSuggestions.react","CometRelay","CometResharesSearchTargetsArea.react","React","unrecoverableViolation","CometMessengerResharesTargets_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometRelay").useRelayEnvironment,k=b("React");c=b("React");var l=c.useMemo;function a(a){var c,d=a.getTargetAction,e=a.hideDivider;a=a.viewer;a=i(h!==void 0?h:h=b("CometMessengerResharesTargets_viewer.graphql"),a);c=a==null?void 0:(c=a.account_user)==null?void 0:c.id;if(a==null||c==null)throw b("unrecoverableViolation")("Need a viewer id and post id in order to share a stor","comet_feed");var f=j();c=l(function(){return new(b("CometMessengerResharesSearchDataSource"))({limit:10,relayEnvironment:f})},[f]);var m=l(function(){return function(a){a=a.entries;return k.jsx(b("CometMessengerResharesTypeaheadViewListStrategy.react"),{entries:a,getTargetAction:d})}},[d]);return k.jsx(b("CometResharesSearchTargetsArea.react"),{dataSource:c,hideDivider:e,noSearchResultsText:g._("No contacts match your search."),placeholder:g._("Search for people and groups"),renderResults:m,suggestedTargets:k.jsx(b("CometMessengerReshareSuggestions.react"),{getTargetAction:d,viewer:a})})}e.exports=k.memo(a)}),null);