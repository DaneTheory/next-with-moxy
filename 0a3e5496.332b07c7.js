(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),o=(n(0),n(150)),r={id:"recipe-rest-api",title:"Adding a simple REST API",sidebar_label:"Adding a simple REST API"},p=[{value:"Walk-through",id:"walk-through",children:[{value:"1. Install <code>@moxy/next-rest-api</code>",id:"1-install-moxynext-rest-api",children:[]},{value:"2. Create <code>/api/my-endpoint.js</code> file",id:"2-create-apimy-endpointjs-file",children:[]},{value:"3. Map <code>/api/my-endpoint.js</code> to <code>/pages/api/my-endpoint.js</code>",id:"3-map-apimy-endpointjs-to-pagesapimy-endpointjs",children:[]},{value:"4. Access your API at <code>/api/my-endpoint</code>",id:"4-access-your-api-at-apimy-endpoint",children:[]}]}],s={id:"recipes/recipe-rest-api",title:"Adding a simple REST API",description:"Sometimes a project may require a simple REST API (e.g. to send an email). Next.js brought API routes support in v9, but you have to provide your own implementation for handling different HTTP methods, validation, error handling and so on. We have created [`@moxy/next-rest-api`](https://github.com/moxystudio/next-rest-api/) to solve these problems, so that you can focus on writing your business logic.",source:"@site/docs/recipes/rest-api.md",permalink:"/docs/recipes/recipe-rest-api",sidebar_label:"Adding a simple REST API",sidebar:"docs",previous:{title:"And everything that comes with Next.js",permalink:"/docs/what-is-included/everything-else"},next:{title:"This document",permalink:"/docs/this-document"}},c={rightToc:p,metadata:s},d="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes a project may require a simple REST API (e.g. to send an email). Next.js brought API routes support in v9, but you have to provide your own implementation for handling different HTTP methods, validation, error handling and so on. We have created ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-rest-api/"}),Object(o.b)("inlineCode",{parentName:"a"},"@moxy/next-rest-api"))," to solve these problems, so that you can focus on writing your business logic."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Besides getting familiar with the ",Object(o.b)("inlineCode",{parentName:"p"},"@moxy/next-rest-api"),", you might want to give a quick read over Next.js ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs#api-routes"}),"API routes")," documentation. Next.js extends Node.js ",Object(o.b)("inlineCode",{parentName:"p"},"req")," and ",Object(o.b)("inlineCode",{parentName:"p"},"res")," objects with additional functionality and ships with built-in middleware.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that if you require more than a simple API with one or two endpoints, it's better if you create a separate project (and repository) for it.")),Object(o.b)("h2",{id:"walk-through"},"Walk-through"),Object(o.b)("h3",{id:"1-install-moxynext-rest-api"},"1. Install ",Object(o.b)("inlineCode",{parentName:"h3"},"@moxy/next-rest-api")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i @moxy/next-rest-api @hapi/joi @hapi/boom\n")),Object(o.b)("h3",{id:"2-create-apimy-endpointjs-file"},"2. Create ",Object(o.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint.js")," file"),Object(o.b)("p",null,"Similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"/www"),", which is where our frontend code lives, we have a convention to put all our API code into the ",Object(o.b)("inlineCode",{parentName:"p"},"/api")," folder."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import withRest from '@moxy/next-rest-api';\n\nexport default withRest({\n    GET: async (req, res) => {\n        // Do something..\n\n        return { hello: 'world' };\n    },\n});\n")),Object(o.b)("h3",{id:"3-map-apimy-endpointjs-to-pagesapimy-endpointjs"},"3. Map ",Object(o.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint.js")," to ",Object(o.b)("inlineCode",{parentName:"h3"},"/pages/api/my-endpoint.js")),Object(o.b)("p",null,"Next.js requires pages to be defined in ",Object(o.b)("inlineCode",{parentName:"p"},"pages/")," so we must create ",Object(o.b)("inlineCode",{parentName:"p"},"pages/api/my-endpoint.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export { default } from '../../api/my-endpoint';\n")),Object(o.b)("h3",{id:"4-access-your-api-at-apimy-endpoint"},"4. Access your API at ",Object(o.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint")),Object(o.b)("p",null,"Next.js will map every file in ",Object(o.b)("inlineCode",{parentName:"p"},"/pages/api")," to a corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"/api/...")," URL. For example, the file ",Object(o.b)("inlineCode",{parentName:"p"},"/pages/api/products.js")," will map to the ",Object(o.b)("inlineCode",{parentName:"p"},"/api/products")," URL."))}l.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=r(n),l=a,m=d[p+"."+l]||d[l]||c[l]||o;return n?i.a.createElement(m,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(m,Object.assign({},{ref:t},s))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);