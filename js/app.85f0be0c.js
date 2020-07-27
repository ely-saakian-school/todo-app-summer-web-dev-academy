(function(t){function e(e){for(var o,d,u=e[0],a=e[1],c=e[2],l=0,p=[];l<u.length;l++)d=u[l],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&p.push(r[d][0]),r[d]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=d(d.s=n[0]))}return t}var o={},r={app:0},i=[];function d(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=o,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)d.d(n,o,function(e){return t[e]}.bind(null,o));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"09ad":function(t,e,n){"use strict";var o=n("d237"),r=n.n(o);r.a},"116a":function(t,e,n){"use strict";var o=n("bbc3"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("AddTodo",{on:{"todo:add":t.addTodo}}),n("TodoList",{attrs:{todos:t.todosList},on:{"todo:delete":t.deleteTodo}})],1)},i=[],d=(n("99af"),n("4de4"),n("d3b7"),n("2909")),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Vue.js Intro, Todo App Demo")])])}],c={name:"TheHeader"},s=c,l=(n("116a"),n("2877")),p=Object(l["a"])(s,u,a,!1,null,"69dc930f",null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.handleAddTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text",placeholder:"Enter a todo"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Add"}})])},m=[],v={name:"AddTodo",data:function(){return{input:""}},methods:{handleAddTodo:function(){if(this.input){var t={id:Date.now(),title:this.input,completed:!1};this.$emit("todo:add",t),this.input=""}}}},b=v,y=(n("09ad"),Object(l["a"])(b,h,m,!1,null,"74e6430e",null)),_=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{mode:"out-in",name:"empty"}},[t.todos.length?n("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.todos,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"flex-container"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.completed}}),n("div",[t._v(t._s(e.title))])]),n("div",[n("button",{on:{click:function(n){return t.$emit("todo:delete",e.id)}}},[t._v("X")])])])})),0):n("p",[t._v("No todos")])],1)],1)},j=[],T={name:"TodoList",props:{todos:Array}},O=T,x=(n("c10b"),Object(l["a"])(O,g,j,!1,null,"c761de92",null)),w=x.exports,k={name:"App",components:{TheHeader:f,TodoList:w,AddTodo:_},data:function(){return{todosList:[{id:1,title:"kajdnfg",completed:!1},{id:2,title:"kajdnfg",completed:!0},{id:3,title:"kajdnfg",completed:!1}]}},methods:{addTodo:function(t){this.todosList=[].concat(Object(d["a"])(this.todosList),[t])},deleteTodo:function(t){this.todosList=this.todosList.filter((function(e){return e.id!==t}))}},created:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return t.json()})).then((function(e){return t.todosList=e}))}},L=k,A=(n("034f"),Object(l["a"])(L,r,i,!1,null,null,null)),P=A.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,n){},bbc3:function(t,e,n){},c10b:function(t,e,n){"use strict";var o=n("d8af"),r=n.n(o);r.a},d237:function(t,e,n){},d8af:function(t,e,n){}});
//# sourceMappingURL=app.85f0be0c.js.map