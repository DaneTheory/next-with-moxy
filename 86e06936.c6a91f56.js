(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(1),r=(t(0),t(139));const o={id:"docker",title:"Docker",sidebar_label:"Docker"},i=[],c={rightToc:i},l="wrapper";function p({components:e,...n}){return Object(r.b)(l,Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We provide a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," so that you can easily use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to run the application you're building in a containerized environment."),Object(r.b)("p",null,"To run this app in Docker, you can use the following commands from the project's folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t {project-name}:latest .\ndocker run --name={project-name} -p 3000:3000 --restart=unless-stopped -d {project-name}:latest\n")),Object(r.b)("p",null,"Afterwards you'll be able to find your project running at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"."),Object(r.b)("p",null,"This ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," is also how you can pass environment variables to your Docker container running this application. In the ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),", you do this with two steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define an ",Object(r.b)("inlineCode",{parentName:"li"},"ARG")," for the variable to be received."),Object(r.b)("li",{parentName:"ul"},"Pass that ",Object(r.b)("inlineCode",{parentName:"li"},"ARG")," into an ",Object(r.b)("inlineCode",{parentName:"li"},"ENV")," argument that will exist inside the application's process.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Define build arguments\nARG SOME_ARGUMENT\n\n# Define environment variables\nENV SOME_ENV_VAR ${SOME_ARGUMENT}\n")),Object(r.b)("p",null,"You can check the existing ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," to see how we're configuring ",Object(r.b)("inlineCode",{parentName:"p"},"GA_TRACKING_ID")," for an example on this process."))}p.isMDXComponent=!0},139:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),b=a,u=s[c+"."+b]||s[b]||p[b]||o;return t?r.a.createElement(u,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(u,Object.assign({},{ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);