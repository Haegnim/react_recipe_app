(this.webpackJsonpreact_recipe_app=this.webpackJsonpreact_recipe_app||[]).push([[0],{37:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t(13),s=t.n(n),i=t(3),r=t(14),j=t.n(r),l=(t(37),t(0)),b=function(){var e=Object(a.useState)(!0),c=Object(i.a)(e,2),t=c[0],n=c[1];return Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"center",children:[Object(l.jsx)("h2",{className:"logo",children:"CIY"}),Object(l.jsx)("span",{className:"menu",onClick:function(){n(!t),console.log(t)},children:t?Object(l.jsx)("i",{className:"fa fa-bars"}):Object(l.jsx)("i",{className:"fa fa-times"})})]})})},o=(t(39),function(e){var c=e.title,t=e.calories,a=e.img,n=e.ingrs;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:c}),Object(l.jsx)("img",{src:a,alt:""}),Object(l.jsxs)("p",{children:["\uce7c\ub85c\ub9ac : ",t]}),Object(l.jsx)("ul",{children:n.map((function(e,c){return Object(l.jsx)("li",{children:e.text},c)}))})]})});t(40),t(41);var u=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),u=r[0],p=r[1],d=Object(a.useState)("chicken"),O=Object(i.a)(d,2),h=O[0],f=O[1];Object(a.useEffect)((function(){m()}),[h]);var m=function(){j.a.get("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("527e10e8","&app_key=").concat("0e7652bb155086cc4ad19fd49d9beb66")).then((function(e){n(e.data.hits)}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),p(""),f(u)},children:Object(l.jsxs)("div",{className:"center",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search Recipe...",onChange:function(e){p(e.target.value),console.log(u)}}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("i",{className:"fa fa-search"})})]})}),Object(l.jsx)("div",{className:"recipes",children:t.map((function(e){return Object(l.jsx)(o,{title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingrs:e.recipe.ingredients},e.recipe.label)}))})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.254b375f.chunk.js.map