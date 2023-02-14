"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[691],{3508:function(n,e,t){var a=t(4836);e.Z=void 0;var s=a(t(4938)),o=t(5893),r=(0,s.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.Z=r},4938:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=t(8045)},8045:function(n,e,t){t.r(e),t.d(e,{capitalize:function(){return s.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return r.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return p},isMuiElement:function(){return u},ownerDocument:function(){return d.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return k},setRef:function(){return f},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h},unstable_useId:function(){return x},unsupportedProp:function(){return b},useControlled:function(){return E.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return C.Z}});var a=t(7078),s=t(8216);var o=function(...n){return n.reduce(((n,e)=>null==e?n:function(...t){n.apply(this,t),e.apply(this,t)}),(()=>{}))},r=t(5949),i=t(3881);var p=function(n,e){return()=>null},l=t(7294),c=t.t(l,2);var u=function(n,e){return l.isValidElement(n)&&-1!==e.indexOf(n.type.muiName)},d=t(8038),m=t(3705);t(7462);var k=function(n,e){return()=>null},f=t(7960).Z,h=t(6600).Z;let g=0;const v=c.useId;var x=function(n){if(void 0!==v){const e=v();return null!=n?n:e}return function(n){const[e,t]=l.useState(n),a=n||e;return l.useEffect((()=>{null==e&&(g+=1,t(`mui-${g}`))}),[e]),a}(n)};var b=function(n,e,t,a,s){return null},E=t(2893),y=t(5430),Z=t(8192),C=t(3511);const w={configure:n=>{a.Z.configure(n)}}},2893:function(n,e,t){t.d(e,{Z:function(){return s}});var a=t(7294);var s=function({controlled:n,default:e,name:t,state:s="value"}){const{current:o}=a.useRef(void 0!==n),[r,i]=a.useState(e);return[o?n:r,a.useCallback((n=>{o||i(n)}),[])]}},2895:function(n,e,t){t.r(e),t.d(e,{Head:function(){return vn},default:function(){return gn}});var a=t(7294),s=t(6089),o=t(118),r=t(3366),i=t(7462),p=(t(6607),t(6010)),l=t(4780),c=t(948),u=t(1657),d=t(4578),m=t(3935),k=!1,f=t(220),h="unmounted",g="exited",v="entering",x="entered",b="exiting",E=function(n){function e(e,t){var a;a=n.call(this,e,t)||this;var s,o=t&&!t.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?o?(s=g,a.appearStatus=v):s=x:s=e.unmountOnExit||e.mountOnEnter?h:g,a.state={status:s},a.nextCallback=null,a}(0,d.Z)(e,n),e.getDerivedStateFromProps=function(n,e){return n.in&&e.status===h?{status:g}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(n){var e=null;if(n!==this.props){var t=this.state.status;this.props.in?t!==v&&t!==x&&(e=v):t!==v&&t!==x||(e=b)}this.updateStatus(!1,e)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var n,e,t,a=this.props.timeout;return n=e=t=a,null!=a&&"number"!=typeof a&&(n=a.exit,e=a.enter,t=void 0!==a.appear?a.appear:e),{exit:n,enter:e,appear:t}},t.updateStatus=function(n,e){if(void 0===n&&(n=!1),null!==e)if(this.cancelNextCallback(),e===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this);t&&function(n){n.scrollTop}(t)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===g&&this.setState({status:h})},t.performEnter=function(n){var e=this,t=this.props.enter,a=this.context?this.context.isMounting:n,s=this.props.nodeRef?[a]:[m.findDOMNode(this),a],o=s[0],r=s[1],i=this.getTimeouts(),p=a?i.appear:i.enter;!n&&!t||k?this.safeSetState({status:x},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,r),this.safeSetState({status:v},(function(){e.props.onEntering(o,r),e.onTransitionEnd(p,(function(){e.safeSetState({status:x},(function(){e.props.onEntered(o,r)}))}))})))},t.performExit=function(){var n=this,e=this.props.exit,t=this.getTimeouts(),a=this.props.nodeRef?void 0:m.findDOMNode(this);e&&!k?(this.props.onExit(a),this.safeSetState({status:b},(function(){n.props.onExiting(a),n.onTransitionEnd(t.exit,(function(){n.safeSetState({status:g},(function(){n.props.onExited(a)}))}))}))):this.safeSetState({status:g},(function(){n.props.onExited(a)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},t.setNextCallback=function(n){var e=this,t=!0;return this.nextCallback=function(a){t&&(t=!1,e.nextCallback=null,n(a))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(n,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this),a=null==n&&!this.props.addEndListener;if(t&&!a){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],o=s[0],r=s[1];this.props.addEndListener(o,r)}null!=n&&setTimeout(this.nextCallback,n)}else setTimeout(this.nextCallback,0)},t.render=function(){var n=this.state.status;if(n===h)return null;var e=this.props,t=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(f.Z.Provider,{value:null},"function"==typeof t?t(n,s):a.cloneElement(a.Children.only(t),s))},e}(a.Component);function y(){}E.contextType=f.Z,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},E.UNMOUNTED=h,E.EXITED=g,E.ENTERING=v,E.ENTERED=x,E.EXITING=b;var Z=E,C=t(6067);function w(n,e){var t,a;const{timeout:s,easing:o,style:r={}}=n;return{duration:null!=(t=r.transitionDuration)?t:"number"==typeof s?s:s[e.mode]||0,easing:null!=(a=r.transitionTimingFunction)?a:"object"==typeof o?o[e.mode]:o,delay:r.transitionDelay}}var S=t(2734),R=t(8192),M=t(1588),N=t(4867);function T(n){return(0,N.Z)("MuiCollapse",n)}(0,M.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var j=t(5893);const I=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],O=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.orientation],"entered"===t.state&&e.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&e.hidden]}})((({theme:n,ownerState:e})=>(0,i.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===e.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===e.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===e.orientation&&{width:"auto"}),"exited"===e.state&&!e.in&&"0px"===e.collapsedSize&&{visibility:"hidden"}))),D=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})((({ownerState:n})=>(0,i.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"}))),P=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})((({ownerState:n})=>(0,i.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"}))),$=a.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiCollapse"}),{addEndListener:s,children:o,className:c,collapsedSize:d="0px",component:m,easing:k,in:f,onEnter:h,onEntered:g,onEntering:v,onExit:x,onExited:b,onExiting:E,orientation:y="vertical",style:M,timeout:N=C.x9.standard,TransitionComponent:$=Z}=t,A=(0,r.Z)(t,I),W=(0,i.Z)({},t,{orientation:y,collapsedSize:d}),L=(n=>{const{orientation:e,classes:t}=n,a={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return(0,l.Z)(a,T,t)})(W),G=(0,S.Z)(),q=a.useRef(),z=a.useRef(null),H=a.useRef(),_="number"==typeof d?`${d}px`:d,F="horizontal"===y,V=F?"width":"height";a.useEffect((()=>()=>{clearTimeout(q.current)}),[]);const B=a.useRef(null),U=(0,R.Z)(e,B),X=n=>e=>{if(n){const t=B.current;void 0===e?n(t):n(t,e)}},J=()=>z.current?z.current[F?"clientWidth":"clientHeight"]:0,K=X(((n,e)=>{z.current&&F&&(z.current.style.position="absolute"),n.style[V]=_,h&&h(n,e)})),Q=X(((n,e)=>{const t=J();z.current&&F&&(z.current.style.position="");const{duration:a,easing:s}=w({style:M,timeout:N,easing:k},{mode:"enter"});if("auto"===N){const e=G.transitions.getAutoHeightDuration(t);n.style.transitionDuration=`${e}ms`,H.current=e}else n.style.transitionDuration="string"==typeof a?a:`${a}ms`;n.style[V]=`${t}px`,n.style.transitionTimingFunction=s,v&&v(n,e)})),Y=X(((n,e)=>{n.style[V]="auto",g&&g(n,e)})),nn=X((n=>{n.style[V]=`${J()}px`,x&&x(n)})),en=X(b),tn=X((n=>{const e=J(),{duration:t,easing:a}=w({style:M,timeout:N,easing:k},{mode:"exit"});if("auto"===N){const t=G.transitions.getAutoHeightDuration(e);n.style.transitionDuration=`${t}ms`,H.current=t}else n.style.transitionDuration="string"==typeof t?t:`${t}ms`;n.style[V]=_,n.style.transitionTimingFunction=a,E&&E(n)}));return(0,j.jsx)($,(0,i.Z)({in:f,onEnter:K,onEntered:Y,onEntering:Q,onExit:nn,onExited:en,onExiting:tn,addEndListener:n=>{"auto"===N&&(q.current=setTimeout(n,H.current||0)),s&&s(B.current,n)},nodeRef:B,timeout:"auto"===N?null:N},A,{children:(n,e)=>(0,j.jsx)(O,(0,i.Z)({as:m,className:(0,p.Z)(L.root,c,{entered:L.entered,exited:!f&&"0px"===_&&L.hidden}[n]),style:(0,i.Z)({[F?"minWidth":"minHeight"]:_},M),ownerState:(0,i.Z)({},W,{state:n}),ref:U},e,{children:(0,j.jsx)(D,{ownerState:(0,i.Z)({},W,{state:n}),className:L.wrapper,ref:z,children:(0,j.jsx)(P,{ownerState:(0,i.Z)({},W,{state:n}),className:L.wrapperInner,children:o})})}))}))}));$.muiSupportAuto=!0;var A=$,W=t(1796);var L=n=>{let e;return e=n<1?5.11916*n**2:4.5*Math.log(n+1)+2,(e/100).toFixed(2)};function G(n){return(0,N.Z)("MuiPaper",n)}(0,M.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const q=["className","component","elevation","square","variant"],z=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],!t.square&&e.rounded,"elevation"===t.variant&&e[`elevation${t.elevation}`]]}})((({theme:n,ownerState:e})=>{var t;return(0,i.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!e.square&&{borderRadius:n.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(n.vars||n).palette.divider}`},"elevation"===e.variant&&(0,i.Z)({boxShadow:(n.vars||n).shadows[e.elevation]},!n.vars&&"dark"===n.palette.mode&&{backgroundImage:`linear-gradient(${(0,W.Fq)("#fff",L(e.elevation))}, ${(0,W.Fq)("#fff",L(e.elevation))})`},n.vars&&{backgroundImage:null==(t=n.vars.overlays)?void 0:t[e.elevation]}))}));var H=a.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiPaper"}),{className:a,component:s="div",elevation:o=1,square:c=!1,variant:d="elevation"}=t,m=(0,r.Z)(t,q),k=(0,i.Z)({},t,{component:s,elevation:o,square:c,variant:d}),f=(n=>{const{square:e,elevation:t,variant:a,classes:s}=n,o={root:["root",a,!e&&"rounded","elevation"===a&&`elevation${t}`]};return(0,l.Z)(o,G,s)})(k);return(0,j.jsx)(z,(0,i.Z)({as:s,ownerState:k,className:(0,p.Z)(f.root,a),ref:e},m))}));var _=a.createContext({}),F=t(2893);function V(n){return(0,N.Z)("MuiAccordion",n)}var B=(0,M.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const U=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],X=(0,c.ZP)(H,{name:"MuiAccordion",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${B.region}`]:e.region},e.root,!t.square&&e.rounded,!t.disableGutters&&e.gutters]}})((({theme:n})=>{const e={duration:n.transitions.duration.shortest};return{position:"relative",transition:n.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(n.vars||n).palette.divider,transition:n.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${B.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${B.disabled}`]:{backgroundColor:(n.vars||n).palette.action.disabledBackground}}}),(({theme:n,ownerState:e})=>(0,i.Z)({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(n.vars||n).shape.borderRadius,borderBottomRightRadius:(n.vars||n).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${B.expanded}`]:{margin:"16px 0"}})));var J=a.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiAccordion"}),{children:s,className:o,defaultExpanded:c=!1,disabled:d=!1,disableGutters:m=!1,expanded:k,onChange:f,square:h=!1,TransitionComponent:g=A,TransitionProps:v}=t,x=(0,r.Z)(t,U),[b,E]=(0,F.Z)({controlled:k,default:c,name:"Accordion",state:"expanded"}),y=a.useCallback((n=>{E(!b),f&&f(n,!b)}),[b,f,E]),[Z,...C]=a.Children.toArray(s),w=a.useMemo((()=>({expanded:b,disabled:d,disableGutters:m,toggle:y})),[b,d,m,y]),S=(0,i.Z)({},t,{square:h,disabled:d,disableGutters:m,expanded:b}),R=(n=>{const{classes:e,square:t,expanded:a,disabled:s,disableGutters:o}=n,r={root:["root",!t&&"rounded",a&&"expanded",s&&"disabled",!o&&"gutters"],region:["region"]};return(0,l.Z)(r,V,e)})(S);return(0,j.jsxs)(X,(0,i.Z)({className:(0,p.Z)(R.root,o),ref:e,ownerState:S,square:h},x,{children:[(0,j.jsx)(_.Provider,{value:w,children:Z}),(0,j.jsx)(g,(0,i.Z)({in:b,timeout:"auto"},v,{children:(0,j.jsx)("div",{"aria-labelledby":Z.props.id,id:Z.props["aria-controls"],role:"region",className:R.region,children:C})}))]}))}));function K(n){return(0,N.Z)("MuiAccordionDetails",n)}(0,M.Z)("MuiAccordionDetails",["root"]);const Q=["className"],Y=(0,c.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(n,e)=>e.root})((({theme:n})=>({padding:n.spacing(1,2,2)})));var nn=a.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiAccordionDetails"}),{className:a}=t,s=(0,r.Z)(t,Q),o=t,c=(n=>{const{classes:e}=n;return(0,l.Z)({root:["root"]},K,e)})(o);return(0,j.jsx)(Y,(0,i.Z)({className:(0,p.Z)(c.root,a),ref:e,ownerState:o},s))})),en=t(6637);function tn(n){return(0,N.Z)("MuiAccordionSummary",n)}var an=(0,M.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const sn=["children","className","expandIcon","focusVisibleClassName","onClick"],on=(0,c.ZP)(en.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(n,e)=>e.root})((({theme:n,ownerState:e})=>{const t={duration:n.transitions.duration.shortest};return(0,i.Z)({display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],t),[`&.${an.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${an.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},[`&:hover:not(.${an.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${an.expanded}`]:{minHeight:64}})})),rn=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(n,e)=>e.content})((({theme:n,ownerState:e})=>(0,i.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest}),[`&.${an.expanded}`]:{margin:"20px 0"}}))),pn=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(n,e)=>e.expandIconWrapper})((({theme:n})=>({display:"flex",color:(n.vars||n).palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),[`&.${an.expanded}`]:{transform:"rotate(180deg)"}})));var ln=a.forwardRef((function(n,e){const t=(0,u.Z)({props:n,name:"MuiAccordionSummary"}),{children:s,className:o,expandIcon:c,focusVisibleClassName:d,onClick:m}=t,k=(0,r.Z)(t,sn),{disabled:f=!1,disableGutters:h,expanded:g,toggle:v}=a.useContext(_),x=(0,i.Z)({},t,{expanded:g,disabled:f,disableGutters:h}),b=(n=>{const{classes:e,expanded:t,disabled:a,disableGutters:s}=n,o={root:["root",t&&"expanded",a&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,l.Z)(o,tn,e)})(x);return(0,j.jsxs)(on,(0,i.Z)({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":g,className:(0,p.Z)(b.root,o),focusVisibleClassName:(0,p.Z)(b.focusVisible,d),onClick:n=>{v&&v(n),m&&m(n)},ref:e,ownerState:x},k,{children:[(0,j.jsx)(rn,{className:b.content,ownerState:x,children:s}),c&&(0,j.jsx)(pn,{className:b.expandIconWrapper,ownerState:x,children:c})]}))})),cn=t(2658),un=t(3508);const dn=(0,a.createContext)({expandedAccordionId:null,handleChange:()=>{}});var mn=n=>{let{id:e,title:t,children:s}=n;const{expandedAccordionId:o,handleChange:r}=(0,a.useContext)(dn);return a.createElement(J,{expanded:o===e,onChange:()=>r(e)},a.createElement(ln,{expandIcon:a.createElement(un.Z,null),"aria-controls":e,id:e},a.createElement(cn.Z,{fontWeight:"bold"},t)),a.createElement(nn,null,s))},kn=t(1151);function fn(n){const e=Object.assign({h1:"h1",p:"p",code:"code",div:"div",a:"a"},(0,kn.ah)(),n.components);return a.createElement(a.Fragment,null,a.createElement(e.h1,null,"Devs Manual"),"\n",a.createElement(mn,{id:"custom-hook",title:"Custom Hooks"},a.createElement(e.p,null,a.createElement(e.code,null,"useToggle.js")),a.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre style="counter-reset: linenumber 0" class="language-jsx line-numbers"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">useToggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">defaultState <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>enabled<span class="token punctuation">,</span> setEnabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> toggle <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token parameter">current</span> <span class="token operator">=></span> <span class="token operator">!</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> enabled<span class="token punctuation">,</span> toggle <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> useToggle<span class="token punctuation">;</span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></pre></div>'}}),a.createElement(e.p,null,a.createElement(e.a,{href:"/docs/custom-hooks"},"Read More"))),"\n",a.createElement(mn,{id:"higher-order-component",title:"Higher-Order Component"},a.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre style="counter-reset: linenumber 0" class="language-jsx line-numbers"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">withChangeLogger</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">WithChangeLogger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span>restProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      Logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onChange<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WrappedComponent</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>restProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  WithChangeLogger<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">WithChangeLogger(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getDisplayName</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> WithChangeLogger<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getDisplayName</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> WrappedComponent<span class="token punctuation">.</span>displayName <span class="token operator">||</span> WrappedComponent<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">\'Component\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></pre></div>'}}),a.createElement(e.p,null,a.createElement(e.a,{href:"/docs/higher-order-component"},"Read More"))),"\n",a.createElement(mn,{id:"render-props",title:"Render Props"},a.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre style="counter-reset: linenumber 0" class="language-jsx line-numbers"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DataProvider</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>target<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span></span></pre></div>'}}),a.createElement(e.p,null,a.createElement(e.a,{href:"/docs/render-props"},"Read More"))),"\n",a.createElement(mn,{id:"clean-code-or-preference",title:"Clean Code or Preference?"},a.createElement(e.p,null,"TODO"),a.createElement(e.p,null,a.createElement(e.a,{href:"https://www.youtube.com/watch?v=ou6x2qcLOLI"},"Clean Code vs Preference by Traversy Media"))),"\n",a.createElement(mn,{id:"abc",title:"Approaches to eliminate if-else or switch-case blocks"},a.createElement(e.p,null,"TODO")),"\n",a.createElement(mn,{id:"null-value-object",title:"Null Value Object"},a.createElement(e.p,null,"TODO")),"\n",a.createElement(mn,{id:"namespace",title:"Namespace"},a.createElement(e.p,null,"TODO")))}var hn=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,kn.ah)(),n.components);return e?a.createElement(e,n,a.createElement(fn,n)):fn(n)};var gn=n=>{let{data:e}=n;const{0:t,1:r}=(0,a.useState)(null),i=(0,a.useCallback)((n=>{r((e=>n===e?null:n))}),[]);return a.createElement(o.Z,null,a.createElement(s.Z,null,a.createElement(dn.Provider,{value:{expandedAccordionId:t,handleChange:i}},a.createElement(hn,null))))};const vn=n=>{var e,t;let{data:s}=n;return a.createElement("title",null,null===(e=s.site)||void 0===e||null===(t=e.siteMetadata)||void 0===t?void 0:t.title)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b2c40fa305a36adf377a.js.map