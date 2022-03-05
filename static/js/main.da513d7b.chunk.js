(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{125:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,o,l,u,d,j,b,f,h,x,p,v,O=t(0),m=t.n(O),g=t(10),y=t.n(g),k=t(47),w=t(11),z=t(127),S=t(13),C=t(14),U=C.a.div(i||(i=Object(S.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),L=t(4),M=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(L.jsx)(z.a,{children:Object(L.jsx)(U,{size:t,bold:a,children:i})})},F=t(23),A=t(43),B=t(167),E=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(L.jsx)(B.a,{size:n,color:t,thickness:i,variant:a})},D=t(176),T=t(168),I=C.a.div(a||(a=Object(S.a)([""]))),J=function(e){var n=e.isChecked,t=e.onChange,i=e.label,a=e.value;return Object(L.jsx)(I,{children:Object(L.jsx)(T.a,{control:Object(L.jsx)(D.a,{checked:n,onChange:function(){t&&t(a)},color:"primary"}),label:i})})},P=t(169),V=t(82),q=t.n(V),G=t(174),H=t(57),K=C.a.div(c||(c=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]))),N=Object(C.a)(H.a)(r||(r=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n"]))),R=C.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 350px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n  margin-left: auto;\n  margin-right: auto;\n"]))),W=C.a.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),Q=C.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),X=C.a.img(u||(u=Object(S.a)(["\n  border-radius: 45%;\n"]))),Y=C.a.div(d||(d=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n"]))),Z=C.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),$=C.a.div(b||(b=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),_=C.a.div(f||(f=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ee=function(e){var n=e.users,t=e.isLoading,i=e.checkBoxItems,a=e.fetchUsers,c=e.favorites,r=e.fetchFavorites,s=e.fetchMoreUsers,o=Object(O.useState)(),l=Object(F.a)(o,2),u=l[0],d=l[1],j=Object(O.useState)(new Set),b=Object(F.a)(j,2),f=b[0],h=b[1],x=Object(O.useState)(""),p=Object(F.a)(x,2),v=p[0],m=p[1],g=function(){d()},y=function(e){var n=new Set(f);n.has(e)?n.delete(e):n.add(e),h(n),a(Array.from(n).join(","))},k=function(){var e=n[u].email;Object(A.b)(e).then((function(t){t?Object(A.a)(e):Object(A.c)(e,n[u])})).then((function(){r()}))},w=function(e){return c.map((function(e){return e.email})).includes(n[e].email)},z=function(e){return(null===e||void 0===e?void 0:e.name.title.includes(v))||(null===e||void 0===e?void 0:e.name.first.includes(v))||(null===e||void 0===e?void 0:e.name.last.includes(v))||(null===e||void 0===e?void 0:e.email.includes(v))||(null===e||void 0===e?void 0:e.location.street.number.toString().includes(v))||(null===e||void 0===e?void 0:e.location.street.name.includes(v))||(null===e||void 0===e?void 0:e.location.city.includes(v))||(null===e||void 0===e?void 0:e.location.country.includes(v))},S=function(){return n.filter(z)};return Object(L.jsxs)(K,{children:[Object(L.jsx)(_,{children:Object(L.jsx)(G.a,{fullWidth:!0,color:"primary",label:"Search",variant:"outlined",helperText:"Search existing users",value:v,onChange:function(e){m(e.target.value)}})}),Object(L.jsx)($,{children:i&&i.map((function(e,n){return Object(L.jsx)(J,{value:e.value,label:e.label,isChecked:f.has(e.value),onChange:y},n)}))}),Object(L.jsx)(R,{id:"infinityList",children:Object(L.jsxs)(N,{dataLength:S().length,next:function(){v.length<1&&(null===s||void 0===s||s(Array.from(f).join(",")))},hasMore:n.length<=300,scrollableTarget:"infinityList",children:[S().map((function(e,n){return Object(L.jsxs)(W,{onMouseEnter:function(){return function(e){d(e)}(n)},onMouseLeave:g,children:[Object(L.jsx)(X,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(L.jsxs)(Q,{children:[Object(L.jsxs)(M,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(L.jsx)(M,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(L.jsxs)(M,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(L.jsxs)(M,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(L.jsx)(Z,{isVisible:n===u||w(n),children:Object(L.jsx)(P.a,{onClick:k,children:Object(L.jsx)(q.a,{color:"error"})})})]},n)})),t&&Object(L.jsx)(Y,{children:Object(L.jsx)(E,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})})]})},ne=t(34),te=t.n(ne),ie=t(46),ae=t(58),ce=t.n(ae),re=function(){var e=Object(O.useState)([]),n=Object(F.a)(e,2),t=n[0],i=n[1],a=Object(O.useState)(!1),c=Object(F.a)(a,2),r=c[0],s=c[1];function o(){return l.apply(this,arguments)}function l(){return(l=Object(ie.a)(te.a.mark((function e(){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,Object(A.d)();case 3:n=e.sent,s(!1),i(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.useEffect)((function(){o()}),[]),{users:t,isLoading:r,fetchUsers:o}},se=C.a.div(h||(h=Object(S.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),oe=C.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),le=C.a.div(p||(p=Object(S.a)(["\n  display: flex;\n"]))),ue=(C.a.div(v||(v=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(O.useState)([]),n=Object(F.a)(e,2),t=n[0],i=n[1],a=Object(O.useState)(!1),c=Object(F.a)(a,2),r=c[0],s=c[1];function o(e){return l.apply(this,arguments)}function l(){return(l=Object(ie.a)(te.a.mark((function e(n){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,ce.a.get("https://randomuser.me/api/?results=25&page=1&inc=name,location,email,picture&nat=".concat(n));case 3:t=e.sent,s(!1),i(t.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(ie.a)(te.a.mark((function e(n){var a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,ce.a.get("https://randomuser.me/api/?results=25&page=1&inc=name,location,email,picture&nat=".concat(n));case 3:a=e.sent,s(!1),i(t.concat(a.data.results));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.useEffect)((function(){o()}),[]),{users:t,isLoading:r,fetchUsers:o,fetchMoreUsers:function(e){return u.apply(this,arguments)}}}(),n=e.users,t=e.isLoading,i=e.fetchUsers,a=e.fetchMoreUsers,c=re();return Object(L.jsx)(se,{children:Object(L.jsxs)(oe,{children:[Object(L.jsx)(le,{children:Object(L.jsx)(M,{size:"64px",bold:!0,children:"PplFinder"})}),Object(L.jsx)(ee,{users:n,isLoading:t,checkBoxItems:[{value:"BR",label:"Brazil"},{value:"AU",label:"Australia"},{value:"CA",label:"Canada"},{value:"DE",label:"Germany"},{value:"DK",label:"Denmark"}],fetchUsers:i,favorites:c.users,fetchFavorites:c.fetchUsers,fetchMoreUsers:a})]})})}),de=function(){var e=re(),n=e.users,t=e.isLoading,i=e.fetchUsers;return Object(L.jsx)(se,{children:Object(L.jsxs)(oe,{children:[Object(L.jsx)(le,{children:Object(L.jsx)(M,{size:"64px",bold:!0,children:"PplFavorites"})}),Object(L.jsx)(ee,{users:n,isLoading:t,fetchUsers:i,favorites:n,fetchFavorites:i})]})})},je=t(83),be=t(170),fe=t(171),he=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=m.a.useMemo((function(){return Object(je.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(L.jsxs)(be.a,{theme:i,children:[Object(L.jsx)(fe.a,{}),n]})},xe=t(172),pe=t(175),ve=t(173),Oe=function(){var e=Object(O.useState)(0),n=Object(F.a)(e,2),t=n[0],i=n[1];return Object(L.jsx)(xe.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(L.jsxs)(pe.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(L.jsx)(ve.a,{label:"Home",index:0,component:k.b,to:"/"}),Object(L.jsx)(ve.a,{label:"Favorites",index:1,component:k.b,to:"/favorites"})]})})},me=function(){return Object(L.jsx)(he,{children:Object(L.jsxs)(k.a,{children:[Object(L.jsx)(Oe,{}),Object(L.jsxs)(w.c,{children:[Object(L.jsx)(w.a,{exact:!0,path:"/",component:ue}),Object(L.jsx)(w.a,{path:"/favorites",component:de})]})]})})};y.a.render(Object(L.jsx)(me,{}),document.querySelector("#root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.da513d7b.chunk.js.map