"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return y}});var r,i,o,c,u,a=t(5861),s=t(9439),f=t(4687),h=t.n(f),p=t(2791),d=t(7689),l=t(168),v=t(5706),g=v.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n  list-style: none;\n  width: 1200px;\n  margin: 0;\n  padding: 0 20px;\n"]))),x=v.Z.li(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),m=v.Z.h3(o||(o=(0,l.Z)(["\n  padding: 0;\n  margin: 0;\n\n  font-size: 20px;\n  font-weight: 700;\n"]))),w=v.Z.h3(c||(c=(0,l.Z)(["\n  padding: 0;\n  margin: 0 auto;\n\n  font-size: 20px;\n  font-weight: 700;\n"]))),Z=v.Z.p(u||(u=(0,l.Z)(["\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n"]))),_=t(184),y=function(){var n=(0,p.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,d.UO)().moviesId;return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(i,"/reviews?").concat("api_key=fcd230550d5bc22e169a178a7e9d550c","&language=en-US")).then((function(n){return n.json()})).then((function(n){r(n.results)})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[i]),t.length?(0,_.jsx)(g,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,_.jsxs)(x,{children:[(0,_.jsx)(m,{children:t}),(0,_.jsx)(Z,{children:r})]},e)}))}):(0,_.jsx)(w,{children:"There is no reviews about this movie"})}},5861:function(n,e,t){function r(n,e,t,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var c=n.apply(e,t);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=779.54749196.chunk.js.map