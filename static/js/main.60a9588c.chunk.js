(this["webpackJsonpblog-author"]=this["webpackJsonpblog-author"]||[]).push([[0],[,,function(e,t,n){e.exports={postContainer:"Edit_postContainer__2ZzoW",postInfo:"Edit_postInfo__1us6g",postTitle:"Edit_postTitle__Uw0-m",postBody:"Edit_postBody__3APpR",prevBtn:"Edit_prevBtn__2J18Y",nextBtn:"Edit_nextBtn__15DIz",writeBtn:"Edit_writeBtn__20i1a",deletePostBtn:"Edit_deletePostBtn__1A5S5",deleteCommentsBtn:"Edit_deleteCommentsBtn__kfHop",showCommentsBtn:"Edit_showCommentsBtn__1j0jH",commentInfo:"Edit_commentInfo__2m0Wt",commentBody:"Edit_commentBody__vTc7Q",commentsActive:"Edit_commentsActive__S4JC6",commentsInactive:"Edit_commentsInactive__3l0B8",paddingLast:"Edit_paddingLast__3ee5A",logoutBtn:"Edit_logoutBtn__3jlRn",deletePostsBtn:"Edit_deletePostsBtn__2xmV9",logoutContainer:"Edit_logoutContainer__13vK3",btnContainer:"Edit_btnContainer__3bGpf",information:"Edit_information__23Nha",mainContainer:"Edit_mainContainer__2Lfi0"}},,,,,,function(e,t,n){e.exports={commentsActive:"Comments_commentsActive__1gP-5",commentsInactive:"Comments_commentsInactive__1LQYT",commentInfo:"Comments_commentInfo__vOzCZ",commentBody:"Comments_commentBody__3EnWP",paddingLast:"Comments_paddingLast__1BoCA",deleteBtn:"Comments_deleteBtn__3vFHY",noCommentActive:"Comments_noCommentActive__U4rlS",noCommentInactive:"Comments_noCommentInactive__1XtZI",commentName:"Comments_commentName__2Arjx"}},,function(e,t,n){e.exports={postContainer:"Write_postContainer__1vC8O",postInfo:"Write_postInfo__3D912",postTitle:"Write_postTitle__2EyrZ",postBody:"Write_postBody__3Rt5W",inputContainer:"Write_inputContainer__2gxn6",postArea:"Write_postArea__3PEF3",submitCancelContainer:"Write_submitCancelContainer__3Wthd",submitCommentBtn:"Write_submitCommentBtn__3dP07",cancelBtn:"Write_cancelBtn__cCUCV",commentBtn:"Write_commentBtn__2KYnL",mainContainer:"Write_mainContainer__1KX0t"}},,,,function(e,t,n){e.exports={error:"Unauthorized_error__1axU-",link:"Unauthorized_link__3poo4",errorSpan:"Unauthorized_errorSpan__1ODMW"}},function(e,t,n){e.exports={error:"Error_error__2WwmA",link:"Error_link__1cUrZ",errorSpan:"Error_errorSpan__1Eg5R"}},,function(e,t,n){e.exports={container:"Layout_container__1nNA4",main:"Layout_main__1dFZc"}},,,function(e,t,n){e.exports={postBody:"NoPosts_postBody__1vJ4k",postContainer:"NoPosts_postContainer__35G7c"}},function(e,t,n){e.exports={password:"Login_password__4_z11",login:"Login_login__3IC9Q"}},,,,function(e,t,n){e.exports={spinner:"Spinner_spinner__1Neu5",spin:"Spinner_spin__2cA5G"}},,function(e,t,n){e.exports=n(38)},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(24),r=n.n(c),i=n(9),m=n(1),s=n(17),l=n.n(s),u=function(e){var t=e.children;return a.a.createElement("div",{id:l.a.container},a.a.createElement("main",{id:l.a.main},a.a.createElement("h1",null,"Blog"),t))},p=n(4),_=n(10),d=n.n(_),f=n(25),E=n.n(f),h=function(){return a.a.createElement("div",{id:E.a.spinner})},b=function(){return"undefined"!==typeof window},C=function(){return b()&&window.sessionStorage.getItem("User")?JSON.parse(window.sessionStorage.getItem("User")):null},v=function(e){if(!b())return null;!function(e){b()&&window.sessionStorage.setItem("User",JSON.stringify(e))}(e),window.location.href="/home"},g=function(){return!(!b()||!C())||null},B=function(){var e=Object(o.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]);return n?a.a.createElement(h,null):a.a.createElement("div",{id:d.a.mainContainer},a.a.createElement("div",{id:d.a.inputContainer},a.a.createElement("label",null,"Title: "),a.a.createElement("input",{id:d.a.postTitle})),a.a.createElement("textarea",{id:d.a.postArea}),a.a.createElement("div",{className:d.a.submitCancelContainer},a.a.createElement("button",{id:d.a.submitCommentBtn,onClick:function(e){return function(e){e.preventDefault();var t={title:e.target.parentElement.previousElementSibling.previousElementSibling.children[1].value.trim(),text:e.target.parentElement.previousElementSibling.value.trim(),user:C()};fetch("https://nameless-plains-23983.herokuapp.com/api/posts/new",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.updated?window.location.href="/blog-author/home":window.location.href="/blog-author/error"})).catch((function(e){console.log(e)}))}(e)}},"Submit Post"),a.a.createElement("button",{id:d.a.cancelBtn,onClick:function(){return window.location.href="/home"}},"Cancel")))},w=n(14),j=n.n(w),O=function(){var e=Object(o.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),n?a.a.createElement(h,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{id:j.a.error},"Error: ",a.a.createElement("span",{id:j.a.errorSpan},"You are not authorized to view this page.")),a.a.createElement(i.b,{id:j.a.link,to:"/"},"Back to Login"))},S=function(){return a.a.createElement(u,null,g()?a.a.createElement(B,null):a.a.createElement(O,null))},N=n(13),k=n.n(N),y=n(2),I=n.n(y),T=n(8),A=n.n(T),x=function(e){var t=e.commentsAreActive,n=e.currentPost,c=Object(o.useState)(!1),r=Object(p.a)(c,2),i=r[0],s=r[1],l=Object(o.useState)(!1),u=Object(p.a)(l,2),_=u[0],d=u[1],f=Object(m.f)();Object(o.useEffect)((function(){t&&(s(!0),setTimeout((function(){s(!1)}),1e3))}),[t]),Object(o.useEffect)((function(){d(!!t)}),[t]);return i?a.a.createElement(h,null):n.comments[0]?n.comments.map((function(e,t){return a.a.createElement("div",{"data-id":e._id,className:_?A.a.commentsActive:A.a.commentsInactive,key:t},a.a.createElement("p",{className:"".concat(A.a.commentInfo," ").concat(A.a.commentBody)},e.text),a.a.createElement("p",{className:"".concat(A.a.commentInfo," ").concat(A.a.paddingLast)},a.a.createElement("span",{id:A.a.commentName},e.name)," - ",k()(e.timestamp).format("L")),a.a.createElement("button",{className:A.a.deleteBtn,onClick:function(e){return function(e){var t=e.target.parentElement.dataset.id;fetch("https://nameless-plains-23983.herokuapp.com/api/comments/".concat(t,"/delete"),{method:"DELETE",mode:"cors"}).then((function(e){e?f.push("/home"):f.push("/error")})).catch((function(e){console.log(e)}))}(e)}},"Delete Comment"))})):a.a.createElement("div",{id:_?A.a.noCommentActive:A.a.noCommentInactive},a.a.createElement("p",null,"There are no comments for this post."))},P=n(20),L=n.n(P),W=function(){return a.a.createElement("div",{className:L.a.postContainer},a.a.createElement("p",{className:L.a.postBody},"There are currently no posts."))},D=function(){var e=Object(o.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),i=Object(p.a)(r,2),m=i[0],s=i[1],l=Object(o.useState)(!1),u=Object(p.a)(l,2),_=u[0],d=u[1],f=Object(o.useState)(!0),E=Object(p.a)(f,2),C=E[0],v=E[1];Object(o.useEffect)((function(){fetch("https://nameless-plains-23983.herokuapp.com/api/posts",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post[0]?s(e.post[0]):d(!0)})).catch((function(e){console.log(e)}))}),[]),Object(o.useEffect)((function(){_&&setTimeout((function(){v(!1)}),1e3)}),[_]),Object(o.useEffect)((function(){m&&setTimeout((function(){v(!1)}),1e3)}),[m]);return C?a.a.createElement(h,null):m?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:I.a.mainContainer},a.a.createElement("div",{className:I.a.postContainer},a.a.createElement("div",{id:I.a.information},a.a.createElement("p",{className:"".concat(I.a.postInfo," ").concat(I.a.postTitle)},m.title),a.a.createElement("p",{className:"".concat(I.a.postBody," ").concat(I.a.postInfo)}," ",m.text),a.a.createElement("p",{className:I.a.postInfo},"Posted: ",k()(m.timestamp).format("L")),a.a.createElement("button",{className:I.a.prevBtn,onClick:function(){return v(!0),c(!1),void fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(m._id,"/prev"),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post&&s(e.post[0])})).catch((function(e){console.log(e)}))}},"Previous"),a.a.createElement("button",{className:I.a.nextBtn,onClick:function(){return v(!0),c(!1),void fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(m._id,"/next"),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post&&s(e.post[0])})).catch((function(e){console.log(e)}))}},"Next"))),a.a.createElement("div",{id:I.a.btnContainer},a.a.createElement("button",{className:I.a.logoutBtn,onClick:function(){return function(){if(!b())return null;window.sessionStorage.clear(),window.location.href="/blog-author"}()}},"Logout"),a.a.createElement("button",{className:"".concat(I.a.commentBtn," ").concat(I.a.deletePostBtn),onClick:function(){fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(m._id,"/delete"),{method:"DELETE",mode:"cors"}).then((function(){window.location.href="/blog-author/home"})).catch((function(e){console.log(e)}))}},"Delete Post"),a.a.createElement("button",{className:"".concat(I.a.commentBtn," ").concat(I.a.deleteCommentsBtn),onClick:function(){fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(m._id,"/comments/delete"),{method:"DELETE",mode:"cors"}).then((function(e){e?(console.log(e),window.location.href="/blog-author/home"):window.location.href="/blog-author/error"})).catch((function(e){console.log(e)}))}},"Delete Comments"),a.a.createElement("button",{className:"".concat(I.a.commentBtn," ").concat(I.a.writeBtn),onClick:function(){return window.location.href="/write"}},"Write New Post")),a.a.createElement("button",{className:I.a.showCommentsBtn,onClick:function(e){return function(e){var t=e.target;"See Comments"===e.target.innerText?(t.disabled=!0,c(!n),setTimeout((function(){t.disabled=!1}),1e3)):c(!n)}(e)}},n?"Hide Comments":"See Comments"),a.a.createElement(x,{commentsAreActive:n,setCommentsAreActive:c,currentPost:m}))):a.a.createElement(W,null)},U=function(){return a.a.createElement(u,null,g()?a.a.createElement(D,null):a.a.createElement(O,null))},J=n(15),z=n.n(J),F=function(){var e=Object(o.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),a.a.createElement(u,null,n?a.a.createElement(h,null):g()?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{id:z.a.error},"Error: ",a.a.createElement("span",{id:z.a.errorSpan},"Post must have a title and body.")),a.a.createElement(i.b,{id:z.a.link,to:"/home"},"Back to Home")):a.a.createElement(O,null))},G=n(21),Z=n.n(G),H=function(){var e=Object(o.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(m.f)();Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),Object(o.useEffect)((function(){g()&&r.push("/home")}),[]);return a.a.createElement(u,null,n?a.a.createElement(h,null):a.a.createElement("form",null,a.a.createElement("label",null,"Password:"),a.a.createElement("input",{id:Z.a.password,type:"password"}),a.a.createElement("button",{id:Z.a.login,onClick:function(e){return function(e){e.preventDefault();var t={password:e.target.previousElementSibling.value};fetch("https://nameless-plains-23983.herokuapp.com/api/login",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),e?v(e):r.push("/error")})).catch((function(e){console.log(e)}))}(e)}},"Log In")))};var Y=function(){return a.a.createElement(i.a,{basename:"/blog-author"},a.a.createElement("div",{className:"App"},a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:H}),a.a.createElement(m.a,{path:"/home",component:U}),a.a.createElement(m.a,{path:"/write",component:S}),a.a.createElement(m.a,{path:"/error",component:F}))))};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Y,null)),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.60a9588c.chunk.js.map