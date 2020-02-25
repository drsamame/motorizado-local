exports.ids=[2],exports.modules={106:function(t,e,r){"use strict";var n=r(0),o=r.n(n),l=(r(109),r(44)),h=r(4),c=r(26),d=r(45),v=r(5),f=r(1),m=r(3);var w=Object(m.a)(h.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.$vuetify.rtl?"right":"left"]:Object(f.f)(this.normalizedValue,"%"),width:Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?l.c:l.d},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const slot=Object(f.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize:t=>t<0?0:t>100?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},108:function(t,e,r){"use strict";r(111);var n=r(46),o=r(106),l=r(11),h=r(3);e.a=Object(h.a)(o.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...l.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...n.a.options.computed.classes.call(this)}},styles(){const style={...n.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},109:function(t,e){t.exports={}},111:function(t,e){t.exports={}},125:function(t,e,r){"use strict";r(63);var n=r(0),o=r.n(n),l=r(21),h=r(1);const c=["sm","md","lg","xl"],d=["start","end","center"];function v(t,e){return c.reduce((r,n)=>(r[t+Object(h.v)(n)]=e(),r),{})}const f=t=>[...d,"baseline","stretch"].includes(t),m=v("align",()=>({type:String,default:null,validator:f})),w=t=>[...d,"space-between","space-around"].includes(t),C=v("justify",()=>({type:String,default:null,validator:w})),y=t=>[...d,"space-between","space-around","stretch"].includes(t),x=v("alignContent",()=>({type:String,default:null,validator:y})),_={align:Object.keys(m),justify:Object.keys(C),alignContent:Object.keys(x)},$={align:"align",justify:"justify",alignContent:"align-content"};function B(t,e,r){let n=$[t];if(null!=r){if(e){n+=`-${e.replace(t,"")}`}return n+=`-${r}`,n.toLowerCase()}}const S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f},...m,justify:{type:String,default:null,validator:w},...C,alignContent:{type:String,default:null,validator:y},...x},render(t,{props:e,data:data,children:r}){let n="";for(const t in e)n+=String(e[t]);let o=S.get(n);if(!o){let t;for(t in o=[],_)_[t].forEach(r=>{const n=e[r],l=B(t,r,n);l&&o.push(l)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),S.set(n,o)}return t(e.tag,Object(l.a)(data,{staticClass:"row",class:o}),r)}})},135:function(t,e){t.exports={}},147:function(t,e,r){"use strict";r.r(e);var n=r(135),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=o.a},148:function(t,e){t.exports={}},149:function(t,e){t.exports={}},150:function(t,e){t.exports={}},168:function(t,e,r){"use strict";r.r(e);var n={name:"Dashboard",layout:"null",components:{},data:()=>({tab:null})},o=r(9),l=r(27),h=r.n(l),c=r(108),d=r(39),v=r(125),f=r(28),m=r(11),w=r(5),C=r(1),y=r(3);var x=Object(y.a)(m.a,Object(f.a)("tabsBar"),w.a).extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...m.a.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){t=this.$router.resolve(this.to,this.$route,this.append).href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.attrs={...data.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},data.on={...data.on,keydown:t=>{t.keyCode===C.q.enter&&this.click(t),this.$emit("keydown",t)}},t(e,data,this.$slots.default)}}),_=r(47),$=r(52);var B=Object(y.a)(_.a,Object(f.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:$.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:()=>({isActive:!1,inTransition:!1}),computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(C.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(C.f)(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),S=B.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=B.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),O=(r(148),r(149),r(20)),k=r(44),T=r(30),I=r(51);const A=Object(y.a)(T.a).extend({name:"base-slide-group",directives:{Resize:I.a,Touch:$.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...T.a.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:content,wrapper:t}=this.widths;return content>Math.abs(this.scrollOffset)+t},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[slot])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const r=this[`has${`${t[0].toUpperCase()}${t.slice(1)}`}`];return this.showArrows||r?this.$createElement(O.a,{props:{disabled:!r}},this[`${e}Icon`]):null},genPrev(){const slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[slot])},genTransition(t){return this.$createElement(k.c,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,r,n){const o=r?-1:1,l=o*n+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:content}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:content,wrapper:t}=this.$refs,e=content.clientWidth-t.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-e&&(this.scrollOffset=-e):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=e&&(this.scrollOffset=e)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,r,n){const o=t.clientWidth,l=r?e.content-t.offsetLeft-o:t.offsetLeft;r&&(n=-n);const h=e.wrapper+n,c=o+l,d=.4*o;return l<n?n=Math.max(l-d,0):h<c&&(n=Math.min(n-(h-c-d),e.content-e.wrapper)),r?-n:n},calculateCenteredOffset(t,e,r){const{offsetLeft:n,clientWidth:o}=t;if(r){const t=e.content-n-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=n+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:content,wrapper:t}=this.$refs;this.widths={content:content?content.clientWidth:0,wrapper:t?t.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});A.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var j=r(16),E=Object(y.a)(A,j.a,w.a).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...A.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=A.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const r=this.items,n=t.path,o=e.path;let l=!1,h=!1;for(const t of r)if(t.to===n?l=!0:t.to===o&&(h=!0),l&&h)break;!l&&h&&(this.internalValue=void 0)}},render(t){const e=A.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),z=(r(150),r(97)),V=T.a.extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:$.a},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:()=>({changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}),computed:{isActive(){return this.transitionCount>0},classes(){return{...T.a.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x";return`v-window-${t}${(this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse)?"-reverse":""}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,i)=>this.internalValue===this.getValue(t,i))},internalReverse(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,r){return this.$createElement("div",{staticClass:`v-window__${t}`},[this.$createElement(z.a,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},on:{click:()=>{this.changedByDelimiters=!0,r()}}},[this.$createElement(O.a,{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){const r=this.genIcon("prev",e,this.prev);r&&t.push(r)}const r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){const e=this.genIcon("next",r,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};data.directives.push({name:"touch",value:t})}return t("div",data,[this.genContainer()])}}),P=V.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...V.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,i){return t.id||T.a.options.methods.getValue.call(this,t,i)}}}),N=r(4),L=Object(y.a)(N.a).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),R=r(45);var D=Object(y.a)(N.a,R.a,w.a).extend().extend({name:"v-tabs",directives:{Resize:I.a},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:()=>({resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}),computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(C.f)(this.slider.height),left:this.isReversed?void 0:Object(C.f)(this.slider.left),right:this.isReversed?Object(C.f)(this.slider.right):void 0,top:this.vertical?Object(C.f)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(C.f)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const data={style:{height:Object(C.f)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,data),this.setBackgroundColor(this.backgroundColor,data),this.$createElement(E,data,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(P,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(L,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const r=[],n=[],slot=this.$slots.default||[],o=slot.length;for(let i=0;i<o;i++){const o=slot[i];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":r.push(o);break;default:n.push(o)}else n.push(o)}return{tab:n,slider:e,items:t,item:r}}},render(t){const{tab:e,slider:r,items:n,item:o}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,r),this.genItems(n,o)])}});var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-tabs",{attrs:{centered:"",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[r("h3",{staticClass:"titleTab"},[t._v("\n          PENDIENTES\n        ")])]),t._v(" "),r("v-tab",[r("h3",{staticClass:"titleTab"},[t._v("\n          CANCELADAS\n        ")])]),t._v(" "),r("v-tab",[r("h3",{staticClass:"titleTab"},[t._v("\n          APLICADAS\n        ")])])],1)],1),t._ssrNode(" "),r("v-tabs-items",{staticClass:" mx-2",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{staticClass:"pb-3 content-card"},[r("v-card",{staticClass:"pa-5 open mt-4 card"},[r("div",{staticClass:"d-flex justify-space-between"},[r("h3",{staticClass:"state pend"},[t._v("Pendiente")]),t._v(" "),r("p",{staticClass:"hour"},[t._v("\n            03/10/20 - 08:30am\n          ")])]),t._v(" "),r("div",{staticClass:"personal-info"},[t._v("\n          Av. Aramburú 279, San Isidro - Lima "),r("br"),t._v("\n          Jorge A. Luna Victoria Sanchez\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"detail d-inline-flex align-items",attrs:{to:"/detail"}},[t._v("DETALLE "),r("v-icon",{staticClass:"arrow"},[t._v("mdi-arrow-right")])],1)],1)],1),t._v(" "),r("v-tab-item",{staticClass:"pb-3 content-card"},[r("v-card",{staticClass:"pa-4 canceled mt-4 card",attrs:{elevation:"0"}},[r("div",{staticClass:"d-flex justify-space-between"},[r("h3",{staticClass:"state pend"},[t._v("Cancelado")]),t._v(" "),r("p",{staticClass:"hour"},[t._v("\n            03/10/20 - 08:30am\n          ")])]),t._v(" "),r("div",{staticClass:"personal-info"},[t._v("\n          Av. Aramburú 279, San Isidro - Lima "),r("br"),t._v("\n          Jorge A. Luna Victoria Sanchez\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"detail d-inline-flex align-items",attrs:{to:"/detail"}},[t._v("DETALLE "),r("v-icon",{staticClass:"arrow"},[t._v("mdi-arrow-right")])],1)],1)],1),t._v(" "),r("v-tab-item",{staticClass:"pb-3 content-card"},[r("v-card",{staticClass:"pa-4 closed mt-4 card"},[r("v-icon",{staticClass:"check"},[t._v("mdi-check")]),t._v(" "),r("div",{staticClass:"d-flex justify-space-between"},[r("h3",{staticClass:"state pend"},[t._v("Aplicada")]),t._v(" "),r("p",{staticClass:"hour"},[t._v("\n            03/10/20 - 08:30am\n          ")])]),t._v(" "),r("div",{staticClass:"personal-info"},[t._v("\n          Av. Aramburú 279, San Isidro - Lima "),r("br"),t._v("\n          Jorge A. Luna Victoria Sanchez\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"detail d-inline-flex align-items",attrs:{to:"/detail"}},[t._v("DETALLE "),r("v-icon",{staticClass:"arrow"},[t._v("mdi-arrow-right")])],1)],1)],1)],1)],2)}),[],!1,(function(t){var e=r(147);e.__inject__&&e.__inject__(t)}),"0a34903c","b8da8850");e.default=component.exports;h()(component,{VCard:c.a,VIcon:d.a,VRow:v.a,VTab:x,VTabItem:S,VTabs:D,VTabsItems:P})},97:function(t,e,r){"use strict";var n=r(54);e.a=n.a}};