if (self.CavalryLogger) { CavalryLogger.start_js(["KF3oP"]); }

__d("CometFeedUFICommentStarAttachment_fragmentProp.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUFICommentStarAttachment_fragmentProp",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"spark_quantity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matching_quantity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stars_image_on_star_quantity",storageKey:null},{alias:null,args:null,concreteType:"StarsVirtualGift",kind:"LinkedField",name:"virtual_gift",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"gift_image",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gift_animated_image",storageKey:null}],storageKey:null}],type:"VideoTipJarPayment"}],storageKey:null}],type:"StoryAttachment"};e.exports=a}),null);
__d("CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer"},name:"CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"spark_quantity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matching_quantity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stars_image_on_star_quantity",storageKey:null},{alias:null,args:null,concreteType:"StarsVirtualGift",kind:"LinkedField",name:"virtual_gift",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"gift_image",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gift_animated_image",storageKey:null},a],storageKey:null}],type:"VideoTipJarPayment"},a],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedUFICommentStarAttachment_fragmentProp"}],storageKey:null}],type:"StoryAttachmentTipJarPaymentStyleRenderer"};e.exports=a}),null);
__d("CometCommonReactionIconResource",["FeedbackReactionTypeNames","ReactionIconLightFilepaths","stylex"],(function(a,b,c,d,e,f){"use strict";a={size14:{height:"i4qgphn6",width:"gab7stmx"},size16:{height:"gl3lb2sf",width:"hhz5lgdu"},size18:{height:"hm271qws",width:"ov9facns"}};e.exports={getReaction:function(a,c){a="size"+a;c=b("FeedbackReactionTypeNames")[c].toLowerCase();return b("ReactionIconLightFilepaths").pathsIX[a][c]},sizes:{14:a.size14,16:a.size16,18:a.size18}}}),null);
__d("CometFeedUFICommentStarAttachment.react",["ix","fbt","CometImage.react","CometRelay","React","TetraText.react","asset","stylex","CometFeedUFICommentStarAttachment_fragmentProp.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React");function a(a){var c,d,e,f;a=j(i!==void 0?i:i=b("CometFeedUFICommentStarAttachment_fragmentProp.graphql"),a.attachment);c=a==null?void 0:(c=a.target)==null?void 0:c.spark_quantity;if(c==null)return k.jsx("div",{});d=(a==null?void 0:(d=a.target)==null?void 0:d.matching_quantity)||0;c=c+d;e=(e=a==null?void 0:(e=a.target)==null?void 0:e.stars_image_on_star_quantity)!=null?e:g("647924");f=(f=a==null?void 0:(f=a.target)==null?void 0:(f=f.virtual_gift)==null?void 0:f.gift_animated_image)!=null?f:a==null?void 0:(f=a.target)==null?void 0:(a=f.virtual_gift)==null?void 0:a.gift_image;return k.jsxs("div",{className:"kkf49tns tvmbv18p cgat1ltu aahdfvyu",children:[f!=null&&k.jsx(b("CometImage.react"),{className:"emzexkp1 d2lswtwk",src:f}),k.jsxs("div",{className:"jifvfom9 btwxx1t3 j83agx80 bp9cbjyn",children:[k.jsx(b("CometImage.react"),{className:"h676nmdw oygrvhab oi9244e8 kvgmc6g5",src:e}),k.jsx(b("TetraText.react"),{color:"primary",type:"bodyLink4",children:h._("Sent {star quantity} stars!",[h._param("star quantity",c)])}),d>0&&k.jsx(b("TetraText.react"),{color:"secondary",type:"meta1",children:h._("{matching quantity} of the Stars were matched by Facebook.",[h._param("matching quantity",d)])})]})]})}a.displayName="CometFeedUFICommentStarAttachment";e.exports=a}),null);
__d("CometUFICommentTipJarPaymentAttachmentStyle.react",["CometFeedUFICommentStarAttachment.react","CometRelay","FBLogger","React","CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){a=a.styleTypeRenderer;a=a.attachment;if(a==null){b("FBLogger")("CometFeed").mustfix("CometUFICommentTipJarPaymentAttachmentStyle: Tried to render a TipJar.");return null}return h.jsx(b("CometFeedUFICommentStarAttachment.react"),{attachment:a})}e.exports=c(a,{styleTypeRenderer:g!==void 0?g:g=b("CometUFICommentTipJarPaymentAttachmentStyle_styleTypeRenderer.graphql")})}),null);