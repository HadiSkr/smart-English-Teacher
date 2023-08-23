(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31],{513:function(t,e,n){"use strict";var a=n(4),c=n(29),r=n.n(c),i="/api/listening",s={getListening:function(t){return r.a.get("".concat(i,"/get-listening/").concat(t))},getListenByTopic:function(t,e){return r.a.get("".concat(i,"/get-listen-by-topic"),{params:{topic:t,type:e}})},getListenById:function(t){return r.a.get("".concat(i,"/get-listen-by-id/").concat(t))},getListenTopics:function(t,e){return r.a.get("".concat(i,"/get-listen-topics"),{params:{topic:t,type:e}})},getAllListen:function(t){return r.a.get("".concat(i,"/get-all-listen"),{params:{type:t}})},searchListen:function(t){return r.a.get("".concat(i,"/search-listen"),{params:{name:t}})},postListen:function(t){return r.a.post("".concat(i,"/post-listen"),Object(a.a)({},t),{header:{"content-type":"multipart/form-data"}})},putListen:function(t,e){return r.a.put("".concat(i,"/put-listen/").concat(t),Object(a.a)({},e),{params:{id:t},header:{"content-type":"multipart/form-data"}})},deleteListen:function(t){return r.a.delete("".concat(i,"/delete-listen/").concat(t))}};e.a=s},537:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var a=n(16),c=n.n(a),r=n(27),i=n(45),s=n(513),o=(n(185),function(t){return function(){var e=Object(r.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.getListening(t);case 3:200===(a=e.sent).status?n({type:i.a.GET_LISTENING,payload:a.data}):n({type:i.a.SET_LISTEN_ERROR,payload:a.data.message}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}),u=function(t){return function(){var e=Object(r.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.deleteListen(t);case 3:200===(a=e.sent).status?n({type:i.a.DELETE_LISTEN,payload:t}):n({type:i.a.SET_LISTEN_ERROR,payload:a.data.message}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:i.a.SET_LISTEN_ERROR,payload:e.t0.response.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},695:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var a=n(0),c=n(496),r=n(62),i=n(501),s=n(492),o=n(19),u=n(537),p=n(22),l=n(2);function d(){Object(r.a)("Listening");var t=Object(p.h)().id,e=Object(o.c)((function(t){return t.listeningReducer})).listen,n=Object(p.f)();var d=Object(o.b)();Object(a.useEffect)((function(){return d(Object(u.b)(t))}),[d]);var f=function(t){var e=[];return t&&(e=t.split("\n")),e};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(c.a,{variant:"h6",align:"center",children:e.Name}),Object(l.jsx)(c.a,{children:e.Description}),Object(l.jsx)("p",{align:"center",children:Object(l.jsx)("iframe",{src:e.Video,width:"500",height:"300"})}),Object(l.jsxs)(c.a,{variant:"h6",children:["Topic:    ",Object(l.jsx)("i",{children:Object(l.jsxs)("mark",{children:["  ",e.Topic," "]})})]}),Object(l.jsx)(c.a,{variant:"h6",children:"Script:"}),0!=f(e.Script).length&&f(e.Script).map((function(t){return Object(l.jsx)(c.a,{variant:"body2",align:"justify",children:t})})),Object(l.jsx)(s.a,{color:"primary",onClick:function(){n.push("/admin/listening")},children:"GO BACK"}),Object(l.jsx)(s.a,{color:"primary",onClick:function(){n.push("/admin/listening/edit/".concat(e._id))},children:"Edit"})]})})}}}]);
//# sourceMappingURL=31.f3c66b5b.chunk.js.map