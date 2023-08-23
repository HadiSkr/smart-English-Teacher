(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25],{520:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,c(n(34)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},526:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,c(n(34)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=r},528:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,c(n(34)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=r},559:function(e,t,n){"use strict";var c=n(3),a=n(28),i=n.n(a),r="/api/question",s={getQuestion:function(e){return i.a.get("".concat(r,"/get-question-by-id/").concat(e))},getQuestionByQuiz:function(e,t){return i.a.get("".concat(r,"/get-question-by-quiz/").concat(e))},postQuestion:function(e,t){return i.a.post("".concat(r,"/post-question-by-quiz/").concat(e),Object(c.a)({},t))},putQuestion:function(e,t){return i.a.put("".concat(r,"/put-question/").concat(e),Object(c.a)({},t))},deleteQuestionByQuiz:function(e,t){return i.a.delete("".concat(r,"/delete-question-by-quiz/").concat(e),{headers:{Authorization:t}})},deleteQuestion:function(e){return i.a.delete("".concat(r,"/delete-question-by-id/").concat(e))}};t.a=s},570:function(e,t,n){"use strict";var c=n(26),a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,c(n(34)).default)(i.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=r},595:function(e,t,n){"use strict";var c=n(28),a=n.n(c),i="/api/quiz",r={getQuiz:function(e,t){return a.a.get("".concat(i,"/get-quiz-by-id/").concat(e),{headers:{Authorization:t}})},getQuizByListen:function(e){return a.a.get("".concat(i,"/get-quiz-by-listen/").concat(e))},getAllQuiz:function(e){return a.a.get("".concat(i,"/get-all-quiz"),{headers:{Authorization:e}})},postQuizByListen:function(e){return a.a.post("".concat(i,"/post-quiz-by-listen/").concat(e))},deleteQuizByListen:function(e,t){return a.a.delete("".concat(i,"/delete-quiz-by-listen/").concat(e),{headers:{Authorization:t}})},deleteQuiz:function(e,t){return a.a.delete("".concat(i,"/delete-quiz-by-id/").concat(e),{headers:{Authorization:t}})},getAllListenAndGrammar:function(){return a.a.get("".concat(i,"/get-all-listen-grammar"))}};t.a=r},766:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var c=n(16),a=n.n(c),i=n(27),r=n(11),s=n(3),u=n(0),o=n(20),l=n(595),d=n(559),f=n(176),b=n(171),h=n(520),O=n.n(h),j=n(507),E=n(503),p=n(19),v=n(48),m=n(570),_=n.n(m),Q=n(56),z=n(528),T=n.n(z),g=n(526),x=n.n(g),N=(n(181),{GET_QUESTION:"GET_QUESTION",GET_QUESTION_BY_QUIZ:"GET_QUESTION_BY_QUIZ",CREATE_QUESTION:"CREATE_QUESTION",EDIT_QUESTION:"EDIT_QUESTION",DELETE_QUESTION_BY_QUIZ:"DELETE_QUESTION_BY_QUIZ",DELETE_QUESTION:"DELETE_QUESTION",SET_QUESTION_LOADING:"SET_QUESTION_LOADING",SET_QUESTION_ERROR:"SET_QUESTION_ERROR"}),y=n(1),S=Object(b.a)((function(e){return Object(s.a)({},Object(f.b)(e))}));function I(){Object(Q.a)("Quiz detail");var e=S(),t=Object(o.g)(),n=Object(p.b)(),c=Object(o.i)().id,s=Object(u.useState)(null),f=Object(r.a)(s,2),b=f[0],h=f[1],m=Object(u.useState)(null),z=Object(r.a)(m,2),g=z[0],I=z[1],q=Object(u.useState)(null),U=Object(r.a)(q,2),w=U[0],L=U[1];Object(u.useEffect)((function(){return Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getQuizByListen(c);case 2:t=e.sent,h(t.data),I(t.data?t.data._id:null);case 5:case"end":return e.stop()}}),e)})))(),function(){}}),[c]),Object(u.useEffect)((function(){return Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==g){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d.a.getQuestionByQuiz(g);case 4:t=e.sent,L(t.data.questions);case 6:case"end":return e.stop()}}),e)})))(),function(){}}),[g]);var k=function(e){try{window.confirm("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi n\xe0y?")&&(n(function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.deleteQuestion(e);case 3:200===(c=t.sent).status?n({type:N.DELETE_QUESTION,payload:e}):n({type:N.SET_QUESTION_ERROR,payload:c.data.message}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:N.SET_QUESTION_ERROR,payload:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e)),n(Object(v.b)("Delete successfully","success")),window.location.reload())}catch(t){n(Object(v.b)("Kh\xf4ng th\u1ec3 x\xf3a c\xe2u h\u1ecfi","error"))}},A=function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.postQuizByListen(c);case 3:e.sent&&(n(Object(v.b)("Create quiz successfully","success")),window.location.reload()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(Object(v.b)(e.t0.response.data.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"".concat(e.root," english-container"),children:[Object(y.jsxs)("div",{className:"flex-center-between",children:[Object(y.jsx)("h1",{className:"english-title",children:"Quiz"}),b&&Object(y.jsx)(O.a,{className:"english-setting-icon mr-5",onClick:function(){return t.push("/admin/quiz/add/".concat(c,"/").concat(g))}})]}),Object(y.jsx)("div",{className:"english-break"}),b?w?w.map((function(n,a){return Object(y.jsxs)(y.Fragment,{children:["  ",Object(y.jsxs)("div",{className:"".concat(e.root," flex-center-between"),children:[Object(y.jsxs)("div",{className:"mb-6",children:[Object(y.jsx)(j.a,{variant:"h5",children:n.Content}),n.Answers.map((function(e,t){return Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)(j.a,{variant:"body2",className:"mb-2",children:e.content}),e.isCorrect&&Object(y.jsx)(_.a,{className:"ml-3"})]},t)}))]},a),Object(y.jsxs)("div",{className:"flex-center--ver",children:[Object(y.jsx)("div",{className:"mr-5",children:Object(y.jsx)(T.a,{className:"english-setting-icon",onClick:function(){return t.push("/admin/quiz/edit/".concat(c,"/").concat(n._id))}})}),Object(y.jsx)(x.a,{className:"english-setting-icon",onClick:function(){return k(n._id)}})]})]})]})})):Object(y.jsx)(j.a,{className:"mt-5",variant:"h5",children:"Ch\u01b0a c\xf3 c\xe2u h\u1ecfi n\xe0o trong quiz"}):Object(y.jsxs)("div",{children:[Object(y.jsx)(j.a,{className:"mt-5 mb-5",variant:"h5",children:"B\xe0i nghe ch\u01b0a c\xf3 quiz"}),Object(y.jsx)(E.a,{className:"_btn _btn-primary",onClick:A,children:"Th\xeam quiz"})]}),Object(y.jsx)(E.a,{color:"primary",onClick:function(){return t.push("/admin/quiz")},children:"GO BACK"})]})}}}]);
//# sourceMappingURL=25.5b7a2633.chunk.js.map