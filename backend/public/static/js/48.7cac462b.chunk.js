(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[48],{524:function(t,e,n){"use strict";var c=n(3),i=n(28),a=n.n(i),s="/api/listening",r={getListening:function(t){return a.a.get("".concat(s,"/get-listening/").concat(t))},getListenByTopic:function(t,e){return a.a.get("".concat(s,"/get-listen-by-topic"),{params:{topic:t,type:e}})},getListenById:function(t){return a.a.get("".concat(s,"/get-listen-by-id/").concat(t))},getListenTopics:function(t,e){return a.a.get("".concat(s,"/get-listen-topics"),{params:{topic:t,type:e}})},getAllListen:function(t){return a.a.get("".concat(s,"/get-all-listen"),{params:{type:t}})},searchListen:function(t){return a.a.get("".concat(s,"/search-listen"),{params:{name:t}})},postListen:function(t){return a.a.post("".concat(s,"/post-listen"),Object(c.a)({},t),{header:{"content-type":"multipart/form-data"}})},putListen:function(t,e){return a.a.put("".concat(s,"/put-listen/").concat(t),Object(c.a)({},e),{params:{id:t},header:{"content-type":"multipart/form-data"}})},deleteListen:function(t){return a.a.patch("".concat(s,"/delete-listen/").concat(t))}};e.a=r},731:function(t,e,n){"use strict";n.r(e);var c=n(16),i=n.n(c),a=n(27),s=n(11),r=n(56),o=n(507),l=n(0),p=n(524),u=n(20),d=n(29),f=n(5),j=n(488),b=n(33),g=n(1),h=Object(j.a)((function(){return{mobilelist:{height:"115px"},floatleft:{float:"left",margin:"0 10px 10px 0px",padding:"2px"},title:{display:"inline-block",fontSize:"2.0rem",fontWeight:400,color:"blue",margin:"0.8rem 0rem 0rem 0","&:hover, &:focus":{color:"#CCC"}},tldetail:{fontSize:"1.5rem",fontWeight:400,color:"black"},textlimit:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"500px"}}}));e.default=function(){Object(r.a)("Listening");var t=Object(l.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],j=h(),m=(Object(u.g)(),Object(u.i)().topic);return Object(l.useEffect)((function(){return Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.getListenByTopic(m,"Newest");case 3:200===(e=t.sent).status&&(console.log(e.data),c(e.data.listens)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))(),function(){}}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(o.a,{variant:"h4",align:"center",children:m}),Object(g.jsx)("div",{className:"container",style:{position:"relative",left:"250px"},children:n&&n.map((function(t){return Object(g.jsx)("div",{className:j.mobilelist,children:Object(g.jsxs)("div",{children:[Object(g.jsxs)(b.b,{to:"/listening/details/".concat(t._id),children:[Object(g.jsx)("div",{className:j.floatleft,children:Object(g.jsx)("img",{height:"80px",width:"80px",src:(e=t.Image,Object(d.a)(e||f.c.IMAGE_SRC,200,200,!0,!0)),alt:""})}),Object(g.jsx)("p",{className:j.title,children:Object(g.jsxs)("strong",{children:[" ",t.Name]})}),Object(g.jsx)("br",{})]}),Object(g.jsx)("div",{className:j.textlimit,children:Object(g.jsx)("span",{className:j.tldetail,children:t.Description})})]})});var e}))})]})}}}]);
//# sourceMappingURL=48.7cac462b.chunk.js.map