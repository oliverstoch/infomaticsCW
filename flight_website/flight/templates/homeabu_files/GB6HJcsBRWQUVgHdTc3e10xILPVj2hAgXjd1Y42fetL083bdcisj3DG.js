if (self.CavalryLogger) { CavalryLogger.start_js(["uD8zz"]); }

__d("FriendingCometFriendRequestSendMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"FriendRequestSendData!"},{defaultValue:null,kind:"LocalArgument",name:"scale",type:"Float!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestSendMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestSendResponsePayload",kind:"LinkedField",name:"friend_request_send",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friend_requestees",plural:!0,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"1802871789838119",metadata:{},name:"FriendingCometFriendRequestSendMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("ProfileActionMutationUtils_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"ProfileActionMutationUtils_action",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"ProfileAction"};e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"ProfileCometActionFriendRequestHandler_handler"},name:"ProfileCometActionFriendRequestHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[b,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"restrictable_profile_owner",plural:!1,selections:[a,{kind:"InlineFragment",selections:[b,c,d],type:"RestrictedUser"},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},c,d],type:"User"},b],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[b],storageKey:null}],type:"ProfileActionFriendRequest"},b],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionFriendRequestHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionFriendRequestHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActiveFriendMenu_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometIncomingFriendRequestMenu_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometOutgoingFriendRequestMenu_action"}],storageKey:null}],type:"ProfileActionFriendRequestHandler"};e.exports=a}),null);
__d("FriendingCometErrorHandler.react",["fbt","JSResource","React","cometPushToast","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";c=b("React");var h=c.useCallback,i=b("cometPushToast").cometPushErrorToast,j=b("JSResource")("FriendingCometErrorDialog.react").__setRef("FriendingCometErrorHandler.react");function a(a){var c=b("useCometLazyDialog")(j),d=c[0],e=h(function(b){b.name==="NetworkTransportError"?i({message:g._("Connection error. Please check your Internet connection.")},5e3):d({addFriendErrorHandler:e,addFriendId:a.addFriendId,addFriendSource:a.addFriendSource,error:b})},[a.addFriendId,a.addFriendSource,d]);return e}e.exports={useFriendingErrorHandler:a}}),null);
__d("ProfileActionMutationUtils",["fbt","CometRelay","WebPixelRatio","ProfileActionMutationUtils_action.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;h!==void 0?h:h=b("ProfileActionMutationUtils_action.graphql");a={getFakeProfileActionID:function(a,b,c,d){return btoa("profile_action"+a+":"+b+":"+((a=c)!=null?a:"")+":"+((b=d)!=null?b:""))},getOptimisticActionForFriendshipStatus:function(a){var c="";switch(a){case"ARE_FRIENDS":c=g._("Friends").toString();break;case"CAN_REQUEST":c=g._("Add Friend").toString();break;case"INCOMING_REQUEST":c=g._("Respond").toString();break;case"OUTGOING_REQUEST":c=g._("Cancel Request").toString();break}return{__typename:"ProfileActionFriendRequest",icon_image:{height:16*b("WebPixelRatio").get(),scale:b("WebPixelRatio").get(),uri:null,width:16*b("WebPixelRatio").get()},title:{text:c}}}};e.exports=a}),null);
__d("FriendingCometFriendRequestSendMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestSendMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=g!==void 0?g:g=b("FriendingCometFriendRequestSendMutation.graphql");function a(a,c,d,e,f,g){var j=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST");return h(a,{mutation:i,onError:e,optimisticResponse:{friend_request_send:{friend_requestees:[{friendship_status:"OUTGOING_REQUEST",id:c,profile_action:babelHelpers["extends"]({},j,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}]}},variables:{input:{friend_requestee_ids:[c],people_you_may_know_location:f,refs:[g],source:d},scale:b("WebPixelRatio").get()}})}e.exports={commit:a}}),null);
__d("ProfileCometActionFriendRequestHandler.react",["CometLazyPopoverTrigger.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestSendMutation","JSResource","React","promiseDone","recoverableViolation","ProfileCometActionFriendRequestHandler_handler.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("CometRelay").useRelayEnvironment,j=b("FriendingCometErrorHandler.react").useFriendingErrorHandler,k=b("React");c=b("React");var l=c.useCallback,m=b("JSResource")("ProfileCometActiveFriendMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),n=b("JSResource")("ProfileCometIncomingFriendRequestMenu.react").__setRef("ProfileCometActionFriendRequestHandler.react"),o=b("JSResource")("FriendingCometFriendRequestCancelMutation").__setRef("ProfileCometActionFriendRequestHandler.react");function a(a){var c,d,e=a.children,f=a.handler;a=a.popoverPosition;var p=i();f=h(g!==void 0?g:g=b("ProfileCometActionFriendRequestHandler_handler.graphql"),f);f=f.profile_action;var q=(f==null?void 0:(c=f.profile_owner)==null?void 0:c.id)||"0";q==="0"&&b("recoverableViolation")("Missing profile ID","profile_comet");var r=j({addFriendId:q,addFriendSource:"profile_button"});c=l(function(){b("FriendingCometFriendRequestSendMutation").commit(p,q,"profile_button",r)},[p,r,q]);var s=l(function(){b("promiseDone")(o.load().then(function(a){a=a.commit;a(p,q,"profile",r)}))},[p,r,q]);d=f==null?void 0:(d=f.profile_owner)==null?void 0:d.friendship_status;if(d==null){b("recoverableViolation")("Failed to fetch friendship status for profile "+q,"profile_comet");return null}var t=null;switch(d){case"ARE_FRIENDS":t=m;break;case"CAN_REQUEST":return e({onPress:c});case"INCOMING_REQUEST":t=n;break;case"OUTGOING_REQUEST":return e({onPress:s});default:b("recoverableViolation")("Unknown friendship status "+d+" for profile "+q,"profile_comet");return null}return!t||!f?e({}):k.jsx(b("CometLazyPopoverTrigger.react"),{autoAlign:!0,popoverProps:{action:f},popoverResource:t,position:a,preloadTrigger:"button",children:function(a,b,c,d,f,g){return e({onHoverIn:d,onHoverOut:f,onPress:b,onPressIn:g,ref:a})}})}e.exports=a}),null);
__d("CometSelectMenuTrigger.react",["fbt","BaseContextualLayer.react","CometComponentWithKeyCommands.react","CometKeys","CometMenu.react","CometMenuItemSelectable.react","FocusInertRegion.react","FocusWithinHandler.react","React","TabbableScopeQuery.react","stylex","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback,j=c.useMemo,k=c.useRef,l=c.useState,m={hideOutline:{outline:"lzcic4wl"}};function a(a){var c=a.children,d=a.disabled;d=d===void 0?!1:d;var e=a.onChange,f=a.options,n=a.selectedValue,o=a.size;o=o===void 0?"normal":o;var p=a.truncate;p=p===void 0?!0:p;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","disabled","onChange","options","selectedValue","size","truncate"]);var q=l(!1),r=q[0],s=q[1],t=r&&f.length>0,u=b("useCometUniqueID")();q=b("useCometUniqueID")();r=b("useCometUniqueID")();var v=l(null),w=v[0],x=v[1];v=k(null);var y=i(function(){return s(!0)},[]),z=i(function(){x(null),s(!1)},[]),A=i(function(a){a||z()},[z]),B=i(function(){t?z():y()},[t,z,y]),C=f.filter(function(a){return!a.disabled}),D=i(function(){for(var a=0;a<C.length;a++)if(C[a].value===w)return a;return null},[w,C]),E=j(function(){var a;return[{command:{key:(a=b("CometKeys")).ENTER},description:g._("Select item"),handler:function(){if(w!=null)e(w),z();else{var a;x((a=n)!=null?a:null);y()}},triggerOnKeyup:!0},{command:{key:a.ESCAPE},description:g._("Close suggestions"),handler:function(){t&&z()}},{command:{key:a.DOWN},description:g._("Next item"),handler:function(){if(C.length>0){var a=D();if(w==null||a==null){var b;x((b=n)!=null?b:C[0].value)}else a===C.length-1?x(C[0].value):x(C[a+1].value);y()}}},{command:{key:a.UP},description:g._("Previous item"),handler:function(){if(C.length>0){var a=D();if(w==null||a==null){var b;x((b=n)!=null?b:C[C.length-1].value)}else a===0?x(C[C.length-1].value):x(C[a-1].value);y()}}},{command:{alt:!0,key:a.DOWN},description:g._("Show suggestions"),handler:y},{command:{alt:!0,key:a.UP},description:g._("Close suggestions"),handler:z},{command:{key:a.HOME},description:g._("First item"),handler:function(){t&&x(C[0].value)}},{command:{key:a.END},description:g._("Last item"),handler:function(){t&&x(C[C.length-1].value)}}]},[y,w,e,z,n,t,C,D]);return h.jsx(b("FocusWithinHandler.react"),{onFocusChange:A,children:h.jsxs(b("CometComponentWithKeyCommands.react"),{commandConfigs:E,children:[c(v,{"aria-activedescendant":w!=null?u:void 0,"aria-controls":t?q:void 0,"aria-expanded":t,disabled:d,id:r,onPress:B,role:"combobox",xstyle:[w!=null&&m.hideOutline]}),t&&v.current!=null&&h.jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({},a,{context:v.current,children:h.jsx(b("FocusInertRegion.react"),{focusQuery:b("TabbableScopeQuery.react"),children:h.jsx(b("CometMenu.react"),{id:q,role:"listbox",size:o,truncate:p,children:f.map(function(a,c){return h.jsx(b("CometMenuItemSelectable.react"),{"aria-checked":a.value===n,"aria-disabled":a.disabled,"aria-posinset":c,"aria-selected":a.value===n,"aria-setsize":f.length,bodyColor:a.bodyColor,bodyText:a.bodyText,disabled:a.disabled,icon:a.icon,iconStyle:"contained_small_icon",id:a.value===w?u:void 0,isSelected:a.value===n,onClick:function(){e(a.value),z()},preventClosingMenuOnSelect:!0,primaryText:a.label,role:"option",secondaryColor:a.secondaryColor,secondaryText:a.secondaryText,testid:void 0,visuallyFocused:a.value===w},a.value)})})})}))]})})}e.exports=a}),null);
__d("CometSelect.react",["ix","CometMenuItemSelectable.react","CometPressable.react","CometSelectMenuTrigger.react","React","TetraIcon.react","TetraText.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");c=b("React");var j=c.useMemo,k={button:{appearance:"dwo3fsh8",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",position:"l9j0dhe7",zIndex:"du4w35lb",alignItems:"bp9cbjyn",backgroundColor:"tdjehn4e",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",boxSizing:"rq0escxv",cursor:"nhd2j8a9",justifyContent:"i1fnvgqd",paddingBottom:"osnr6wyh",paddingEnd:"d1544ag0",paddingStart:"tw6a2znq",paddingTop:"jktsbyx5",textAlign:"hzawbc8m"},buttonDisabled:{cursor:"rj84mg9z"},buttonExpanded:{minWidth:"oqhjfihn"},icon:{lineHeight:"soycq5t1",marginStart:"h676nmdw"}};function a(a){a.aux;var c=a.defaultLabel,d=a.disabled,e=d===void 0?!1:d;d=a.expanded;var f=d===void 0?!1:d,l=a.labelLineLimit;d=a.testid;var m=babelHelpers.objectWithoutPropertiesLoose(a,["aux","defaultLabel","disabled","expanded","labelLineLimit","testid"]),n=j(function(){var a=m.options.find(function(a){return a.value===m.selectedValue});return a!=null?a.label:(a=c)!=null?a:""},[c,m.options,m.selectedValue]);return i.jsx(b("CometSelectMenuTrigger.react"),babelHelpers["extends"]({},m,{disabled:e,children:function(a,c){var d=c.xstyle;c=babelHelpers.objectWithoutPropertiesLoose(c,["xstyle"]);return i.jsxs(b("CometPressable.react"),babelHelpers["extends"]({},c,{expanding:!0,ref:a,role:"combobox",testid:void 0,xstyle:[k.button,f&&k.buttonExpanded,e&&k.buttonDisabled,d],children:[i.jsx(b("TetraText.react"),{color:e?"disabled":null,numberOfLines:l,type:"bodyLink3",children:n}),i.jsx("div",{className:(h||(h=b("stylex")))(k.icon),children:i.jsx(b("TetraIcon.react"),{color:e?"disabled":"primary",icon:b("fbicon")._(g("481882"),16)})})]}))}}))}e.exports=a}),null);
__d("GoodwillMemoriesAndCelebrationsTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GoodwillMemoriesAndCelebrationsLoggerConfig")}),null);
__d("CommitSecondarySubscribeStatusMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"ProfileUpdateSecondarySubscribeStatusData!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"SEE_FIRST"}],f={alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},g={kind:"InlineFragment",selections:[d],type:"Page"},h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CommitSecondarySubscribeStatusMutation",selections:[{alias:null,args:b,concreteType:"ProfileUpdateSecondarySubscribeStatusResponsePayload",kind:"LinkedField",name:"profile_update_secondary_subscribe_status",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile",plural:!1,selections:[c,{kind:"InlineFragment",selections:[d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[f],storageKey:'profile_action(action_type:"SEE_FIRST")'}],type:"User"},g],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CommitSecondarySubscribeStatusMutation",selections:[{alias:null,args:b,concreteType:"ProfileUpdateSecondarySubscribeStatusResponsePayload",kind:"LinkedField",name:"profile_update_secondary_subscribe_status",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile",plural:!1,selections:[h,c,{kind:"InlineFragment",selections:[d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[h,f,c],storageKey:'profile_action(action_type:"SEE_FIRST")'}],type:"User"},g],storageKey:null}],storageKey:null}]},params:{id:"2676695309088412",metadata:{},name:"CommitSecondarySubscribeStatusMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("ProfileCometEditFriendListsDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2607397549316893",metadata:{relayPreloadable:!0},name:"ProfileCometEditFriendListsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometActionEditFriendListHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"ProfileCometActionEditFriendListHandler_handler"},name:"ProfileCometActionEditFriendListHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionEditFriendListHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionEditFriendListHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionEditFriendListHandler"};e.exports=a}),null);
__d("ProfileCometActionSeeFirstHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"ProfileCometActionSeeFirstHandler_handler"},name:"ProfileCometActionSeeFirstHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null}],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionSeeFirstHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionSeeFirstHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionSeeFirstHandler"};e.exports=a}),null);
__d("CommitSecondarySubscribeStatus",["CometRelay","ProfileActionMutationUtils","CommitSecondarySubscribeStatusMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=g!==void 0?g:g=b("CommitSecondarySubscribeStatusMutation.graphql");function a(a,c,d,e,f){h(a,{mutation:i,onCompleted:f,onError:e,optimisticResponse:{profile_update_secondary_subscribe_status:{profile:{__typename:d,id:c.profile_id,profile_action:{__typename:"ProfileActionSeeFirst",id:b("ProfileActionMutationUtils").getFakeProfileActionID(c.profile_id,50),is_active:c.new_status!=="SEE_FIRST"},secondary_subscribe_status:c.new_status}}},variables:{input:c}});return}e.exports=a}),null);
__d("ProfileCometEditFriendListsDialog.entrypoint",["JSResource","WebPixelRatio","ProfileCometEditFriendListsDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:b("ProfileCometEditFriendListsDialogQuery$Parameters"),variables:{friendID:a.friendID,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("ProfileCometEditFriendListsDialog.react").__setRef("ProfileCometEditFriendListsDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometActionEditFriendListHandler.react",["fbt","CometCardedDialogLoadingState.react","CometRelay","ProfileCometEditFriendListsDialog.entrypoint","React","unrecoverableViolation","useCometEntryPointDialog","ProfileCometActionEditFriendListHandler_handler.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function a(a){var c=a.children;a=a.handler;a=i(h!==void 0?h:h=b("ProfileCometActionEditFriendListHandler_handler.graphql"),a);var d=function(a){return j.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:g._("Edit Friend List"),withCloseButton:!0})},e=a==null?void 0:(a=a.profile_action)==null?void 0:(a=a.profile_owner)==null?void 0:a.id;if(e==null)throw b("unrecoverableViolation")("No profile owner is available for editing friend lists.","profile_comet");a=b("useCometEntryPointDialog")(b("ProfileCometEditFriendListsDialog.entrypoint"),{friendID:e},"button",d);var f=a[0];d=a[1];var k=a[2],l=a[3];a=a[4];return c({onHoverIn:k,onHoverOut:l,onPress:function(){return f({friendID:e})},onPressIn:a,ref:d})}e.exports=a}),null);
__d("ProfileCometActionSeeFirstHandler.react",["CometRelay","CommitSecondarySubscribeStatus","React","ProfileCometActionSeeFirstHandler_handler.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("CometRelay").useRelayEnvironment;b("React");c=b("React");var j=c.useCallback,k=c.useState;function a(a){var c,d=k(!1),e=d[0],f=d[1],l=i();d=h(g!==void 0?g:g=b("ProfileCometActionSeeFirstHandler_handler.graphql"),a.handler);var m=((c=d.profile_action)==null?void 0:(c=c.profile_owner)==null?void 0:c.id)||"",n=(c=(c=d.profile_action)==null?void 0:(c=c.profile_owner)==null?void 0:c.__typename)!=null?c:"";c=a.children;var o=(a=d.profile_action)==null?void 0:(d=a.profile_owner)==null?void 0:d.secondary_subscribe_status;a=j(function(){f(!0),b("CommitSecondarySubscribeStatus")(l,{location:"PROFILE",new_status:o==="SEE_FIRST"?"REGULAR_FOLLOW":"SEE_FIRST",profile_id:m},n,function(){return f(!1)},function(){return f(!1)})},[l,m,n,o]);return c({disabled:e,onPress:a})}e.exports=a}),null);
__d("CometInputWithCommands.react",["CometComponentWithKeyCommands.react","CometKeys","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useMemo;function a(a){var c=h(function(){var c=[];a.enter!=null&&c.push({command:{key:b("CometKeys").ENTER},description:a.enter.description,handler:a.enter.handler,triggerFromInputs:!0});a["delete"]!=null&&c.push({command:{key:b("CometKeys").DELETE},description:a["delete"].description,handler:a["delete"].handler,triggerFromInputs:!0});a.up!=null&&c.push({command:{key:b("CometKeys").UP},description:a.up.description,handler:a.up.handler,triggerFromInputs:!0});a.down!=null&&c.push({command:{key:b("CometKeys").DOWN},description:a.down.description,handler:a.down.handler,triggerFromInputs:!0});a.tab!=null&&c.push({command:{key:b("CometKeys").TAB},description:a.tab.description,handler:a.tab.handler,triggerFromInputs:!0});a.esc!=null&&c.push({command:{key:b("CometKeys").ESCAPE},description:a.esc.description,handler:a.esc.handler,triggerFromInputs:!0});return c},[a["delete"],a.down,a.enter,a.esc,a.tab,a.up]);return g.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,debugName:"InputSubmit",elementType:a.isInline===!0?"span":"div",xstyle:a.xstyle,children:a.children})}e.exports=a}),null);
__d("CometFlexibleGrid.react",["React","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useLayoutEffect,j=c.useRef,k=c.useState;function a(a){var c=a.columnMaxWidth,d=a.columnMinWidth,e=a.justify;e=e===void 0?"start":e;var f=a.maxItems;f=f===void 0?Infinity:f;var l=a.minItems,m=l===void 0?1:l,n=a.onTotalItemsChanged,o=h.Children.toArray(a.children);l=k(o.length);var p=l[0],q=l[1],r=j(null);i(function(){function a(a){a!==p&&(n&&n(a),q(a))}function b(){if(r.current!=null){var b=r.current.children,c=b[m-1].offsetTop;for(var d=m;d<b.length;d++)if(b[d].offsetTop>c){a(d);return}a(b.length)}}b();window.addEventListener("resize",b);return function(){window.removeEventListener("resize",b)}},[c,d,m,f,p,n]);if(m>f)throw b("unrecoverableViolation")("minItems must be less than maxItems","comet_ui");a=Math.min(Math.max(m,o.length+(e!=="center"?10:0)),f);return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"align-content-1":"bq4bzpyk","display-1":"j83agx80","flex-direction-1":"btwxx1t3","flex-wrap-1":"lhclo0ds","justify-content-1":"jifvfom9","margin-top-1":"muag1w35","margin-end-1":"dlv3wnog","margin-bottom-1":"enqfppq2","margin-start-1":"rl04r1d5"},e==="center"?{"justify-content-1":"taijpn5t"}:null),ref:r,children:Array(a).fill().map(function(a,e){a=o[e];var f=e<p;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"box-sizing-1":"rq0escxv","display-1":"j83agx80","flex-basis-1":"rj1gh0hx","flex-direction-1":"cbu4d94t","flex-grow-1":"buofh1pr","flex-shrink-1":"g5gj957u","padding-end-1":"ph5uu5jm","padding-start-1":"b3onmgus","visibility-1":"kr9hpln1"},f?{"padding-bottom-1":"e5nlhep0","padding-top-1":"ecm0bbzt","visibility-1":"n1dktuyu"}:null),style:{maxWidth:c,minWidth:d},children:f?a:null},(f=a==null?void 0:a.key)!=null?f:e)})})}e.exports=a}),null);
__d("CometMarketplaceFeedSeparator.react",["CometMarketplaceUtils","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometMarketplaceUtils").styles,i=b("React"),j={separator:{borderBottom:"s1tcr66n",marginTop:"n1l5q3vz",marginEnd:"ad2k81qe",marginBottom:"n851cfcs",marginStart:"f9o22wc5",width:"k4urcfbm"}};function a(a){a=a.xstyle;return i.jsx("div",{className:(g||(g=b("stylex")))(j.separator,h.withMaxWidth,a)})}e.exports=a}),null);
__d("CometTypeaheadDataEntry",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var b=a.key,c=a.label;a=a.rawData;this.$1=b;this.$2=c;this.$3=a}var b=a.prototype;b.getKey=function(){return this.$1};b.getLabel=function(){return this.$2};b.getRawData=function(){return this.$3};return a}();e.exports=a}),null);
__d("CometMenuItemSelectable.react",["ix","CometMenuItemBase.react","CometMenuItemIcon.react","CometToggle.react","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function i(a,c){return!a?null:c?h.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("498146"),20)}):h.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("477820"),20)})}function a(a,c){a.aux;var d=a.icon,e=a.iconColor,f=a.iconStyle,g=a.isSelected,j=babelHelpers.objectWithoutPropertiesLoose(a,["aux","icon","iconColor","iconStyle","isSelected"]);if(d)return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:a.aux!=null?a.aux(g):i(g,!0),iconNode:h.jsx(b("CometMenuItemIcon.react"),{icon:d,iconColor:e,use:f}),ref:c}));else{d=a.aux!=null?a.aux(g):i(g,!1);return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:d?h.jsx("div",{className:"irj2b8pg ew0dbk1b",children:d}):void 0,ref:c}))}}e.exports=h.forwardRef(a)}),null);
__d("CometTabMenu.react",["CometMenu.react","CometMenuItemSelectable.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.menuItems;a.onClose;return g.jsx(b("CometMenu.react"),{children:c.map(function(a,c){var d=a.disabled,e=a.label,f=a.linkProps,h=a.onHoverIn,i=a.onHoverOut,j=a.onPress,k=a.onPressIn,l=a.selected;return g.jsx(b("CometMenuItemSelectable.react"),{disabled:d,href:(d=f==null?void 0:f.url)!=null?d:void 0,icon:a.icon!=null?a.icon:void 0,isSelected:(d=l)!=null?d:!1,onClick:j,onHoverIn:h,onHoverOut:i,onPressIn:k,primaryText:e,role:"menuitemradio",routeTarget:f==null?void 0:f.routeTarget,target:f==null?void 0:f.target,testid:void 0},c)})})}e.exports=a}),null);
__d("distinctArray",[],(function(a,b,c,d,e,f){function a(a){if(a==null)return[];if(Array.isArray(a)){var b=a.length;if(b<=200){var c=[];for(var d=0;d<b;d++){var e=a[d];c.indexOf(e)===-1&&c.push(e)}return c}}return Array.from(new Set(a).values())}e.exports=a}),null);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){g(0,1537,a,b)}e.exports=a}),null);