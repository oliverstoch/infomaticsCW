if (self.CavalryLogger) { CavalryLogger.start_js(["yM1Ls"]); }

__d("CometVideoHomeInjectedLiveVideoQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2897333503716661",metadata:{relayPreloadable:!0},name:"CometVideoHomeInjectedLiveVideoQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLiveRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2650693338369592",metadata:{relayPreloadable:!0},name:"CometVideoHomeLiveRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLiveEntryPointVariables",["WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={disableCometFullWidthHero:!!b("qex")._("1425792"),scale:b("WebPixelRatio").get(),useCometLiveEndedOverlay:b("gkx")("1362110")};c=!!b("qex")._("1425793");d=!1;f=!1;var g=!0;c&&(d=b("gkx")("1365892"),f=!!b("qex")._("1107866"),g=b("gkx")("1344274"));c={containerIsFeedStory:!0,containerIsLiveStory:!0,containerIsTahoe:!1,containerIsWorkplace:!1,feedLocation:"VIDEO_HOME_FEED",feedbackSource:60,heroUFIEnabled:c,isComet:b("gkx")("708253"),removeRealtimeUFI:g,shareSheetRedesign:d,useBlueDesign:f};g=babelHelpers["extends"]({},a,{isComet:b("gkx")("708253")});d=babelHelpers["extends"]({},a,c,{useThumbnailPreviewRelay3d:b("gkx")("1357994")});e.exports={CometVideoHomeLiveHeroEntryPointVariables:g,CometVideoHomeLiveHeroUFIEntryPointVariables:c,CometVideoHomeLiveRootEntryPointVariables:d}}),null);
__d("CometVideoHomeInjectedLiveVideo.entrypoint",["CometVideoHomeLiveEntryPointVariables","JSResource","CometVideoHomeInjectedLiveVideoQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroEntryPointVariables,h=b("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroUFIEntryPointVariables;a={getPreloadProps:function(a){a=babelHelpers["extends"]({},g,h,{videoID:(a=a.routeProps.v)!=null?a:""});return{queries:{injectedLiveVideoQueryReference:{parameters:b("CometVideoHomeInjectedLiveVideoQuery$Parameters"),variables:a}}}},root:b("JSResource")("CometVideoHomeInjectedLiveVideo.react").__setRef("CometVideoHomeInjectedLiveVideo.entrypoint")};e.exports=a}),null);
__d("CometVideoHomeLiveRootEntrypoint.entrypoint",["CometVideoHomeLiveEntryPointVariables","JSResource","CometVideoHomeLiveRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables;a={getPreloadProps:function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},g,{trigger_data:{injected_video_id:a.routeProps.v}})}}}},root:b("JSResource")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRootEntrypoint.entrypoint")};e.exports=a}),null);
__d("CometVideoHomeLiveInjectionRoot.entrypoint",["JSResource","buildCometVideoHomeRoute.entrypoint","CometVideoHomeInjectedLiveVideo.entrypoint","CometVideoHomeLiveRootEntrypoint.entrypoint"],(function(a,b,c,d,e,f){"use strict";e.exports=b("buildCometVideoHomeRoute.entrypoint")(b("JSResource")("CometVideoHomeLiveInjectionRoot.react").__setRef("CometVideoHomeLiveInjectionRoot.entrypoint"),function(a){return{entryPoints:{injectedLiveVideoNestedEntryPoint:{entryPoint:b("CometVideoHomeInjectedLiveVideo.entrypoint"),entryPointParams:a},liveRootNestedEntryPoint:{entryPoint:b("CometVideoHomeLiveRootEntrypoint.entrypoint"),entryPointParams:a}},extraProps:{externalLogID:a.routeProps.externalLogID}}})}),null);
__d("CometVideoHomeLiveRoot.entrypoint",["CometVideoHomeLiveEntryPointVariables","JSResource","buildCometVideoHomeRoute.entrypoint","CometVideoHomeLiveRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables;e.exports=b("buildCometVideoHomeRoute.entrypoint")(b("JSResource")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRoot.entrypoint"),function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},g,{trigger_data:{injected_video_id:null}})}}}})}),null);