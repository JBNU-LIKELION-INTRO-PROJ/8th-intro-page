(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(t,e,s){"use strict";var a=s(1),n=s(100)(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(162)("includes")},258:function(t,e,s){"use strict";var a=s(1),n=s(98);a(a.P+a.F*s(99)("includes"),"String",{includes:function(t){return!!~n(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},263:function(t,e){},266:function(t,e,s){"use strict";s(257),s(258);var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=s(13),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between text-xl items-center"},[s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),s("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=o.exports},270:function(t,e,s){"use strict";var a=s(263),n=s.n(a);e.default=n.a},281:function(t,e,s){"use strict";s.r(e);var a={metaInfo:{title:"Blog"},components:{PaginationPosts:s(266).a}},n=s(13),o=s(270),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"container-inner mx-auto py-16"},[t._l(t.$page.posts.edges,(function(e){return s("div",{key:e.id,staticClass:"post border-gray-400 border-b mb-12"},[s("h2",{staticClass:"text-3xl font-bold"},[s("g-link",{staticClass:"text-copy-primary",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),s("div",{staticClass:"text-copy-secondary mb-4"},[s("span",[t._v(t._s(e.node.date))]),s("span",[t._v(" · ")]),s("span",[t._v(t._s(e.node.timeToRead)+" min read")])]),s("div",{staticClass:"text-lg mb-4"},[t._v("\n        "+t._s(e.node.summary)+"\n      ")]),s("div",{staticClass:"mb-8"},[s("g-link",{staticClass:"font-bold uppercase",attrs:{to:e.node.path}},[t._v("Read More")])],1)])})),t.$page.posts.pageInfo.totalPages>1?s("pagination-posts",{attrs:{base:"/blog",totalPages:t.$page.posts.pageInfo.totalPages,currentPage:t.$page.posts.pageInfo.currentPage}}):t._e()],2)])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(r);e.default=r.exports}}]);