(this["webpackJsonpchristmas-escape"]=this["webpackJsonpchristmas-escape"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"PasswordAnswer_container__2_Zci",answerImage:"PasswordAnswer_answerImage__RkgoT",answerImageContainer:"PasswordAnswer_answerImageContainer__1eHGK",show:"PasswordAnswer_show__1egGA",hide:"PasswordAnswer_hide__1T8TE"}},21:function(e,t,n){e.exports={app:"App_app__1kX79"}},22:function(e,t,n){e.exports={bg:"EmbeddedPdf_bg__2KoSY"}},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),s=n.n(a),r=n(20),i=n.n(r),o=(n(30),n(31),n(23)),j=n(6),h=n(21),d=n.n(h),p=n(17),u=n(40),b=n(41),l=n(42),w=n.p+"static/media/PresentRoom_Hint.255899f2.png",m=n.p+"static/media/nutcracker_hint.86352619.png",x=n.p+"static/media/soul-stone-ans.5045aa56.jpg",O=n.p+"static/media/space-stone-ans.5ac285f9.jpg",g=n(11),_=n.n(g),f={present:w,nutcracker:m,soul:x,space:O},A=function(e){var t=e.stone,n=e.correctAnswer,s=e.hint,r=e.initShow,i=Object(a.useState)(""),o=Object(p.a)(i,2),j=o[0],h=o[1],d=Object(a.useState)(r),w=Object(p.a)(d,2),m=w[0],x=w[1],O=m?"".concat(_.a.answerImageContainer," ").concat(_.a.show):"".concat(_.a.answerImageContainer," ").concat(_.a.hide),g=s||"Enter Answer Here";return Object(c.jsxs)("div",{className:_.a.container,children:[Object(c.jsx)("div",{className:O,children:Object(c.jsx)(u.a,{src:f[t],fluid:!0})}),Object(c.jsx)(b.a.Group,{children:Object(c.jsx)(b.a.Control,{type:"text",placeholder:g,onChange:function(e){return h(e.target.value)},value:j})}),Object(c.jsx)(b.a.Group,{className:"d-flex justify-content-center",children:Object(c.jsx)(l.a,{variant:"primary",type:"button",onClick:function(){j===n?x(!0):alert("Your answer is incorrect. Please try again")},children:"Submit"})})]})},v=n.p+"static/media/EscapeRoomGuide.e943c9db.pdf",S=n(22),y=n.n(S),C=function(e){e.src;return Object(c.jsx)("div",{className:y.a.bg,children:Object(c.jsx)("iframe",{src:v,width:"80%",height:"80%"})})};var P=function(){return Object(c.jsx)("div",{className:d.a.app,children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/intro",children:Object(c.jsx)(C,{src:v})}),Object(c.jsx)(j.a,{path:"/soul",children:Object(c.jsx)(A,{stone:"soul",correctAnswer:"maze",hint:"where are you?",initShow:!0})}),Object(c.jsx)(j.a,{path:"/space",children:Object(c.jsx)(A,{stone:"space",correctAnswer:"maze",hint:"where are you?",initShow:!1})}),Object(c.jsx)(j.a,{path:"/nutcracker",children:Object(c.jsx)(A,{stone:"nutcracker",correctAnswer:"28",hint:"it's a number",initShow:!1})}),Object(c.jsx)(j.a,{path:"/present",children:Object(c.jsx)(A,{stone:"present",correctAnswer:"4756",hint:"it's a 4 digit number",initShow:!1})}),Object(c.jsxs)(j.a,{path:"/",children:[Object(c.jsx)("h1",{children:"Welcome to Gather Town Escape Room!"}),Object(c.jsx)("p",{children:"But sorry you are in the wrong place."})]})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.682cfb2e.chunk.js.map