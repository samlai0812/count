(this["webpackJsonpcount-functional"]=this["webpackJsonpcount-functional"]||[]).push([[0],{73:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(9),s=t.n(i),r=t(120),l=t(119),j=t(54),u=t(104),o=t(107),b=t(109),d=t(122),h=t(110),O=t(111),p=t(5),x=Object(u.a)((function(e){return{root:{display:"flex"},appbar:{},toolbar:e.mixins.toolbar,title:{marginLeft:e.spacing(2),flexGrow:1},avatar:{marginRight:e.spacing(1)},page:{backgroundColor:"#f9f9f9",width:"100%",padding:e.spacing(1)}}}));function v(e){var a=e.children,t=x();return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsx)(o.a,{className:t.appbar,children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.a,{src:"logo.svg",className:t.avatar}),Object(p.jsx)(h.a,{className:t.title,children:"React functional components and Material UI"}),Object(p.jsx)(h.a,{children:"Sam Lai"})]})}),Object(p.jsx)(O.a,{children:Object(p.jsxs)("div",{className:t.page,children:[Object(p.jsx)("div",{className:t.toolbar}),a]})})]})}var f=t(43),g=t.n(f),m=t(53),N=t(18),C=t(22),R=t.n(C),k=t(75),w=t(121),y=t(123),S=t(112),A=Object(u.a)((function(e){return{paper:{height:"100%",padding:e.spacing(1)},select:{marginLeft:e.spacing(2)},result:{width:"50%",padding:e.spacing(1)}}})),E=[1,2,3,4,5];function F(){var e=A(),a=c.a.useState(0),t=Object(N.a)(a,2),i=t[0],s=t[1],r=c.a.useState(0),l=Object(N.a)(r,2),j=l[0],u=l[1],o=Object(n.useRef)();Object(n.useEffect)((function(){R.a.publish("count Change",i)}),[i]);var b=function(){s(i+o.current.value)},d=function(){var e=Object(m.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout((function(){b(),clearTimeout(a)}),800);case 2:a=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return R.a.subscribe("personChange",(function(e,a){u(a)})),Object(p.jsxs)(k.a,{elevation:2,className:e.paper,children:[Object(p.jsx)(k.a,{elevation:0,className:e.paper,children:Object(p.jsx)(h.a,{variant:"h4",align:"center",children:"\u6211\u662fCount\u7d44\u4ef6"})}),Object(p.jsxs)(k.a,{elevation:0,className:e.paper,children:["\xa0\xa0\xa0",Object(p.jsx)(w.a,{className:e.select,select:!0,label:"Number",defaultValue:1,inputRef:o,variant:"outlined",children:E.map((function(e){return Object(p.jsx)(y.a,{value:e,children:e},e)}))}),"\xa0\xa0\xa0\xa0",Object(p.jsx)(S.a,{variant:"contained",onClick:b,children:"\u52a0"}),Object(p.jsx)(S.a,{variant:"contained",onClick:function(){s(i-o.current.value)},children:"\u6e1b"}),Object(p.jsx)(S.a,{variant:"contained",onClick:function(){i%2!==0&&b()},children:"\u5947\u6578\uff1a\u52a0"}),Object(p.jsx)(S.a,{variant:"contained",onClick:d,children:"\u7570\u6b65\uff1a\u52a0"})]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(k.a,{elevation:0,className:e.result,children:Object(p.jsxs)(h.a,{variant:"h4",children:["Count :",i]})}),Object(p.jsx)(k.a,{elevation:0,className:e.result,children:Object(p.jsxs)(h.a,{variant:"h4",children:["\u4e0b\u65b9\u7d44\u4ef6\u4eba\u6578\u70ba : ",j]})})]})]})}var L=t(44),B=t(113),I=t(114),J=t(115),M=t(116),T=t(117),V=t(118),D=Object(u.a)((function(e){return{paper:{height:"100%",padding:e.spacing(1)},button:{height:55,marginRight:e.spacing(2)},textField:{height:55,marginRight:e.spacing(2)},result:{width:"50%",padding:e.spacing(1)}}}));function G(){var e=D(),a=Object(n.useState)(0),t=Object(N.a)(a,2),c=t[0],i=t[1],s=Object(n.useState)([]),r=Object(N.a)(s,2),l=r[0],j=r[1],u=Object(n.useState)(0),o=Object(N.a)(u,2),b=o[0],d=o[1],O=Object(n.useRef)(),x=Object(n.useRef)();Object(n.useEffect)((function(){R.a.publish("personChange",c)}),[c]);var v={name:"",age:0};return R.a.subscribe("count Change",(function(e,a){d(1*a)})),Object(p.jsxs)(k.a,{elevation:2,className:e.paper,children:[Object(p.jsx)(k.a,{elevation:0,className:e.paper,children:Object(p.jsx)(h.a,{variant:"h4",align:"center",children:"\u6211\u662fPerson\u7d44\u4ef6"})}),Object(p.jsx)(k.a,{elevation:0,className:e.paper,children:Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(w.a,{variant:"outlined",label:"Name",placeholder:"Name",inputRef:O,className:e.textField}),Object(p.jsx)(w.a,{variant:"outlined",label:"Age",placeholder:"Age",inputRef:x,className:e.textField}),Object(p.jsx)(S.a,{type:"submit",variant:"contained",className:e.button,onClick:function(e){e.preventDefault(),v.name=O.current.value,v.age=x.current.value;var a=[].concat(Object(L.a)(l),[v]),t=[].concat(Object(L.a)(l),[v]).length;i(t),j(a),O.current.value="",x.current.value=""},children:"Submit"})]})}),Object(p.jsx)(B.a,{children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(J.a,{children:Object(p.jsxs)(M.a,{children:[Object(p.jsx)(T.a,{children:"Name"}),Object(p.jsx)(T.a,{children:"Age"})]})}),Object(p.jsx)(V.a,{children:l.map((function(e){return Object(p.jsxs)(M.a,{children:[Object(p.jsx)(T.a,{children:e.name}),Object(p.jsx)(T.a,{children:e.age})]},e.name)}))})]})}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(k.a,{elevation:0,className:e.result,children:Object(p.jsxs)(h.a,{variant:"h4",children:["\u7e3d\u4eba\u6578 : ",c]})}),Object(p.jsx)(k.a,{elevation:0,className:e.result,children:Object(p.jsxs)(h.a,{variant:"h4",children:["\u4e0a\u65b9\u7d44\u4ef6Count\u70ba : ",b]})})]})]})}var P=Object(j.a)({overrides:{MuiButton:{contained:{height:55,marginRight:20}}}});function U(){return Object(p.jsxs)(l.a,{theme:P,children:[Object(p.jsx)(r.a,{}),Object(p.jsxs)(v,{children:[Object(p.jsx)(F,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(G,{})]})]})}s.a.render(Object(p.jsx)(U,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.22d93eb9.chunk.js.map