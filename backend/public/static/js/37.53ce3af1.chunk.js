(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[37],{528:function(t,e,n){"use strict";var i=n(4),c=n(2),r=n(0),a=(n(7),n(6)),o=n(8),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=r.forwardRef((function(t,e){var n=t.alignContent,o=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,x=t.classes,d=t.className,g=t.component,f=void 0===g?"div":g,u=t.container,m=void 0!==u&&u,p=t.direction,j=void 0===p?"row":p,v=t.item,b=void 0!==v&&v,h=t.justify,w=t.justifyContent,O=void 0===w?"flex-start":w,y=t.lg,C=void 0!==y&&y,S=t.md,W=void 0!==S&&S,N=t.sm,k=void 0!==N&&N,I=t.spacing,z=void 0===I?0:I,M=t.wrap,B=void 0===M?"wrap":M,D=t.xl,G=void 0!==D&&D,E=t.xs,J=void 0!==E&&E,L=t.zeroMinWidth,R=void 0!==L&&L,T=Object(i.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(a.a)(x.root,d,m&&[x.container,0!==z&&x["spacing-xs-".concat(String(z))]],b&&x.item,R&&x.zeroMinWidth,"row"!==j&&x["direction-xs-".concat(String(j))],"wrap"!==B&&x["wrap-xs-".concat(String(B))],"stretch"!==l&&x["align-items-xs-".concat(String(l))],"stretch"!==o&&x["align-content-xs-".concat(String(o))],"flex-start"!==(h||O)&&x["justify-content-xs-".concat(String(h||O))],!1!==J&&x["grid-xs-".concat(String(J))],!1!==k&&x["grid-sm-".concat(String(k))],!1!==W&&x["grid-md-".concat(String(W))],!1!==C&&x["grid-lg-".concat(String(C))],!1!==G&&x["grid-xl-".concat(String(G))]);return r.createElement(f,Object(c.a)({className:F,ref:e},T))})),g=Object(o.a)((function(t){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(i){var c=t.spacing(i);0!==c&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(x(c,2)),width:"calc(100% + ".concat(x(c),")"),"& > $item":{padding:x(c,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var c="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:c,flexGrow:0,maxWidth:c}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=g},580:function(t,e,n){"use strict";n(0);var i=n(33),c=n(491),r=Object(c.a)((function(t){return{root:{minHeight:"130px",height:"100%",backgroundColor:"var(--bg-color-accent)",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"all 0.35s","&:hover, &:active":{backgroundColor:"var(--hover-color)"}},icon:{width:"5rem",height:"5rem",marginBottom:"12px"},title:{color:"var(--primary-color)",fontWeight:600,fontSize:"2rem",letterSpacing:"0.5px"}}})),a=n(1);e.a=function(t){var e=t.to,n=t.icon,c=t.title,o=r();return Object(a.jsxs)(i.b,{to:e,className:"".concat(o.root," flex-center--ver w-100"),children:[Object(a.jsx)("img",{className:o.icon,src:n,alt:"Icon"}),Object(a.jsx)("h3",{className:o.title,children:c})]})}},721:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var i=n(3),c=(n(0),n(585)),r=n(171),a=n(176),o=n(528),s=(n(580),n(56)),l=n(33),x=n(510),d=n(1),g=Object(r.a)((function(t){return Object(i.a)({},Object(a.b)(t))}));function f(){Object(s.a)("Listen Topic");var t=g();return Object(d.jsxs)("div",{className:"".concat(t.root," english-container"),children:[Object(d.jsx)("div",{className:"flex-center-between",children:Object(d.jsx)("h1",{className:"english-title",children:"Listening Topics"})}),Object(d.jsx)("div",{className:"english-break"}),Object(d.jsx)(o.a,{container:!0,spacing:3,children:c.a.map((function(t,e){return Object(d.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(d.jsxs)(l.b,{to:"/listening/topic/".concat(t.value),children:[Object(d.jsx)("img",{src:t.image,width:"250px",height:"150px",align:"center",alt:""}),Object(d.jsxs)(x.a,{variant:"h6",align:"center",children:[" ",t.label," "]})]})},e)}))})]})}}}]);
//# sourceMappingURL=37.53ce3af1.chunk.js.map