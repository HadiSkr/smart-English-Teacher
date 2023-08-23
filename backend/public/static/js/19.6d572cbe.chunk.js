(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{521:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},524:function(e,t,n){"use strict";var c=n(3),a=n(28),r=n.n(a),o="/api/listening",s={getListening:function(e){return r.a.get("".concat(o,"/get-listening/").concat(e))},getListenByTopic:function(e,t){return r.a.get("".concat(o,"/get-listen-by-topic"),{params:{topic:e,type:t}})},getListenById:function(e){return r.a.get("".concat(o,"/get-listen-by-id/").concat(e))},getListenTopics:function(e,t){return r.a.get("".concat(o,"/get-listen-topics"),{params:{topic:e,type:t}})},getAllListen:function(e){return r.a.get("".concat(o,"/get-all-listen"),{params:{type:e}})},searchListen:function(e){return r.a.get("".concat(o,"/search-listen"),{params:{name:e}})},postListen:function(e){return r.a.post("".concat(o,"/post-listen"),Object(c.a)({},e),{header:{"content-type":"multipart/form-data"}})},putListen:function(e,t){return r.a.put("".concat(o,"/put-listen/").concat(e),Object(c.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteListen:function(e){return r.a.patch("".concat(o,"/delete-listen/").concat(e))}};t.a=s},526:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},528:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},554:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var c=n(16),a=n.n(c),r=n(27),o=n(46),s=n(524),i=(n(181),function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.getListening(e);case 3:200===(c=t.sent).status?n({type:o.a.GET_LISTENING,payload:c.data}):n({type:o.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:o.a.SET_LISTEN_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}),l=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.deleteListen(e);case 3:200===(c=t.sent).status?n({type:o.a.DELETE_LISTEN,payload:e}):n({type:o.a.SET_LISTEN_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:o.a.SET_LISTEN_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},565:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=o},566:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=o},596:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,c(n(34)).default)(r.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.default=o},618:function(e,t,n){"use strict";var c=n(451),a=n(183),r=n.n(a),o=n(594),s=(n(5),n(527),n(29)),i=(n(0),n(531),n(10)),l=n(488),u=Object(l.a)((function(e){var t;return{root:{backgroundColor:"rgba(0,0,0,0.5)"},paper:(t={maxWidth:350,width:"100%",backgroundColor:"var(--bg-color-sec)",padding:"2.4rem 3.2rem"},Object(i.a)(t,e.breakpoints.up("sm"),{maxWidth:480}),Object(i.a)(t,e.breakpoints.up("md"),{maxWidth:678}),Object(i.a)(t,"maxHeight","85vh"),t),title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.2rem",wordSpacing:1.5,fontWeight:500},content:{display:"grid",gridTemplateColumns:"1fr",gap:"0.8rem","& *":{fontSize:"1.6rem",lineHeight:1.5,letterSpacing:"0.5px",color:"var(--text-color)"}},closeIcon:{fontSize:"3.2rem",color:"var(--title-color)",transition:"all 0.5s","&:hover, &:active":{transform:"rotate(360deg)"}},label:{color:"var(--label-color)",textDecoration:"underline",fontSize:"1.7rem"},picture:{width:"5.6rem",height:"5.6rem"},word:{fontSize:"2rem",color:"var(--secondary-color)",fontWeight:"bold"},type:{fontWeight:500},mean:{color:"var(--text-color)"},phonetic:{fontSize:"1.7rem",color:"var(--phonetic-color)"},topics:{margin:"0 -0.4rem","& > *":{margin:"0.4rem"}}}})),d=n(1);function j(e){e._id;var t=e.Image,n=e.Name,a=e.Topic,i=e.CreateDate,l=e.open,j=e.onClose,p=e.loading,b=u();return Object(d.jsxs)(c.a,{classes:{root:"".concat(b.root," flex-center"),paper:"".concat(b.paper," container")},open:l,onClose:j,anchorReference:"none",children:[Object(d.jsxs)("div",{className:"flex-center-between",children:[Object(d.jsxs)("h2",{className:b.title,children:["Chi ti\u1ebft t\u1eeb ",Object(d.jsx)("span",{className:b.wordTitle,children:'"'.concat(n,'"')})]}),Object(d.jsx)(r.a,{className:"".concat(b.closeIcon," cur-pointer"),onClick:j})]}),Object(d.jsx)("div",{className:"english-break"}),p?Object(d.jsx)(o.a,{style:{width:"100%",height:"35vh"},variant:"rect",animation:"wave"}):Object(d.jsx)("div",{className:b.content,children:Object(d.jsxs)("div",{className:"flex-center--ver my-4",children:[t&&""!==t&&Object(d.jsx)("img",{src:Object(s.a)(t,56,56,!0),alt:"Photo",className:"".concat(b.picture," mr-8")}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:b.word,children:[n,"\xa0",Object(d.jsxs)("span",{className:b.mean,children:["Create Date :"," - ".concat(i)]})]}),Boolean(a)&&Object(d.jsx)("p",{className:"".concat(b.phonetic," mt-4"),children:a})]})]})})]})}j.defaultProps={loading:!0,Description:"",onClose:function(){},open:!1,Topic:"",Image:"",Name:"",_id:""};t.a=j},619:function(e,t,n){"use strict";var c=n(11),a=n(251),r=n(499),o=n(565),s=n.n(o),i=n(566),l=n.n(i),u=n(596),d=n.n(u),j=n(0),p=n(488),b=Object(p.a)((function(){return{menu:{backgroundColor:"var(--bg-color-accent)"},menuItem:{color:"var(--text-color)",fontSize:"1.6rem"}}})),m=n(1);function h(e){var t=e.classNameIcon,n=e.onSelect,o=Object(j.useState)(null),i=Object(c.a)(o,2),u=i[0],p=i[1],h=b(),f=function(e){p(null),"string"===typeof e&&n(e)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{className:t,onClick:function(e){p(e.currentTarget)}}),Object(m.jsxs)(a.a,{classes:{paper:h.menu},anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:f,children:[Object(m.jsxs)(r.a,{className:h.menuItem,onClick:function(){return f("Newest")},children:["Newest\xa0",Object(m.jsx)(s.a,{})]}),Object(m.jsxs)(r.a,{className:h.menuItem,onClick:function(){return f("Oldest")},children:["Oldest\xa0",Object(m.jsx)(l.a,{})]})]})]})}h.defaultProps={classNameIcon:"",onSelect:function(){}};t.a=h},747:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var c=n(0),a=n(56),r=n(16),o=n.n(r),s=n(27),i=n(11),l=n(524),u=n(618),d=n(29),j=n(3),p=n(178),b=n.n(p),m=n(584),h=n(546),f=n(619),v=n(488),O=n(176),x=Object(v.a)((function(e){return Object(j.a)({},Object(O.b)(e))})),g=Object(v.a)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},picture:{width:"5rem",height:"5rem"},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},type:{color:"var(--label-color)"},phonetic:{fontSize:"1.5rem",margin:"0.8rem 0"},mean:{fontSize:"1.6rem",color:"var(--text-color)",maxWidth:"80%",lineHeight:1.5}}})),N=n(549),S=n(19),y=n(48),k=n(5),w=n(528),L=n.n(w),C=n(526),T=n.n(C),_=n(554),E=n(20),I=n(1);function P(e){var t=e._id,n=e.Name,a=e.Image,r=e.Topic,o=e.CreateDate,s=g(),l=Object(d.a)(a||k.c.IMAGE_SRC,50,50,!0,!0),u=Object(E.g)();var p=Object(c.useState)({loading:!1,open:!1}),b=Object(i.a)(p,2),m=b[0],h=b[1],f=Object(S.b)();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"".concat(s.root," flex-center-between"),children:[Object(I.jsxs)("div",{className:"w-100 flex-center--ver",onClick:function(){return e=t,void u.push("/admin/listening/details/".concat(e));var e},children:[Object(I.jsx)("img",{className:s.picture,src:l,alt:""}),Object(I.jsxs)("div",{className:"ml-8 flex-grow-1",children:[Object(I.jsx)("h3",{className:s.word,children:n}),Object(I.jsxs)("p",{className:"".concat(s.phonetic," phonetic"),children:[" Topic: ",r," "]}),Object(I.jsxs)("p",{className:s.mean,children:["Create Date: ",o]})]})]}),Object(I.jsxs)("div",{className:"flex-center--ver",children:[Object(I.jsx)("div",{className:"mr-5",children:Object(I.jsx)(L.a,{className:"english-setting-icon",onClick:function(){return e=t,void u.push("/admin/listening/edit/".concat(e));var e}})}),Object(I.jsx)(T.a,{className:"english-setting-icon",onClick:function(){return e=t,void(window.confirm("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a b\xe0i vi\u1ebft n\xe0y?")&&(f(Object(_.a)(e)),f(Object(y.b)("Delete successfully","success")),u.replace(k.g.LISTENING_ADMIN)));var e}})]})]}),m.open&&Object(I.jsx)(N.a,Object(j.a)(Object(j.a)({},m),{},{onClose:function(){return h({open:!1,loading:!1})}}))]})}P.defaultProps={onShowDetail:function(){}};var z=P,D=n(187),M=n.n(D),W=n(12),B=n(503),R=n(500),A=n(502),F=n(501),H=n(563),V=n(520),G=n(517),J=(n(535),Object(v.a)((function(e){return Object(j.a)({},Object(O.a)(e))}))),Q=n(583),U="listenTopicPackForm";function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{value:"All",label:"All"}].concat(Object(W.a)(e))}function K(e){var t=e.onChoose,n=e.onCancel,c=e.open,a=e.title,r=e.okBtnText,o=e.cancelBtnText,s=e.okBtnProps,i=e.cancelBtnProps,l=J();return Object(I.jsxs)(R.a,{classes:{paper:l.dialogPaper},maxWidth:"md",fullWidth:!0,disableBackdropClick:!0,open:c,children:[Object(I.jsx)(H.a,{classes:{root:l.title},children:a}),Object(I.jsx)(F.a,{dividers:!0,classes:{dividers:l.breakLine},children:Object(I.jsx)("form",{id:U,onSubmit:function(e){var n;e.preventDefault();var c=(null===(n=e.target.topic)||void 0===n?void 0:n.value)||"-1";t({topic:c})},children:Object(I.jsx)(V.a,{container:!0,spacing:3,children:Object(I.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(G.a,{label:"Topic",className:"w-100",index:0,options:q(Q.a),inputProps:{name:"topic"}})})})})}),Object(I.jsxs)(A.a,{children:[Object(I.jsx)(B.a,Object(j.a)(Object(j.a)({onClick:n,className:"_btn _btn-stand",variant:"outlined"},i),{},{children:o})),Object(I.jsx)(B.a,Object(j.a)(Object(j.a)({autoFocus:!0,disableFocusRipple:!0,component:"button",type:"submit",form:U,className:"_btn _btn-primary",variant:"contained"},s),{},{children:r}))]})]})}K.defaultProps={onChoose:function(){},open:!0,title:"Topic",okBtnText:"Ok",cancelBtnText:"\u0110\xf3ng",okBtnProps:{},cancelBtnProps:{}};var X=K;function Y(e){var t=e.classNameIcon,n=e.onChoose,a=Object(c.useState)(!1),r=Object(i.a)(a,2),o=r[0],s=r[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(M.a,{className:t,onClick:function(){return s(!0)}}),o&&Object(I.jsx)(X,{open:o,onCancel:function(){return s(!1)},onChoose:function(e){n(e),s(!1)}})]})}Y.defaultProps={onChoose:function(){}};var Z=Y,$=n(594);var ee=function(e){var t=e.className;return Object(I.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return Object(I.jsx)($.a,{animation:"wave",variant:"rect"},t)}))})},te=n(521),ne=n.n(te);function ce(e){var t=e.list,n=e.loading,c=e.onLoadData,a=e.more,r=e.isFirstLoad,o=e.onSettingWordPack,s=e.onSortTypeChange,i=e.onSearchWord,l=x(),u=Object(E.g)();return Object(I.jsxs)("div",{className:"".concat(l.root," english-container"),children:[Object(I.jsxs)("div",{className:"flex-center-between",children:[Object(I.jsx)("h1",{className:"english-title",children:"Qu\u1ea3n l\xfd b\xe0i nghe"}),Object(I.jsxs)("div",{children:[Object(I.jsx)(ne.a,{className:"english-setting-icon mr-5",onClick:function(){return u.push(k.g.ADD_LISTEN)}}),Object(I.jsx)(f.a,{onSelect:s,classNameIcon:"english-setting-icon mr-5"}),Object(I.jsx)(Z,{onChoose:o,classNameIcon:"english-setting-icon"})]})]}),Object(I.jsx)("div",{className:"english-break"}),Object(I.jsxs)("div",{className:l.contentWrap,children:[Object(I.jsx)(m.a,{disabled:n,onSearch:i}),Object(I.jsx)("div",{className:"".concat(l.listWrap," w-100"),children:Object(I.jsx)("ul",{id:"dictionaryId",className:"".concat(l.list," flex-col w-100"),children:Object(I.jsx)(I.Fragment,{children:r?Object(I.jsx)(ee,{className:l.skeleton}):Object(I.jsx)(I.Fragment,{children:t&&t.length>0?Object(I.jsxs)(I.Fragment,{children:[t.map((function(e,t){return Object(I.jsx)("li",{className:l.listItem,children:Object(I.jsx)(z,Object(j.a)({},e))},t)})),!n&&a&&Object(I.jsx)(h.a,{onTouchAnchor:c,threshold:1,children:Object(I.jsx)("div",{className:"w-100 t-center",children:Object(I.jsx)(b.a,{className:"ani-spin"})})})]}):Object(I.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"No result."})})})})})]})]})}ce.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){},onSortTypeChange:function(){}};var ae=ce;var re=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("Newest"),j=Object(i.a)(r,2),p=j[0],b=j[1],m=Object(c.useState)((function(){return{topic:"All"}})),h=Object(i.a)(m,2),f=h[0],v=h[1],O=Object(c.useState)(!0),x=Object(i.a)(O,2),g=x[0],N=x[1],S=Object(c.useState)([]),y=Object(i.a)(S,2),k=y[0],w=y[1],L=Object(c.useState)(!0),C=Object(i.a)(L,2),T=C[0],_=C[1],E=Object(c.useState)(!0),P=Object(i.a)(E,2),z=P[0],D=P[1],M=Object(c.useRef)(0),W=Object(c.useRef)([]),B=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t){e.next=5;break}return w(W.current),_(!0),e.abrupt("return");case 5:return e.next=7,l.a.searchListen(t);case 7:200===(n=e.sent).status&&(w(n.data.listens),_(!1)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=!0;return Object(s.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,N(!0),n=null,"All"!==f.topic){t.next=9;break}return t.next=6,l.a.getAllListen(p);case 6:n=t.sent,t.next=12;break;case 9:return t.next=11,l.a.getListenByTopic(f.topic,p);case 11:n=t.sent;case 12:n&&e&&(c=n.data.listens.filter((function(e){return 0===e.isLocked})),W.current=c,w(c)),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(0);case 17:return t.prev=17,e&&(N(!1),z&&D(!1)),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,15,17,20]])})))(),function(){return e=!1}}),[n,f,p]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ae,{list:k,loading:g,onLoadData:function(){n<M.current?a(n+1):_(!1)},more:T,isFirstLoad:z,onSettingWordPack:function(e){var t=!0;"topic"!==f&&f.topic!==e.topic&&(t=!1),t&&(t=Object(d.e)(f.topic,e.topic)),M.current=0,W.current=[],_(!0),w([]),v(e),a(1)},onSortTypeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Newest";e!==p&&(W.current=[],b(e),a(1),w([]))},onSearchWord:B}),Object(I.jsx)(u.a,{})]})};function oe(){return Object(a.a)("Listening Admin"),Object(I.jsx)("div",{className:"container",children:Object(I.jsx)(re,{})})}}}]);
//# sourceMappingURL=19.6d572cbe.chunk.js.map