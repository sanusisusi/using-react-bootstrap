(this["webpackJsonpbootstrap-react-app"]=this["webpackJsonpbootstrap-react-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),i=n.n(a),s=(n(15),n(16),n(6)),o=n(21),j=n(22),u=(n(17),n(1));var h=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/").then((function(t){return t.json()})).then((function(t){return r(t.results)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Welcome To Susi React Bootstrap App"}),n.map((function(t){return Object(u.jsxs)("card",{className:"img",style:{width:"15rem"},children:[Object(u.jsx)(o.a.Img,{variant:"top",src:t.image}),Object(u.jsxs)(o.a.Body,{children:[Object(u.jsx)(o.a.Title,{children:t.name}),Object(u.jsx)(o.a.Text,{children:t.species}),Object(u.jsx)(j.a,{variant:"primary",href:t.url,target:"_blank",children:"More Info"})]})]},t.id)}))]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.73334f38.chunk.js.map