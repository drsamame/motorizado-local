/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{308:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d}));var o=n(309),r=n(1),c=Object(r.g)("v-card__actions"),h=Object(r.g)("v-card__subtitle"),l=Object(r.g)("v-card__text"),d=Object(r.g)("v-card__title");o.a},310:function(t,e,n){"use strict";n(31),n(5),n(4),n(7);var o=n(20),r=(n(38),n(43),n(311)),c=n(34),h=n(9),l=n(1),d=n(6),v=Object(h.a)(r.a,c.a);e.a=v.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(l.n)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(d.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(l.m)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"==typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var o=this.activatorNode[0].componentInstance;e=o&&o.$options.mixins&&o.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?o.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(l.m)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},311:function(t,e,n){"use strict";n(14);var o=n(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},312:function(t,e,n){"use strict";var o=n(2),r=n(20),c=n(137),h=n(1),l=n(9),d=n(6);e.a=Object(l.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=Object(h.k)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(d.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},313:function(t,e,n){"use strict";var o=n(0);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},314:function(t,e,n){"use strict";n(38),n(43);var o=n(91),r=n(0),c=n(1);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.o)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.o)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.o)(n[r]));return Math.max.apply(Math,e)}}})},316:function(t,e,n){},337:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(7),n(38),n(43);var o=n(2),r=(n(14),n(316),n(338)),c=n(310),h=n(138),l=n(312),d=n(148),v=n(313),m=n(314),f=n(34),y=n(136),w=n(9),_=n(6),x=n(1);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(w.a)(c.a,h.a,l.a,d.a,v.a,m.a,f.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(_.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===x.q.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:E({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(x.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(x.f)(this.width)}),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},338:function(t,e,n){"use strict";n(85);var o=n(22);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},371:function(t,e,n){"use strict";function o(a){return a&&"object"==typeof a&&"default"in a?a.default:a}var r=o(n(372)),c=o(n(373)),h=["image/png","image/jpeg","image/svg+xml"],l={dotSize:1.5,minWidth:.5,maxWidth:2.5,throttle:16,minDistance:5,backgroundColor:"rgba(0,0,0,0)",penColor:"black",velocityFilterWeight:.7,onBegin:function(){},onEnd:function(){}},d=function(a){return JSON.parse(JSON.stringify(a))},v={src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",x:0,y:0},m={name:"VueSignaturePad",props:{width:{type:String,default:"100%"},height:{type:String,default:"100%"},customStyle:{type:Object},saveType:{type:String,default:"image/png"},options:{type:Object,default:function(){return{}}},images:{type:Array,default:function(){return[]}}},data:function(){return{signaturePad:{},cacheImages:[],signatureData:v,onResizeHandler:null}},mounted:function(){var b=this.options,t=this.$refs.signaturePadCanvas,e=new r(t,Object.assign({},l,b));this.signaturePad=e,this.onResizeHandler=this.resizeCanvas.bind(this),window.addEventListener("resize",this.onResizeHandler,!1),this.resizeCanvas()},beforeDestroy:function(){this.onResizeHandler&&window.removeEventListener("resize",this.onResizeHandler,!1)},methods:{resizeCanvas:function(){var a=this.$refs.signaturePadCanvas,b=this.signaturePad.toData(),t=Math.max(window.devicePixelRatio||1,1);a.width=a.offsetWidth*t,a.height=a.offsetHeight*t,a.getContext("2d").scale(t,t),this.signaturePad.clear(),this.signatureData=v,this.signaturePad.fromData(b)},saveSignature:function(){var b=this.signaturePad,t=this.saveType,e={isEmpty:!1,data:void 0};if(!function(a){return h.includes(a)}(t))throw new Error("Image type is incorrect!");return b.isEmpty()?Object.assign({},e,{isEmpty:!0}):(this.signatureData=b.toDataURL(t),Object.assign({},e,{data:this.signatureData}))},undoSignature:function(){var b=this.signaturePad,t=b.toData();if(t)return b.fromData(t.slice(0,-1))},mergeImageAndSignature:function(a){return this.signatureData=a,c(this.images.concat(this.cacheImages,[this.signatureData]))},addImages:function(a){return void 0===a&&(a=[]),this.cacheImages=this.cacheImages.concat(a),c(this.images.concat(this.cacheImages,[this.signatureData]))},fromDataURL:function(a,b,t){return void 0===b&&(b={}),this.signaturePad.fromDataURL(a,b,t)},fromData:function(a){return this.signaturePad.fromData(a)},toData:function(){return this.signaturePad.toData()},lockSignaturePad:function(){return this.signaturePad.off()},openSignaturePad:function(){return this.signaturePad.on()},isEmpty:function(){return this.signaturePad.isEmpty()},getPropImagesAndCacheImages:function(){return this.propsImagesAndCustomImages},clearCacheImages:function(){return this.cacheImages=[],this.cacheImages},clearSignature:function(){return this.signaturePad.clear()}},computed:{propsImagesAndCustomImages:function(){var a=d(this.images),b=d(this.cacheImages);return a.concat(b)}},watch:{options:function(a){var b=this;Object.keys(a).forEach((function(t){b.signaturePad[t]&&(b.signaturePad[t]=a[t])}))}},render:function(a){var b=this,t=b.width,e=b.height,n=b.customStyle;return a("div",{style:Object.assign({},{width:t,height:e},n)},[a("canvas",{style:{width:"100%",height:"100%"},ref:"signaturePadCanvas"})])},install:function(a){return a.component(m.name,m)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(m),t.exports=m},372:function(t,e,n){"use strict";n.r(e);class o{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,n,o,r,c){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=r,this.endWidth=c}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const r=t.x-e.x,c=t.y-e.y,h=e.x-n.x,l=e.y-n.y,d=(t.x+e.x)/2,v=(t.y+e.y)/2,m=(e.x+n.x)/2,f=(e.y+n.y)/2,y=Math.sqrt(r*r+c*c),w=Math.sqrt(h*h+l*l),_=w/(y+w),x=m+(d-m)*_,A=f+(v-f)*_,E=e.x-x,C=e.y-A;return{c1:new o(d+E,v+C),c2:new o(m+E,f+C)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-t,h=c-e;n+=Math.sqrt(o*o+h*h)}t=r,e=c}return n}point(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}class c{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e=250){let n,o,r,c=0,h=null;const l=()=>{c=Date.now(),h=null,n=t.apply(o,r),h||(o=null,r=[])};return function(...d){const v=Date.now(),m=e-(v-c);return o=this,r=d,m<=0||m>e?(h&&(clearTimeout(h),h=null),c=v,n=t.apply(o,r),h||(o=null,r=[])):h||(h=window.setTimeout(l,m)),n}}(c.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=c.prototype._strokeUpdate,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const t=this._ctx,canvas=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const image=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/o,c=e.height||this.canvas.height/o;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,c),n&&n()},image.onerror=t=>{n&&n(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:e})=>this._drawCurve({color:t,curve:e}),({color:t,point:e})=>this._drawDot({color:t,point:e})),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};this._data.push(e),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)}_strokeUpdate(t){const e=t.clientX,n=t.clientY,o=this._createPoint(e,n),r=this._data[this._data.length-1],c=r.points,h=c.length>0&&c[c.length-1],l=!!h&&o.distanceTo(h)<=this.minDistance,d=r.color;if(!h||!h||!l){const t=this._addPoint(o);h?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:o}),c.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new o(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(n),r={end:o,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=o,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,n=t*t,c=n*t,u=1-t,h=u*u,l=h*u;let d=l*e.startPoint.x;d+=3*h*t*e.control1.x,d+=3*u*n*e.control2.x,d+=c*e.endPoint.x;let v=l*e.startPoint.y;v+=3*h*t*e.control1.y,v+=3*u*n*e.control2.y,v+=c*e.endPoint.y;const m=e.startWidth+c*o;this._drawCurveSegment(d,v,m)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,o),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const r of t){const{color:t,points:c}=r;if(c.length>1)for(let n=0;n<c.length;n+=1){const r=c[n],h=new o(r.x,r.y,r.time);this.penColor=t,0===n&&this._reset();const l=this._addPoint(h);l&&e({color:t,curve:l})}else this._reset(),n({color:t,point:c[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,o=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} `+`C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} `+`${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} `+`${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",n),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}},({color:t,point:e})=>{const circle=document.createElement("circle"),n="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",n.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)});const header='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+` viewBox="0 0 ${n} ${o}"`+` width="${n}"`+` height="${o}"`+">";let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.default=c},373:function(t,e,n){"use strict";n.r(e);var o={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0};e.default=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),new Promise((function(n){var canvas=(e=Object.assign({},o,e)).Canvas?new e.Canvas:window.document.createElement("canvas"),r=e.Canvas?e.Canvas.Image:window.Image;e.Canvas&&(e.quality*=100);var c=t.map((function(source){return new Promise((function(t,e){"Object"!==source.constructor.name&&(source={src:source});var img=new r;img.onerror=function(){return e(new Error("Couldn't load image"))},img.onload=function(){return t(Object.assign({},source,{img:img}))},img.src=source.src}))})),h=canvas.getContext("2d");n(Promise.all(c).then((function(t){var n=function(n){return e[n]||Math.max.apply(Math,t.map((function(image){return image.img[n]})))};return canvas.width=n("width"),canvas.height=n("height"),t.forEach((function(image){return h.globalAlpha=image.opacity?image.opacity:1,h.drawImage(image.img,image.x||0,image.y||0)})),e.Canvas&&"image/jpeg"===e.format?new Promise((function(t){canvas.toDataURL(e.format,{quality:e.quality,progressive:!1},(function(e,n){if(e)throw e;t(n)}))})):canvas.toDataURL(e.format,e.quality)})))}))}}}]);