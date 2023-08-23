(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[32],{524:function(e,t,n){"use strict";var c=n(3),a=n(28),r=n.n(a),i="/api/listening",s={getListening:function(e){return r.a.get("".concat(i,"/get-listening/").concat(e))},getListenByTopic:function(e,t){return r.a.get("".concat(i,"/get-listen-by-topic"),{params:{topic:e,type:t}})},getListenById:function(e){return r.a.get("".concat(i,"/get-listen-by-id/").concat(e))},getListenTopics:function(e,t){return r.a.get("".concat(i,"/get-listen-topics"),{params:{topic:e,type:t}})},getAllListen:function(e){return r.a.get("".concat(i,"/get-all-listen"),{params:{type:e}})},searchListen:function(e){return r.a.get("".concat(i,"/search-listen"),{params:{name:e}})},postListen:function(e){return r.a.post("".concat(i,"/post-listen"),Object(c.a)({},e),{header:{"content-type":"multipart/form-data"}})},putListen:function(e,t){return r.a.put("".concat(i,"/put-listen/").concat(e),Object(c.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteListen:function(e){return r.a.patch("".concat(i,"/delete-listen/").concat(e))}};t.a=s},554:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var c=n(16),a=n.n(c),r=n(27),i=n(46),s=n(524),o=(n(181),function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.getListening(e);case 3:200===(c=t.sent).status?n({type:i.a.GET_LISTENING,payload:c.data}):n({type:i.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}),l=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.deleteListen(e);case 3:200===(c=t.sent).status?n({type:i.a.DELETE_LISTEN,payload:e}):n({type:i.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},605:function(e,t,n){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAMQAAP///9ZPT+aXl/TPz8sfH95vb+yvryH5BAUUAAEALAAAAAAQABAAAANCGLrc/pBAN8RsALRTimQFYCxDVhxNqQWq9YQCkbmPnAE0dJiXYtwfyA+XQTkIgswgkBQFmbel7wYIGmIbgcDYayQAADs="},606:function(e,t,n){"use strict";t.a="data:image/gif;base64,R0lGODlhEAAQAKIAAD6wPv///53XneHz4WnCab7kvlG4UXnIeSH5BAUUAAEALAAAAAAQABAAAAM+GLrMcy2qQohswpxxV96dkhFcWBhkGJxGoT6AIAmuCICYYcgnUUcCQOsQ6wwMQkCqEwQUQwPn0kiUqVbWSwIAOw=="},725:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c=n(11),a=n(3),r=n(4),i=n(0),s=n(753),o=n(726),l=n(507),u=n(602),b=n(56),d=n(599),j=n(700),p=n(699),h=n(759),f=n(512),O=n(503),x=n(19),A=n(554),g=n(20),m=n(605),w=n(606),y=n(488),v=n(1),C=["children","value","index"],E=Object(y.a)((function(e){return{tabcontents:{border:"1px solid #2eb8b8",padding:"10px",backgroundColor:"#FFF",borderRadius:"0 3px 3px 3px"}}}));function L(e){var t=e.children,n=e.value,c=e.index,i=Object(r.a)(e,C);return Object(v.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:n===c&&Object(v.jsx)(u.a,{sx:{p:3},children:Object(v.jsx)(l.a,{children:t})})}))}function k(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function S(){Object(b.a)("Listening");var e=E(),t=Object(i.useState)(1),n=Object(c.a)(t,2),r=n[0],y=n[1],C=Object(i.useState)(!1),S=Object(c.a)(C,2),T=S[0],Q=S[1],R=Object(i.useState)(!1),I=Object(c.a)(R,2),N=I[0],_=I[1],B=Object(g.i)().id,G=Object(x.c)((function(e){return e.listeningReducer})),D=G.listen,U=G.questions,F=Object(x.b)();Object(i.useEffect)((function(){return F(Object(A.b)(B),[F])}));var q=Object(i.useState)([]),Y=Object(c.a)(q,2),P=Y[0],V=(Y[1],Object(i.useState)([])),H=Object(c.a)(V,2),M=H[0],X=(H[1],Object(i.useState)(!0)),z=Object(c.a)(X,2),J=z[0],W=z[1],K=function(e,t){if(P[e])if(P[e].includes(t))for(var n=0;n<P[e].length;n++)P[e][n]==t&&P[e].splice(n,1);else P[e].push(t);else{P[e]=[],P[e].push(t)}};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(l.a,{variant:"h6",align:"center",children:D.Name}),Object(v.jsx)(l.a,{children:D.Description}),D.Video&&Object(v.jsx)("div",{children:Object(v.jsx)(d.VideoCard,{src:!0===J&&D.Video,onEnded:function(){return W(!1)}})}),Object(v.jsxs)(u.a,{sx:{width:"100%"},children:[Object(v.jsx)(u.a,{sx:{borderBottom:1,borderColor:"divider",backgroundColor:"#2eb8b8",color:"white"},children:Object(v.jsxs)(s.a,{value:r,onChange:function(e,t){y(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(v.jsx)(o.a,Object(a.a)({label:"Script"},k(0))),Object(v.jsx)(o.a,Object(a.a)({label:"Quiz"},k(1)))]})}),Object(v.jsxs)("div",{className:e.tabcontents,children:[Object(v.jsx)(L,{value:r,index:0,children:Object(v.jsx)("td",{dangerouslySetInnerHTML:{__html:D.Script}})}),Object(v.jsxs)(L,{value:r,index:1,children:[Object(v.jsx)(l.a,{variant:"h6",children:"Answer the following questions about the interview."}),U&&U.map((function(e,t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(l.a,{variant:"body2",children:[t+1,") ",e.Content,T&&1==M[t]&&Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:w.a,alt:"Correct!"})}),T&&0==M[t]&&Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:m.a,alt:"Correct!"})})]}),Object(v.jsx)(j.a,{children:e.Answers.map((function(e,n){return N&&1==e.isCorrect?Object(v.jsx)(p.a,{control:Object(v.jsx)(h.a,{color:"primary",id:"".concat(e,"-").concat(n),onClick:function(){return K(t,n)}}),label:Object(v.jsx)(l.a,{style:{color:"#008000"},children:Object(v.jsx)("strong",{children:e.content})})},n):Object(v.jsx)(p.a,{control:Object(v.jsx)(h.a,{color:"primary",id:"".concat(e,"-").concat(n),onClick:function(){return K(t,n)}}),label:e.content},n)}))})]})})),Object(v.jsx)(O.a,{color:"primary",onClick:function(){return function(){if(P.length>0)for(var e=0;e<P.length;e++)if(P[e])if(P[e].length>0){for(var t=0,n=0;n<U[e].Answers.length;n++)1==U[e].Answers[n].isCorrect&&(t+=1),console.log(P[e]);if(t==P[e].length){M[e]=!0;for(var c=0;c<P[e].length;c++)0==U[e].Answers[P[e][c]].isCorrect&&(M[e]=!1)}else M[e]=!1}else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();else window.confirm("Ch\u1ecdn \u0111\xe1p \xe1n cho t\u1ea5t c\u1ea3 c\xe2u h\u1ecfi.")&&window.close();Q(!0),_(!0)}()},children:"Check Answers"}),Object(v.jsx)(O.a,{color:"primary",onClick:function(){window.confirm("Do you want reload page again?")&&window.location.reload()},children:"Reset Quiz"}),Object(v.jsx)(O.a,{color:"primary",onClick:function(){_(!0)},children:"Show Answers"})]})]})]})]})})}}}]);
//# sourceMappingURL=32.4e90a25f.chunk.js.map