(this.webpackJsonpgolfexample=this.webpackJsonpgolfexample||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=(n(30),n(31),n(25)),o=n(3),l=n.n(o),u=n(6),j=n(5),b=n(7),h=n(8),p=n(10),d=n(9),x=n(4),m=n.n(x),O=n(0);r.a.Component;function f(e){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(Object(u.a)({},t)),a=n.toString(),e.next=4,m.a.get("/api/HttpExample?".concat(a),{headers:{"Access-Control-Allow-Origin":"*",crossDomain:!0}}).then((function(e){return console.log(e),e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){return Object(O.jsxs)("div",{className:"heroContainer",children:[Object(O.jsx)("h1",{className:"heroText",children:"Golf Tracker"})," ",Object(O.jsx)("div",{className:"heroOverlay"})]})},k=n(23),S=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleSubmitClick=Object(j.a)(l.a.mark((function e(){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(t=a.state.input2)){e.next=4;break}return alert("Please enter valid input"),e.abrupt("return");case 4:return(n=Object(k.cloneDeep)(a.state.data)).scores.push(t),e.next=8,N(n);case 8:if(r=e.sent,console.log("gotResponse"),console.log(r),!r||r.error){e.next=17;break}(c=Object(u.a)({},a.state)).data=r,a.setState(c),e.next=20;break;case 17:if(!r){e.next=20;break}return alert(r.error),e.abrupt("return");case 20:case"end":return e.stop()}}),e)}))),a.state={data:{name:"Diem",scores:[42,46,43,48]},scores:{},input2:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/api/HttpExample?name=Diem&scores=45,65,35,35",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.data;Object.keys(t);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("nav",{}),Object(O.jsxs)("section",{className:"flexColumn",children:[Object(O.jsx)("div",{className:"grayBack userName",children:t.name}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:this.state.input2,onChange:function(t){console.log(t.target.value),e.setState({input2:t.target.value})}}),Object(O.jsx)("input",{className:"jura",type:"button",value:"Submit Score",onClick:this.handleSubmitClick})]})]}),Object(O.jsx)("section",{className:"lilboxSection",children:this.state.data.scores.map((function(e,t){return Object(O.jsxs)("div",{className:"lilbox",children:[" ",e]},t)}))}),Object(O.jsxs)("section",{className:"lilboxSection",children:[Object(O.jsx)("div",{className:"bigBox",children:Object(O.jsxs)("h4",{children:["Average Score:",Object(O.jsx)("br",{})," ",this.state.data.average," "]})}),Object(O.jsx)("div",{className:"bigBox",children:Object(O.jsxs)("h4",{children:["Handicap Score: ",Object(O.jsx)("br",{})," ",this.state.data.handicap," "]})})]})]})}}]),n}(r.a.Component);function N(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(Object(u.a)({},t)),a=n.toString(),e.next=4,m.a.get("/api/HttpExample?".concat(a),{headers:{"Access-Control-Allow-Origin":"*",crossDomain:!0}}).then((function(e){return console.log(e),e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=e.trim(),n=parseInt(t),a=typeof n;return console.log(t,n,a,"number"!==a),0!=t.length&&!isNaN(n)}var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(S,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),A()}},[[54,1,2]]]);
//# sourceMappingURL=main.c1f047e5.chunk.js.map