(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,o){e.exports={book_list:"BookList_book_list__3m2QI",book_item_link:"BookList_book_item_link__3cqyY",swing:"BookList_swing__3iAPe",book_item:"BookList_book_item__2BIC2",book_item_image:"BookList_book_item_image__2s3Vc"}},27:function(e,t,o){e.exports={App:"App_App__16ZpL",main:"App_main__3ZkGI",create_position:"App_create_position__367Uh","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv",App_header:"App_App_header__1WhCC"}},28:function(e,t,o){e.exports={form:"CreateBook_form__19dYL",create_position:"CreateBook_create_position__3j2xZ",button_position:"CreateBook_button_position__Djt3E"}},29:function(e,t,o){e.exports={button_block:"EditFormBook_button_block__394kl",button_position:"EditFormBook_button_position__17wU-"}},32:function(e,t,o){e.exports={search:"Search_search__2YEIt",button:"Search_button__2nzbD",search_input:"Search_search_input__3187v"}},35:function(e,t,o){e.exports={form:"EditBook_form__1EE08",create_position:"EditBook_create_position__12pxK"}},39:function(e,t,o){e.exports={button:"Button_button__senhy"}},40:function(e,t,o){e.exports={input:"Input_input__3q1z6"}},43:function(e,t,o){e.exports={navigation:"Navigaton_navigation__clwd_"}},49:function(e,t,o){},56:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),n=o(38),c=o.n(n),r=(o(49),o(8)),s=o(26),l=o(5),u=o(2),b=o(27),_=o.n(b),j=o(12),d=o(21),p=o.n(d),h=o(39),m=o.n(h),O=o(1),f=function(e){var t=e.type,o=e.text,a=e.onClick,i=e.className;return Object(O.jsx)("button",{className:"".concat(m.a.button," ").concat(i),type:t,onClick:a,children:o})},x=o(44),v=o(40),k=o.n(v),g=function(e){var t=e.className,o=e.id,a=e.onChange,i=e.value,n=e.type,c=e.name,r=Object(x.a)(e,["className","id","onChange","value","type","name"]);return Object(O.jsx)("input",Object(l.a)({type:n,className:"".concat(k.a.input," ").concat(t),id:o,onChange:a,value:i,name:c},r))},S=o(32),N=o.n(S),y=o(16),F=function(){for(var e=[],t=0,o=Object.keys(localStorage);t<o.length;t++){var a=o[t],i=localStorage.getItem(a);null!==i&&e.push({id:a,book:JSON.parse(i)})}return e},w=function(e){var t=e.dispatch,o=(e.state,Object(a.useState)()),i=Object(r.a)(o,2),n=i[0],c=i[1],s=Object(y.a)({initialValues:{search:""},onSubmit:function(e){t({type:"SET_BOOKS_LIST",payload:n}),t({type:"SEARCH_FILTER",payload:{filter:e.search}})}});return Object(a.useEffect)((function(){c(F())}),[]),Object(O.jsxs)("form",{onSubmit:s.handleSubmit,className:N.a.search,children:[Object(O.jsx)(g,{id:"search",className:N.a.search_input,name:"search",onChange:s.handleChange,value:s.values.search,type:"search"}),Object(O.jsx)(f,{text:"Search",type:"submit"})]})},B=function(e){var t=e.state,o=e.dispatch;return Object(a.useEffect)((function(){o({type:"SET_BOOKS_LIST",payload:F()})}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"List of Books"}),Object(O.jsx)(w,{state:t,dispatch:o}),Object(O.jsx)("ul",{className:p.a.book_list,children:t.books.map((function(e){return Object(O.jsx)(j.b,{className:p.a.book_item_link,to:"/edit/".concat(e.id),children:Object(O.jsxs)("li",{className:p.a.book_item,children:[Object(O.jsxs)("span",{children:["Author: ",e.book.author?e.book.author:"unknown"]}),Object(O.jsx)("span",{children:e.book.title}),Object(O.jsx)("div",{className:p.a.book_item_image,children:Object(O.jsx)("img",{alt:e.book.title,src:e.book.cover})})]})},e.id)}))})]})},C=o(17),L=o.n(C),A=o(25),E=o(58),I=o(6),R=o.n(I),T=o.p+"static/media/download.3bcaa934.svg",q=o.p+"static/media/nophoto.8ce14280.jpg",K=function(e){var t=e.formik,o=e.title,i=e.author,n=e.cover,c=Object(a.useState)(),u=Object(r.a)(c,2),b=u[0],_=u[1],j=b&&Object(s.a)(b).map((function(e,t){return Object(O.jsx)("img",{className:R.a.image,alt:o,width:200,height:300,src:URL.createObjectURL(e)},t)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{htmlFor:"title",children:o}),Object(O.jsx)(g,Object(l.a)({id:"title",type:"text"},t.getFieldProps("title"))),t.errors.title&&t.touched.title?Object(O.jsx)("div",{className:R.a.error,children:t.errors.title}):null,Object(O.jsx)("label",{htmlFor:"author",children:i}),Object(O.jsx)(g,Object(l.a)({id:"author",type:"text"},t.getFieldProps("author"))),t.errors.author&&t.touched.author?Object(O.jsx)("div",{className:R.a.error,children:t.errors.author}):null,Object(O.jsxs)("div",{className:R.a.file_block,children:[Object(O.jsx)("div",{className:R.a.image_container,children:j||Object(O.jsx)("img",{className:R.a.image,width:200,height:300,src:n||q,alt:o})}),Object(O.jsxs)("div",{className:R.a.file_block_wrapper,children:[Object(O.jsxs)("label",{className:R.a.input_file_button,htmlFor:"cover",children:[Object(O.jsx)("span",{className:R.a.input_file_icon_wrapper,children:Object(O.jsx)("img",{className:R.a.input_file_icon,src:T,alt:"Select a file",width:"25"})}),Object(O.jsx)("span",{className:R.a.input_file,children:"Select a file"})]}),Object(O.jsx)(g,{className:R.a.input_image,id:"cover",type:"file",name:"cover",onBlur:t.handleBlur,onChange:function(e){var o=e.target;t.setFieldValue("cover",o.files[0]),o.files&&_(o.files)}}),t.errors.cover&&t.touched.cover?Object(O.jsx)("div",{className:R.a.error,children:t.errors.cover}):null]})]})]})},U=function(e){return new Promise((function(t,o){var a=new FileReader;a.onload=function(){return t(a.result)},a.onerror=function(e){return o(e)},e.type&&e.type.match("image.*")&&a.readAsDataURL(e)}))},P=o(28),D=o.n(P),J=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),o=t[0],i=t[1],n=Object(a.useState)(!1),c=Object(r.a)(n,2),s=c[0],b=c[1],_=Object(y.a)({initialValues:{title:"",author:"",cover:{}},onSubmit:function(){var e=Object(A.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("values",t),e.next=3,U(t.cover).then((function(e){t=Object(l.a)(Object(l.a)({},t),{},{cover:e}),i(JSON.stringify(t))}));case 3:b(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t={};return e.title||(t.title="Required"),e.author||(t.author="Required"),e.cover||(t.cover="Required"),t}});return Object(a.useEffect)((function(){var e=Object(E.a)();o&&localStorage.setItem(e,o)}),[o]),s?Object(O.jsx)(u.a,{to:"/"}):Object(O.jsx)("div",{className:D.a.create_position,children:Object(O.jsxs)("form",{className:D.a.form,onSubmit:_.handleSubmit,children:[Object(O.jsx)("h2",{children:"Add a new book"}),Object(O.jsx)(K,{formik:_,title:"Book  title",author:"Author name"}),Object(O.jsx)(f,{className:D.a.button_position,type:"submit",text:"Create"})]})})},M=o(35),V=o.n(M),Z=o(29),Y=o.n(Z),z=function(e){var t=e.title,o=e.author,a=e.id,i=e.setLocalStateUpdate,n=e.deleteBook,c=e.setEditMode,r=e.cover,s=Object(y.a)({initialValues:{title:t,author:o,cover:r},onSubmit:function(){var e=Object(A.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t.cover).then((function(e){t=Object(l.a)(Object(l.a)({},t),{},{cover:e}),i(JSON.stringify(t))}));case 2:c(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t={};return e.title||(t.title="Required"),e.author||(t.author="Required"),e.cover||(t.cover="Required"),t}});return Object(O.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(O.jsx)(K,{formik:s,title:"Book title",author:"Author name",cover:r}),Object(O.jsxs)("div",{className:Y.a.button_block,children:[Object(O.jsx)(f,{type:"submit",className:Y.a.button_position,text:"Delete",onClick:function(){n(a)}}),Object(O.jsx)(f,{type:"submit",className:Y.a.button_position,text:"Save"})]})]},a)},G=function(e){var t=e.state,o=(e.dispatch,Object(u.f)().id),i=Object(a.useState)(""),n=Object(r.a)(i,2),c=n[0],s=n[1],l=Object(a.useState)(""),b=Object(r.a)(l,2),_=b[0],j=b[1],d=Object(a.useState)(!1),p=Object(r.a)(d,2),h=p[0],m=p[1];console.log("localStateUpdate",c);var f=function(e){j(e),m(!0)};return Object(a.useEffect)((function(){c&&localStorage.setItem(o,c),_&&localStorage.removeItem(_)})),h?Object(O.jsx)(u.a,{to:"/"}):Object(O.jsx)("div",{className:V.a.create_position,children:Object(O.jsxs)("div",{className:V.a.form,children:[Object(O.jsx)("h2",{children:"Edit book"}),t.books.map((function(e){return e.id===o&&Object(O.jsx)(z,{setLocalStateUpdate:s,deleteBook:f,editMode:h,setEditMode:m,cover:e.book.cover,id:e.id,title:e.book.title,author:e.book.author},e.id)}))]})})},H=o(43),W=o.n(H),Q=function(){return Object(O.jsxs)("div",{className:W.a.navigation,children:[Object(O.jsx)(j.b,{to:"/",children:"List of books"}),Object(O.jsx)(j.b,{to:"/create",children:"Create book"})]})},X={books:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS_LIST":return Object(l.a)(Object(l.a)({},e),{},{books:Object(s.a)(t.payload)});case"SEARCH_FILTER":return console.log("state",e),Object(l.a)(Object(l.a)({},e),{},{books:e.books.filter((function(e){return e.book.title.toLowerCase().includes(t.payload.filter.toLowerCase())||e.book.author.toLowerCase().includes(t.payload.filter.toLowerCase())}))});default:return e}},ee=function(){var e=Object(a.useReducer)($,X),t=Object(r.a)(e,2),o=t[0],i=t[1];return Object(O.jsxs)("div",{className:_.a.App,children:[Object(O.jsx)("header",{className:_.a.App_header,children:Object(O.jsx)(Q,{})}),Object(O.jsxs)("main",{className:_.a.main,children:[Object(O.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(B,{state:o,dispatch:i})}}),Object(O.jsx)(u.b,{path:"/create",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(u.b,{path:"/edit/:id",render:function(){return Object(O.jsx)(G,{state:o,dispatch:i})}})]})]})},te=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,59)).then((function(t){var o=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;o(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(ee,{})})}),document.getElementById("root")),te()},6:function(e,t,o){e.exports={error:"FormField_error__1w54K",input_image:"FormField_input_image__2jhd_",file_block:"FormField_file_block__3hXtj",image:"FormField_image__3uMbO",image_container:"FormField_image_container__2GkBr",file_block_wrapper:"FormField_file_block_wrapper__3lq5v",input_file_icon:"FormField_input_file_icon__1WoLK",input_file:"FormField_input_file__3ZKgE",input_file_button:"FormField_input_file_button__gK5xZ"}}},[[56,1,2]]]);
//# sourceMappingURL=main.8b933916.chunk.js.map