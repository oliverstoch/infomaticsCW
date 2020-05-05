if (self.CavalryLogger) { CavalryLogger.start_js(["xH0xX"]); }

__d("CometLiveFeedStoryDeletePinnedCommentEventMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"DeletePinnedCommentEventData!"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"DeletePinnedCommentEventResponsePayload",kind:"LinkedField",name:"delete_pinned_comment_event",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometLiveFeedStoryDeletePinnedCommentEventMutation",selections:b,type:"Mutation"},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometLiveFeedStoryDeletePinnedCommentEventMutation",selections:b},params:{id:"3412119208861015",metadata:{},name:"CometLiveFeedStoryDeletePinnedCommentEventMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometUFIPinnedCommentRenderer_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"}],kind:"Fragment",metadata:null,name:"CometUFIPinnedCommentRenderer_feedback",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_pin_live_comments",storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[a],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIComment_feedback"}],type:"Feedback"}}();e.exports=a}),null);
__d("CometUFIPinnedCommentRenderer_pinnedCommentEvent.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIPinnedCommentRenderer_pinnedCommentEvent",selections:[a,{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"pinned_comment",plural:!1,selections:[a,{args:null,kind:"FragmentSpread",name:"CometUFIComment_comment"}],storageKey:null}],type:"BroadcastPinnedCommentEvent"}}();e.exports=a}),null);
__d("useUFI2AutoScroller.react",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=b("React");var h=d.useCallback,i=d.useContext,j=d.useEffect,k=d.useRef,l=d.useState,m=150,n=g.createContext({containerRef:{current:null},isAutoScrollPaused:!1,lastChildRef:{current:null},setNumChildrenSincePaused:function(){}});function a(a){var b=i(n),c=b.containerRef,d=b.isAutoScrollPaused,e=b.lastChildRef,f=b.setNumChildrenSincePaused;j(function(){if(!d){c.current!=null&&(c.current.scrollTop=c.current.scrollHeight);return}var b=g.Children.map(a,function(a){return a.key}),h=e.current;e.current=b[b.length-1];if(h!=null){var i=0;for(var j=b.length-1;j>=0;--j)if(h!==b[j])i++;else break;f(function(a){return a+i})}},[a,c,d,e,f]);return a}function c(a,b){b===void 0&&(b=m);var c=k(null),d=k(null),e=l(!1),f=e[0],i=e[1];e=l(0);var o=e[0],p=e[1];e=h(function(){if(c.current==null)return;c.current.scrollTop=c.current.scrollHeight;i(!1)},[]);var q=h(function(){if(c.current==null)return;var a=c.current.scrollHeight-(c.current.scrollTop+c.current.clientHeight)>b;f!==a&&i(a)},[f,b]);j(function(){f||(p(0),d.current=null)},[f]);a=g.jsx(n.Provider,{value:{containerRef:c,isAutoScrollPaused:f,lastChildRef:d,setNumChildrenSincePaused:p},children:a});return{childrenWithContext:a,containerRef:c,handleScroll:q,isAutoScrollPaused:f,numChildrenSincePaused:o,scrollToBottom:e}}e.exports={useAutoScrollChildren:a,useUFI2AutoScroller:c}}),null);
__d("CometLiveCommentAutoScrollContainer.react",["ix","fbt","CometTahoeUFIContext","React","TetraIcon.react","TetraText.react","fbicon","stylex","useUFI2AutoScroller.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("CometTahoeUFIContext").CometTahoeUFIContext,j=b("CometTahoeUFIContext").TahoeCommentComposerConfigEnum,k=b("React");c=b("React");var l=c.useContext,m=b("useUFI2AutoScroller.react").useUFI2AutoScroller;function a(a){a=a.children;a=m(a);var c=a.childrenWithContext,d=a.containerRef,e=a.handleScroll,f=a.isAutoScrollPaused,n=a.numChildrenSincePaused;a=a.scrollToBottom;var o=l(i);o=o.tahoeCommentComposerConfig===j.COMPOSER_ONLY;return k.jsxs("div",{className:"eg9m0zos datstx6m",onScroll:e,ref:d,children:[c,!o&&f&&n>0&&k.jsx("div",{className:"k4urcfbm pmk7jnqg k2sg9oav",children:k.jsxs("button",{className:"h4z51re5 iuny7tx3 rv4hoivh ipjc6fyt f9o22wc5 oygrvhab ad2k81qe kvgmc6g5 nysusuju j83agx80 nhd2j8a9 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l lijpglvz r44wdlyt jbw79k83 au4pd6zd cwj9ozl2 bp9cbjyn",onClick:a,children:[k.jsx("div",{className:"fv0vnmcu",children:k.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("488690"),16),size:16})}),k.jsx(b("TetraText.react"),{color:"highlight",type:"body3",children:n===1?h._("New comment"):h._({"*":"New comments ({comment count})"},[h._param("comment count",n,[0])])})]})})]})}e.exports=a}),null);
__d("CometLiveFeedStoryDeletePinnedCommentEventMutation",["CometRelay","PinnedCommentEventsConnectionHandler","CometLiveFeedStoryDeletePinnedCommentEventMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=b("PinnedCommentEventsConnectionHandler").deleteEvent,j=g!==void 0?g:g=b("CometLiveFeedStoryDeletePinnedCommentEventMutation.graphql");e.exports=function(a,b,c){h(a,{mutation:j,updater:function(a){a=a.get(c);if(!a)return;i(a,"LiveFeedStoryLiveStreaming_pinned_comment_events",b.pin_event_id)},variables:{input:b}})}}),null);
__d("CometUFIPinnedCommentRenderer.react",["ix","fbt","CometLiveFeedStoryDeletePinnedCommentEventMutation","CometRelay","CometUFIComment.react","React","TetraIcon.react","emptyFunction","fbicon","stylex","useCometConfirmationDialog","CometUFIPinnedCommentRenderer_feedback.graphql","CometUFIPinnedCommentRenderer_pinnedCommentEvent.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React");a=b("React");var m=a.useCallback;c=l.forwardRef(function(a,c){var d=a.environment,e=a.feedLocation,f=a.feedback,n=a.feedbackSource,o=a.onEdit,p=a.pinnedCommentEvent,q=a.storyRenderLocation;a=a.useDefaultActor;var r=k(i!==void 0?i:i=b("CometUFIPinnedCommentRenderer_feedback.graphql"),f),s=k(j!==void 0?j:j=b("CometUFIPinnedCommentRenderer_pinnedCommentEvent.graphql"),p);f=s.pinned_comment;var t=f==null?void 0:f.id,u=r.can_viewer_pin_live_comments===!0&&s!=null;p=b("useCometConfirmationDialog")();var v=p[0];p=p[1];m(function(){if(!u)return b("emptyFunction");v({body:h._("If you unpin this comment, you won't be able to pin it again."),title:h._("Unpin comment")},function(){var a;a=r==null?void 0:(a=r.viewer_actor)==null?void 0:a.id;var c=s.id,e=r==null?void 0:r.id;if(a==null||c==null||e==null)return;b("CometLiveFeedStoryDeletePinnedCommentEventMutation")(d,{pin_event_id:c},e)},b("emptyFunction"))},[d,r,s.id,v,u]);return f==null||t==null||!u?null:l.jsxs("div",{className:"l6v480f0 s1tcr66n",ref:c,children:[l.jsxs("div",{className:"ozuftl9m tvmbv18p tvfksri0 aahdfvyu q66pz984",children:[l.jsx("span",{className:"l9j0dhe7 hhcrnkbu i1afo9ck",children:l.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("511754"),12)})}),h._("Pinned comment")]}),l.jsx(b("CometUFIComment.react"),{className:"ecm0bbzt dati1w0a hv4rvrfc e5nlhep0",comment:f,depth:0,environment:d,feedLocation:e,feedback:r,feedbackSource:n,isHighlighted:!1,onDeeplinkToComment:null,onEdit:function(){return o(t)},onReplyToComment:null,showMenu:!0,storyRenderLocation:q,unpinTriggerRef:p,useDefaultActor:a},"Comment_"+t)]})});e.exports=c}),null);
__d("CowatchingUFIConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({LIVE_FEED_MAX_SHOWN_COMMENTS:4,LIVE_FULLSCREEN_MAX_SHOWN_COMMENTS:50,VIDEO_HOME_LIVE_TAB_MAX_SHOWN_COMMENTS:20});e.exports=a}),null);
__d("edgeIsInConnection",["nodeIsInConnection"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){c=c.getLinkedRecord("node");if(c==null){d&&d("Search edge has no node.");return!1}return b("nodeIsInConnection")(a,c,d)}e.exports=a}),null);