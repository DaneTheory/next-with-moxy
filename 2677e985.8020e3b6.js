(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(172)),i={id:"customizable-page-transitions",title:"Customizable page transitions",sidebar_label:"Customizable page transitions"},c={id:"what-is-included/customizable-page-transitions",title:"Customizable page transitions",description:"The boilerplate includes @moxy/react-page-swapper which eases out the implementation of page transitions.",source:"@site/docs/what-is-included/customizable-page-transitions.md",permalink:"/docs/what-is-included/customizable-page-transitions",sidebar_label:"Customizable page transitions",sidebar:"docs",previous:{title:"Customizable layout support",permalink:"/docs/what-is-included/customizable-layout-support"},next:{title:"Internationalization",permalink:"/docs/what-is-included/internationalization"}},l=[{value:"Removing this feature",id:"removing-this-feature",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The boilerplate includes ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-page-swapper"}),Object(o.b)("inlineCode",{parentName:"a"},"@moxy/react-page-swapper"))," which eases out the implementation of page transitions."),Object(o.b)("p",null,"A simple ",Object(o.b)("inlineCode",{parentName:"p"},"fade")," transition built with ",Object(o.b)("inlineCode",{parentName:"p"},"<CSSTransition>")," is included as an example on how you can orchestrate your custom page transitions."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"PageSwapper")," component also integrates with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-scroll-behavior"}),Object(o.b)("inlineCode",{parentName:"a"},"@moxy/next-scroll-behavior"))," to handle ",Object(o.b)("inlineCode",{parentName:"p"},"scroll-restoration")," for you."),Object(o.b)("p",null,"For more details about all the possibilities ",Object(o.b)("inlineCode",{parentName:"p"},"@moxy/react-page-swapper")," gives you to customize your page transitions, check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-page-swapper/blob/master/README.md"}),"docs"),"."),Object(o.b)("h2",{id:"removing-this-feature"},"Removing this feature"),Object(o.b)("p",null,"If you don't need to include custom transitions to your pages you may want to remove this feature altogether. To do so, take the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Uninstall ",Object(o.b)("inlineCode",{parentName:"li"},"@moxy/react-page-swapper"),", ",Object(o.b)("inlineCode",{parentName:"li"},"@moxy/next-scroll-behavior")," and ",Object(o.b)("inlineCode",{parentName:"li"},"react-transition-group"),"."),Object(o.b)("li",{parentName:"ol"},"Remove the ",Object(o.b)("inlineCode",{parentName:"li"},"<PageSwapper />")," component and its associated components."),Object(o.b)("li",{parentName:"ol"},"Delete the folder ",Object(o.b)("inlineCode",{parentName:"li"},"www/modules/react-page-transition"),"."),Object(o.b)("li",{parentName:"ol"},"Update your unit tests if necessary so that they all pass!")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);