"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return w}});var i,r,a,c=e(5861),o=e(9439),u=e(4687),s=e.n(u),f=e(2791),p=e(7689),d=e(168),h=e(5706),l=h.Z.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]))),g=h.Z.li(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  gap: 20px;\n"]))),x=h.Z.h3(a||(a=(0,d.Z)(["\n  padding: 0;\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n"]))),m=e(559),v=e(184),w=function(){var n=(0,f.useState)([]),t=(0,o.Z)(n,2),e=t[0],i=t[1],r=(0,p.UO)().moviesId;return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(r,"/credits?").concat("api_key=fcd230550d5bc22e169a178a7e9d550c","&language=en-US")).then((function(n){return n.json()})).then((function(n){i(n.cast)})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[r]),e.length?(0,v.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.profile_path,i=n.name,r=n.character;return(0,v.jsxs)(g,{children:[(0,v.jsx)("img",{src:e?"".concat("https://image.tmdb.org/t/p/w200").concat(e):"https://via.placeholder.com/200x300",alt:i,width:"200",height:"300"}),(0,v.jsx)(x,{children:i}),(0,v.jsxs)(x,{children:["Character: ",r]})]},t)}))}):(0,v.jsx)(m.xo,{children:"There is no casts about this movie"})}},559:function(n,t,e){e.d(t,{GI:function(){return p},To:function(){return l},jK:function(){return f},kP:function(){return d},xo:function(){return h}});var i,r,a,c,o,u=e(168),s=e(5706),f=s.Z.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]))),p=s.Z.li(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),d=s.Z.h3(a||(a=(0,u.Z)(["\n  padding: 0;\n  margin: 0;\n\n  font-size: 20px;\n  font-weight: 700;\n"]))),h=s.Z.h3(c||(c=(0,u.Z)(["\n  padding: 0;\n  margin: 0 auto;\n\n  font-size: 20px;\n  font-weight: 700;\n"]))),l=s.Z.p(o||(o=(0,u.Z)(["\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n"])))},5861:function(n,t,e){function i(n,t,e,i,r,a,c){try{var o=n[a](c),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(i,r)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var c=n.apply(t,e);function o(n){i(c,r,a,o,u,"next",n)}function u(n){i(c,r,a,o,u,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=387.53e325f7.chunk.js.map