(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),s=(n(26),n(5)),i=n.n(s),u=n(11),l=n(8),j=n(4),b=n(1);var d=function(e){var t=e.picture,n=e.toggleModal;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image",onClick:function(){return n(t.largeImageURL)}})},t.id)})};var m=function(e){var t=e.picturesData,n=e.toggleModal;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(b.jsx)(d,{picture:e,toggleModal:n},e.id)}))})};var p=function(e){var t=e.onSearch;return Object(b.jsx)("header",{className:"SearchBar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(e.target.elements.searchQuery.value)},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var f=function(e){var t=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})};var h=function(e){var t=e.onClose,n=e.onOpen;Object(a.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&t()};return Object(b.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:n,alt:n})})})},O=n(10),g=n.n(O);g.a.defaults.baseURL="https://pixabay.com/api/";var v=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"21748955-40ae248ad9ce65df002076b41",e.next=3,g.a.get("?q=".concat(t,"&page=").concat(n,"&key=").concat("21748955-40ae248ad9ce65df002076b41","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return a=e.sent,e.abrupt("return",a.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=n(21),y=n.n(x);var w=function(){var e=Object(a.useRef)(!1),t=Object(a.useState)([]),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(1),s=Object(j.a)(o,2),d=s[0],O=s[1],g=Object(a.useState)(null),x=Object(j.a)(g,2),w=x[0],S=x[1],k=Object(a.useState)("idle"),N=Object(j.a)(k,2),F=N[0],C=N[1],E=Object(a.useState)(!1),I=Object(j.a)(E,2),L=I[0],M=I[1],B=Object(a.useState)(null),R=Object(j.a)(B,2),D=R[0],G=R[1];Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("pending"),e.next=3,v(w,d);case 3:t=e.sent,r((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),C("resolved"),d>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.current?function(){t.apply(this,arguments)}():e.current=!0}),[w,d]);var U=c.length>0;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{onSearch:function(e){S(e),O(1),r([])}}),Object(b.jsx)(m,{picturesData:c,toggleModal:function(e){M(!0),G(e)}}),"pending"===F&&Object(b.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),U&&Object(b.jsx)(f,{onClick:function(){O((function(e){return e+1}))}}),L&&Object(b.jsx)(h,{onClose:function(){M(!1),G(null)},onOpen:D})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.670b2714.chunk.js.map