(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),i=(n(0),n(139));const a={id:"everything-else",title:"And\xa0everything\xa0that\xa0comes\xa0with\xa0Next.js",sidebar_label:"And\xa0everything\xa0from\xa0Next.js"},o=[{value:"File-System Routing",id:"file-system-routing",children:[]},{value:"Automatic Code Splitting",id:"automatic-code-splitting",children:[]},{value:"Server Side Rendering",id:"server-side-rendering",children:[]},{value:"Static Exporting",id:"static-exporting",children:[]},{value:"And more",id:"and-more",children:[]}],c={rightToc:o},l="wrapper";function s({components:e,...t}){return Object(i.b)(l,Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"file-system-routing"},"File-System Routing"),Object(i.b)("p",null,"Next.js comes with a default routing system, which will serve each file in the ",Object(i.b)("inlineCode",{parentName:"p"},"/pages")," folder with pathname corresponding to the filename. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"/pages/some_page.js")," would be server at ",Object(i.b)("inlineCode",{parentName:"p"},"website.com/some_page"),"."),Object(i.b)("h2",{id:"automatic-code-splitting"},"Automatic Code Splitting"),Object(i.b)("p",null,"Next.js will automatically know not to reload content that is very common in your application, loading only what is unique to each page, improving load time performance."),Object(i.b)("h2",{id:"server-side-rendering"},"Server Side Rendering"),Object(i.b)("p",null,"Next.js is built to render pages server side, and rehydrate them in the client whenever it's necessary."),Object(i.b)("p",null,"If you're looking for more information about server-side rendering and its benefits, you can read through ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2019/02/rendering-on-the-web"}),"this article"),", where rehydration is also covered."),Object(i.b)("h2",{id:"static-exporting"},"Static Exporting"),Object(i.b)("p",null,"Next.js guarantees that static pages also benefit from these features, as well as other things still, like dynamic imports and prefetching."),Object(i.b)("h2",{id:"and-more"},"And more"),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/#more"}),"Next.js documentation")," for all the features available."))}s.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r),a=i.a.createContext({}),o=function(e){var t=i.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),d=o(n),p=r,u=d[c+"."+p]||d[p]||s[p]||a;return n?i.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);