(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{520:function(e,t,a){"use strict";var r=a(3),n=a(11),c=a(4),o=a(279),l=a(452),i=a(502),s=a(463),d=a(0),u=a(491),b=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),j=a(1),m=["label","options","className","error","resetFlag","index","onChange"];function v(e){var t,a=e.label,u=e.options,v=e.className,h=e.error,O=e.resetFlag,p=e.index,f=e.onChange,x=Object(c.a)(e,m),g=Object(d.useState)(null===(t=u[p])||void 0===t?void 0:t.value),N=Object(n.a)(g,2),C=N[0],w=N[1],y=b();return Object(d.useEffect)((function(){var e;O&&w(null===(e=u[0])||void 0===e?void 0:e.value)}),[O]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{className:"".concat(y.root," ").concat(v),variant:"filled",children:[Object(j.jsx)(l.a,{classes:{root:y.label,focused:y.labelFocus},id:a,children:a}),Object(j.jsx)(s.a,Object(r.a)(Object(r.a)({classes:{root:y.selectRoot,icon:y.selectIcon},MenuProps:{classes:{paper:y.selectMenu}},disableUnderline:!0,error:h,labelId:a,label:a,value:C,onChange:function(e){w(e.target.value),f(e)}},x),{},{children:u&&u.map((function(e,t){return Object(j.jsx)(i.a,{value:e.value,children:e.label},t)}))}))]})})}v.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=v},521:function(e,t,a){"use strict";var r=a(3),n=a(4),c=a(11),o=a(498),l=a(0),i=a(1),s=["children"];t.a=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),d=a[0],u=a[1],b=Object(l.useState)(-1),j=Object(c.a)(b,2),m=j[0],v=j[1],h=e.children,O=Object(n.a)(e,s);return Object(l.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&v(!0):e&&v(!1),function(){return e=!1}}),[]),Object(i.jsx)(i.Fragment,{children:-1!==m&&Object(i.jsx)(i.Fragment,{children:m?Object(i.jsx)(o.a,Object(r.a)(Object(r.a)({},O),{},{children:h})):Object(i.jsx)(o.a,Object(r.a)(Object(r.a)({},O),{},{open:d,onClick:function(){return u(!d)},children:h}))})})}},522:function(e,t,a){"use strict";var r=a(26),n=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(34)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=o},523:function(e,t,a){"use strict";var r=a(26),n=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(34)).default)(c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},525:function(e,t,a){"use strict";var r=a(3),n=a(28),c=a.n(n),o="/api/grammar",l={getGrammar:function(e){return c.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(o,"/post-grammar"),Object(r.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(o,"/put-grammar/").concat(e),Object(r.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.delete("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=l},527:function(e,t,a){"use strict";var r=a(26),n=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(34)).default)(c.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=o},531:function(e,t,a){"use strict";var r=a(26),n=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(34)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},536:function(e,t,a){"use strict";var r=a(11),n=a(0),c=a(1);function o(e){var t=e.className,a=e.onTouchAnchor,o=e.threshold,l=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&a()}),{threshold:o})),i=Object(n.useState)(null),s=Object(r.a)(i,2),d=s[0],u=s[1];return Object(n.useEffect)((function(){var e=d,t=l.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[d]),Object(c.jsx)("div",{className:t,ref:u,children:e.children})}o.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=o},538:function(e,t,a){"use strict";var r=a(26),n=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(34)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=o},546:function(e,t,a){"use strict";var r=a(0),n=a(570),c=a.n(n),o=a(1),l={buttons:["source","|","bold","strikethrough","underline","italic","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","|","hr","eraser","copyformat","|","symbol","fullsize","print","about"]};t.a=function(e){var t=e.initialValue,a=e.getValue,n=Object(r.useRef)(null);return Object(o.jsx)(c.a,{ref:n,value:t,config:l,tabIndex:1,onChange:function(e){return a(e)}})}},551:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=[{value:"1",label:"Level 1",image:a.p+"static/media/Level1.43c26585.jpg"},{value:"2",label:"Level 2",image:a.p+"static/media/Level2.740c60b7.jpg"},{value:"3",label:"Level 3",image:a.p+"static/media/Level3.3f74cba2.jpg"},{value:"4",label:"Level 4",image:a.p+"static/media/Level4.183c28e0.jpg"}]},569:function(e,t,a){"use strict";var r=a(2),n=a(4),c=a(0),o=(a(7),a(6)),l=a(8),i=a(510),s=c.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,d=e.disableTypography,u=void 0!==d&&d,b=Object(n.a)(e,["children","classes","className","disableTypography"]);return c.createElement("div",Object(r.a)({className:Object(o.a)(l.root,s),ref:t},b),u?a:c.createElement(i.a,{component:"h2",variant:"h6"},a))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},742:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(16),c=a.n(n),o=a(27),l=a(10),i=a(11),s=a(3),d=a(4),u=a(180),b=a(506),j=a(528),m=a(177),v=a.n(m),h=a(527),O=a.n(h),p=a(522),f=a.n(p),x=a(145),g=a(520),N=a(64),C=a(94),w=a(538),y=a.n(w),S=a(521),k=a(491),I=Object(k.a)((function(){return{root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},root2:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}},root3:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}}}})),L=a(1);var z=function(e){var t=e.title,a=I();return Object(L.jsx)(S.a,{title:t,className:"cur-help",children:Object(L.jsx)(y.a,{className:a.tooltipIcon})})},P=a(601),V=a(739),E=a(714),M=a(20),T=a(19),A=a(48),F=a(29),R=a(551),_=a(503),B=a(504),W=a(569),G=a(505),H=a(523),D=a.n(H),q=a(536),U=a(525),J=a(531),K=a.n(J),Q=a(546),X=["children","value","index"],Y=C.b().shape({Title:C.d().trim().required("Input value"),Content:C.d().required("Input value"),Level:C.d().required("Select one").oneOf(R.a.map((function(e){return e.value}))),LinkVideo:C.d(),Script:C.d()}),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||""===e)return null;if(e.includes("embed"))return e;var t=e.includes("https://www.youtube.com");return t||(t=e.includes("youtu.be/"))?e:null},$=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=0;a<t.length;a++)if(t[a].value===e)return a;return 0};function ee(e){var t=e.children,a=e.value,r=e.index,n=Object(d.a)(e,X);return Object(L.jsx)("div",Object(s.a)(Object(s.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:a===r&&Object(L.jsx)(P.a,{sx:{p:3},children:Object(L.jsx)(j.a,{children:t})})}))}function te(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function ae(){var e,t,a,n,d,m,h=I(),p=Object(r.useState)(0),C=Object(i.a)(p,2),w=C[0],y=(C[1],Object(r.useState)(1)),S=Object(i.a)(y,2),k=S[0],H=S[1],J=Object(N.d)({resolver:Object(u.a)(Y)}),X=J.register,ae=J.handleSubmit,re=J.formState.errors,ne=Object(r.useState)(!0),ce=Object(i.a)(ne,2),oe=ce[0],le=(ce[1],Object(r.useState)(!1)),ie=Object(i.a)(le,2),se=ie[0],de=ie[1],ue=Object(r.useState)(!0),be=Object(i.a)(ue,2),je=be[0],me=be[1],ve=Object(r.useState)(!0),he=Object(i.a)(ve,2),Oe=he[0],pe=(he[1],Object(r.useState)(!1)),fe=Object(i.a)(pe,2),xe=fe[0],ge=fe[1],Ne=Object(r.useState)(!1),Ce=Object(i.a)(Ne,2),we=Ce[0],ye=Ce[1],Se=Object(r.useState)(-1),ke=Object(i.a)(Se,2),Ie=ke[0],Le=ke[1],ze=Object(r.useState)([]),Pe=Object(i.a)(ze,2),Ve=Pe[0],Ee=Pe[1],Me=Object(r.useState)(1),Te=Object(i.a)(Me,2),Ae=Te[0],Fe=Te[1],Re=Object(r.useRef)(0),_e=Object(r.useState)({Point:"",Examples:""}),Be=Object(i.a)(_e,2),We=Be[0],Ge=Be[1],He=function(e){var t=e.target,a=t.name,r=t.value;Ge(Object(s.a)(Object(s.a)({},We),{},Object(l.a)({},a,r)))},De=function(){ge(!1),Ge({Point:"",Examples:""})},qe=Object(T.b)(),Ue=Object(M.g)(),Je="https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png",Ke=Object(r.useState)(null),Qe=Object(i.a)(Ke,2),Xe=Qe[0],Ye=Qe[1],Ze=Object(r.useState)(Je),$e=Object(i.a)(Ze,2),et=$e[0],tt=$e[1],at=Object(r.useState)(null),rt=Object(i.a)(at,2),nt=rt[0],ct=rt[1],ot=Object(r.useState)(null),lt=Object(i.a)(ot,2),it=lt[0],st=lt[1],dt=Object(r.useState)(""),ut=Object(i.a)(dt,2),bt=ut[0],jt=ut[1],mt=Object(r.useState)(""),vt=Object(i.a)(mt,2),ht=vt[0],Ot=vt[1],pt=Object(M.i)().id;Object(r.useEffect)((function(){return Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.getGrammarById(pt);case 2:a=e.sent,Ye(a.data),(null===(t=a.data.Video)||void 0===t?void 0:t.includes("youtube"))&&jt(a.data.Video),Ot(a.data.Script),tt(a.data.Image),Ee(a.data.Items),st(a.data.Audio);case 9:case"end":return e.stop()}}),e)})))(),function(){}}),[pt]);var ft=function(e){var t=e.target,a=t.name,r=t.value;Ye(Object(s.a)(Object(s.a)({},Xe),{},Object(l.a)({},a,r))),"LinkVideo"===a&&jt(r)},xt=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,r,n,o,l,i,s,d,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,de(!0),t=Xe.Title,a=Xe.Content,r=Xe.Level,n=Xe.Video,!nt||!bt||""==bt.trim()){e.next=7;break}return qe(Object(A.b)("Ch\u1ecdn m\u1ed9t trong hai t\xf9y ch\u1ecdn \u0111\u1ec3 th\xeam video","warning")),de(!1),e.abrupt("return");case 7:if(o=[],l=null,null!==nt){e.next=24;break}if(console.log(nt),console.log(bt),null!=bt&&""!==bt.trim()){e.next=16;break}l=n,e.next=21;break;case 16:if(null!=(l=Z(bt))){e.next=21;break}return qe(Object(A.b)("Link video is invalid.","warning")),de(!1),e.abrupt("return");case 21:o={Title:t,Content:a,Level:r,Items:Ve,Image:et,Video:l,Audio:it,Script:ht},e.next=25;break;case 24:o={Title:t,Content:a,Level:r,Items:Ve,Image:et,Video:nt,Audio:it,Script:ht};case 25:return e.next=27,U.a.putGrammar(Xe._id,o);case 27:i=e.sent,console.log(i.status),200===i.status&&(qe(Object(A.b)("Update grammar successfully","success")),de(!1)),e.next=37;break;case 32:e.prev=32,e.t0=e.catch(0),u=(null===(s=e.t0.response)||void 0===s||null===(d=s.data)||void 0===d?void 0:d.message)||"Error, can not update grammar.",qe(Object(A.b)(u,"error")),de(!1);case 37:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{className:h.title,children:"Edit grammar in system"}),Object(L.jsx)("div",{className:"english-break"}),Xe&&Object(L.jsxs)("form",{onSubmit:ae(xt),autoComplete:"off",children:[Object(L.jsx)(j.a,{container:!0,alignContent:"center",children:Object(L.jsxs)("div",{className:h.avtWrap,children:[Object(L.jsx)("img",{src:et||Je,alt:"",className:"".concat(h.avt," w-100 h-100")}),Object(L.jsx)("div",{className:"".concat(h.cameraIconWrap," flex-center"),children:Object(L.jsx)("input",{type:"file",className:h.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(A.b)("Size too large","error")),Object(F.b)(t).then((function(e){tt(e)}))}catch(a){throw a}},accept:"image/*"})})]})}),Object(L.jsxs)(j.a,{className:h.grid,container:!0,spacing:3,children:[Object(L.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(L.jsx)(x.a,{className:"w-100",label:"Title (*)",error:Boolean(re.Title),value:Xe.Title,inputProps:Object(s.a)({autoFocus:!0,name:"Title"},X("Title")),onChange:ft}),re.Title&&Object(L.jsx)("p",{className:"text-error",children:null===(e=re.Title)||void 0===e?void 0:e.message})]}),Object(L.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(L.jsx)(x.a,{className:"w-100",label:"Content (*)",error:Boolean(re.Content),value:Xe.Content,inputProps:Object(s.a)({name:"Content"},X("Content")),onChange:ft}),re.Content&&Object(L.jsx)("p",{className:"text-error",children:null===(t=re.Content)||void 0===t?void 0:t.message})]}),Object(L.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(L.jsx)(g.a,{className:"w-100",label:"Level (*)",options:R.a,error:Boolean(re.Level),resetFlag:w,index:$(Xe.Level,R.a),inputProps:Object(s.a)({name:"Level"},X("Level")),onChange:ft}),re.Level&&Object(L.jsx)("p",{className:"text-error",children:null===(a=re.Level)||void 0===a?void 0:a.message})]}),Object(L.jsxs)(P.a,{sx:{width:"100%"},children:[Object(L.jsx)(P.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(L.jsxs)(V.a,{value:k,onChange:function(e,t){H(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(L.jsx)(E.a,Object(s.a)({label:"Upload"},te(0))),Object(L.jsx)(E.a,Object(s.a)({label:"Link"},te(1))),Object(L.jsx)(E.a,Object(s.a)({label:"Audio"},te(2)))]})}),Object(L.jsx)(ee,{value:k,index:0,children:Object(L.jsx)(j.a,{item:!0,xs:6,children:Object(L.jsx)(j.a,{container:!0,alignContent:"center",children:Object(L.jsx)("div",{className:h.avtWrap,children:Object(L.jsx)("div",{className:"".concat(h.cameraIconWrap," flex-center"),children:Object(L.jsx)("input",{type:"file",className:h.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(A.b)("Size too large","error")),Object(F.b)(t).then((function(e){ct(e)}))}catch(a){throw a}},accept:"video/*"})})})})})}),Object(L.jsx)(ee,{value:k,index:1,children:Object(L.jsxs)(j.a,{item:!0,xs:6,children:[Object(L.jsx)(x.a,{className:"w-100",label:"Link Video",multiline:!0,value:bt,endAdornment:Object(L.jsx)(z,{title:"Input link youtube"}),inputProps:Object(s.a)({name:"LinkVideo"},X("LinkVideo")),onChange:ft}),re.Video&&Object(L.jsx)("p",{className:"text-error",children:null===(n=re.Video)||void 0===n?void 0:n.message})]})}),Object(L.jsx)(ee,{value:k,index:2,children:Object(L.jsx)(j.a,{item:!0,xs:6,children:Object(L.jsx)(j.a,{container:!0,alignContent:"center",children:Object(L.jsx)("div",{className:h.avtWrap,children:Object(L.jsx)("div",{className:"".concat(h.cameraIconWrap," flex-center"),children:Object(L.jsx)("input",{type:"file",className:h.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(A.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(A.b)("Size too large","error")),Object(F.b)(t).then((function(e){st(e)}))}catch(a){throw a}},accept:"audio/*"})})})})})})]})]}),Object(L.jsx)("div",{className:"row",children:Object(L.jsxs)("div",{className:"col-md-6",style:{margin:"auto",marginTop:"50px"},children:[Object(L.jsx)("div",{style:{textAlign:"center"},children:Object(L.jsx)("h3",{children:"Rich Text Editor"})}),Object(L.jsx)(Q.a,{initialValue:ht,getValue:function(e){Ot(e)}})]})}),Object(L.jsxs)("div",{className:"".concat(h.root2," english-container"),children:[Object(L.jsxs)("div",{className:"flex-center-between",children:[Object(L.jsx)("h1",{className:"english-title",children:"Add Content for grammar"}),Object(L.jsxs)("div",{children:[Object(L.jsx)(D.a,{className:"english-setting-icon mr-5",onClick:function(){ge(!0)}}),Object(L.jsxs)(_.a,{onClose:De,open:xe,children:[Object(L.jsx)(W.a,{onClose:De,children:"Add point"}),Object(L.jsx)(B.a,{dividers:!0,children:Object(L.jsxs)("form",{noValidate:!0,children:[Object(L.jsxs)(j.a,{item:!0,xs:12,children:[Object(L.jsx)(x.a,{className:"w-100",label:"Point",value:We.Point,endAdornment:Object(L.jsx)(z,{title:"Input value"}),error:Boolean(re.Point),inputProps:Object(s.a)({name:"Point"},X("Point")),onChange:He}),re.Point&&Object(L.jsx)("p",{className:"text-error",children:null===(d=re.Point)||void 0===d?void 0:d.message})]}),Object(L.jsxs)(j.a,{item:!0,xs:12,children:[Object(L.jsx)(x.a,{className:"w-100",label:"Examples",multiline:!0,value:We.Examples,endAdornment:Object(L.jsx)(z,{title:"Input value"}),error:Boolean(re.Examples),inputProps:Object(s.a)({name:"Examples"},X("Examples")),onChange:He}),re.Examples&&Object(L.jsx)("p",{className:"text-error",children:null===(m=re.Examples)||void 0===m?void 0:m.message})]})]})}),Object(L.jsxs)(G.a,{children:[Object(L.jsx)(b.a,{onClick:De,color:"primary",children:"Cancel"}),Object(L.jsx)(b.a,{onClick:function(){""!==We.Point.trim()&&(we?(Ve[Ie]=We,ye(!1),Le(-1)):Ve.push(We)),ge(!1),Ge({Point:"",Examples:""})},color:"primary",autoFocus:!0,children:"Save"})]})]})]})]}),Object(L.jsx)("div",{className:"english-break"}),Object(L.jsx)("div",{className:h.contentWrap,children:Object(L.jsx)("div",{className:"".concat(h.listWrap," w-100"),children:Object(L.jsx)("ul",{id:"dictionaryId",className:"".concat(h.list," flex-col w-100"),children:Object(L.jsx)(L.Fragment,{children:Oe&&Object(L.jsx)(L.Fragment,{children:Ve&&Ve.length>0&&Object(L.jsxs)(L.Fragment,{children:[Ve.map((function(e,t){return Object(L.jsx)("li",{className:h.listItem,children:Object(L.jsxs)("div",{className:"".concat(h.root3," flex-center-between"),children:[Object(L.jsx)("div",{className:"w-100 flex-center--ver",onClick:function(){return function(e){Ge(Ve[e]),ye(!0),Le(e),ge(!0)}(t)},children:Object(L.jsx)("div",{className:"ml-8 flex-grow-1",children:Object(L.jsx)("h3",{className:h.word,children:e.Point})})}),Object(L.jsxs)("div",{className:"flex-center--ver",children:[Object(L.jsx)("div",{className:"mr-5"}),Object(L.jsx)(K.a,{className:"english-setting-icon",onClick:function(){return function(e){for(var t=[],a=0;a<Ve.length;a++)a!==e&&t.push(Ve[a]);Ee(t)}(t)}})]})]})},t)})),!oe&&je&&Object(L.jsx)(q.a,{onTouchAnchor:function(){Ae<Re.current?Fe(Ae+1):me(!1)},threshold:1,children:Object(L.jsx)("div",{className:"w-100 t-center",children:Object(L.jsx)(v.a,{className:"ani-spin"})})})]})})})})})})]}),Object(L.jsx)("div",{className:"english-break"}),Object(L.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(L.jsx)(b.a,{className:"".concat(h.btn," ").concat(h.btnReset),color:"secondary",endIcon:Object(L.jsx)(O.a,{}),variant:"outlined",disabled:se,onClick:function(){return Ue.push("/admin/grammar")},children:"Cancel"}),Object(L.jsx)(b.a,{type:"submit",className:"".concat(h.btn," _btn _btn-primary"),disabled:se,endIcon:se?Object(L.jsx)(v.a,{className:"ani-spin"}):Object(L.jsx)(f.a,{}),variant:"contained",children:"Edit"})]})]})]})}ae.defaultProps={onSubmitForm:function(){},submitting:!1};var re=ae,ne=Object(k.a)((function(){return{root:{margin:"3.2rem 0"}}}));t.default=function(){var e=ne();return Object(L.jsx)("div",{className:"container",children:Object(L.jsx)("div",{className:e.root,children:Object(L.jsx)("div",{className:"ani-fade",children:Object(L.jsx)(re,{})})})})}}}]);
//# sourceMappingURL=18.54979204.chunk.js.map