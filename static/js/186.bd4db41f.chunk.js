"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[186],{6713:function(e,t,n){n.d(t,{Hx:function(){return p},WK:function(){return f},Y5:function(){return s},uV:function(){return o},wr:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),u=n(3263),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=369463d5ad6fe666accc0e43886b3c6a&page=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=369463d5ad6fe666accc0e43886b3c6a&language&language=en-US\n    "));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&page=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&query=".concat(t,"&page=").concat(n,"&include_adult=true"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},854:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5243),a=n(184);function c(){return(0,a.jsx)(r.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},186:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),i=n(2791),s=n(7689),o=n(6713),p=n(854),f=n(184);t.default=function(){var e=(0,s.UO)().id,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],d=n[1],h=(0,i.useState)(!1),l=(0,a.Z)(h,2),v=l[0],g=l[1],x=(0,i.useState)(""),w=(0,a.Z)(x,2),b=w[0],m=w[1],Z=(0,i.useState)(1),k=(0,a.Z)(Z,2),y=k[0],j=k[1],S=(0,i.useState)(0),_=(0,a.Z)(S,2),U=_[0],C=_[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,(0,o.Hx)(e,y);case 4:n=t.sent,d(y>1?function(e){return e.concat(n.results)}:n.results),1===y&&C(n.total_pages),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),m(t.t0);case 12:return t.prev=12,g(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[y,e]),(0,f.jsxs)(f.Fragment,{children:[v?(0,f.jsx)(p.Z,{}):(0,f.jsxs)("div",{children:[(0,f.jsx)("ul",{children:c.length>0?c.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)})):(0,f.jsx)("p",{children:"Whoops, there is no reviews for now \ud83d\ude22"})}),U>1&&y<U&&(0,f.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),j((function(e){return e+1}))},children:"More reviews"})]}),b&&(0,f.jsxs)("p",{children:["Whoops, something went wrong \ud83d\ude22: ",b.message]})]})}}}]);
//# sourceMappingURL=186.bd4db41f.chunk.js.map