(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),o=(t(0),t(163)),s={id:"splash-screen",title:"Adding a splash screen",sidebar_label:"Splash screen"},i={id:"recipes/splash-screen",title:"Adding a splash screen",description:"Certain pages have impactful experiences. These experiences can make the total bundle size larger as they pack possibly large dependencies and media assets, such as 3D objects and audio files.",source:"@site/docs/recipes/splash-screen.md",permalink:"/docs/recipes/splash-screen",sidebar_label:"Splash screen",sidebar:"docs",previous:{title:"Adding a simple REST API",permalink:"/docs/recipes/rest-api"},next:{title:"Changing favicon according to OS theme",permalink:"/docs/recipes/favicon-os-theme"}},l=[{value:"Walk-through",id:"walk-through",children:[{value:"1. Install <code>@moxy/react-wait-for-react</code>",id:"1-install-moxyreact-wait-for-react",children:[]},{value:"2. Add <code>&lt;SplashScreen /&gt;</code> to your project",id:"2-add-splashscreen--to-your-project",children:[]},{value:"3. Add the error message translation",id:"3-add-the-error-message-translation",children:[]},{value:"4. Define the <code>z-index-splash-screen</code> CSS variable",id:"4-define-the-z-index-splash-screen-css-variable",children:[]},{value:"5. Include <code>&lt;SplashScreen /&gt;</code> into your root layout(s)",id:"5-include-splashscreen--into-your-root-layouts",children:[]},{value:"6. Finally, use it in a page",id:"6-finally-use-it-in-a-page",children:[]}]}],c={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Certain pages have impactful experiences. These experiences can make the total bundle size larger as they pack possibly large dependencies and media assets, such as 3D objects and audio files."),Object(o.b)("p",null,"It's then often normal to preload all the required files for an uninterrupted experience. This recipe explains how you can leverage ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/react-wait-for-react"}),Object(o.b)("inlineCode",{parentName:"a"},"@moxy/react-wait-for-react"))," to display a ",Object(o.b)("strong",{parentName:"p"},"splash screen")," before your static or server-side rendered app becomes interactive, and optionally until all the required files are loaded (via a promise)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'\u26a0\ufe0f You should still render the app or page contents "below" the splash screen, to keep your website SEO friendly.')),Object(o.b)("h2",{id:"walk-through"},"Walk-through"),Object(o.b)("h3",{id:"1-install-moxyreact-wait-for-react"},"1. Install ",Object(o.b)("inlineCode",{parentName:"h3"},"@moxy/react-wait-for-react")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @moxy/react-wait-for-react\n")),Object(o.b)("h3",{id:"2-add-splashscreen--to-your-project"},"2. Add ",Object(o.b)("inlineCode",{parentName:"h3"},"<SplashScreen />")," to your project"),Object(o.b)("p",null,"Copy the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-with-moxy/tree/master/docusaurus/static/recipes-assets/splash-screen"}),Object(o.b)("inlineCode",{parentName:"a"},"splash-screen"))," component folder into ",Object(o.b)("inlineCode",{parentName:"p"},"www/shared/components")," and edit ",Object(o.b)("inlineCode",{parentName:"p"},"www/shared/components/index.js")," to export it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ....\nexport { default as SplashScreen } from './splash-screen';\n")),Object(o.b)("p",null,"Finally, adjust the component you just copied according to what was designed for your project."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f As a rule of thumb, you should show the app icon or a welcoming message in the splash screen while the page is being preloaded, and only reveal a loading indicator after ",Object(o.b)("strong",{parentName:"p"},"2 or 3 seconds"),". Users don't like seing a loading indicator, therefore we defer showing it only if the preload is taking more than usual.")),Object(o.b)("h3",{id:"3-add-the-error-message-translation"},"3. Add the error message translation"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"splash-screen.error")," message will be displayed in case the promise is rejected. If your translations are defined in ",Object(o.b)("inlineCode",{parentName:"p"},"intl/messages"),", add the following entry into each locale's json (translated according to each language):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "splash-screen.error": "Oops, something went bad. Please refresh to try again."\n}\n')),Object(o.b)("h3",{id:"4-define-the-z-index-splash-screen-css-variable"},"4. Define the ",Object(o.b)("inlineCode",{parentName:"h3"},"z-index-splash-screen")," CSS variable"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"z-index-splash-screen")," CSS variable to ",Object(o.b)("inlineCode",{parentName:"p"},"www/shared/styles/imports/variables.css"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ==========================================================================\n   Z-index\n   ========================================================================== */\n\n:root {\n    /* ... */\n    --z-index-splash-screen: 1000;\n}\n")),Object(o.b)("p",null,"The value of ",Object(o.b)("inlineCode",{parentName:"p"},"z-index-splash-screen")," should be one of the highest ",Object(o.b)("inlineCode",{parentName:"p"},"z-index")," values so that the splash screen appears above everything else."),Object(o.b)("h3",{id:"5-include-splashscreen--into-your-root-layouts"},"5. Include ",Object(o.b)("inlineCode",{parentName:"h3"},"<SplashScreen />")," into your root layout(s)"),Object(o.b)("p",null,"Because browsers stream the HTML response from the server and render it as soon as possible, the splash screen should be one of the top most HTML elements. One way to do this, is to include the ",Object(o.b)("inlineCode",{parentName:"p"},"<SplashScreen />")," in your root layout(s)."),Object(o.b)("p",null,"As an example, here's how you would integrate ",Object(o.b)("inlineCode",{parentName:"p"},"<SplashScreen />")," into the built-in ",Object(o.b)("inlineCode",{parentName:"p"},"<MainLayout />"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ...\nimport SplashScreen from '../splash-screen';\n\n// ...\n\nconst MainLayout = ({ splashPromise, splashOnDone, children }) => (\n    <div className={ styles.mainLayout }>\n        { splashPromise && (\n            <SplashScreen\n                promise={ splashPromise }\n                onDone={ splashOnDone } />\n        ) }\n\n        { /* ... */ }\n    </div>\n);\n\nMainLayout.propTypes = {\n    splashPromise: PropTypes.object,\n    splashOnDone: PropTypes.func,\n    // ...\n};\n")),Object(o.b)("h3",{id:"6-finally-use-it-in-a-page"},"6. Finally, use it in a page"),Object(o.b)("p",null,"Assuming you integrated the splash screen into the ",Object(o.b)("inlineCode",{parentName:"p"},"<MainLayout />")," as exemplified above, you could then use ",Object(o.b)("inlineCode",{parentName:"p"},"withLayout")," to set the layout's ",Object(o.b)("inlineCode",{parentName:"p"},"splashPromise")," prop directly from a page. Here's an example of the ",Object(o.b)("inlineCode",{parentName:"p"},"<Home />")," page defining a fake ",Object(o.b)("inlineCode",{parentName:"p"},"splashPromise")," that resolves in 5 seconds: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ...\nimport { withLayout } from '@moxy/next-layout';\nimport { MainLayout } from '../../shared/components';\n\n// ...\n\n// This promise should load the assets necessary for the experience,\n// such as 3D objects, materials, videos, audio files, etc.\n// Optionally, it may be a PPromise that reports progress: https://github.com/sindresorhus/p-progress\nconst splashPromise = new Promise((resolve) => setTimeout(resolve, 5000));\n\nconst Home = () => (\n    // ...\n);\n\nexport default withLayout(<MainLayout splashPromise={ splashPromise } />)(Home);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f If your project doesn't use ",Object(o.b)("inlineCode",{parentName:"p"},"@moxy/next-layout")," nor layouts, you may instead use ",Object(o.b)("inlineCode",{parentName:"p"},"<SplashScreen />")," directly at the top of your page components.")))}p.isMDXComponent=!0},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,h=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(h,i({ref:n},c,{components:t})):r.a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);