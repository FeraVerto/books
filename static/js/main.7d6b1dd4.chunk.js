(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv",App_header:"App_App_header__1WhCC"}},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(28),r=n.n(a),i=(n(37),n(20)),l=n(32),s=n(13),j=n(2),b=n(23),u=n.n(b),d=n(9),p=n(1),h=function(e){var t=e.state,n=e.dispatch;Object(c.useEffect)((function(){for(var e=[],t=0,c=Object.keys(localStorage);t<c.length;t++){var o=c[t],a=localStorage.getItem(o);null!==a&&e.push({id:o,book:JSON.parse(a)})}n({type:"SET_BOOKS_LIST",payload:e})}),[]);return Object(p.jsx)("ul",{children:t.books.map((function(e){return Object(p.jsx)(d.b,{to:"/edit/".concat(e.id),children:Object(p.jsxs)("li",{onDoubleClick:function(){return t=e.id,void n({type:"GET_BOOK",payload:t});var t},children:[Object(p.jsx)("span",{children:e.book.bookTitle}),Object(p.jsx)("span",{children:e.book.author})]})},e.id)}))})},O=n(31),x=n(45),f=function(){var e=Object(O.a)({initialValues:{bookTitle:"",author:""},onSubmit:function(e){var t=Object(x.a)(),n=JSON.stringify(e);localStorage.setItem(t,n)}});return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(p.jsx)("input",{id:"bookTitle",name:"bookTitle",type:"text",onChange:e.handleChange,value:e.values.bookTitle}),Object(p.jsx)("label",{htmlFor:"author",children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"}),Object(p.jsx)("input",{id:"author",name:"author",type:"text",onChange:e.handleChange,value:e.values.author}),Object(p.jsx)("button",{type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},v=function(e){var t=e.state,n=e.dispatch,o=Object(j.e)().id,a=Object(c.useState)(!1),r=Object(i.a)(a,2),l=r[0],s=r[1];return Object(p.jsx)("div",{children:!l&&Object(p.jsx)("div",{children:t.books.map((function(e){return e.id===o&&Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"title",children:e.book.bookTitle}),Object(p.jsx)("input",{id:"title",type:"text"}),Object(p.jsx)("label",{htmlFor:"author",children:e.book.author}),Object(p.jsx)("input",{id:"author",type:"text"}),Object(p.jsx)("button",{onClick:function(){return function(e){localStorage.removeItem(e),n({type:"DELETE_BOOK",payload:e})}(e.id)},children:"Delete"}),Object(p.jsx)("button",{onClick:function(){return console.log("Save"),void s(!0)},children:"Save"})]},e.id)}))})})},g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d.b,{to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433"}),Object(p.jsx)(d.b,{to:"/create",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443"})]})},k={books:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS_LIST":return Object(s.a)(Object(s.a)({},e),{},{books:Object(l.a)(t.payload)});case"DELETE_BOOK":return Object(s.a)(Object(s.a)({},e),{},{books:e.books.filter((function(e){return e.id!==t.payload}))});case"UPDATE_BOOK":return Object(s.a)({},e);default:return e}},_=function(){var e=Object(c.useReducer)(m,k),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(p.jsxs)("div",{className:u.a.App,children:[Object(p.jsx)("header",{className:u.a.App_header,children:Object(p.jsx)(g,{})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(h,{state:n,dispatch:o})}}),Object(p.jsx)(j.a,{path:"/create",render:function(){return Object(p.jsx)(f,{})}}),Object(p.jsx)(j.a,{path:"/edit/:id",render:function(){return Object(p.jsx)(v,{state:n,dispatch:o})}})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(_,{})})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.7d6b1dd4.chunk.js.map