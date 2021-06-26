(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,o){e.exports={input_image:"FormField_input_image__2jhd_",file_block:"FormField_file_block__3hXtj",image:"FormField_image__3uMbO",image_container:"FormField_image_container__2GkBr",file_block_wrapper:"FormField_file_block_wrapper__3lq5v",input_file_icon:"FormField_input_file_icon__1WoLK",input_file:"FormField_input_file__3ZKgE",input_file_button:"FormField_input_file_button__gK5xZ"}},20:function(e,t,o){e.exports={book_list:"BookList_book_list__3m2QI",book_item_link:"BookList_book_item_link__3cqyY",book_item:"BookList_book_item__2BIC2",book_item_image:"BookList_book_item_image__2s3Vc"}},24:function(e,t,o){e.exports={App:"App_App__16ZpL",main:"App_main__3ZkGI",create_position:"App_create_position__367Uh","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv",App_header:"App_App_header__1WhCC"}},29:function(e,t,o){e.exports={form:"CreateBook_form__19dYL",create_position:"CreateBook_create_position__3j2xZ"}},30:function(e,t,o){e.exports={form:"EditBook_form__1EE08",create_position:"EditBook_create_position__12pxK"}},34:function(e,t,o){e.exports={button:"Button_button__senhy"}},35:function(e,t,o){e.exports={input:"Input_input__3q1z6"}},36:function(e,t,o){e.exports={search:"Search_search__2YEIt",button:"Search_button__2nzbD"}},39:function(e,t,o){e.exports={navigation:"Navigaton_navigation__clwd_"}},46:function(e,t,o){},52:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),n=o(33),c=o.n(n),s=(o(46),o(10)),r=o(40),l=o(5),b=o(2),u=o(24),_=o.n(u),j=o(12),p=o(20),d=o.n(p),m=o(34),h=o.n(m),O=o(1),f=function(e){var t=e.type,o=e.text,a=e.onClick;return Object(O.jsx)("button",{className:h.a.button,type:t,onClick:a,children:o})},x=o(41),k=o(35),g=o.n(k),v=function(e){var t=e.className,o=e.id,a=e.onChange,i=e.value,n=e.type,c=e.name,s=Object(x.a)(e,["className","id","onChange","value","type","name"]);return Object(O.jsx)("input",Object(l.a)({type:n,className:"".concat(g.a.input," ").concat(t),id:o,onChange:a,value:i,name:c},s))},S=o(36),y=o.n(S),F=o(16),N=function(){for(var e=[],t=0,o=Object.keys(localStorage);t<o.length;t++){var a=o[t],i=localStorage.getItem(a);null!==i&&e.push({id:a,book:JSON.parse(i)})}return e},C=function(e){var t=e.dispatch,o=(e.state,Object(a.useState)()),i=Object(s.a)(o,2),n=i[0],c=i[1],r=Object(F.a)({initialValues:{search:""},onSubmit:function(e){t({type:"SET_BOOKS_LIST",payload:n}),t({type:"SEARCH_FILTER",payload:{filter:e.search}})}});return Object(a.useEffect)((function(){c(N())}),[]),Object(O.jsxs)("form",{onSubmit:r.handleSubmit,className:y.a.search,children:[Object(O.jsx)(v,{id:"search",name:"search",onChange:r.handleChange,value:r.values.search,type:"search"}),Object(O.jsx)(f,{text:"Search",type:"submit"})]})},A=function(e){var t=e.state,o=e.dispatch;return Object(a.useEffect)((function(){o({type:"SET_BOOKS_LIST",payload:N()})}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"List of Books"}),Object(O.jsx)(C,{state:t,dispatch:o}),Object(O.jsx)("ul",{className:d.a.book_list,children:t.books.map((function(e){return Object(O.jsx)(j.b,{className:d.a.book_item_link,to:"/edit/".concat(e.id),children:Object(O.jsxs)("li",{className:d.a.book_item,children:[Object(O.jsxs)("span",{children:["Author: ",e.book.author?e.book.author:"unknown"]}),Object(O.jsx)("span",{children:e.book.title}),Object(O.jsx)("div",{className:d.a.book_item_image,children:Object(O.jsx)("img",{alt:e.book.title,src:e.book.cover})})]})},e.id)}))})]})},L=o(54),B=o(11),E=o.n(B),w=o.p+"static/media/download.3bcaa934.svg",I=function(e){var t=e.formik,o=e.title,a=e.author,i=e.cover;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{htmlFor:"title",children:o}),Object(O.jsx)(v,Object(l.a)({id:"title",type:"text"},t.getFieldProps("title"))),Object(O.jsx)("label",{htmlFor:"author",children:a}),Object(O.jsx)(v,Object(l.a)({id:"author",type:"text"},t.getFieldProps("author"))),Object(O.jsxs)("div",{className:E.a.file_block,children:[Object(O.jsx)("div",{className:E.a.image_container,children:Object(O.jsx)("img",{className:E.a.image,src:i,width:200,height:200,alt:o})}),Object(O.jsxs)("div",{className:E.a.file_block_wrapper,children:[Object(O.jsxs)("label",{className:E.a.input_file_button,htmlFor:"cover",children:[Object(O.jsx)("span",{className:E.a.input_file_icon_wrapper,children:Object(O.jsx)("img",{className:E.a.input_file_icon,src:w,alt:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b",width:"25"})}),Object(O.jsx)("span",{className:E.a.input_file,children:"Select a file"})]}),Object(O.jsx)(v,{className:E.a.input_image,id:"cover",type:"file",name:"cover",onBlur:t.handleBlur,onChange:function(e){var o=e.target;t.setFieldValue("cover",o.files[0])}})]})]})]})},T=function(e){return new Promise((function(t,o){var a=new FileReader;a.onload=function(){return t(a.result)},a.onerror=function(e){return o(e)},e.type&&e.type.match("image.*")&&a.readAsDataURL(e)}))},K=o(29),R=o.n(K),M=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),o=t[0],i=t[1],n=Object(F.a)({initialValues:{title:"",author:"",cover:{}},onSubmit:function(e){T(e.cover).then((function(t){e=Object(l.a)(Object(l.a)({},e),{},{cover:t}),i(JSON.stringify(e))}))}});return Object(a.useEffect)((function(){var e=Object(L.a)();o&&localStorage.setItem(e,o)})),Object(O.jsx)("div",{className:R.a.create_position,children:Object(O.jsxs)("form",{className:R.a.form,onSubmit:n.handleSubmit,children:[Object(O.jsx)("h2",{children:"Add a new book"}),Object(O.jsx)(I,{formik:n,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",author:"\u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(O.jsx)(f,{type:"submit",text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})},J=o(30),P=o.n(J),V=function(e){var t=e.state,o=(e.dispatch,e.editMode),i=e.setEditMode,n=Object(b.f)().id,c=Object(a.useState)(""),r=Object(s.a)(c,2),u=r[0],_=r[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),d=p[0],m=p[1],h=Object(F.a)({initialValues:{title:"",author:"",cover:{}},onSubmit:function(e){T(e.cover).then((function(t){e=Object(l.a)(Object(l.a)({},e),{},{cover:t}),_(JSON.stringify(e)),i(!0)}))}});return Object(a.useEffect)((function(){u&&localStorage.setItem(n,u),d&&localStorage.removeItem(d),i(!1)})),o?Object(O.jsx)(b.a,{to:"/"}):Object(O.jsx)("div",{className:P.a.create_position,children:Object(O.jsx)("div",{className:P.a.form,children:t.books.map((function(e){return e.id===n&&Object(O.jsxs)("form",{onSubmit:h.handleSubmit,children:[Object(O.jsx)(I,{formik:h,title:"Book Title",author:"Author",cover:e.book.cover}),Object(O.jsx)(f,{type:"submit",text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){!function(e){m(e)}(e.id),i(!0)}}),Object(O.jsx)(f,{type:"submit",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]},e.id)}))})})},Z=o(39),q=o.n(Z),D=function(){return Object(O.jsxs)("div",{className:q.a.navigation,children:[Object(O.jsx)(j.b,{to:"/",children:"List books"}),Object(O.jsx)(j.b,{to:"/create",children:"Create book"})]})},Y={books:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS_LIST":return Object(l.a)(Object(l.a)({},e),{},{books:Object(r.a)(t.payload)});case"SEARCH_FILTER":return console.log("state",e),Object(l.a)(Object(l.a)({},e),{},{books:e.books.filter((function(e){return e.book.title.toLowerCase().includes(t.payload.filter.toLowerCase())||e.book.author.toLowerCase().includes(t.payload.filter.toLowerCase())}))});default:return e}},G=function(){var e=Object(a.useReducer)(z,Y),t=Object(s.a)(e,2),o=t[0],i=t[1],n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],l=c[1];return Object(O.jsxs)("div",{className:_.a.App,children:[Object(O.jsx)("header",{className:_.a.App_header,children:Object(O.jsx)(D,{})}),Object(O.jsxs)("main",{className:_.a.main,children:[Object(O.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(A,{state:o,dispatch:i})}}),Object(O.jsx)(b.b,{path:"/create",render:function(){return Object(O.jsx)(M,{})}}),Object(O.jsx)(b.b,{path:"/edit/:id",render:function(){return Object(O.jsx)(V,{state:o,dispatch:i,editMode:r,setEditMode:l})}})]})]})},H=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,55)).then((function(t){var o=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;o(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(G,{})})}),document.getElementById("root")),H()}},[[52,1,2]]]);
//# sourceMappingURL=main.810ec8db.chunk.js.map