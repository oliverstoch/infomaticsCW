if (self.CavalryLogger) { CavalryLogger.start_js(["fcWQw"]); }

__d("CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer"},name:"CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"binary_cdn_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fallback_image_cdn_uri",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"fallback_image_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"low_res_base_64_image_placeholder",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Asset3D"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"binary_cdn_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fallback_image_cdn_uri",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"fallback_image_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"low_res_base_64_image_placeholder",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Asset3D"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryAttachmentMatchDebugger_storyAttachmentStyleRendererUnion"}],type:"StoryAttachmentAsset3dStyleRenderer"};e.exports=a}),null);
__d("useWebGLContextVisibility",["HiddenSubtreePassiveContext","React","intersectionObserverEntryIsIntersecting","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(a,c){c===void 0&&(c=Object.freeze({}));var d=g(b("HiddenSubtreePassiveContext")),e=function(c){var e=d.getCurrentState().hiddenOrBackgrounded_FIXME;b("intersectionObserverEntryIsIntersecting")(c)?a(!0):e||a(!1)};return b("useIntersectionObserver")(e,babelHelpers["extends"]({root:null,rootMargin:{},threshold:0},c))}e.exports=a}),null);
__d("CometFeedStoryAsset3DAttachmentStyle.react",["requireCond","cr:1298198","CometAspectRatioContainer.react","CometImageCover.react","CometPressable.react","CometRelay","React","recoverableViolation","stylex","unrecoverableViolation","useCometFeedStoryAttachmentMatchDebugger","useWebGLContextVisibility","CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");c=b("React");var k=c.useState,l={content:{height:"datstx6m",position:"l9j0dhe7"},image:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},mediaPressed:{backgroundColor:"r9n4d945"},root:{borderBottom:"linmgsc8",borderTop:"opwvks06",boxShadow:"g81y0s2s"}},m=584;function a(a){var c,d;a=i(g!==void 0?g:g=b("CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer.graphql"),a.styleTypeRenderer);b("useCometFeedStoryAttachmentMatchDebugger")(a);var e=k(!1),f=e[0];e=e[1];e=b("useWebGLContextVisibility")(e,{rootMargin:{bottom:2e3,top:2e3}});a=a==null?void 0:(a=a.attachment)==null?void 0:a.target;if(a==null)throw b("unrecoverableViolation")("cannot load 3D photo without media target","comet_feed");var n=a.fallback_image_cdn_uri,o=a.low_res_base_64_image_placeholder;if(n==null)throw b("unrecoverableViolation")("cannot load 3D photo without static image uri","comet_feed");c=(c=a.fallback_image_dimensions)==null?void 0:c.x;d=(d=a.fallback_image_dimensions)==null?void 0:d.y;(c==null||d==null)&&b("recoverableViolation")("null fallback size was provided for 3d photo","comet_feed");c=c==null||d==null||c===0||d===0?1:c/d;d=((d=a.savable_description)==null?void 0:d.text)||"";var p=a.url;a=a.binary_cdn_uri;f=a!=null&&b("cr:1298198")!=null&&f?j.jsx(b("cr:1298198"),{fileURI:a,height:m/c,width:m}):j.jsx(b("CometImageCover.react"),{alt:d,src:n});a=j.jsx("div",{className:(h||(h=b("stylex")))(l.root),ref:e,children:j.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:c,children:j.jsxs("div",{className:h(l.content),children:[o!=null?j.jsx("div",{className:(h||(h=b("stylex")))(l.image),children:j.jsx(b("CometImageCover.react"),{alt:"",src:"data:image/jpeg;base64,"+o})}):null,j.jsx("div",{className:h(l.image),children:f})]})})});return p!=null?j.jsx(b("CometPressable.react"),{display:"block",hideHoverOverlay:!0,linkProps:{url:p},overlayPressedStyle:l.mediaPressed,children:a}):a}e.exports=a}),null);
__d("CometWebGLCubemapTexture",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1=a,this.$2=a.createTexture(),this.initializeTexture()}var c=a.prototype;c.initializeTexture=function(){var a=this.$1;a.bindTexture(a.TEXTURE_CUBE_MAP,this.$2);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR);a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAG_FILTER,a.LINEAR);var b=new Uint8Array([0,0,0,0]);a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,b);a.bindTexture(a.TEXTURE_CUBE_MAP,null)};c.setFace=function(a,c){var d=this.$1,e=0;switch(a){case 0:e=d.TEXTURE_CUBE_MAP_POSITIVE_X;break;case 1:e=d.TEXTURE_CUBE_MAP_NEGATIVE_Z;break;case 2:e=d.TEXTURE_CUBE_MAP_NEGATIVE_X;break;case 3:e=d.TEXTURE_CUBE_MAP_POSITIVE_Z;break;case 4:e=d.TEXTURE_CUBE_MAP_POSITIVE_Y;break;case 5:e=d.TEXTURE_CUBE_MAP_NEGATIVE_Y;break;default:b("recoverableViolation")("Cubemap face out of bounds","webgl");return}e!==0&&(d.bindTexture(d.TEXTURE_CUBE_MAP,this.$2),d.texImage2D(e,0,d.RGB,d.RGB,d.UNSIGNED_BYTE,c),d.bindTexture(d.TEXTURE_CUBE_MAP,null))};c.generateMipmap=function(){var a=this.$1;a.bindTexture(a.TEXTURE_CUBE_MAP,this.$2);a.generateMipmap(a.TEXTURE_CUBE_MAP);a.bindTexture(a.TEXTURE_CUBE_MAP,null)};c.bindToSlot=function(a){var b=this.$1;b.activeTexture(b.TEXTURE0+a);b.bindTexture(b.TEXTURE_CUBE_MAP,this.$2)};c.release=function(){this.$1.deleteTexture(this.$2)};return a}();e.exports=a}),null);
__d("CometWebGLIndexBuffer",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$2=a,this.$1=a.createBuffer()}var b=a.prototype;b.bufferData=function(a){var b=this.$2;b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,this.$1);b.bufferData(b.ELEMENT_ARRAY_BUFFER,a,b.STATIC_DRAW)};b.bindToElements=function(){var a=this.$2;a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.$1)};return a}();e.exports=a}),null);
__d("CometWebGLVertexBuffer",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$2=a,this.$1=a.createBuffer()}var b=a.prototype;b.bufferData=function(a){var b=this.$2;b.bindBuffer(b.ARRAY_BUFFER,this.$1);b.bufferData(b.ARRAY_BUFFER,a,b.STATIC_DRAW)};b.bindToAttribute=function(a,b,c,d,e,f){var g=this.$2;g.bindBuffer(g.ARRAY_BUFFER,this.$1);g.vertexAttribPointer(a,b,c,d,e,f);g.enableVertexAttribArray(a)};return a}();e.exports=a}),null);
__d("getWebGLAttributeSizeAndType",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b=b?WebGLRenderingContext.UNSIGNED_BYTE:WebGLRenderingContext.FLOAT;switch(a.type){case WebGLRenderingContext.FLOAT:return{size:1,type:b};case WebGLRenderingContext.FLOAT_VEC2:return{size:2,type:b};case WebGLRenderingContext.FLOAT_VEC3:return{size:3,type:b};case WebGLRenderingContext.FLOAT_VEC4:return{size:4,type:b};case WebGLRenderingContext.FLOAT_MAT2:return{size:4,type:b};case WebGLRenderingContext.FLOAT_MAT3:return{size:9,type:b};case WebGLRenderingContext.FLOAT_MAT4:return{size:16,type:b}}return{size:1,type:b}}e.exports=a}),null);
__d("CometWebGLGeometry",["CometWebGLIndexBuffer","CometWebGLVertexBuffer","getWebGLAttributeSizeAndType","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function g(a){switch(a){case WebGLRenderingContext.BYTE:case WebGLRenderingContext.UNSIGNED_BYTE:return 1;case WebGLRenderingContext.SHORT:case WebGLRenderingContext.UNSIGNED_SHORT:return 2;case WebGLRenderingContext.FLOAT:return 4}b("recoverableViolation")("Unrecognized vertex type: "+a,"webgl");return 1}a=function(){function a(a,c){c===void 0&&(c={interleaved:!0}),this.$1=[],this.$2=new(b("CometWebGLVertexBuffer"))(a),this.$3=null,this.$4=0,this.$6=null,this.$7=null,this.$8=0,this.$9=c.interleaved!==!1,this.$5=a,this.$10=0}var c=a.prototype;c.addAttribute=function(a,c){c===void 0&&(c={normalize:!1});var d=!!c.normalize,e=b("getWebGLAttributeSizeAndType")(a,d),f=e.size;e=e.type;var h=g(e);this.$1.push({loc:a.location,normalize:d,offset:c.offset!=null?c.offset:this.$10,size:f,stride:c.stride!=null?c.stride:h*f,type:e});this.$10+=h*f};c.bufferData=function(a){if(a instanceof ArrayBuffer){this.$2.bufferData(a);this.$4=a.byteLength;return}if(this.$3&&a.length<=this.$3.length){for(var b=0;b<a.length;b++)this.$3[b]=a[b];for(var b=a.length;b<this.$3.length;b++)this.$3[b]=0}else this.$3=new Float32Array(a);this.$4=a.length*4;this.$2.bufferData(this.$3.buffer)};c.bufferIndex=function(a){if(this.$7&&a.length<this.$7.length){for(var c=0;c<a.length;c++)this.$7[c]=a[c];for(var c=a.length;c<this.$7.length;c++)this.$7[c]=0}else this.$7=new Uint16Array(a);this.$8=a.length;this.$6||(this.$6=new(b("CometWebGLIndexBuffer"))(this.$5));this.$6.bufferData(this.$7)};c.bindToAttributes=function(){for(var a=0;a<this.$1.length;a++){var b=this.$1[a];this.$2.bindToAttribute(b.loc,b.size,b.type,!!b.normalize,this.$9?this.$10:b.stride,b.offset)}this.$6&&this.$6.bindToElements()};c.draw=function(){if(this.$9&&this.$4%this.$10!==0){b("recoverableViolation")("Geometry buffer length is not perfectly divisible by stride","webgl");return}var a=this.$5;if(this.$7)a.drawElements(a.TRIANGLES,this.$8,a.UNSIGNED_SHORT,0);else{var c=this.$4/this.$10;a.drawArrays(a.TRIANGLES,0,c)}};return a}();e.exports=a}),null);
__d("CometWebGLTexture",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b){var c;b===void 0&&(b=Object.freeze({}));this.$1=a;this.$4=a.createTexture();a.bindTexture(a.TEXTURE_2D,this.$4);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);this.$5=(c=b.width)!=null?c:0;this.$2=(c=b.height)!=null?c:0;if("source"in b){c=b.source;c==null?a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.$5,this.$2,0,a.RGBA,a.UNSIGNED_BYTE,c):this.setSource(c)}else a.texImage2D(a.TEXTURE_2D,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]))}var b=a.prototype;b.getGLTexture=function(){return this.$4};b.setSource=function(a){this.$3=a;var b=this.$1;b.bindTexture(b.TEXTURE_2D,this.$4);a instanceof Image&&(b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,0),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),this.$5=a.naturalWidth,this.$2=a.naturalHeight)};b.bindToSlot=function(a){var b=this.$1;b.activeTexture(b.TEXTURE0+a);b.bindTexture(b.TEXTURE_2D,this.$4)};return a}();e.exports=a}),null);
__d("CometWebGLMesh",["CometWebGLCubemapTexture","CometWebGLGeometry","CometWebGLTexture"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,c,d){d===void 0&&(d={interleaved:!0}),this.$1=a,this.geometry=new(b("CometWebGLGeometry"))(a,{interleaved:d.interleaved!==!1}),this.program=c,this.renderOrder=1,this.uniforms={},this.visible=!0}var c=a.prototype;c.addAttribute=function(a,b){a=this.program.getAttribute(a);if(a==null)return this;this.geometry.addAttribute(a,b);return this};c.setUniform=function(a,b){this.uniforms[a]=b};c.getUniform=function(a){return this.uniforms[a]};c.unsetUniform=function(a){delete this.uniforms[a]};c.bufferData=function(a){this.geometry.bufferData(a)};c.bufferIndex=function(a){this.geometry.bufferIndex(a)};c.setVisible=function(a){this.visible=a};c.draw=function(){if(!this.visible)return;var a=0,c=this.program,d=c.getUniforms();for(var e in d){d=null;e in this.uniforms?d=this.uniforms[e]:d=c.getDefaultValueForUniform(e);var f=c.getUniform(e);if(f==null)continue;typeof d==="number"?f.set(d):Array.isArray(d)||d instanceof Float32Array?f.set(d):(d instanceof b("CometWebGLTexture")||d instanceof b("CometWebGLCubemapTexture"))&&(d.bindToSlot(a),f.set(a),a++)}this.geometry.bindToAttributes();this.geometry.draw()};return a}();e.exports=a}),null);
__d("defaultValueForWebGLUniform",[],(function(a,b,c,d,e,f){"use strict";function a(a){switch(a){case WebGLRenderingContext.FLOAT:return 0;case WebGLRenderingContext.FLOAT_VEC2:return[0,0];case WebGLRenderingContext.FLOAT_VEC3:return[0,0,0];case WebGLRenderingContext.FLOAT_VEC4:return[0,0,0,0];case WebGLRenderingContext.INT:return 0;case WebGLRenderingContext.INT_VEC2:return[0,0];case WebGLRenderingContext.INT_VEC3:return[0,0,0];case WebGLRenderingContext.INT_VEC4:return[0,0,0,0];case WebGLRenderingContext.FLOAT_MAT2:return[0,0,0,0];case WebGLRenderingContext.FLOAT_MAT3:return[0,0,0,0,0,0,0,0,0];case WebGLRenderingContext.FLOAT_MAT4:return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];case WebGLRenderingContext.SAMPLER_2D:return null;default:return null}}e.exports=a}),null);
__d("extractAttributesFromWebGLProgram",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d={},e=a.getProgramParameter(c,a.ACTIVE_ATTRIBUTES);for(var f=0;f<e;f++){var g=a.getActiveAttrib(c,f);if(!g){b("recoverableViolation")("Attempted to retrieve an attribute that did not exist","webgl");continue}var h=a.getAttribLocation(c,g.name);d[g.name]={location:h,size:g.size,type:g.type}}return d}e.exports=a}),null);
__d("createWebGLUniformSetter",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){switch(d){case a.FLOAT:return a.uniform1f.bind(a,c);case a.FLOAT_VEC2:return a.uniform2fv.bind(a,c);case a.FLOAT_VEC3:return a.uniform3fv.bind(a,c);case a.FLOAT_VEC4:return a.uniform4fv.bind(a,c);case a.INT:return a.uniform1i.bind(a,c);case a.INT_VEC2:return a.uniform2iv.bind(a,c);case a.INT_VEC3:return a.uniform3iv.bind(a,c);case a.INT_VEC4:return a.uniform4iv.bind(a,c);case a.FLOAT_MAT2:return a.uniformMatrix2fv.bind(a,c,!1);case a.FLOAT_MAT3:return a.uniformMatrix3fv.bind(a,c,!1);case a.FLOAT_MAT4:return a.uniformMatrix4fv.bind(a,c,!1);case a.SAMPLER_2D:return a.uniform1i.bind(a,c);case a.SAMPLER_CUBE:return a.uniform1i.bind(a,c);default:return function(){b("recoverableViolation")("This uniform type is not supported: "+d,"webgl")}}}e.exports=a}),null);
__d("extractUniformsFromWebGLProgram",["createWebGLUniformSetter","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d={},e=a.getProgramParameter(c,a.ACTIVE_UNIFORMS);for(var f=0;f<e;f++){var g=a.getActiveUniform(c,f);if(!g){b("recoverableViolation")("Attempted to retrieve a uniform that did not exist","webgl");continue}var h=a.getUniformLocation(c,g.name);d[g.name]={location:h,set:b("createWebGLUniformSetter")(a,h,g.type),size:g.size,type:g.type}}return d}e.exports=a}),null);
__d("CometWebGLProgram",["defaultValueForWebGLUniform","extractAttributesFromWebGLProgram","extractUniformsFromWebGLProgram","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1={},this.$3=null,this.$4=[],this.$5={},this.$6={},this.$2=a}var c=a.prototype;c.addShader=function(a,c,d){if(this.$3){b("recoverableViolation")("Cannot add a shader, the program has already been compiled","webgl");return this}var e=a;if(d){d=d.map(function(a){return"#define "+a+"\n"}).join("");if(a.startsWith("#version")){var f=a.indexOf("\n")+1;e=a.substr(0,f)+d+a.substr(f)}else e=d+a}this.$4.push({code:e,type:c});return this};c.compile=function(){if(this.$3){b("recoverableViolation")("Cannot compile, the program has already been compiled","webgl");return this}var a=this.$2,c=this.$4.map(function(c){var d=c.code;c=c.type;c=a.createShader(c);a.shaderSource(c,d);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS)){d=a.getShaderInfoLog(c)||"";a.deleteShader(c);b("recoverableViolation")("Failed to compile shader: "+d,"webgl")}return c}),d=a.createProgram();for(var c=c,e=Array.isArray(c),f=0,c=e?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=c.length)break;g=c[f++]}else{f=c.next();if(f.done)break;g=f.value}g=g;a.attachShader(d,g)}a.linkProgram(d);if(!a.getProgramParameter(d,a.LINK_STATUS)){g=a.getProgramInfoLog(d)||"";a.deleteProgram(d);b("recoverableViolation")("Failed to link program: "+g,"webgl");return this}this.$3=d;this.$6=b("extractUniformsFromWebGLProgram")(a,d);this.$1=b("extractAttributesFromWebGLProgram")(a,d);return this};c.use=function(){if(!this.$3){b("recoverableViolation")("Cannot use Program before it has been compiled","webgl");return}this.$2.useProgram(this.$3)};c.getUniform=function(a){var c=this.$6[a];if(!c){b("recoverableViolation")("Program does not have a uniform called "+a,"webgl");return null}return c};c.getUniforms=function(){return this.$6};c.getAttribute=function(a){var c=this.$1[a];if(!c){b("recoverableViolation")("Program does not have an attribute called "+a,"webgl");return null}return c};c.setUniformDefaults=function(a){for(var b in a)this.$5[b]=a[b];return this};c.getDefaultValueForUniform=function(a){if(!(a in this.$6)){b("recoverableViolation")("Program does not have a uniform called "+a,"webgl");return null}if(a in this.$5){var c=this.$5[a];return Array.isArray(c)?c.slice():c}return b("defaultValueForWebGLUniform")(this.$6[a].type)};return a}();e.exports=a}),null);
__d("createWebGL3DPhotoProgram",["CometWebGLProgram"],(function(a,b,c,d,e,f){"use strict";var g="\nattribute vec3 a_position;\nattribute vec2 a_texcoord_0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec2 v_texcoord_0;\n\nvoid main() {\n  v_texcoord_0 = a_texcoord_0;\n  gl_Position = projectionMatrix * viewMatrix * vec4(a_position, 1.0);\n}\n",h="\nprecision mediump float;\n\nvarying vec2 v_texcoord_0;\nuniform sampler2D u_texture_0;\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture_0, v_texcoord_0);\n}\n";function a(a){var c=new(b("CometWebGLProgram"))(a);return c.addShader(g,a.VERTEX_SHADER).addShader(h,a.FRAGMENT_SHADER).compile().setUniformDefaults({projectionMatrix:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],viewMatrix:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]})}e.exports=a}),null);
__d("createMeshesFromGLTF",["Promise","CometWebGLMesh","CometWebGLTexture","createWebGL3DPhotoProgram"],(function(a,b,c,d,e,f){"use strict";var g={POSITION:"a_position",TEXCOORD_0:"a_texcoord_0"};function a(a,c){var d=[],e=b("createWebGL3DPhotoProgram")(a),f=[],i=c.getMeshes();for(var i=i,j=Array.isArray(i),k=0,i=j?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var l;if(j){if(k>=i.length)break;l=i[k++]}else{k=i.next();if(k.done)break;l=k.value}l=l;l=l.primitives;for(var l=l,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{n=l.next();if(n.done)break;o=n.value}o=o;var p=o.attributes,q=[],r=Infinity,s=0;p=Object.entries(p);for(var t=0;t<p.length;t++){var u=p[t],v=u[0];u=u[1];if(typeof u==="number"){u=c.getAccessor(u);var w=c.getBufferView(u.bufferView);w.byteOffset<r&&(r=w.byteOffset);w.byteOffset+w.byteLength>s&&(s=w.byteOffset+w.byteLength);q.push({byteOffset:w.byteOffset+u.byteOffset,name:v})}}q.sort(h);var x=new(b("CometWebGLMesh"))(a,e,{interleaved:!1});w=c.getBinarySource();for(var u=0;u<q.length;u++){v=q[u];if(v.name in g){p=v.byteOffset-r;t={offset:p};x.addAttribute(g[v.name],t)}}x.bufferData(new Float32Array(w.buffer,w.byteOffset+r,(s-r)/4));o.indices!=null&&x.bufferIndex(c.getDataViewForAccessor(o.indices));if(o.material!=null){p=c.getMaterial(o.material);var y=p==null?void 0:(v=p.pbrMetallicRoughness)==null?void 0:(t=v.baseColorTexture)==null?void 0:t.index;y!=null&&(function(){var d=c.getTexture(y),e=c.getImage(d.source),g=new(b("CometWebGLTexture"))(a);f.push(new(b("Promise"))(function(a,b){e.onload=function(){g.setSource(e),a()},e.onerror=function(){b()}}));x.setUniform("u_texture_0",g)})()}d.push(x)}}return b("Promise").all(f).then(function(){return d})}function h(a,b){return a.byteOffset-b.byteOffset}e.exports=a}),null);
__d("glVec3CrossProduct",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}e.exports=a}),null);
__d("glMatrixLookingAtTarget",["glVec3CrossProduct"],(function(a,b,c,d,e,f){"use strict";function a(a,c){c=[a[0]-c[0],a[1]-c[1],a[2]-c[2]];var d=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);c[0]/=d;c[1]/=d;c[2]/=d;d=b("glVec3CrossProduct")([0,1,0],c);var e=b("glVec3CrossProduct")(c,d);return[d[0],d[1],d[2],0,e[0],e[1],e[2],0,c[0],c[1],c[2],0,a[0],a[1],a[2],1]}e.exports=a}),null);
__d("invertGLMatrix",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=a[0]*a[5]-a[1]*a[4],d=a[0]*a[6]-a[2]*a[4],e=a[0]*a[7]-a[3]*a[4],f=a[1]*a[6]-a[2]*a[5],g=a[1]*a[7]-a[3]*a[5],h=a[2]*a[7]-a[3]*a[6],i=a[8]*a[13]-a[9]*a[12],j=a[8]*a[14]-a[10]*a[12],k=a[8]*a[15]-a[11]*a[12],l=a[9]*a[14]-a[10]*a[13],m=a[9]*a[15]-a[11]*a[13],n=a[10]*a[15]-a[11]*a[14],o=c*n-d*m+e*l+f*k-g*j+h*i,p=(a[5]*n-a[6]*m+a[7]*l)/o,q=(a[2]*m-a[1]*n-a[3]*l)/o,r=(a[13]*h-a[14]*g+a[15]*f)/o,s=(a[10]*g-a[9]*h-a[11]*f)/o,t=(a[6]*k-a[4]*n-a[7]*j)/o;n=(a[0]*n-a[2]*k+a[3]*j)/o;var u=(a[14]*e-a[12]*h-a[15]*d)/o;h=(a[8]*h-a[10]*e+a[11]*d)/o;var v=(a[4]*m-a[5]*k+a[7]*i)/o;k=(a[1]*k-a[0]*m-a[3]*i)/o;m=(a[12]*g-a[13]*e+a[15]*c)/o;e=(a[9]*e-a[8]*g-a[11]*c)/o;g=(a[5]*j-a[4]*l-a[6]*i)/o;l=(a[0]*l-a[1]*j+a[2]*i)/o;j=(a[13]*d-a[12]*f-a[14]*c)/o;i=(a[8]*f-a[9]*d+a[10]*c)/o;b[0]=p;b[1]=q;b[2]=r;b[3]=s;b[4]=t;b[5]=n;b[6]=u;b[7]=h;b[8]=v;b[9]=k;b[10]=m;b[11]=e;b[12]=g;b[13]=l;b[14]=j;b[15]=i}e.exports=a}),null);
__d("useFrameTiming",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useEffect,i=c.useRef;function a(){var a=i(null),b=i(null),c=g(function(a){var c=b.current;if(c==null)return;c(a)},[]),d=g(function(d){var e=a.current;e!=null&&window.cancelAnimationFrame(e);b.current=d;a.current=window.requestAnimationFrame(c)},[c]),e=g(function(){var b=a.current;if(b==null)return;window.cancelAnimationFrame(b)},[]);h(function(){return function(){var b=a.current;if(b==null)return;window.cancelAnimationFrame(b)}},[]);return[d,e]}e.exports=a}),null);
__d("GLTFResource",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1=[],this.$2=[],this.$3=null,this.$4=null,this.$5=[],this.$6=[],this.$7=[],this.$8=[]}var c=a.prototype;c.addBinarySource=function(a,b,c){this.$3=new Uint8Array(a,b,c)};c.useJSON=function(a){var b;this.$4=(b=a.extras)!=null?b:Object.freeze({});this.$1=(b=a.accessors)!=null?b:[];this.$2=(b=a.bufferViews)!=null?b:[];this.$5=(b=a.images)!=null?b:[];this.$6=(b=a.materials)!=null?b:[];this.$7=(b=a.meshes)!=null?b:[];this.$8=(b=a.textures)!=null?b:[]};c.getBinarySource=function(){if(this.$3==null)throw b("unrecoverableViolation")("attempted to access binary source before it was set","webgl");return this.$3};c.hasBinarySource=function(){return this.$3!=null};c.getAccessor=function(a){a=this.$1[a];if(a==null)throw new(b("unrecoverableViolation"))("accessor index out of range","webgl");return a};c.getBufferView=function(a){a=this.$2[a];if(a==null)throw new(b("unrecoverableViolation"))("buffer view index out of range","webgl");return a};c.getExtras=function(){return this.$4};c.getMaterial=function(a){a=this.$6[a];if(a==null)throw new(b("unrecoverableViolation"))("material index out of range","webgl");return a};c.getMeshes=function(){return this.$7};c.getTexture=function(a){a=this.$8[a];if(a==null)throw new(b("unrecoverableViolation"))("texture index out of range","webgl");return a};c.getDataViewForAccessor=function(a){a=this.$1[a];if(a==null)throw new(b("unrecoverableViolation"))("accessor index out of range","webgl");var c=this.$2[a.bufferView];if(c==null)throw new(b("unrecoverableViolation"))("buffer view index out of range","webgl");if(c.buffer!==0)throw new(b("unrecoverableViolation"))("external gltf buffers are not currently supported","webgl");var d=this.$3;if(d==null)throw new(b("unrecoverableViolation"))("attempted to get an accessor before loading binary data","webgl");var e=d.byteOffset+c.byteOffset;switch(a.componentType){case 5120:return new Int8Array(d.buffer,e,c.byteLength);case 5121:return new Uint8Array(d.buffer,e,c.byteLength);case 5122:return new Int16Array(d.buffer,e,c.byteLength/2);case 5123:return new Uint16Array(d.buffer,e,c.byteLength/2);case 5124:return new Int32Array(d.buffer,e,c.byteLength/4);case 5125:return new Uint32Array(d.buffer,e,c.byteLength/4);case 5126:return new Float32Array(d.buffer,e,c.byteLength/4);default:throw new(b("unrecoverableViolation"))("unsupported gl component type","webgl")}};c.getImage=function(a){a=this.$5[a];var b=this.getBufferView(a.bufferView),c=this.getBinarySource();c=new Uint8Array(c.buffer,c.byteOffset+b.byteOffset,b.byteLength);b=new Blob([c],{type:a.mimeType});c=URL.createObjectURL(b);a=new Image();a.src=c;return a};return a}();e.exports=a}),null);
__d("extractUTF8StringFromBuffer",["EndianAwareDataReader","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";function g(a){return a>127}function h(a){return a>=192&&a<=223}function i(a){return a>=224&&a<=239}function j(a){return a>=240&&a<=247}function a(a,c,d){if(c+d>a.byteLength)throw new(b("unrecoverableViolation"))("offset and length exceed ArrayBuffer bounds","webgl");if("TextDecoder"in window){var e=new TextDecoder("utf-8"),f=new Uint8Array(a,c,d);return e.decode(f)}e=new(b("EndianAwareDataReader"))(a.slice(c,c+d),!1);f=[];while(e.canReadU8()){a=e.readU8();if(g(a))if(h(a)){if(!e.canReadU8())throw new(b("unrecoverableViolation"))("incomplete two-byte utf8 sequence","webgl");c=e.readU8();a=(a&31)<<6|c&63}else if(i(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;if(d==null||c==null)throw new(b("unrecoverableViolation"))("incomplete three-byte utf8 sequence","webgl");a=(a&15)<<12|(d&63)<<6|c&63}else if(j(a)){d=e.canReadU8()?e.readU8():null;c=e.canReadU8()?e.readU8():null;var k=e.canReadU8()?e.readU8():null;if(d==null||c==null||k==null)throw new(b("unrecoverableViolation"))("incomplete four-byte utf8 sequence","webgl");a=(a&7)<<18|(d&63)<<12|(c&63)<<6|k&63}else throw new(b("unrecoverableViolation"))("unknown utf8 start sequence","webgl");if(a<=65535)f.push(String.fromCharCode(a));else if(a<=1114111)a-=65536,f.push(String.fromCharCode(a>>10|55296)),f.push(String.fromCharCode(a&1023|56320));else throw new(b("unrecoverableViolation"))("codepoint is beyond ","webgl")}return f.join("")}e.exports=a}),null);
__d("parseGLBResource",["GLTFResource","extractUTF8StringFromBuffer","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=1179937895;function a(a){var c=new DataView(a);if(c.getUint32(0,!0)!==g)throw new(b("unrecoverableViolation"))("invalid GLB magic number","webgl");if(c.getUint32(4,!0)!==2)throw new(b("unrecoverableViolation"))("unsupported GLB version number","webgl");var d=c.getUint32(8,!0);if(d>a.byteLength)throw new(b("unrecoverableViolation"))("glb buffer is shorter than declared byte length","webgl");var e=new(b("GLTFResource"))(),f=12;while(f<d){var h=c.getUint32(f,!0),i=c.getUint32(f+4,!0);switch(i){case 1313821514:i=b("extractUTF8StringFromBuffer")(a,f+8,h);var j="";try{j=JSON.parse(i)}catch(a){throw new(b("unrecoverableViolation"))("failed to parse glTF JSON","webgl",a)}e.useJSON(j);break;case 5130562:e.addBinarySource(a,f+8,h);break;default:throw new(b("unrecoverableViolation"))("unexpected GLB section label","webgl")}f+=h+8}return e}e.exports=a}),null);
__d("useGLBLoadAndParse",["React","parseGLBResource","promiseDone"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useEffect,h=c.useState;function a(a){var c=h(null),d=c[0],e=c[1];g(function(){var c=!1;b("promiseDone")(window.fetch(a).then(function(a){return a.arrayBuffer()}).then(function(a){if(c)return;a=b("parseGLBResource")(a);e(a)})["catch"](function(){e(null)}));return function(){c=!0}},[a]);return d}e.exports=a}),null);
__d("useGLContext",["React","WebPixelRatio","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useEffect,i=c.useState;function a(a,c,d){var e=i(null),f=e[0],j=e[1],k=(e=d==null?void 0:d.expand)!=null?e:!1;h(function(){var a=document.createElement("canvas"),c=a.getContext("webgl");if(c==null){b("recoverableViolation")("Unable to create WebGL context","webgl");return function(){}}j(c);return function(){try{c.getExtension("WEBGL_lose_context").loseContext()}catch(a){b("recoverableViolation")("Failed to clean up WebGL context","webgl",{error:a})}}},[]);h(function(){if(f==null)return;var d=f.canvas,e=b("WebPixelRatio").get(),g=a*e;e=c*e;d.width=g;d.height=e;f.viewport(0,0,g,e);d.style.width=k?"100%":a+"px"},[f,a,c,k]);d=g(function(a){if(f==null)return;var b=f.canvas,c=b.parentNode;c!=null&&c.removeChild(b);a!=null&&a.appendChild(b)},[f]);return[f,d]}e.exports=a}),null);
__d("useGLTFDerivedFOV",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useMemo,h=1,i=.508015513,j=.666488587,k=.925,l=Object.freeze({landscape:-.14,portrait:-.124}),m=Object.freeze({landscape:-.124,portrait:-.112}),n=Object.freeze({landscape:.96,portrait:.8}),o=Object.freeze({landscape:.6,portrait:.7});function a(a){var b=g(function(){var b;b=(b=a==null?void 0:(b=a.getExtras())==null?void 0:(b=b.FB_PHOTO_3D_DATA)==null?void 0:b.vFov)!=null?b:j;return b*k},[a]),c=g(function(){var b;b=(b=a==null?void 0:(b=a.getExtras())==null?void 0:(b=b.FB_PHOTO_3D_DATA)==null?void 0:b.hFov)!=null?b:i;return b*k},[a]),d=g(function(){var a=.1,d=1e3,e=1/Math.tan(b/2),f=c/b;return[e/f,0,0,0,0,e,0,0,0,0,(a+d)/(a-d),-1,0,0,a*d*2/(a-d),0]},[c,b]),e=g(function(){var a=c>b?"landscape":"portrait",d=l[a],e=m[a];return[Math.tan(c/2)*h*d,Math.tan(b/2)*h*e,1-n[a],o[a]]},[c,b]),f=e[0],p=e[1],q=e[2];e=e[3];return{hFov:c,maxHorizontalAngle:f,maxVerticalAngle:p,projectionMatrix:d,targetInteractionWeightHorizontal:q,targetScrollWeightVertical:e,vFov:b}}e.exports=a}),null);
__d("Comet3DPhotoViewer.react",["React","createMeshesFromGLTF","glMatrixLookingAtTarget","invertGLMatrix","promiseDone","useFrameTiming","useGLBLoadAndParse","useGLContext","useGLTFDerivedFOV"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useRef,k=c.useState,l=1,m=.01,n=.005,o=.1,p=.06,q=.12;function a(a){var c=a.fileURI,d=a.height;a=a.width;a=b("useGLContext")(a,d,{expand:!0});var e=a[0];d=a[1];a=b("useFrameTiming")();var f=a[0],r=b("useGLBLoadAndParse")(c);a=k([]);var s=a[0],t=a[1];i(function(){if(e==null||r==null)return;var a=!1;b("promiseDone")(b("createMeshesFromGLTF")(e,r).then(function(b){if(a)return;t(b)}));return function(){a=!0}},[e,r]);c=b("useGLTFDerivedFOV")(r);var u=c.hFov,v=c.maxHorizontalAngle,w=c.maxVerticalAngle,x=c.projectionMatrix,y=c.targetInteractionWeightHorizontal,z=c.targetScrollWeightVertical,A=c.vFov,B=h(function(){if(e==null||s.length===0)return;e.enable(e.DEPTH_TEST);e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);e.enable(e.BLEND);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);for(var a=s,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;d.program.use();d.draw()}},[s,e]),C=j([0,0]),D=j(1),E=j([0,0]),F=j([0,0]),G=j(0),H=h(function(a){if(e==null)return;if(a!=null){if(G.current!==0){var c=Math.min(a-G.current,50);c=Math.max(Math.min(n*c,1),0);var d=E.current,g=d[0];d=d[1];var h=F.current,i=h[0];h=h[1];F.current=[i+c*(g-i),h+c*(d-h)];(Math.abs(F.current[0]-g)>m||Math.abs(F.current[1]-d)>m)&&f(H)}G.current=a}i=D.current;c=A*q*(2*i-1);h=(1-2*i)*w;g=F.current;d=g[0];a=g[1];g=Math.sin(d*Math.PI*.5);d=Math.sin(a*Math.PI*.5);a=A*p*d;var j=u*p*g;g=-g*v;d=-d*w;i=Math.pow(i+.16,3)/(Math.pow(i+.16,3)+Math.pow(1-(i+.16),3))-.9;a=-(a+c);c=-j;j=l-i*o;i=[0+j*Math.cos(a)*Math.sin(c),0+j*Math.sin(a),-l+j*Math.cos(a)*Math.cos(c)];j=[-(y*g),-(h*z+d*(1-z)),-l];a=b("glMatrixLookingAtTarget")(i,j);c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];b("invertGLMatrix")(a,c);for(var g=s,h=Array.isArray(g),d=0,g=h?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(h){if(d>=g.length)break;i=g[d++]}else{d=g.next();if(d.done)break;i=d.value}j=i;j.setUniform("viewMatrix",c);j.setUniform("projectionMatrix",x)}B()},[B,e,u,v,w,s,x,f,y,z,A]),I=h(function(){if(e==null)return;var a=e.canvas,b=0,c=0;while(a!=null)b+=a instanceof HTMLElement?a.offsetLeft:0,c+=a instanceof HTMLElement?a.offsetTop:0,a=a instanceof HTMLElement?a.offsetParent:null;C.current=[b,c]},[C,e]),J=h(function(){var a;if(e==null)return;I();var b=window.innerHeight,c=e.canvas.clientHeight;b=b+c;a=C.current[1]-((a=(a=document.scrollingElement)==null?void 0:a.scrollTop)!=null?a:0)+c;c=a/b;D.current=c;if(c<0||c>1)return;f(H)},[C,e,f,H,I]);a=h(function(a){if(e==null)return;I();var b=a.pageX;a=a.pageY;b=b-C.current[0];a=a-C.current[1];b=2*b/e.canvas.clientWidth-1;a=1-2*a/e.canvas.clientHeight;E.current=[b,a];if(b<-1||a<-1||b>1||a>1)return;f(H)},[e,E,f,H,I]);i(function(){document.addEventListener("scroll",J);H();return function(){document.removeEventListener("scroll",J)}},[H,J]);return g.jsx("div",{onMouseMove:a,ref:d})}e.exports=a}),null);