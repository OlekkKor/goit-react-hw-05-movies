"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[265],{265:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),i=r(791),s=r(87),a=r(689),c={general:"MovieDetails_general__1cG7f",movieDetails:"MovieDetails_movieDetails__NOYhf",movie:"MovieDetails_movie__rFuvp",movieDescription:"MovieDetails_movieDescription__5mfmg",overView:"MovieDetails_overView__OgTbG",movieAdd:"MovieDetails_movieAdd__ANLi3"},o=r(391),u=r(184),v=(0,i.lazy)((function(){return r.e(328).then(r.bind(r,76))})),l=(0,i.lazy)((function(){return r.e(946).then(r.bind(r,168))}));var d=function(){var e,t,r,d,f=(0,a.UO)().idMovie,p=(0,a.TH)(),m=(0,i.useState)(null),h=(0,n.Z)(m,2),x=h[0],j=h[1];if((0,i.useEffect)((function(){(0,o.Pg)(f).then((function(e){j(e)}))}),[f]),x){var w=x.genres.map((function(e){return e.name})).join(", ");return(0,u.jsxs)("div",{className:c.general,children:[(0,u.jsxs)("div",{className:c.movieDetails,children:[(0,u.jsxs)("div",{className:c.movie,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+x.poster_path,alt:x.title}),(0,u.jsxs)("div",{className:c.movieDescription,children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Title: "}),x.title]}),(0,u.jsx)(s.rU,{to:null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:(0,u.jsx)("button",{children:"Back"})})]}),(0,u.jsxs)("p",{className:c.overView,children:[(0,u.jsx)("strong",{children:"Overview: "}),x.overview]}),w&&(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Genres: "}),w]})]})]}),(0,u.jsxs)("div",{className:c.movieAdd,children:[(0,u.jsx)(s.rU,{to:"cast",className:c.movieCast,state:{from:null===(r=p.state)||void 0===r?void 0:r.from},children:(0,u.jsx)("button",{children:"Cast"})}),(0,u.jsx)(s.rU,{to:"reviews",className:c.movieReviews,state:{from:null===(d=p.state)||void 0===d?void 0:d.from},children:(0,u.jsx)("button",{children:"Reviews"})})]})]}),(0,u.jsxs)(a.Z5,{children:[(0,u.jsx)(a.AW,{path:"cast",element:(0,u.jsx)(v,{})}),(0,u.jsx)(a.AW,{path:"reviews",element:(0,u.jsx)(l,{})})]})]})}}},391:function(e,t,r){r.d(t,{JN:function(){return c},Ku:function(){return v},Pg:function(){return u},Ph:function(){return o},W_:function(){return l}});var n=r(861),i=r(757),s=r.n(i),a=r(263);a.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.Z.defaults.params={api_key:"7cc8f2b59ca60b1fd201f6b47b1838fe"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=265.6e275558.chunk.js.map