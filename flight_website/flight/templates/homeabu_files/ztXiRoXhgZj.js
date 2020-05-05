if (self.CavalryLogger) { CavalryLogger.start_js(["WMfcN"]); }

__d("CometUFICommentImageAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"},d={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},f=[b];return{kind:"SplitOperation",metadata:{derivedFrom:"CometUFICommentImageAttachmentStyle_styleTypeRenderer"},name:"CometUFICommentImageAttachmentStyle_styleTypeRenderer$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,b],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ObjectionableContentInfo",kind:"LinkedField",name:"objectionable_content_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"categories",storageKey:null},{alias:null,args:null,concreteType:"ObjectionableContentWarningScreenText",kind:"LinkedField",name:"strings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"blur_subtitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"blur_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cover_media_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"learn_more_desc",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"learn_more_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_media_desc",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uncover_media_link",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:"massive_image",args:[c],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d,e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:210},c,{kind:"Literal",name:"width",value:260}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d,e],storageKey:null}],type:"Photo"},b,{kind:"InlineFragment",selections:f,type:"MontageImage"},{kind:"InlineFragment",selections:f,type:"MontageVideo"},{kind:"InlineFragment",selections:f,type:"GenericAttachmentMedia"}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentImageAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2CommentImageAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentPhotoStyleRenderer"};e.exports=a}),null);
__d("UFI2CommentImageAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"},b={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale",type:"Float"}],kind:"Fragment",metadata:null,name:"UFI2CommentImageAttachment_attachment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ObjectionableContentInfo",kind:"LinkedField",name:"objectionable_content_info",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2CommentAttachmentContentFilterContainer_objectionableContentInfo"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:"massive_image",args:[a],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[b,c],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:210},a,{kind:"Literal",name:"width",value:260}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},b,c],storageKey:null}],type:"Photo"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"UFI2CommentAttachmentContentFilterContainer_storyAttachment"}],type:"StoryAttachment"}}();e.exports=a}),null);
__d("UFI2CommentAttachmentContainer.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.children,d=a.className,e=a.height;a=a.width;return h.jsxs("div",{className:b("joinClasses")("_2tx5",d),children:[h.jsx("div",{className:"_2txe",children:c}),h.jsx("div",{className:"_3fp0",style:{paddingBottom:(a?e/a*100:0)+"%",width:a}}),h.jsx("div",{className:"_8un9"})]})}e.exports=a}),null);
__d("UFI2CommentAttachmentContentFilterBootloadPlaceholder.react",["cx","React","UFI2CommentAttachmentContainer.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.className,d=a.height;a=a.width;return h.jsxs(h.Fragment,{children:[h.jsx(b("UFI2CommentAttachmentContainer.react"),{className:b("joinClasses")("_6bk0",c),height:d,width:a,children:h.jsx("div",{})}),h.jsx("div",{className:"_6bk2"})]})}e.exports=a}),null);
__d("UFI2CommentImageAttachment.react",["Image.react","JSResource","React","UFI2CometRelayCreateFragmentContainer","UFI2CommentAttachmentContainer.react","UFI2CommentAttachmentContentFilterBootloadPlaceholder.react","UFI2LinkWrapper.react","UFI2ScaleRect","lazyLoadComponent","UFI2CommentImageAttachment_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("UFI2CometRelayCreateFragmentContainer").createFragmentContainer;b("UFI2CometRelayCreateFragmentContainer").graphql;var i=b("lazyLoadComponent")(b("JSResource")("UFI2CommentAttachmentContentFilterContainer.react").__setRef("UFI2CommentImageAttachment.react"));function a(a){var c,d,e,f,g,j=a.attachment,k=a.storyRenderLocation;c=(c=j.media)==null?void 0:(c=c.image)==null?void 0:c.uri;d=(d=j.media)==null?void 0:(d=d.image)==null?void 0:d.width;e=(e=j.media)==null?void 0:(e=e.image)==null?void 0:e.height;var l=j.url;f=(f=j.media)==null?void 0:f.accessibility_caption;g=(g=j.media)==null?void 0:g.objectionable_content_info;if(j&&c!==""&&c!=null&&l!==""&&l!=null&&d!=null&&e!=null){var m,n,o;e=b("UFI2ScaleRect").scaleToContain({gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero:!0,maxHeight:210,maxWidth:260,srcHeight:e,srcWidth:d});d=e.height;e=e.width;m=(m=j.media)==null?void 0:(m=m.massive_image)==null?void 0:m.height;n=(n=j.media)==null?void 0:(n=n.image)==null?void 0:n.uri;o=(o=j.media)==null?void 0:(o=o.massive_image)==null?void 0:o.width;m=m!=null&&n!=null&&o!=null?{origHeight:m,origSrc:n,origWidth:o}:null;n=h.jsx(b("UFI2LinkWrapper.react"),{href:l,passthroughProps:m,rel:"theater",children:h.jsx(b("Image.react"),{alt:f,height:d,src:c,width:e})});return g?h.jsx(h.Suspense,{fallback:h.jsx(b("UFI2CommentAttachmentContentFilterBootloadPlaceholder.react"),{className:a.className,height:d,width:e}),children:h.jsx(i,{className:a.className,height:d,objectionableContentInfo:g,responsibleContentLocation:k,storyAttachment:j,type:"photo",width:e,children:n})}):h.jsx(b("UFI2CommentAttachmentContainer.react"),{className:a.className,height:d,width:e,children:n})}return null}a.displayName="UFI2CommentImageAttachment";e.exports=c(a,{attachment:g!==void 0?g:g=b("UFI2CommentImageAttachment_attachment.graphql")})}),null);
__d("CometUFICommentImageAttachmentStyle.react",["CometRelay","FBLogger","React","UFI2CommentImageAttachment.react","stylex","CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){var c=a.storyRenderLocation;a=a.styleTypeRenderer;a=a.attachment;if(a==null){b("FBLogger")("CometFeed").mustfix("CometUFICommentImageAttachmentStyle: Tried to render an image, but attachment information is null.");return null}return h.jsx(b("UFI2CommentImageAttachment.react"),{attachment:a,className:"kvgmc6g5",storyRenderLocation:c})}e.exports=c(a,{styleTypeRenderer:g!==void 0?g:g=b("CometUFICommentImageAttachmentStyle_styleTypeRenderer.graphql")})}),null);