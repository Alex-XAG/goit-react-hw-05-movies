"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[251],{5251:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,c,u,s=t(5861),l=t(9439),d=t(4687),p=t.n(d),f=t(2791),x=t(1087),h=t(7689),g=t(168),b=t(5706),v=b.Z.ul(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]))),y=b.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),m=b.Z.form(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 2px solid gold;\n  padding: 30px;\n  width: 100%;\n"]))),Z=b.Z.input(a||(a=(0,g.Z)(["\n  border: 2px solid gold;\n  border-radius: 10px;\n  font-size: 18px;\n  padding: 10px;\n  width: 400px;\n"]))),j=b.Z.button(c||(c=(0,g.Z)(["\n  border: 2px solid gold;\n  border-radius: 10px;\n  font-size: 18px;\n  padding: 10px;\n  background-color: #fff;\n\n  :hover {\n    background-color: beige;\n    border: 2px solid black;\n  }\n"]))),w=(0,b.Z)(x.rU)(u||(u=(0,g.Z)(["\n  text-decoration: none;\n  color: black;\n  border-radius: 10px;\n  padding: 10px 30px;\n\n  :hover {\n    background-color: beige;\n  }\n"]))),k=t(854),_=t(184),S=function(){var n,e=(0,f.useState)(""),t=(0,l.Z)(e,2),r=t[0],i=t[1],o=(0,f.useState)([]),a=(0,l.Z)(o,2),c=a[0],u=a[1],d=(0,f.useState)(!1),g=(0,l.Z)(d,2),b=g[0],S=g[1],q=(0,x.lr)(),C=(0,l.Z)(q,2),z=C[0],P=C[1],T=(0,h.TH)(),U=null!==(n=z.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(U){S(!0);var n=function(){var n=(0,s.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/search/movie","?").concat("api_key=fcd230550d5bc22e169a178a7e9d550c","&query=").concat(U,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){u(n.results)})).catch((function(n){return console.error(n)})).finally(S(!1));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[U]);return(0,_.jsxs)(y,{children:[(0,_.jsxs)(m,{onSubmit:function(n){n.preventDefault(),r?(P({query:r}),n.currentTarget.reset()):alert("Select any query")},children:[(0,_.jsx)(Z,{type:"text",value:r,onChange:function(n){i(n.target.value)}}),(0,_.jsx)(j,{type:"submit",children:"Search"})]}),(0,_.jsx)(v,{children:c.map((function(n){return(0,_.jsx)("li",{children:(0,_.jsx)(w,{to:"".concat(n.id),state:{from:T},children:n.original_title})},n.id)}))}),!c.length&&(0,_.jsx)("p",{children:"We have not any results by your query"}),b&&(0,_.jsx)(k.a,{})]})}},854:function(n,e,t){t.d(e,{a:function(){return o}});var r=t(8966),i=t(184),o=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})})}},5861:function(n,e,t){function r(n,e,t,r,i,o,a){try{var c=n[o](a),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var a=n.apply(e,t);function c(n){r(a,i,o,c,u,"next",n)}function u(n){r(a,i,o,c,u,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=251.8db14147.chunk.js.map