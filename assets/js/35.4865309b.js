(window.webpackJsonp=window.webpackJsonp||[]).push([[35,37],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(108),c=a(16),l=a(27),s=a(113),i=a(3),u=a(110),d=a(109),p=a(130),m=a(134),b=a(135),h=a(133),y=a(112),f=a(122),g=a(136);var v=e=>r.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=a(138),k=a(111),O=a(76),E=a.n(O);const N=(e,t)=>"link"===e.type?Object(d.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>N(e,t)));function C({item:e,onItemClick:t,collapsible:a,activePath:o,...c}){const{items:l,label:s}=e,d=N(e,o),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(d),[m,b]=Object(n.useState)((()=>!!a&&(!d&&e.collapsed))),h=Object(n.useRef)(null),[y,f]=Object(n.useState)(void 0),g=(e=!0)=>{var t;f(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{d&&!p&&m&&b(!1)}),[d,p,m]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||g(),setTimeout((()=>b((e=>!e))),100)}),[y]);return 0===l.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":m}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&d,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},c),s),r.a.createElement("ul",{className:"menu__list",ref:h,style:{height:y},onTransitionEnd:()=>{m||g(!1)}},l.map((e=>r.a.createElement(x,{tabIndex:m?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:o})))))}function T({item:e,onItemClick:t,activePath:a,collapsible:n,...o}){const{href:c,label:l}=e,s=N(e,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s,[E.a.menuLinkExternal]:!Object(f.a)(c)}),to:c},Object(f.a)(c)&&{isNavLink:!0,exact:!0,onClick:t},o),l))}function x(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(T,e)}}var w=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:c}){const[l,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(d.useThemeConfig)(),{isAnnouncementBarClosed:f}=Object(p.a)(),{scrollY:O}=Object(h.a)();Object(m.a)(l);const N=Object(b.a)();return Object(n.useEffect)((()=>{N===b.b.desktop&&s(!1)}),[N]),r.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:c})},i&&r.a.createElement(g.a,{tabIndex:-1,className:E.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":l,[E.a.menuWithAnnouncementBar]:!f&&0===O})},r.a.createElement("button",{"aria-label":l?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!l)}},l?r.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),y&&r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:o},r.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},P=a(120),S=a(126),_=a(24),B=a(77),I=a.n(B);function L({currentDocRoute:e,versionMetadata:t,children:a}){var l,i;const{siteConfig:p,isClient:m}=Object(c.default)(),{pluginId:b,permalinkToSidebar:h,docsSidebars:y,version:f}=t,g=h[e.path],j=y[g],[O,E]=Object(n.useState)(!1),[N,C]=Object(n.useState)(!1),T=Object(n.useCallback)((()=>{N&&C(!1),E(!O)}),[N]);return r.a.createElement(s.a,{key:m,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:f,tag:Object(d.docVersionSearchTag)(b,f)}},r.a.createElement("div",{className:I.a.docPage},j&&r.a.createElement("div",{className:Object(u.a)(I.a.docSidebarContainer,{[I.a.docSidebarContainerHidden]:O}),onTransitionEnd:e=>{e.currentTarget.classList.contains(I.a.docSidebarContainer)&&O&&C(!0)},role:"complementary"},r.a.createElement(w,{key:g,sidebar:j,path:e.path,sidebarCollapsible:null===(l=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===l||l,onCollapse:T,isHidden:N}),N&&r.a.createElement("div",{className:I.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.a.createElement(v,{className:I.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(u.a)(I.a.docMainContainer,{[I.a.docMainContainerEnhanced]:O})},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",I.a.docItemWrapper,{[I.a.docItemWrapperEnhanced]:O})},r.a.createElement(o.a,{components:P.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,o=t.find((e=>Object(_.matchPath)(n.pathname,e)));return o?r.a.createElement(L,{currentDocRoute:o,versionMetadata:a},Object(l.a)(t)):r.a.createElement(S.default,e)}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.a.createElement(b,l(l({ref:t},i),{},{components:a})):r.a.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},119:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(112),c=a(3),l=a(110),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:s};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=d({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=d({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=d({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?d({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,c=d({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?d({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),u(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,c=0,l=[],s=[l];c>-1;){for(;(o=n[c]++)<r[c];){var i=void 0,u=t[c],d=a[c][o];if("string"==typeof d?(u=c>0?u:["plain"],i=d):(u=b(u,d.type),d.alias&&(u=b(u,d.alias)),i=d.content),"string"==typeof i){var h=i.split(p),y=h.length;l.push({types:u,content:h[0]});for(var f=1;f<y;f++)m(l),s.push(l=[]),l.push({types:u,content:h[f]})}else c++,t.push(u),a.push(i),n.push(0),r.push(i.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return m(l),s}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var g=a(119),v=a.n(g),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=a(116),O=a(109);var E=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(k.a)(),a=e.theme||j,n=e.darkTheme||a;return t?n:a},N=a(111),C=a(57),T=a.n(C);const x=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},P=/(?:title=")(.*)(?:")/;function S({children:e,className:t,metastring:a}){const{prism:o}=Object(O.useThemeConfig)(),[s,u]=Object(n.useState)(!1),[d,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const m=Object(n.useRef)(null);let b=[],h="";const y=E(),g=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];b=v()(e).filter((e=>e>0))}a&&P.test(a)&&(h=a.match(P)[1]);let j=t&&t.replace(/language-/,"");!j&&o.defaultLanguage&&(j=o.defaultLanguage);let k=g.replace(/\n$/,"");if(0===b.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(j),a=g.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const o=r+1,c=a[r].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":n=o;break;case"highlight-end":e+=`${n}-${o-1},`}a.splice(r,1)}else r+=1}b=v()(e),k=a.join("\n")}const C=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}(k),u(!0),setTimeout((()=>u(!1)),2e3)};return r.a.createElement(f,Object(c.a)({},i,{key:String(d),theme:y,code:k,language:j}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:o})=>r.a.createElement("div",{className:T.a.codeBlockContainer},h&&r.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),r.a.createElement("div",{className:Object(l.a)(T.a.codeBlockContent,j)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:T.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(c.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(c.a)({key:t},o({token:e,key:t}))))))})))),r.a.createElement("button",{ref:m,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(T.a.copyButton),onClick:C},s?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(58);var _=a(59),B=a.n(_);var I=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(O.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",{[B.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(N.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,a)};const L={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(S,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(o.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(S,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")};t.a=L},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(113),c=a(111);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);