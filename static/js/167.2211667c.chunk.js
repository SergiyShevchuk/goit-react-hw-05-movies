"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[167],{4167:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),a=n(2791),c=n(6871),u=n(4800),s=n(184),i=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.Z.getMovieReviews(o).then(i).catch((function(e){return console.log(e)}))}),[o]),(0,s.jsxs)("div",{children:[n.length>0&&(0,s.jsx)("ul",{children:n.map((function(e,t){var n=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("p",{children:r})]},t)}))}),0===n.length&&(0,s.jsx)("h1",{children:"Nobody left a review on this movie yet"})]})}},4800:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),u=n(4569);u.defaults.baseURL="https://api.themoviedb.org/3/";var s="6fcd47491cc2d89a885f0d4d16c2434f",i={getTrending:function(){return(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},getDetailed:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getMovieCredits:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))()},getMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()},getMoviesOnQuery:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()}};t.Z=i}}]);
//# sourceMappingURL=167.2211667c.chunk.js.map