webpackJsonp([2,4],{17:function(t,i,a){"use strict";function s(t){a(27)}Object.defineProperty(i,"__esModule",{value:!0});var n=a(25),e=a(29),l=a(2),o=s,r=l(n.a,e.a,!1,o,null,null);i.default=r.exports},20:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(34),n=a(47),e=a(2),l=e(s.a,n.a,!1,null,null,null);i.default=l.exports},25:function(t,i,a){"use strict";i.a={props:{quantity:{type:Number,required:!0},percen:{type:Number,required:!0}}}},27:function(t,i,a){var s=a(28);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(16)("7edb3353",s,!0,{})},28:function(t,i,a){i=t.exports=a(15)(!0),i.push([t.i,".bullet{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.bulletComponent{width:30px;background:gray;height:30px;margin:auto;border-radius:360px}.isTrue{background:blue}@media only screen and (max-width:600px){.bulletComponent{width:15px;height:15px}}","",{version:3,sources:["G:/RekapanTugas/Kuliah/_Semester7/Project/mypage/mypage/src/components/support/bulletValue.vue"],names:[],mappings:"AACA,QACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,UAAY,CACf,AACD,iBACI,WAAY,AACZ,gBAAiB,AACjB,YAAa,AACb,YAAa,AACb,mBAAqB,CACxB,AACD,QACI,eAAiB,CACpB,AACD,yCACA,iBACI,WAAY,AACZ,WAAa,CAChB,CACA",file:"bulletValue.vue",sourcesContent:["\n.bullet{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n}\n.bulletComponent{\n    width: 30px;\n    background: gray;\n    height: 30px;\n    margin: auto;\n    border-radius: 360px;\n}\n.isTrue{\n    background: blue;\n}\n@media only screen and (max-width: 600px) {\n.bulletComponent{\n    width: 15px;\n    height: 15px;\n}\n}\n"],sourceRoot:""}])},29:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"bullet"},t._l(t.quantity,function(i){return a("div",{key:i,staticClass:"bulletComponent",class:i<=t.percen?"isTrue":""})}),0)},n=[],e={render:s,staticRenderFns:n};i.a=e},34:function(t,i,a){"use strict";var s=a(17);i.a={components:{"bullet-value":s.default},mounted:function(){this.$parent.activeTab="introductions"}}},47:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"introduction"}},[a("div",{staticClass:"columns"},[t._m(0),t._v(" "),a("div",{staticClass:"column textColor"},[t._m(1),t._v(" "),a("div",{staticClass:"informationBox"},[a("div",{staticClass:"titlePart"},[t._v("\n                Languages\n            ")]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"code"},[t._v("\n                  ID\n                ")]),t._v(" "),a("div",{staticClass:"graph"},[a("bullet-value",{attrs:{quantity:10,percen:10}})],1),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    100%\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"code"},[t._v("\n                  ENG\n                ")]),t._v(" "),a("div",{staticClass:"graph"},[a("bullet-value",{attrs:{quantity:10,percen:7}})],1),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    70%\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"code"},[t._v("\n                  CHN\n                ")]),t._v(" "),a("div",{staticClass:"graph"},[a("bullet-value",{attrs:{quantity:10,percen:3}})],1),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    30%\n                ")])])])])])])},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"column"},[a("div",{staticClass:"tagJob"},[t._v("CTO Yesplis & Web Developer")]),t._v(" "),a("h1",[t._v("Hello, I'm "),a("span",{staticClass:"textColor"},[t._v(" Rio Gunawan")])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"detail textColor",staticStyle:{"text-align":"justify"}},[t._v("\n                    Fullstack Web developer with 3 years of experience in structuring, developing, and implementing interactive website.  Specializing in back-end web development. Well-versed in numerous programming languages including Javascript, MySQL, Python, and PHP. \n                ")])]),t._v(" "),a("div",{staticClass:"informationBox"},[a("div",{staticClass:"identity"},[a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Nickname")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Rio")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Age")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("21 Years")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Job Title")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Web Developer")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Hobbies")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Swimming and watch movie")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Address")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Jalan Tambak Bayan V, nomor 5b.")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("City")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Yogyakarta")])]),t._v(" "),a("div",{staticClass:"identityList"},[a("div",{staticClass:"title"},[t._v("Country")]),t._v(" "),a("div",{staticClass:"information textColor"},[t._v("Indonesia")])])])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"informationBox"},[a("div",{staticClass:"titlePart"},[t._v("\n                Educations\n            ")]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"dateTime"},[t._v("\n                    2016-now\n                ")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    Informatic Engineering in University of Atma Jaya Yogyakarta\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"dateTime"},[t._v("\n                    2012-2016\n                ")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    Computer and Network Engineering in Vocational High School 1, Sorong City\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"dateTime"},[t._v("\n                    2010-2013\n                ")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    Donbosco Junior High School, Sorong City\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"dateTime"},[t._v("\n                    2009-2010\n                ")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    Kristus Raja, Sorong City\n                ")])]),t._v(" "),a("div",{staticClass:"informationPart"},[a("div",{staticClass:"dateTime"},[t._v("\n                    2004-2009\n                ")]),t._v(" "),a("div",{staticClass:"detail"},[t._v("\n                    Bodhicitta Elementary School, Medan City\n                ")])])])}],e={render:s,staticRenderFns:n};i.a=e}});
//# sourceMappingURL=2.b9a14d248c36c41ad32c.js.map