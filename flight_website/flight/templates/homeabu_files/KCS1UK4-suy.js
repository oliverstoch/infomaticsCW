if (self.CavalryLogger) { CavalryLogger.start_js(["06w7j"]); }

__d("CometGamingVideoGameHubHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3264361963638001",metadata:{relayPreloadable:!0},name:"CometGamingVideoGameHubHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3387866344561356",metadata:{relayPreloadable:!0},name:"CometGamingVideoGameHubRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","CometGamingVideoGameHubRootContentQuery$Parameters","CometGamingVideoGameHubHeaderQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();e.exports=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoGameHubRoot.react").__setRef("CometGamingVideoGameHubRoot.entrypoint"),function(a){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoGameHubRootContentQuery$Parameters"),variables:{game_id:a.routeProps.game_id,params:{game_id:a.routeProps.game_id},scale:g}},headerQueryReference:{parameters:b("CometGamingVideoGameHubHeaderQuery$Parameters"),variables:{params:{game_id:a.routeProps.game_id}}}}}})}),null);