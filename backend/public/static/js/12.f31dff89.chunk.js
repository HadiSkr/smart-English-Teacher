(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{507:function(e,t,a){"use strict";var r=a(4),n=a(11),c=a(3),o=a(270),i=a(439),s=a(488),l=a(450),d=a(0),u=a(477),b=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),m=a(2),j=["label","options","className","error","resetFlag","index","onChange"];function h(e){var t,a=e.label,u=e.options,h=e.className,p=e.error,f=e.resetFlag,v=e.index,O=e.onChange,g=Object(c.a)(e,j),x=Object(d.useState)(null===(t=u[v])||void 0===t?void 0:t.value),y=Object(n.a)(x,2),N=y[0],C=y[1],w=b();return Object(d.useEffect)((function(){var e;f&&C(null===(e=u[0])||void 0===e?void 0:e.value)}),[f]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{className:"".concat(w.root," ").concat(h),variant:"filled",children:[Object(m.jsx)(i.a,{classes:{root:w.label,focused:w.labelFocus},id:a,children:a}),Object(m.jsx)(l.a,Object(r.a)(Object(r.a)({classes:{root:w.selectRoot,icon:w.selectIcon},MenuProps:{classes:{paper:w.selectMenu}},disableUnderline:!0,error:p,labelId:a,label:a,value:N,onChange:function(e){C(e.target.value),O(e)}},g),{},{children:u&&u.map((function(e,t){return Object(m.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}h.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=h},509:function(e,t,a){"use strict";var r=a(11),n=a(0),c=a(477),o=Object(c.a)((function(){return{root:{border:"solid 1px var(--secondary-color)",padding:"0.4rem 0.8rem",width:"max-content",borderRadius:"25px",transition:"all 0.25s","&.active":{backgroundColor:"var(--secondary-color)"},"&:hover, &:active":{filter:"brightness(0.85)"}},icon:{borderRadius:"50%",width:"2.8rem",height:"2.8rem",marginRight:"0.5rem"},text:{color:"var(--text-color)",fontWeight:500,fontSize:"1.4rem",paddingLeft:"0.4rem",paddingRight:"0.8rem"}}})),i=a(2);function s(e){var t=e.title,a=e.iconSrc,c=e.id,s=e.onChange,l=o(),d=Object(n.useState)(!1),u=Object(r.a)(d,2),b=u[0],m=u[1];return Object(n.useEffect)((function(){m(!1)}),[]),Object(i.jsxs)("div",{className:"".concat(l.root," flex-center--ver cur-pointer ").concat(b?"active":""),onClick:function(){s(c,!b),m(!b)},children:[a&&Object(i.jsx)("img",{className:l.icon,src:a,alt:"icon"}),Object(i.jsx)("span",{className:l.text,children:t})]})}s.defaultProps={id:"",iconSrc:null,title:"Title",onChange:function(){},resetFlag:0};t.a=s},510:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},512:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},516:function(e,t,a){"use strict";var r=a(4),n=a(29),c=a.n(n),o="".concat("http://localhost:5000","/api/grammar"),i={getGrammar:function(e){return c.a.get("".concat(o,"/get-grammar/").concat(e))},getGrammarById:function(e){return c.a.get("".concat(o,"/get-grammar-by-id/").concat(e))},getGrammarByLevel:function(e,t){return c.a.get("".concat(o,"/get-grammar-by-level/").concat(e),{headers:{Authorization:t}})},getGrammarLevels:function(e){return c.a.get("".concat(o,"/get-grammar-levels"),{headers:{Authorization:e}})},getAllGrammar:function(e){return c.a.get("".concat(o,"/get-all-grammar"),{headers:{Authorization:e}})},postGrammar:function(e){return c.a.post("".concat(o,"/post-grammar"),Object(r.a)({},e),{header:{"content-type":"multipart/form-data"}})},putGrammar:function(e,t){return c.a.put("".concat(o,"/put-grammar/").concat(e),Object(r.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteGrammar:function(e){return c.a.delete("".concat(o,"/delete-grammar/").concat(e))},searchGrammar:function(e){return c.a.get("".concat(o,"/search-grammar"),{params:{title:e}})}};t.a=i},518:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},520:function(e,t,a){"use strict";var r=a(11),n=a(492),c=a(485),o=a(517),i=a(518),s=a.n(i),l=a(512),d=a.n(l),u=a(509),b=a(515),m=a(0),j=a(477),h=Object(j.a)((function(){return{button:{backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize",minHeight:"5.6rem","&:hover, &:active":{opacity:.85}},tagsWrap:{paddingTop:"0 !important",paddingBottom:"0 !important"},tags:{display:"flex",flexWrap:"wrap",padding:"2.4rem 1.2rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","& > *":{margin:"0.8rem"}}}})),p=a(2);function f(e){var t=e.onChange,a=e.buttonTitle,i=e.topicList,l=e.buttonWrapper,b=e.tagsWrapper,j=h(),f=Object(m.useState)(!1),v=Object(r.a)(f,2),O=v[0],g=v[1],x=Object(m.useRef)([]),y=l||o.a,N=b||o.a,C=function(e,a){a?x.current.push(e):x.current=x.current.filter((function(t){return t!==e})),t(x.current)};return Object(m.useEffect)((function(){x.current=[]}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{children:Object(p.jsx)(n.a,{color:"secondary",variant:"contained",endIcon:O?Object(p.jsx)(s.a,{}):Object(p.jsx)(d.a,{}),className:"".concat(j.button," w-100 h-100"),onClick:function(){return g(!O)},children:a})}),Object(p.jsx)(N,{className:O?"":j.tagsWrap,children:Object(p.jsx)(c.a,{in:O,children:Object(p.jsx)("div",{className:j.tags,children:i.map((function(e,t){return Object(p.jsx)(u.a,{iconSrc:e.icon,title:e.title,id:e.key,onChange:C},t)}))})})})]})}f.defaultProps={onChange:function(){},resetFlag:0,buttonTitle:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1",topicList:b.a};t.a=f},523:function(e,t,a){"use strict";var r=a(11),n=a(0),c=a(2);function o(e){var t=e.className,a=e.onTouchAnchor,o=e.threshold,i=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&a()}),{threshold:o})),s=Object(n.useState)(null),l=Object(r.a)(s,2),d=l[0],u=l[1];return Object(n.useEffect)((function(){var e=d,t=i.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[d]),Object(c.jsx)("div",{className:t,ref:u,children:e.children})}o.defaultProps={className:"",onTouchAnchor:function(){},threshold:.5},t.a=o},528:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},529:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},533:function(e,t,a){"use strict";var r=a(441),n=a(179),c=a.n(n),o=a(569),i=a(6),s=a(515),l=a(28),d=(a(0),a(509)),u=a(9),b=a(477),m=Object(b.a)((function(e){var t;return{root:{backgroundColor:"rgba(0,0,0,0.5)"},paper:(t={maxWidth:350,width:"100%",backgroundColor:"var(--bg-color-sec)",padding:"2.4rem 3.2rem"},Object(u.a)(t,e.breakpoints.up("sm"),{maxWidth:480}),Object(u.a)(t,e.breakpoints.up("md"),{maxWidth:678}),Object(u.a)(t,"maxHeight","85vh"),t),title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.2rem",wordSpacing:1.5,fontWeight:500},content:{display:"grid",gridTemplateColumns:"1fr",gap:"0.8rem","& *":{fontSize:"1.6rem",lineHeight:1.5,letterSpacing:"0.5px",color:"var(--text-color)"}},closeIcon:{fontSize:"3.2rem",color:"var(--title-color)",transition:"all 0.5s","&:hover, &:active":{transform:"rotate(360deg)"}},label:{color:"var(--label-color)",textDecoration:"underline",fontSize:"1.7rem"},picture:{width:"5.6rem",height:"5.6rem"},word:{fontSize:"2rem",color:"var(--secondary-color)",fontWeight:"bold"},type:{fontWeight:500},mean:{color:"var(--text-color)"},phonetic:{fontSize:"1.7rem",color:"var(--phonetic-color)"},topics:{margin:"0 -0.4rem","& > *":{margin:"0.4rem"}}}})),j=a(2);function h(e){var t=[];return e.forEach((function(e){t.push(s.a.find((function(t){return t.key===e})))})),t}function p(e){var t,a=e.picture,n=e.word,s=e.mean,u=e.phonetic,b=e.level,p=e.type,f=e.examples,v=e.specialty,O=e.synonyms,g=e.antonyms,x=e.note,y=e.topics,N=e.open,C=e.onClose,w=e.loading,k=m();return Object(j.jsxs)(r.a,{classes:{root:"".concat(k.root," flex-center"),paper:"".concat(k.paper," container")},open:N,onClose:C,anchorReference:"none",children:[Object(j.jsxs)("div",{className:"flex-center-between",children:[Object(j.jsxs)("h2",{className:k.title,children:["Chi ti\u1ebft t\u1eeb ",Object(j.jsx)("span",{className:k.wordTitle,children:'"'.concat(n,'"')})]}),Object(j.jsx)(c.a,{className:"".concat(k.closeIcon," cur-pointer"),onClick:C})]}),Object(j.jsx)("div",{className:"dyno-break"}),w?Object(j.jsx)(o.a,{style:{width:"100%",height:"35vh"},variant:"rect",animation:"wave"}):Object(j.jsxs)("div",{className:k.content,children:[Object(j.jsxs)("div",{className:"flex-center--ver my-4",children:[a&&""!==a&&Object(j.jsx)("img",{src:Object(l.a)(a,56,56,!0),alt:"Photo",className:"".concat(k.picture," mr-8")}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:k.word,children:[n,"\xa0",Boolean(p)&&Object(j.jsxs)("span",{className:k.type,children:["( ",p," )"]}),Object(j.jsx)("span",{className:k.mean,children:" - ".concat(s)})]}),Boolean(u)&&Object(j.jsxs)("p",{className:"".concat(k.phonetic," mt-4"),children:["/ ",u," /"]})]})]}),"0"!==b&&Object(j.jsxs)("p",{className:k.level,children:[Object(j.jsx)("b",{className:k.label,children:"C\u1ea5p \u0111\u1ed9:"}),"\xa0\xa0",b]}),f&&f.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{className:k.label,children:"C\xe2u v\xed d\u1ee5:"}),f.map((function(e,t){return Object(j.jsxs)("p",{children:[t+1,".\xa0",e]},t)}))]}),v&&"0"!==v&&Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{className:k.label,children:"Thu\u1ed9c chuy\xean ng\xe0nh:"}),"\xa0\xa0",(null===(t=i.j.find((function(e){return e.value===v})))||void 0===t?void 0:t.label)||"Kh\xf4ng"]}),y&&y.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("b",{className:k.label,children:"Ch\u1ee7 \u0111\u1ec1:"}),Object(j.jsx)("div",{className:"".concat(k.topics," d-flex flex-wrap"),children:h(y).map((function(e,t){return Object(j.jsx)(d.a,{title:e.title,iconSrc:e.icon},t)}))})]}),O&&O.length>0&&Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{className:k.label,children:"C\xe1c t\u1eeb \u0111\u1ed3ng ngh\u0129a:"}),"\xa0\xa0",O.join(", ")]}),g&&g.length>0&&Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{className:k.label,children:"C\xe1c t\u1eeb tr\xe1i ngh\u0129a:"}),"\xa0\xa0",g.join(", ")]}),x&&""!==x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("b",{className:k.label,children:"Ghi ch\xfa:"}),Object(j.jsx)("p",{children:x.split("\n").map((function(e,t){return Object(j.jsxs)("span",{children:[e," ",Object(j.jsx)("br",{})]},t)}))})]})]})]})}p.defaultProps={examples:[],level:"",loading:!0,mean:"",note:"",onClose:function(){},open:!1,phonetic:"",picture:"",specialty:"",synonyms:[],topics:[],type:"",word:""};t.a=p},536:function(e,t,a){"use strict";var r=a(1),n=a(3),c=a(0),o=(a(7),a(5)),i=a(8),s=a(496),l=c.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.disableTypography,u=void 0!==d&&d,b=Object(n.a)(e,["children","classes","className","disableTypography"]);return c.createElement("div",Object(r.a)({className:Object(o.a)(i.root,l),ref:t},b),u?a:c.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(i.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(l)},540:function(e,t,a){"use strict";var r=a(4),n=a(11),c=a(3),o=a(542),i=a.n(o),s=a(28),l=a(0),d=a(477),u=Object(d.a)((function(){return{root:{margin:"2.4rem 0","& input":{outline:"none",padding:"1.6rem 1.2rem",fontSize:"1.8rem",color:"var(--text-color)",background:"none",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",transition:"all 0.25s","&:focus":{borderColor:"var(--secondary-color)"}}},closeIcon:{position:"absolute",right:"1.4rem",top:"50%",transform:"translateY(-50%)",fontSize:"2.4rem",color:"var(--grey)","&:hover, &:active":{color:"var(--primary-color)"}}}})),b=a(2),m=["onSearch"],j=null;function h(e){var t=e.onSearch,a=Object(c.a)(e,m),o=u(),d=Object(l.useRef)(null),h=Object(l.useState)(!1),p=Object(n.a)(h,2),f=p[0],v=p[1];return Object(b.jsxs)("div",{className:"".concat(o.root," w-100 position-rel"),children:[Object(b.jsx)("input",Object(r.a)({placeholder:"T\xecm T\u1eeb ...",className:"w-100 h-100",onChange:function(e){j=Object(s.c)(j,(function(){var a=e.target.value;""!==a?!f&&v(!0):f&&v(!1),t(a)}),750)},ref:d},a)),f&&Object(b.jsx)(i.a,{className:"".concat(o.closeIcon," cur-pointer"),onClick:function(){d.current.value="",v(!1),t("")}})]})}h.defaultProps={onSearch:function(){}};t.a=h},542:function(e,t,a){"use strict";var r=a(26),n=a(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(35)).default)(c.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOffOutlined");t.default=o},543:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return l}));var r=a(16),n=a.n(r),c=a(27),o=a(53),i=a(516),s=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.getGrammar(e);case 3:200===(r=t.sent).status?a({type:o.a.GET_GRAMMAR,payload:r.data}):a({type:o.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.deleteGrammar(e);case 3:200===(r=t.sent).status?a({type:o.a.DELETE_GRAMMAR,payload:e}):a({type:o.a.SET_GRAMMAR_ERROR,payload:r.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:o.a.SET_GRAMMAR_ERROR,payload:t.t0.response.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},569:function(e,t,a){"use strict";var r=a(1),n=a(3),c=a(0),o=a(5),i=(a(7),a(20)),s=a(8),l=c.forwardRef((function(e,t){var a=e.animation,i=void 0===a?"pulse":a,s=e.classes,l=e.className,d=e.component,u=void 0===d?"span":d,b=e.height,m=e.variant,j=void 0===m?"text":m,h=e.width,p=Object(n.a)(e,["animation","classes","className","component","height","variant","width"]),f=Boolean(p.children);return c.createElement(u,Object(r.a)({ref:t,className:Object(o.a)(s.root,s[j],l,f&&[s.withChildren,!h&&s.fitContent,!b&&s.heightAuto],!1!==i&&s[i])},p,{style:Object(r.a)({width:h,height:b},p.style)}))}));t.a=Object(s.a)((function(e){return{root:{display:"block",backgroundColor:Object(i.a)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(l)},708:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return me}));var r=a(4),n=a(0),c=a(173),o=a(168),i=a(62),s=a(16),l=a.n(s),d=a(27),u=a(11),b=a(516),m=a(441),j=a(179),h=a.n(j),p=a(569),f=a(6),v=a(264),O=a(28),g=(a(509),a(9)),x=a(477),y=Object(x.a)((function(e){var t;return{root:{backgroundColor:"rgba(0,0,0,0.5)"},paper:(t={maxWidth:350,width:"100%",backgroundColor:"var(--bg-color-sec)",padding:"2.4rem 3.2rem"},Object(g.a)(t,e.breakpoints.up("sm"),{maxWidth:480}),Object(g.a)(t,e.breakpoints.up("md"),{maxWidth:678}),Object(g.a)(t,"maxHeight","85vh"),t),title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.2rem",wordSpacing:1.5,fontWeight:500},content:{display:"grid",gridTemplateColumns:"1fr",gap:"0.8rem","& *":{fontSize:"1.6rem",lineHeight:1.5,letterSpacing:"0.5px",color:"var(--text-color)"}},closeIcon:{fontSize:"3.2rem",color:"var(--title-color)",transition:"all 0.5s","&:hover, &:active":{transform:"rotate(360deg)"}},label:{color:"var(--label-color)",textDecoration:"underline",fontSize:"1.7rem"},picture:{width:"5.6rem",height:"5.6rem"},word:{fontSize:"2rem",color:"var(--secondary-color)",fontWeight:"bold"},type:{fontWeight:500},mean:{color:"var(--text-color)"},phonetic:{fontSize:"1.7rem",color:"var(--phonetic-color)"},topics:{margin:"0 -0.4rem","& > *":{margin:"0.4rem"}}}})),N=a(2);function C(e){e._id;var t=e.Image,a=e.Title,r=e.Level,n=e.Content,c=e.open,o=e.onClose,i=e.loading,s=y();return Object(N.jsxs)(m.a,{classes:{root:"".concat(s.root," flex-center"),paper:"".concat(s.paper," container")},open:c,onClose:o,anchorReference:"none",children:[Object(N.jsxs)("div",{className:"flex-center-between",children:[Object(N.jsxs)("h2",{className:s.title,children:["Chi ti\u1ebft t\u1eeb ",Object(N.jsx)("span",{className:s.wordTitle,children:'"'.concat(a,'"')})]}),Object(N.jsx)(h.a,{className:"".concat(s.closeIcon," cur-pointer"),onClick:o})]}),Object(N.jsx)("div",{className:"dyno-break"}),i?Object(N.jsx)(p.a,{style:{width:"100%",height:"35vh"},variant:"rect",animation:"wave"}):Object(N.jsx)("div",{className:s.content,children:Object(N.jsxs)("div",{className:"flex-center--ver my-4",children:[t&&""!==t&&Object(N.jsx)("img",{src:Object(O.a)(t,56,56,!0),alt:"Photo",className:"".concat(s.picture," mr-8")}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("p",{className:s.word,children:[a,"\xa0",Object(N.jsxs)("span",{className:s.mean,children:[" ",n]})]}),Boolean(r)&&Object(N.jsxs)("p",{className:"".concat(s.phonetic," mt-4"),children:["Level: ",r]})]})]})})]})}C.defaultProps={loading:!0,Content:"",onClose:function(){},open:!1,Level:"",Image:"",Title:"",_id:""};var w=C,k=a(175),S=a.n(k),R=a(540),M=a(523),z=Object(x.a)((function(e){return Object(r.a)({},Object(c.b)(e))})),T=Object(x.a)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},picture:{width:"5rem",height:"5rem"},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},type:{color:"var(--label-color)"},phonetic:{fontSize:"1.5rem",margin:"0.8rem 0"},mean:{fontSize:"1.6rem",color:"var(--text-color)",maxWidth:"80%",lineHeight:1.5}}})),A=a(533),E=a(19),W=a(48),_=a(528),P=a.n(_),L=a(529),G=a.n(L),F=a(543),I=a(22);function B(e){var t=e._id,a=e.Title,c=e.Image,o=e.Level,i=e.Content,s=T(),l=Object(O.a)(c||f.b.IMAGE_SRC,50,50,!0,!0),d=Object(I.f)();var b=Object(n.useState)({loading:!1,open:!1}),m=Object(u.a)(b,2),j=m[0],h=m[1],p=Object(E.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"".concat(s.root," flex-center-between"),children:[Object(N.jsxs)("div",{className:"w-100 flex-center--ver",onClick:function(){return e=t,void d.push("/admin/grammar/details/".concat(e));var e},children:[Object(N.jsx)("img",{className:s.picture,src:l,alt:"photo"}),Object(N.jsxs)("div",{className:"ml-8 flex-grow-1",children:[Object(N.jsx)("h3",{className:s.word,children:a}),Object(N.jsxs)("p",{className:"".concat(s.phonetic," phonetic"),children:[" Level: ",o," "]}),Object(N.jsx)("p",{className:s.mean,children:i})]})]}),Object(N.jsxs)("div",{className:"flex-center--ver",children:[Object(N.jsx)("div",{className:"mr-5",children:Object(N.jsx)(P.a,{className:"dyno-setting-icon",onClick:function(){return e=t,void d.push("/admin/grammar/edit/".concat(e));var e}})}),Object(N.jsx)(G.a,{className:"dyno-setting-icon",onClick:function(){return e=t,void(window.confirm("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ng\u1eef ph\xe1p n\xe0y?")&&(p(Object(F.a)(e)),p(Object(W.b)("Delete successfully","success")),window.location.reload()));var e}})]})]}),j.open&&Object(N.jsx)(A.a,Object(r.a)(Object(r.a)({},j),{},{onClose:function(){return h({open:!1,loading:!1})}}))]})}B.defaultProps={onShowDetail:function(){}};var D=B,H=a(180),V=a.n(H),X=a(12),J=a(492),$=a(489),K=a(491),U=a(490),Y=a(536),q=a(517),Q=a(507),Z=(a(520),Object(x.a)((function(e){return Object(r.a)({},Object(c.a)(e))}))),ee="grammarLevelPackForm";function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{value:"All",label:"All"}].concat(Object(X.a)(e))}function ae(e){var t=e.onChoose,a=e.onCancel,n=e.open,c=e.title,o=e.okBtnText,i=e.cancelBtnText,s=e.okBtnProps,l=e.cancelBtnProps,d=Z();return Object(N.jsxs)($.a,{classes:{paper:d.dialogPaper},maxWidth:"md",fullWidth:!0,disableBackdropClick:!0,open:n,children:[Object(N.jsx)(Y.a,{classes:{root:d.title},children:c}),Object(N.jsx)(U.a,{dividers:!0,classes:{dividers:d.breakLine},children:Object(N.jsx)("form",{id:ee,onSubmit:function(e){var a;e.preventDefault();var r=(null===(a=e.target.level)||void 0===a?void 0:a.value)||"-1";t({level:r})},children:Object(N.jsx)(q.a,{container:!0,spacing:3,children:Object(N.jsx)(q.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(Q.a,{label:"Level",className:"w-100",index:0,options:te(v.a),inputProps:{name:"level"}})})})})}),Object(N.jsxs)(K.a,{children:[Object(N.jsx)(J.a,Object(r.a)(Object(r.a)({onClick:a,className:"_btn _btn-stand",variant:"outlined"},l),{},{children:i})),Object(N.jsx)(J.a,Object(r.a)(Object(r.a)({autoFocus:!0,disableFocusRipple:!0,component:"button",type:"submit",form:ee,className:"_btn _btn-primary",variant:"contained"},s),{},{children:o}))]})]})}ae.defaultProps={onChoose:function(){},open:!0,title:"G\xf3i t\u1eeb v\u1ef1ng",okBtnText:"Ok",cancelBtnText:"\u0110\xf3ng",okBtnProps:{},cancelBtnProps:{}};var re=ae;function ne(e){var t=e.classNameIcon,a=e.onChoose,r=Object(n.useState)(!1),c=Object(u.a)(r,2),o=c[0],i=c[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(V.a,{className:t,onClick:function(){return i(!0)}}),o&&Object(N.jsx)(re,{open:o,onCancel:function(){return i(!1)},onChoose:function(e){a(e),i(!1)}})]})}ne.defaultProps={onChoose:function(){}};var ce=ne;var oe=function(e){var t=e.className;return Object(N.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return Object(N.jsx)(p.a,{animation:"wave",variant:"rect"},t)}))})},ie=a(510),se=a.n(ie);function le(e){var t=e.list,a=e.loading,n=e.onLoadData,c=e.more,o=e.isFirstLoad,i=e.onSettingWordPack,s=e.onSearchWord,l=z(),d=Object(I.f)();return Object(N.jsxs)("div",{className:"".concat(l.root," dyno-container"),children:[Object(N.jsxs)("div",{className:"flex-center-between",children:[Object(N.jsx)("h1",{className:"dyno-title",children:"Manage Grammar"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(se.a,{className:"dyno-setting-icon mr-5",onClick:function(){return d.push(f.e.CREATE_GRAMMAR)}}),Object(N.jsx)(ce,{onChoose:i,classNameIcon:"dyno-setting-icon"})]})]}),Object(N.jsx)("div",{className:"dyno-break"}),Object(N.jsxs)("div",{className:l.contentWrap,children:[Object(N.jsx)(R.a,{disabled:a,onSearch:s}),Object(N.jsx)("div",{className:"".concat(l.listWrap," w-100"),children:Object(N.jsx)("ul",{id:"dictionaryId",className:"".concat(l.list," flex-col w-100"),children:Object(N.jsx)(N.Fragment,{children:o?Object(N.jsx)(oe,{className:l.skeleton}):Object(N.jsx)(N.Fragment,{children:t&&t.length>0?Object(N.jsxs)(N.Fragment,{children:[t.map((function(e,t){return Object(N.jsx)("li",{className:l.listItem,children:Object(N.jsx)(D,Object(r.a)({},e))},t)})),!a&&c&&Object(N.jsx)(M.a,{onTouchAnchor:n,threshold:1,children:Object(N.jsx)("div",{className:"w-100 t-center",children:Object(N.jsx)(S.a,{className:"ani-spin"})})})]}):Object(N.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"No result."})})})})})]})]})}le.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){}};var de=le;var ue=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)((function(){return{level:"All"}})),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!0),j=Object(u.a)(m,2),h=j[0],p=j[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),g=v[0],x=v[1],y=Object(n.useState)(!0),C=Object(u.a)(y,2),k=C[0],S=C[1],R=Object(n.useState)(!0),M=Object(u.a)(R,2),z=M[0],T=M[1],A=Object(n.useRef)(0),E=Object(n.useRef)([]),W=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t){e.next=5;break}return x(E.current),S(!0),e.abrupt("return");case 5:return e.next=7,b.a.searchGrammar(t);case 7:a=e.sent,console.log(a.data),200===a.status&&(x(a.data),S(!1)),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=!0;return Object(d.a)(l.a.mark((function t(){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(i),p(!0),a=null,"All"!==i.level){t.next=10;break}return t.next=7,b.a.getAllGrammar();case 7:a=t.sent,t.next=13;break;case 10:return t.next=12,b.a.getGrammarByLevel(i.level);case 12:a=t.sent;case 13:a&&e&&(r=a.data.grammars,console.log(a.data.grammars),E.current=r,x(r)),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(0);case 18:return t.prev=18,e&&(p(!1),z&&T(!1)),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,16,18,21]])})))(),function(){return e=!1}}),[a,i]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(de,{list:g,loading:h,onLoadData:function(){a<A.current?r(a+1):S(!1)},more:k,isFirstLoad:z,onSettingWordPack:function(e){var t=!0;"level"!==i&&i.level!==e.level&&(t=!1),t&&(t=Object(O.d)(i.level,e.level)),A.current=0,E.current=[],S(!0),x([]),s(e),r(1)},onSearchWord:W}),Object(N.jsx)(w,{})]})},be=Object(o.a)((function(e){return Object(r.a)({},Object(c.b)(e))}));function me(){Object(i.a)("Grammar Admin");be();return Object(N.jsx)("div",{className:"container",children:Object(N.jsx)(ue,{})})}}}]);
//# sourceMappingURL=12.f31dff89.chunk.js.map