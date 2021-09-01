(this["webpackJsonpfrontend-blog"]=this["webpackJsonpfrontend-blog"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var r=n(157),c=n(144),a=Object(c.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),i=n(0),s=n.n(i),l=n(42),o=n.n(l),u=n(34),j=n(7),b=n.n(j),d=n(13),h=n(3),f=n(159),x=n(156),O=n(134),p=n(145),g=n(68),v=n(2),m=function(e){var t=Object(O.b)().toggleColorMode,n=Object(O.c)("dark","light"),r=Object(O.c)(g.b,g.c);return Object(v.jsx)(p.a,Object(u.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(n," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(v.jsx)(r,{})},e))},k=n(30),w=n.n(k),y="/api/blogs",S=null,C={getAll:function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(y);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setToken:function(e){S="bearer ".concat(e)},create:function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,w.a.post(y,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.put("".concat(y,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,w.a.delete("".concat(y,"/").concat(t),n);case 3:return e.sent,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=n(149),L=n(150),B=n(151),R=n(152),I=n(89),V=n(160),z=n(147),A=n(28),E=function(e){var t=e.handleDeleteClick,n=e.blog,r=Object(i.useState)(!1),c=Object(h.a)(r,2),a=c[0],s=c[1],l=function(){return s(!1)},o=Object(i.useRef)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I.a,{colorScheme:"red",onClick:function(){return s(!0)},children:"Delete Blog"}),Object(v.jsx)(z.a,{isOpen:a,leastDestructiveRef:o,onClose:l,children:Object(v.jsx)(A.f,{children:Object(v.jsxs)(z.b,{children:[Object(v.jsx)(A.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Blog"}),Object(v.jsxs)(A.b,{children:["Delete ",n.title,"?"]}),Object(v.jsxs)(A.d,{children:[Object(v.jsx)(I.a,{ref:o,onClick:l,children:"Cancel"}),Object(v.jsx)(I.a,{colorScheme:"red",onClick:function(){return function(e,t){e(t),s(!1)}(t,n)},ml:3,children:"Delete"})]})]})})})]})},W=function(e){var t=e.label,n=e.content;return Object(v.jsx)(B.a,{children:Object(v.jsxs)(D.a,{children:[Object(v.jsxs)("b",{children:[t,": "]}),n]})})},T=function(e){var t=e.label,n=e.toggleVisibility;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(I.a,{colorScheme:"pink",px:8,alignSelf:"left",onClick:n,children:t})})},J=function(e){var t=Object(i.useState)(!1),n=Object(h.a)(t,2),r=n[0],c=n[1],a={display:r?"none":""},s={display:r?"":"none"},l=function(){c(!r)};return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:a,children:Object(v.jsxs)(f.a,{justifySelf:"left",alignItems:"left",children:[Object(v.jsx)(D.a,{children:e.blog.title}),Object(v.jsx)(L.a,{}),Object(v.jsx)(T,{label:"View",toggleVisibility:l})]})}),Object(v.jsx)("div",{style:s,children:Object(v.jsxs)(f.c,{alignItems:"left",children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(W,{label:"Title",content:e.blog.title}),Object(v.jsx)(L.a,{}),Object(v.jsx)(T,{label:"Hide",toggleVisibility:l})]}),Object(v.jsx)(W,{label:"Author",content:e.blog.author}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(B.a,{children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)("b",{children:"Likes: "}),e.blog.likes]})}),Object(v.jsx)(p.a,{"aria-label":"temp",icon:Object(v.jsx)(g.a,{}),onClick:function(){return e.increaseLikes(e.blog.id)}})]}),Object(v.jsx)(W,{label:"User",content:e.blog.user.name}),Object(v.jsx)(B.a,{children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)("b",{children:"URL: "}),Object(v.jsx)(R.a,{href:e.blog.url,isExternal:!0,children:Object(v.jsx)(V.a,{mx:"2px"})})]})}),Object(v.jsx)(B.a,{children:Object(v.jsx)(E,{blog:e.blog,handleDeleteClick:e.handleDeleteClick})})]})})]})},U=function(e){var t=e.blogs,n=e.increaseLikes,r=e.handleDeleteClick;return Object(v.jsx)(f.c,{divider:Object(v.jsx)(f.b,{}),borderColor:"gray.100",borderWidth:"2px",p:"4",borderRadius:"lg",w:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"strech",justifySelf:"center",children:t.map((function(e){return Object(v.jsx)(J,{blog:e,increaseLikes:n,handleDeleteClick:r,children:""},e.id)}))})},M={login:function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=n(153),F=function(e){var t=e.message,n=e.color;return null===t?null:Object(v.jsx)(N.a,{colorScheme:n.toString(),p:"4",m:"4",borderRadius:"lg",children:t})},G=n(154),H=n(155),P=n(158),q=function(e){var t=Object(i.useState)(""),n=Object(h.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)(""),s=Object(h.a)(a,2),l=s[0],o=s[1],u=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("logging in with",r),t.next=4,e.attemptLogin({username:r,password:l});case 4:t.sent&&(c(""),o(""));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)("form",{onSubmit:u,children:Object(v.jsxs)(f.c,{spacing:4,children:[Object(v.jsxs)(G.a,{children:[Object(v.jsx)(H.a,{children:"username:"}),Object(v.jsx)(P.a,{type:"text",value:r,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(v.jsxs)(G.a,{children:[Object(v.jsx)(H.a,{children:"password:"}),Object(v.jsx)(P.a,{type:"password",value:l,name:"Password",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(v.jsx)(I.a,{type:"submit",colorScheme:"pink",px:8,children:"login"})]})})},K=function(e){var t=e.user,n=e.handleLogout;return Object(v.jsxs)(f.a,{children:[Object(v.jsxs)(D.a,{children:[t.name," logged-in"]}),Object(v.jsx)(I.a,{colorScheme:"pink",px:8,onClick:n,children:"logout"})]})},Q=n(6),X=function(e){var t=e.createBlog,n=Object(i.useState)({title:"",author:"",url:""}),r=Object(h.a)(n,2),c=r[0],a=r[1],s=function(e){var t=e.target.value;a(Object(u.a)(Object(u.a)({},c),{},Object(Q.a)({},e.target.name,t)))},l=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({title:c.title,author:c.author,url:c.url}),a({title:"",author:"",url:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("form",{onSubmit:l,children:Object(v.jsxs)(f.c,{p:8,spacing:4,children:[Object(v.jsxs)(G.a,{children:[Object(v.jsx)(H.a,{children:"title:"}),Object(v.jsx)(P.a,{type:"text",value:c.title,variant:"filled",onChange:s,name:"title"})]}),Object(v.jsxs)(G.a,{children:[Object(v.jsx)(H.a,{children:"author:"}),Object(v.jsx)(P.a,{type:"text",value:c.author,variant:"filled",onChange:s,name:"author"})]}),Object(v.jsxs)(G.a,{children:[Object(v.jsx)(H.a,{children:"url:"}),Object(v.jsx)(P.a,{type:"text",value:c.url,variant:"filled",onChange:s,name:"url"})]}),Object(v.jsx)(I.a,{type:"submit",colorScheme:"pink",px:8,alignSelf:"left",children:"add blog"})]})})},Y=s.a.forwardRef((function(e,t){var n={display:e.visible?"none":""},r={display:e.visible?"":"none"},c=function(){e.setVisible(!e.visible)};return Object(i.useImperativeHandle)(t,(function(){return{toggleVisibility:c}})),Object(v.jsxs)(f.c,{children:[Object(v.jsx)("div",{style:n,children:Object(v.jsx)(I.a,{onClick:c,children:e.buttonLabel})}),Object(v.jsxs)("div",{style:r,align:"center",children:[e.children,Object(v.jsx)(I.a,{onClick:c,colorScheme:"pink",px:8,alignSelf:"left",children:"cancel"})]})]})})),Z=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(null),a=Object(h.a)(c,2),s=a[0],l=a[1],o=Object(i.useState)(""),j=Object(h.a)(o,2),O=j[0],p=j[1],g=Object(i.useState)("red"),k=Object(h.a)(g,2),w=k[0],y=k[1],S=Object(i.useState)(!1),D=Object(h.a)(S,2),L=D[0],B=D[1],R=Object(i.useRef)(),I="loggedBlogappUser";Object(i.useEffect)((function(){C.getAll().then((function(e){return r(e)}))}),[]),Object(i.useEffect)((function(){var e=window.localStorage.getItem(I);if(e){var t=JSON.parse(e);p(t),C.setToken(t.token)}}),[]);var V=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,e.prev=1,e.next=4,M.login({username:n,password:r});case 4:c=e.sent,window.localStorage.setItem(I,JSON.stringify(c)),p(c),C.setToken(c.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),z("Wrong Credentials","red");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){l(e),y(t),setTimeout((function(){l(null)}),5e3)},A=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},c),{},{likes:c.likes+1}),e.prev=2,e.next=5,C.update(t,a);case 5:i=e.sent,r(n.map((function(e){return e.id!==t?e:i}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),z("Error updating blog","red");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.current.toggleVisibility(),e.prev=1,e.next=4,C.create(t);case 4:return n=e.sent,e.next=7,C.getAll();case 7:c=e.sent,r(c),z("New Blog! ".concat(n.title," by ").concat(n.author," added"),"green"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),z("Cannot post blog","red");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.remove(t.id);case 3:e.sent,r(n.filter((function(e){return e.id!==t.id}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),z("Error deleting blog","red");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=n.sort((function(e,t){return t.likes-e.likes}));return""===O?Object(v.jsxs)(f.c,{spacing:4,p:8,height:"100vh",children:[Object(v.jsx)(m,{alignSelf:"flex-end",mr:"8",isRound:"true"}),Object(v.jsx)(x.a,{mb:"4",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r,pink.500,pink.300,blue.500)",bgClip:"text",children:"Blogs"}),Object(v.jsx)(F,{message:s,color:w}),Object(v.jsx)(q,{attemptLogin:V})]}):Object(v.jsxs)(f.c,{spacing:4,p:8,height:"100vh",children:[Object(v.jsx)(m,{alignSelf:"flex-end",mr:"8",isRound:"true"}),Object(v.jsx)(x.a,{mb:"4",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r,pink.500,pink.300,blue.500)",bgClip:"text",children:"Blogs"}),Object(v.jsx)(F,{message:s,color:w}),Object(v.jsx)(K,{user:O,handleLogout:function(){window.localStorage.removeItem(I),p("")}}),Object(v.jsx)(Y,{buttonLabel:"create blog",visible:L,setVisible:B,ref:R,children:Object(v.jsx)(X,{createBlog:E})}),L?"":Object(v.jsx)(U,{blogs:T,increaseLikes:A,handleDeleteClick:W})]})};o.a.render(Object(v.jsx)(r.a,{theme:a,children:Object(v.jsx)(Z,{})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.c5b3e973.chunk.js.map