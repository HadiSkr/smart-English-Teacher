(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{507:function(e,t,a){"use strict";var n=a(4),r=a(11),c=a(3),o=a(270),i=a(439),s=a(488),l=a(450),d=a(0),u=a(477),b=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),j=a(2),m=["label","options","className","error","resetFlag","index","onChange"];function v(e){var t,a=e.label,u=e.options,v=e.className,x=e.error,p=e.resetFlag,f=e.index,h=e.onChange,O=Object(c.a)(e,m),g=Object(d.useState)(null===(t=u[f])||void 0===t?void 0:t.value),w=Object(r.a)(g,2),N=w[0],C=w[1],y=b();return Object(d.useEffect)((function(){var e;p&&C(null===(e=u[0])||void 0===e?void 0:e.value)}),[p]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{className:"".concat(y.root," ").concat(v),variant:"filled",children:[Object(j.jsx)(i.a,{classes:{root:y.label,focused:y.labelFocus},id:a,children:a}),Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({classes:{root:y.selectRoot,icon:y.selectIcon},MenuProps:{classes:{paper:y.selectMenu}},disableUnderline:!0,error:x,labelId:a,label:a,value:N,onChange:function(e){C(e.target.value),h(e)}},O),{},{children:u&&u.map((function(e,t){return Object(j.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}v.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=v},508:function(e,t,a){"use strict";var n=a(26),r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(35)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=o},510:function(e,t,a){"use strict";var n=a(26),r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(35)).default)(c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},511:function(e,t,a){"use strict";var n=a(26),r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(35)).default)(c.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=o},514:function(e,t,a){"use strict";var n=a(4),r=a(3),c=a(11),o=a(484),i=a(0),s=a(2),l=["children"];t.a=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),d=a[0],u=a[1],b=Object(i.useState)(-1),j=Object(c.a)(b,2),m=j[0],v=j[1],x=e.children,p=Object(r.a)(e,l);return Object(i.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&v(!0):e&&v(!1),function(){return e=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==m&&Object(s.jsx)(s.Fragment,{children:m?Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},p),{},{children:x})):Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},p),{},{open:d,onClick:function(){return u(!d)},children:x}))})})}},516:function(e,t,a){"use strict";var n=a(4),r=a(29),c=a.n(r),o="/api/grammar",i={getGrammar:function(e){return c.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(o,"/post-grammar"),Object(n.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(o,"/put-grammar/").concat(e),Object(n.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.delete("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=i},517:function(e,t,a){"use strict";var n=a(3),r=a(1),c=a(0),o=(a(7),a(5)),i=a(8),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=c.forwardRef((function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,b=e.component,j=void 0===b?"div":b,m=e.container,v=void 0!==m&&m,x=e.direction,p=void 0===x?"row":x,f=e.item,h=void 0!==f&&f,O=e.justify,g=e.justifyContent,w=void 0===g?"flex-start":g,N=e.lg,C=void 0!==N&&N,y=e.md,S=void 0!==y&&y,k=e.sm,I=void 0!==k&&k,z=e.spacing,M=void 0===z?0:z,P=e.wrap,E=void 0===P?"wrap":P,L=e.xl,W=void 0!==L&&L,T=e.xs,V=void 0!==T&&T,A=e.zeroMinWidth,B=void 0!==A&&A,F=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(d.root,u,v&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],h&&d.item,B&&d.zeroMinWidth,"row"!==p&&d["direction-xs-".concat(String(p))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==(O||w)&&d["justify-content-xs-".concat(String(O||w))],!1!==V&&d["grid-xs-".concat(String(V))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==W&&d["grid-xl-".concat(String(W))]);return c.createElement(j,Object(r.a)({className:G,ref:t},F))})),b=Object(i.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=b},519:function(e,t,a){"use strict";var n=a(26),r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(35)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=o},523:function(e,t,a){"use strict";var n=a(11),r=a(0),c=a(2);function o(e){var t=e.className,a=e.onTouchAnchor,o=e.threshold,i=Object(r.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&a()}),{threshold:o})),s=Object(r.useState)(null),l=Object(n.a)(s,2),d=l[0],u=l[1];return Object(r.useEffect)((function(){var e=d,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[d]),Object(c.jsx)("div",{className:t,ref:u,children:e.children})}o.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=o},529:function(e,t,a){"use strict";var n=a(26),r=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(35)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},536:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(7),a(5)),i=a(8),s=a(496),l=c.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.disableTypography,u=void 0!==d&&d,b=Object(r.a)(e,["children","classes","className","disableTypography"]);return c.createElement("div",Object(n.a)({className:Object(o.a)(i.root,l),ref:t},b),u?a:c.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(i.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(l)},717:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(16),c=a.n(r),o=a(27),i=a(9),s=a(11),l=a(4),d=a(3),u=a(177),b=a(492),j=a(517),m=a(175),v=a.n(m),x=a(511),p=a.n(x),f=a(508),h=a.n(f),O=a(143),g=a(507),w=a(64),N=a(93),C=a(519),y=a.n(C),S=a(514),k=a(477),I=Object(k.a)((function(){return{root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},root2:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}},root3:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}}}})),z=a(2);var M=function(e){var t=e.title,a=I();return Object(z.jsx)(S.a,{title:t,className:"cur-help",children:Object(z.jsx)(y.a,{className:a.tooltipIcon})})},P=a(575),E=a(716),L=a(693),W=a(22),T=a(19),V=a(48),A=a(28),B=a(264),F=a(489),G=a(490),R=a(536),_=a(491),D=a(510),H=a.n(D),q=a(523),U=a(516),J=a(529),$=a.n(J),K=["children","value","index"],Q=N.b().shape({Title:N.d().trim().required("Input value"),Content:N.d().required("Input value"),Level:N.d().required("Select one").oneOf(B.a.map((function(e){return e.value}))),LinkVideo:N.d(),Script:N.d()}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||""===e)return null;if(e.includes("embed"))return e;var t=e.includes("https://www.youtube.com");return t||(t=e.includes("youtu.be/"))?e:null},Y=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=0;a<t.length;a++)if(t[a].value===e)return a;return 0};function Z(e){var t=e.children,a=e.value,n=e.index,r=Object(d.a)(e,K);return Object(z.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),{},{children:a===n&&Object(z.jsx)(P.a,{sx:{p:3},children:Object(z.jsx)(j.a,{children:t})})}))}function ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function te(){var e,t,a,r,d,m,x,f=I(),N=Object(n.useState)(0),C=Object(s.a)(N,2),y=C[0],S=(C[1],Object(n.useState)(1)),k=Object(s.a)(S,2),D=k[0],J=k[1],K=Object(w.d)({resolver:Object(u.a)(Q)}),te=K.register,ae=K.handleSubmit,ne=K.formState.errors,re=Object(n.useState)(!0),ce=Object(s.a)(re,2),oe=ce[0],ie=(ce[1],Object(n.useState)(!1)),se=Object(s.a)(ie,2),le=se[0],de=se[1],ue=Object(n.useState)(!0),be=Object(s.a)(ue,2),je=be[0],me=be[1],ve=Object(n.useState)(!0),xe=Object(s.a)(ve,2),pe=xe[0],fe=(xe[1],Object(n.useState)(!1)),he=Object(s.a)(fe,2),Oe=he[0],ge=he[1],we=Object(n.useState)(!1),Ne=Object(s.a)(we,2),Ce=Ne[0],ye=Ne[1],Se=Object(n.useState)(-1),ke=Object(s.a)(Se,2),Ie=ke[0],ze=ke[1],Me=Object(n.useState)([]),Pe=Object(s.a)(Me,2),Ee=Pe[0],Le=Pe[1],We=Object(n.useState)(1),Te=Object(s.a)(We,2),Ve=Te[0],Ae=Te[1],Be=Object(n.useRef)(0),Fe=Object(n.useState)({Point:"",Examples:""}),Ge=Object(s.a)(Fe,2),Re=Ge[0],_e=Ge[1],De=function(e){var t=e.target,a=t.name,n=t.value;_e(Object(l.a)(Object(l.a)({},Re),{},Object(i.a)({},a,n)))},He=function(){ge(!1),_e({Point:"",Examples:""})},qe=Object(T.b)(),Ue=Object(W.f)(),Je="https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png",$e=Object(n.useState)(null),Ke=Object(s.a)($e,2),Qe=Ke[0],Xe=Ke[1],Ye=Object(n.useState)(Je),Ze=Object(s.a)(Ye,2),et=Ze[0],tt=Ze[1],at=Object(n.useState)(null),nt=Object(s.a)(at,2),rt=nt[0],ct=nt[1],ot=Object(n.useState)(null),it=Object(s.a)(ot,2),st=it[0],lt=it[1],dt=Object(n.useState)(""),ut=Object(s.a)(dt,2),bt=ut[0],jt=ut[1],mt=Object(W.h)().id;Object(n.useEffect)((function(){return Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.getGrammarById(mt);case 2:a=e.sent,Xe(a.data),(null===(t=a.data.Video)||void 0===t?void 0:t.includes("youtube"))&&jt(a.data.Video),tt(a.data.Image),Le(a.data.Items),lt(a.data.Audio);case 8:case"end":return e.stop()}}),e)})))(),function(){}}),[mt]);var vt=function(e){var t=e.target,a=t.name,n=t.value;Xe(Object(l.a)(Object(l.a)({},Qe),{},Object(i.a)({},a,n))),"LinkVideo"===a&&jt(n)},xt=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,r,o,i,s,l,d,u,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,de(!0),t=Qe.Title,a=Qe.Content,n=Qe.Level,r=Qe.Script,o=Qe.Video,i=[],s=null,null!==rt){e.next=20;break}if(console.log(rt),console.log(bt),null!=bt&&""!==bt.trim()){e.next=12;break}s=o,e.next=17;break;case 12:if(null!=(s=X(bt))){e.next=17;break}return qe(Object(V.b)("Link video is invalid.","warning")),de(!1),e.abrupt("return");case 17:i={Title:t,Content:a,Level:n,Script:r,Items:Ee,Image:et,Video:s,Audio:st},e.next=21;break;case 20:i={Title:t,Content:a,Level:n,Script:r,Items:Ee,Image:et,Video:rt,Audio:st};case 21:return e.next=23,U.a.putGrammar(Qe._id,i);case 23:l=e.sent,console.log(l.status),200===l.status&&(qe(Object(V.b)("Update grammar successfully","success")),de(!1)),e.next=33;break;case 28:e.prev=28,e.t0=e.catch(0),b=(null===(d=e.t0.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.message)||"Error, can not update grammar.",qe(Object(V.b)(b,"error")),de(!1);case 33:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{className:f.title,children:"Creat new grammar in system"}),Object(z.jsx)("div",{className:"dyno-break"}),Qe&&Object(z.jsxs)("form",{onSubmit:ae(xt),autoComplete:"off",children:[Object(z.jsx)(j.a,{container:!0,alignContent:"center",children:Object(z.jsxs)("div",{className:f.avtWrap,children:[Object(z.jsx)("img",{src:et||Je,alt:"",className:"".concat(f.avt," w-100 h-100")}),Object(z.jsx)("div",{className:"".concat(f.cameraIconWrap," flex-center"),children:Object(z.jsx)("input",{type:"file",className:f.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(V.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(V.b)("Size too large","error")),Object(A.b)(t).then((function(e){tt(e)}))}catch(a){throw a}},accept:"image/*"})})]})}),Object(z.jsxs)(j.a,{className:f.grid,container:!0,spacing:3,children:[Object(z.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Title (*)",error:Boolean(ne.Title),value:Qe.Title,inputProps:Object(l.a)({autoFocus:!0,name:"Title"},te("Title")),onChange:vt}),ne.Title&&Object(z.jsx)("p",{className:"text-error",children:null===(e=ne.Title)||void 0===e?void 0:e.message})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Content (*)",error:Boolean(ne.Content),value:Qe.Content,inputProps:Object(l.a)({name:"Content"},te("Content")),onChange:vt}),ne.Content&&Object(z.jsx)("p",{className:"text-error",children:null===(t=ne.Content)||void 0===t?void 0:t.message})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(z.jsx)(g.a,{className:"w-100",label:"Level (*)",options:B.a,error:Boolean(ne.Level),resetFlag:y,index:Y(Qe.Level,B.a),inputProps:Object(l.a)({name:"Level"},te("Level")),onChange:vt}),ne.Level&&Object(z.jsx)("p",{className:"text-error",children:null===(a=ne.Level)||void 0===a?void 0:a.message})]}),Object(z.jsxs)(P.a,{sx:{width:"100%"},children:[Object(z.jsx)(P.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(z.jsxs)(E.a,{value:D,onChange:function(e,t){J(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(z.jsx)(L.a,Object(l.a)({label:"Upload"},ee(0))),Object(z.jsx)(L.a,Object(l.a)({label:"Link"},ee(1))),Object(z.jsx)(L.a,Object(l.a)({label:"Audio"},ee(2)))]})}),Object(z.jsx)(Z,{value:D,index:0,children:Object(z.jsx)(j.a,{item:!0,xs:6,children:Object(z.jsx)(j.a,{container:!0,alignContent:"center",children:Object(z.jsx)("div",{className:f.avtWrap,children:Object(z.jsx)("div",{className:"".concat(f.cameraIconWrap," flex-center"),children:Object(z.jsx)("input",{type:"file",className:f.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(V.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(V.b)("Size too large","error")),Object(A.b)(t).then((function(e){ct(e)}))}catch(a){throw a}},accept:"video/*"})})})})})}),Object(z.jsx)(Z,{value:D,index:1,children:Object(z.jsxs)(j.a,{item:!0,xs:6,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Link Video",multiline:!0,value:bt,endAdornment:Object(z.jsx)(M,{title:"Input link youtube"}),inputProps:Object(l.a)({name:"LinkVideo"},te("LinkVideo")),onChange:vt}),ne.Video&&Object(z.jsx)("p",{className:"text-error",children:null===(r=ne.Video)||void 0===r?void 0:r.message})]})}),Object(z.jsx)(Z,{value:D,index:2,children:Object(z.jsx)(j.a,{item:!0,xs:6,children:Object(z.jsx)(j.a,{container:!0,alignContent:"center",children:Object(z.jsx)("div",{className:f.avtWrap,children:Object(z.jsx)("div",{className:"".concat(f.cameraIconWrap," flex-center"),children:Object(z.jsx)("input",{type:"file",className:f.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||qe(Object(V.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&qe(Object(V.b)("Size too large","error")),Object(A.b)(t).then((function(e){lt(e)}))}catch(a){throw a}},accept:"audio/*"})})})})})})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Script",multiline:!0,value:Qe.Script,endAdornment:Object(z.jsx)(M,{title:"Input script for listening"}),error:Boolean(ne.Script),inputProps:Object(l.a)({name:"Script"},te("Script")),onChange:vt}),ne.Script&&Object(z.jsx)("p",{className:"text-error",children:null===(d=ne.Script)||void 0===d?void 0:d.message})]})]}),Object(z.jsxs)("div",{className:"".concat(f.root2," dyno-container"),children:[Object(z.jsxs)("div",{className:"flex-center-between",children:[Object(z.jsx)("h1",{className:"dyno-title",children:"Add Content for grammar"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(H.a,{className:"dyno-setting-icon mr-5",onClick:function(){ge(!0)}}),Object(z.jsxs)(F.a,{onClose:He,open:Oe,children:[Object(z.jsx)(R.a,{onClose:He,children:"Add point"}),Object(z.jsx)(G.a,{dividers:!0,children:Object(z.jsxs)("form",{noValidate:!0,children:[Object(z.jsxs)(j.a,{item:!0,xs:12,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Point",value:Re.Point,endAdornment:Object(z.jsx)(M,{title:"Input value"}),error:Boolean(ne.Point),inputProps:Object(l.a)({name:"Point"},te("Point")),onChange:De}),ne.Point&&Object(z.jsx)("p",{className:"text-error",children:null===(m=ne.Point)||void 0===m?void 0:m.message})]}),Object(z.jsxs)(j.a,{item:!0,xs:12,children:[Object(z.jsx)(O.a,{className:"w-100",label:"Examples",multiline:!0,value:Re.Examples,endAdornment:Object(z.jsx)(M,{title:"Input value"}),error:Boolean(ne.Examples),inputProps:Object(l.a)({name:"Examples"},te("Examples")),onChange:De}),ne.Examples&&Object(z.jsx)("p",{className:"text-error",children:null===(x=ne.Examples)||void 0===x?void 0:x.message})]})]})}),Object(z.jsxs)(_.a,{children:[Object(z.jsx)(b.a,{onClick:He,color:"primary",children:"Cancel"}),Object(z.jsx)(b.a,{onClick:function(){""!==Re.Point.trim()&&(Ce?(Ee[Ie]=Re,ye(!1),ze(-1)):Ee.push(Re)),ge(!1),_e({Point:"",Examples:""})},color:"primary",autoFocus:!0,children:"Save"})]})]})]})]}),Object(z.jsx)("div",{className:"dyno-break"}),Object(z.jsx)("div",{className:f.contentWrap,children:Object(z.jsx)("div",{className:"".concat(f.listWrap," w-100"),children:Object(z.jsx)("ul",{id:"dictionaryId",className:"".concat(f.list," flex-col w-100"),children:Object(z.jsx)(z.Fragment,{children:pe&&Object(z.jsx)(z.Fragment,{children:Ee&&Ee.length>0&&Object(z.jsxs)(z.Fragment,{children:[Ee.map((function(e,t){return Object(z.jsx)("li",{className:f.listItem,children:Object(z.jsxs)("div",{className:"".concat(f.root3," flex-center-between"),children:[Object(z.jsx)("div",{className:"w-100 flex-center--ver",onClick:function(){return function(e){_e(Ee[e]),ye(!0),ze(e),ge(!0)}(t)},children:Object(z.jsx)("div",{className:"ml-8 flex-grow-1",children:Object(z.jsx)("h3",{className:f.word,children:e.Point})})}),Object(z.jsxs)("div",{className:"flex-center--ver",children:[Object(z.jsx)("div",{className:"mr-5"}),Object(z.jsx)($.a,{className:"dyno-setting-icon",onClick:function(){return function(e){for(var t=[],a=0;a<Ee.length;a++)a!==e&&t.push(Ee[a]);Le(t)}(t)}})]})]})},t)})),!oe&&je&&Object(z.jsx)(q.a,{onTouchAnchor:function(){Ve<Be.current?Ae(Ve+1):me(!1)},threshold:1,children:Object(z.jsx)("div",{className:"w-100 t-center",children:Object(z.jsx)(v.a,{className:"ani-spin"})})})]})})})})})})]}),Object(z.jsx)("div",{className:"dyno-break"}),Object(z.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(z.jsx)(b.a,{className:"".concat(f.btn," ").concat(f.btnReset),color:"secondary",endIcon:Object(z.jsx)(p.a,{}),variant:"outlined",disabled:le,onClick:function(){return Ue.push("/admin/grammar")},children:"Cancel"}),Object(z.jsx)(b.a,{type:"submit",className:"".concat(f.btn," _btn _btn-primary"),disabled:le,endIcon:le?Object(z.jsx)(v.a,{className:"ani-spin"}):Object(z.jsx)(h.a,{}),variant:"contained",children:"Edit"})]})]})]})}te.defaultProps={onSubmitForm:function(){},submitting:!1};var ae=te,ne=Object(k.a)((function(){return{root:{margin:"3.2rem 0"}}}));t.default=function(){var e=ne();return Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("div",{className:e.root,children:Object(z.jsx)("div",{className:"ani-fade",children:Object(z.jsx)(ae,{})})})})}}}]);
//# sourceMappingURL=16.849cf572.chunk.js.map