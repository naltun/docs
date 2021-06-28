(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(11),i=(n(0),n(242)),a={id:"troubleshooting",title:"Troubleshooting"},c={id:"contributing/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"If you're having problems contributing, we want to help:",source:"@site/docs/contributing/troubleshooting.md",permalink:"/contributing/troubleshooting",sidebar:"Contributing",previous:{title:"Debugging",permalink:"/contributing/debugging"},next:{title:"Making a Pull Request",permalink:"/contributing/making-a-pull-request"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you're having problems contributing, we want to help:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ask for help in #development in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://darklang.com/slack-invite"}),"Slack"),".\nOr DM Paul Biggar directly if you prefer."),Object(i.b)("li",{parentName:"ul"},"make an ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/darklang/dark/issues"}),"issue")," describing the\nproblem, and someone will come help.")),Object(i.b)("p",null,"Common fixes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sometimes there are compilation problems where the build caches from various\npackage managers we use (npm, esy, opam, cargo) develop problems. They can be\nfixed by clearing the build directories (which are in Docker volumes) by\nrunning the related scripts:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"for client errors, use ",Object(i.b)("inlineCode",{parentName:"li"},"./scripts/clear-bs-cache")," and\n",Object(i.b)("inlineCode",{parentName:"li"},"./scripts/clear-node-modules")),Object(i.b)("li",{parentName:"ul"},"for other errors, use ",Object(i.b)("inlineCode",{parentName:"li"},"./scripts/clear-builder-volumes")))),Object(i.b)("li",{parentName:"ul"},"Integration tests sometimes fail. At time of writing ",Object(i.b)("inlineCode",{parentName:"li"},"execute_function_works"),"\nis the only flaky integration test, and you can ignore related test failures.")))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(a,".").concat(m)]||b[m]||s[m]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);