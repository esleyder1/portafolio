(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"14a3":function(t,e,r){"use strict";var n=r("88a7"),a=r.n(n);a.a},1766:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"projects__container"},t._l(t.wantedRepos,(function(e,n){return r("section",{key:n,staticClass:"card"},[r("div",[r("header",{staticClass:"header"},[r("div",{staticClass:"repo-name"},[r("a",{attrs:{href:e.svn_url}},[t._v(" "+t._s(e.name)+" ")])]),r("div",{staticClass:"lang"},[r("span"),r("div",[t._v(" "+t._s(e.language)+" ")])])]),r("div",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")]),r("footer",{staticClass:"buttons"},[r("a",{attrs:{href:e.svn_url}},[r("i",{staticClass:"fab fa-github"}),t._v(" CODE ")]),r("a",{attrs:{href:e.homepage}},[r("i",{staticClass:"fas fa-play-circle"}),t._v(" DEMO ")])])])])})),0)},a=[],s=(r("4de4"),r("d3b7"),r("b85c")),i={name:"project",data:function(){return{repos:[]}},computed:{wantedRepos:function(){return this.repos.filter((function(t){return t.homepage||t.stargazers_count>0}))}},beforeCreate:function(){var t=this;fetch("https://api.github.com/users/ahmedaltaai/repos?type=public").then((function(t){return t.json()})).then((function(e){t.repos=e}))},updated:function(){var t,e=document.querySelectorAll(".lang"),r=Object(s["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;"PHP"===n.innerText?n.firstChild.style.backgroundColor="#4F5D95":"HTML"===n.innerText?n.firstChild.style.backgroundColor="#e34c26":"JavaScript"===n.innerText?n.firstChild.style.backgroundColor="#f1e05a":"CSS"===n.innerText?n.firstChild.style.backgroundColor="#563d7c":"C"===n.innerText?n.firstChild.style.backgroundColor="#f34b7d":"C++"===n.innerText||"Java"===n.innerText?n.firstChild.style.backgroundColor="#b07219":"Python"===n.innerText?n.firstChild.style.backgroundColor="#3572A5":"Vue"===n.innerText?n.firstChild.style.backgroundColor="#2c3e50":"TypeScript"===n.innerText&&(n.firstChild.style.backgroundColor="#2b7489")}}catch(a){r.e(a)}finally{r.f()}}},o=i,c=(r("14a3"),r("2877")),l=Object(c["a"])(o,n,a,!1,null,"384891ba",null);e["default"]=l.exports},"88a7":function(t,e,r){}}]);
//# sourceMappingURL=project.8ec30b25.js.map