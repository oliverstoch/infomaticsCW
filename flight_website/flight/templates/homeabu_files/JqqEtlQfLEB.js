if (self.CavalryLogger) { CavalryLogger.start_js(["UjmFP"]); }

__d("CometGroupJobComposerWrapperQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2920452867990368",metadata:{relayPreloadable:!0},name:"CometGroupJobComposerWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupJobComposer.entrypoint",["CometGroupJobComposerWrapperQuery$Parameters","JSResource","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeProps.actorID;return{queries:{queryReference:{environmentProviderOptions:{actorID:a},parameters:b("CometGroupJobComposerWrapperQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("CometGroupJobComposer.react").__setRef("CometGroupJobComposer.entrypoint")};e.exports=a}),null);
__d("CometGroupDiscussionJobsRoot.entrypoint",["CometGroupJobComposer.entrypoint","createCometGroupDiscussionRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";e.exports=b("createCometGroupDiscussionRoot.entrypoint")(function(a){return{defaultComposerReference:null,jobComposerReference:{entryPoint:b("CometGroupJobComposer.entrypoint"),entryPointParams:a},saleComposerReference:null}})}),null);