(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{517:function(e,t,n){"use strict";var r=n(3),a=n(11),o=n(4),c=n(280),i=n(449),s=n(499),l=n(460),d=n(0),u=n(488),b=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),m=n(1),f=["label","options","className","error","resetFlag","index","onChange"];function p(e){var t,n=e.label,u=e.options,p=e.className,h=e.error,j=e.resetFlag,g=e.index,v=e.onChange,x=Object(o.a)(e,f),O=Object(d.useState)(null===(t=u[g])||void 0===t?void 0:t.value),y=Object(a.a)(O,2),w=y[0],C=y[1],N=b();return Object(d.useEffect)((function(){var e;j&&C(null===(e=u[0])||void 0===e?void 0:e.value)}),[j]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(c.a,{className:"".concat(N.root," ").concat(p),variant:"filled",children:[Object(m.jsx)(i.a,{classes:{root:N.label,focused:N.labelFocus},id:n,children:n}),Object(m.jsx)(l.a,Object(r.a)(Object(r.a)({classes:{root:N.selectRoot,icon:N.selectIcon},MenuProps:{classes:{paper:N.selectMenu}},disableUnderline:!0,error:h,labelId:n,label:n,value:w,onChange:function(e){C(e.target.value),v(e)}},x),{},{children:u&&u.map((function(e,t){return Object(m.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}p.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=p},520:function(e,t,n){"use strict";var r=n(4),a=n(2),o=n(0),c=(n(7),n(6)),i=n(8),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=o.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,b=e.component,m=void 0===b?"div":b,f=e.container,p=void 0!==f&&f,h=e.direction,j=void 0===h?"row":h,g=e.item,v=void 0!==g&&g,x=e.justify,O=e.justifyContent,y=void 0===O?"flex-start":O,w=e.lg,C=void 0!==w&&w,N=e.md,S=void 0!==N&&N,k=e.sm,z=void 0!==k&&k,M=e.spacing,W=void 0===M?0:M,R=e.wrap,I=void 0===R?"wrap":R,E=e.xl,T=void 0!==E&&E,F=e.xs,P=void 0!==F&&F,L=e.zeroMinWidth,B=void 0!==L&&L,_=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(c.a)(d.root,u,p&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],v&&d.item,B&&d.zeroMinWidth,"row"!==j&&d["direction-xs-".concat(String(j))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==(x||y)&&d["justify-content-xs-".concat(String(x||y))],!1!==P&&d["grid-xs-".concat(String(P))],!1!==z&&d["grid-sm-".concat(String(z))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==T&&d["grid-xl-".concat(String(T))]);return o.createElement(m,Object(a.a)({className:D,ref:t},_))})),b=Object(i.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=b},531:function(e,t,n){"use strict";var r=n(11),a=n(0),o=n(488),c=Object(o.a)((function(){return{root:{border:"solid 1px var(--secondary-color)",padding:"0.4rem 0.8rem",width:"max-content",borderRadius:"25px",transition:"all 0.25s","&.active":{backgroundColor:"var(--secondary-color)"},"&:hover, &:active":{filter:"brightness(0.85)"}},icon:{borderRadius:"50%",width:"2.8rem",height:"2.8rem",marginRight:"0.5rem"},text:{color:"var(--text-color)",fontWeight:500,fontSize:"1.4rem",paddingLeft:"0.4rem",paddingRight:"0.8rem"}}})),i=n(1);function s(e){var t=e.title,n=e.iconSrc,o=e.id,s=e.onChange,l=c(),d=Object(a.useState)(!1),u=Object(r.a)(d,2),b=u[0],m=u[1];return Object(a.useEffect)((function(){m(!1)}),[]),Object(i.jsxs)("div",{className:"".concat(l.root," flex-center--ver cur-pointer ").concat(b?"active":""),onClick:function(){s(o,!b),m(!b)},children:[n&&Object(i.jsx)("img",{className:l.icon,src:n,alt:"icon"}),Object(i.jsx)("span",{className:l.text,children:t})]})}s.defaultProps={id:"",iconSrc:null,title:"Title",onChange:function(){},resetFlag:0};t.a=s},535:function(e,t,n){"use strict";var r=n(11),a=n(503),o=n(496),c=n(520),i=n(553),s=n.n(i),l=n(541),d=n.n(l),u=n(531),b=n(527),m=n(0),f=n(488),p=Object(f.a)((function(){return{button:{backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize",minHeight:"5.6rem","&:hover, &:active":{opacity:.85}},tagsWrap:{paddingTop:"0 !important",paddingBottom:"0 !important"},tags:{display:"flex",flexWrap:"wrap",padding:"2.4rem 1.2rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","& > *":{margin:"0.8rem"}}}})),h=n(1);function j(e){var t=e.onChange,n=e.buttonTitle,i=e.topicList,l=e.buttonWrapper,b=e.tagsWrapper,f=p(),j=Object(m.useState)(!1),g=Object(r.a)(j,2),v=g[0],x=g[1],O=Object(m.useRef)([]),y=l||c.a,w=b||c.a,C=function(e,n){n?O.current.push(e):O.current=O.current.filter((function(t){return t!==e})),t(O.current)};return Object(m.useEffect)((function(){O.current=[]}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{children:Object(h.jsx)(a.a,{color:"secondary",variant:"contained",endIcon:v?Object(h.jsx)(s.a,{}):Object(h.jsx)(d.a,{}),className:"".concat(f.button," w-100 h-100"),onClick:function(){return x(!v)},children:n})}),Object(h.jsx)(w,{className:v?"":f.tagsWrap,children:Object(h.jsx)(o.a,{in:v,children:Object(h.jsx)("div",{className:f.tags,children:i.map((function(e,t){return Object(h.jsx)(u.a,{iconSrc:e.icon,title:e.title,id:e.key,onChange:C},t)}))})})})]})}j.defaultProps={onChange:function(){},resetFlag:0,buttonTitle:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1",topicList:b.a};t.a=j},541:function(e,t,n){"use strict";var r=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(34)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},546:function(e,t,n){"use strict";var r=n(11),a=n(0),o=n(1);function c(e){var t=e.className,n=e.onTouchAnchor,c=e.threshold,i=Object(a.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&n()}),{threshold:c})),s=Object(a.useState)(null),l=Object(r.a)(s,2),d=l[0],u=l[1];return Object(a.useEffect)((function(){var e=d,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[d]),Object(o.jsx)("div",{className:t,ref:u,children:e.children})}c.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=c},549:function(e,t,n){"use strict";var r=n(451),a=n(183),o=n.n(a),c=n(594),i=n(5),s=n(527),l=n(29),d=(n(0),n(531)),u=n(10),b=n(488),m=Object(b.a)((function(e){var t;return{root:{backgroundColor:"rgba(0,0,0,0.5)"},paper:(t={maxWidth:350,width:"100%",backgroundColor:"var(--bg-color-sec)",padding:"2.4rem 3.2rem"},Object(u.a)(t,e.breakpoints.up("sm"),{maxWidth:480}),Object(u.a)(t,e.breakpoints.up("md"),{maxWidth:678}),Object(u.a)(t,"maxHeight","85vh"),t),title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.2rem",wordSpacing:1.5,fontWeight:500},content:{display:"grid",gridTemplateColumns:"1fr",gap:"0.8rem","& *":{fontSize:"1.6rem",lineHeight:1.5,letterSpacing:"0.5px",color:"var(--text-color)"}},closeIcon:{fontSize:"3.2rem",color:"var(--title-color)",transition:"all 0.5s","&:hover, &:active":{transform:"rotate(360deg)"}},label:{color:"var(--label-color)",textDecoration:"underline",fontSize:"1.7rem"},picture:{width:"5.6rem",height:"5.6rem"},word:{fontSize:"2rem",color:"var(--secondary-color)",fontWeight:"bold"},type:{fontWeight:500},mean:{color:"var(--text-color)"},phonetic:{fontSize:"1.7rem",color:"var(--phonetic-color)"},topics:{margin:"0 -0.4rem","& > *":{margin:"0.4rem"}}}})),f=n(1);function p(e){var t=[];return e.forEach((function(e){t.push(s.a.find((function(t){return t.key===e})))})),t}function h(e){var t,n=e.picture,a=e.word,s=e.mean,u=e.phonetic,b=e.level,h=e.type,j=e.examples,g=e.specialty,v=e.synonyms,x=e.antonyms,O=e.note,y=e.topics,w=e.open,C=e.onClose,N=e.loading,S=m();return Object(f.jsxs)(r.a,{classes:{root:"".concat(S.root," flex-center"),paper:"".concat(S.paper," container")},open:w,onClose:C,anchorReference:"none",children:[Object(f.jsxs)("div",{className:"flex-center-between",children:[Object(f.jsxs)("h2",{className:S.title,children:["Chi ti\u1ebft t\u1eeb ",Object(f.jsx)("span",{className:S.wordTitle,children:'"'.concat(a,'"')})]}),Object(f.jsx)(o.a,{className:"".concat(S.closeIcon," cur-pointer"),onClick:C})]}),Object(f.jsx)("div",{className:"english-break"}),N?Object(f.jsx)(c.a,{style:{width:"100%",height:"35vh"},variant:"rect",animation:"wave"}):Object(f.jsxs)("div",{className:S.content,children:[Object(f.jsxs)("div",{className:"flex-center--ver my-4",children:[n&&""!==n&&Object(f.jsx)("img",{src:Object(l.a)(n,56,56,!0),alt:"Photo",className:"".concat(S.picture," mr-8")}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:S.word,children:[a,"\xa0",Boolean(h)&&Object(f.jsxs)("span",{className:S.type,children:["( ",h," )"]}),Object(f.jsx)("span",{className:S.mean,children:" - ".concat(s)})]}),Boolean(u)&&Object(f.jsxs)("p",{className:"".concat(S.phonetic," mt-4"),children:["/ ",u," /"]})]})]}),"0"!==b&&Object(f.jsxs)("p",{className:S.level,children:[Object(f.jsx)("b",{className:S.label,children:"C\u1ea5p \u0111\u1ed9:"}),"\xa0\xa0",b]}),j&&j.length>0&&Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{className:S.label,children:"C\xe2u v\xed d\u1ee5:"}),j.map((function(e,t){return Object(f.jsxs)("p",{children:[t+1,".\xa0",e]},t)}))]}),g&&"0"!==g&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{className:S.label,children:"Thu\u1ed9c chuy\xean ng\xe0nh:"}),"\xa0\xa0",(null===(t=i.l.find((function(e){return e.value===g})))||void 0===t?void 0:t.label)||"Kh\xf4ng"]}),y&&y.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("b",{className:S.label,children:"Ch\u1ee7 \u0111\u1ec1:"}),Object(f.jsx)("div",{className:"".concat(S.topics," d-flex flex-wrap"),children:p(y).map((function(e,t){return Object(f.jsx)(d.a,{title:e.title,iconSrc:e.icon},t)}))})]}),v&&v.length>0&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{className:S.label,children:"C\xe1c t\u1eeb \u0111\u1ed3ng ngh\u0129a:"}),"\xa0\xa0",v.join(", ")]}),x&&x.length>0&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{className:S.label,children:"C\xe1c t\u1eeb tr\xe1i ngh\u0129a:"}),"\xa0\xa0",x.join(", ")]}),O&&""!==O&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("b",{className:S.label,children:"Ghi ch\xfa:"}),Object(f.jsx)("p",{children:O.split("\n").map((function(e,t){return Object(f.jsxs)("span",{children:[e," ",Object(f.jsx)("br",{})]},t)}))})]})]})]})}h.defaultProps={examples:[],level:"",loading:!0,mean:"",note:"",onClose:function(){},open:!1,phonetic:"",picture:"",specialty:"",synonyms:[],topics:[],type:"",word:""};t.a=h},553:function(e,t,n){"use strict";var r=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(34)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=c},563:function(e,t,n){"use strict";var r=n(2),a=n(4),o=n(0),c=(n(7),n(6)),i=n(8),s=n(507),l=o.forwardRef((function(e,t){var n=e.children,i=e.classes,l=e.className,d=e.disableTypography,u=void 0!==d&&d,b=Object(a.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(r.a)({className:Object(c.a)(i.root,l),ref:t},b),u?n:o.createElement(s.a,{component:"h2",variant:"h6"},n))}));t.a=Object(i.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(l)},584:function(e,t,n){"use strict";var r=n(3),a=n(11),o=n(4),c=n(691),i=n.n(c),s=n(29),l=n(0),d=n(488),u=Object(d.a)((function(){return{root:{margin:"2.4rem 0","& input":{outline:"none",padding:"1.6rem 1.2rem",fontSize:"1.8rem",color:"var(--text-color)",background:"none",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",transition:"all 0.25s","&:focus":{borderColor:"var(--secondary-color)"}}},closeIcon:{position:"absolute",right:"1.4rem",top:"50%",transform:"translateY(-50%)",fontSize:"2.4rem",color:"var(--grey)","&:hover, &:active":{color:"var(--primary-color)"}}}})),b=n(1),m=["onSearch"],f=null;function p(e){var t=e.onSearch,n=Object(o.a)(e,m),c=u(),d=Object(l.useRef)(null),p=Object(l.useState)(!1),h=Object(a.a)(p,2),j=h[0],g=h[1];return Object(b.jsxs)("div",{className:"".concat(c.root," w-100 position-rel"),children:[Object(b.jsx)("input",Object(r.a)({placeholder:"T\xecm ki\u1ebfm ...",className:"w-100 h-100",onChange:function(e){f=Object(s.d)(f,(function(){var n=e.target.value;""!==n?!j&&g(!0):j&&g(!1),t(n)}),750)},ref:d},n)),j&&Object(b.jsx)(i.a,{className:"".concat(c.closeIcon," cur-pointer"),onClick:function(){d.current.value="",g(!1),t("")}})]})}p.defaultProps={onSearch:function(){}};t.a=p},594:function(e,t,n){"use strict";var r=n(2),a=n(4),o=n(0),c=n(6),i=(n(7),n(21)),s=n(8),l=o.forwardRef((function(e,t){var n=e.animation,i=void 0===n?"pulse":n,s=e.classes,l=e.className,d=e.component,u=void 0===d?"span":d,b=e.height,m=e.variant,f=void 0===m?"text":m,p=e.width,h=Object(a.a)(e,["animation","classes","className","component","height","variant","width"]),j=Boolean(h.children);return o.createElement(u,Object(r.a)({ref:t,className:Object(c.a)(s.root,s[f],l,j&&[s.withChildren,!p&&s.fitContent,!b&&s.heightAuto],!1!==i&&s[i])},h,{style:Object(r.a)({width:p,height:b},h.style)}))}));t.a=Object(s.a)((function(e){return{root:{display:"block",backgroundColor:Object(i.a)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(l)},691:function(e,t,n){"use strict";var r=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(34)).default)(o.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOffOutlined");t.default=c}}]);
//# sourceMappingURL=3.d5378ba3.chunk.js.map