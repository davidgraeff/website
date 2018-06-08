(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{619:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("The Scale Transformation Service is a an easy to handle tool that can help you with the discretization of number inputs.\nIt transforms a given input by matching it to specified ranges.\nThe input string must be in numerical format.")]),t._m(1),s("p",[t._v("Range expressions always contain two parts.\nThe range to scale on, which is located left from the equality sign and the corresponding output string on the right of it.\nA range consists of two bounds. Both are optional, the range is then open. Both bounds can be inclusive or exclusive.")]),t._m(2),s("p",[t._v("These expressions are evaluated from top to bottom.\nThe first range that includes the value is selected.")]),t._m(3),s("p",[t._v("The following example shows how to break down numeric UV values into fixed UV index categories.\nWe have an example UV sensor that sends numeric values from "),s("code",[t._v("0")]),t._v(" to "),s("code",[t._v("100")]),t._v(", which we then want to scale into the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ultraviolet_index",target:"_blank",rel:"noopener noreferrer"}},[t._v("UV Index"),s("OutboundLink")],1),t._v(" range.")]),s("p",[t._v("Example item:")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"scale-transformation-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scale-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Scale Transformation Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The file is expected to exist in the "),e("code",[this._v("transform")]),this._v(" configuration directory and its ending has to be "),e("code",[this._v(".scale")]),this._v(".\nIt should follow the format given in the table below.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Scale Expression")]),s("th",[t._v("Returns XYZ when the given value is")])])]),s("tbody",[s("tr",[s("td",[s("code",[t._v("[12..23]=XYZ")])]),s("td",[s("code",[t._v("between (or equal to) 12 and 23")])])]),s("tr",[s("td",[s("code",[t._v("]12..23[=XYZ")])]),s("td",[s("code",[t._v("between 12 and 23 (12 and 23 are excluded in this case.)")])])]),s("tr",[s("td",[s("code",[t._v("[..23]=XYZ")])]),s("td",[s("code",[t._v("lower than or equal to 23")])])]),s("tr",[s("td",[s("code",[t._v("]12..]=XYZ")])]),s("td",[s("code",[t._v("greater than 12")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[this._v("Number")]),this._v(" "),e("span",{attrs:{class:"token class-name"}},[this._v("Uv_Sensor_Level")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v('"UV Level [SCALE(uvindex.scale):%s]"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Referenced scale file "),e("code",[this._v("uvindex.scale")]),this._v(" in the "),e("code",[this._v("transform")]),this._v(" folder:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token number"}},[t._v(".3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token number"}},[t._v(".6")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token number"}},[t._v("6")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token number"}},[t._v(".8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token number"}},[t._v(".10")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token number"}},[t._v(".100")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Each value the item receives, will be categorized to one of the five given ranges.\nValues "),s("strong",[t._v("lower than or equal to 3")]),t._v(" are matched with "),s("code",[t._v("[..3]=1")]),t._v(".\nGreater values are catched in ranges with 2 values as criteria.\nThe only condition here is that the received value has to be lower or equal than "),s("code",[t._v("100")]),t._v(" in our example, since we haven't defined other cases yet.\nIf "),s("strong",[t._v("none")]),t._v(" of the configured conditions matches the given value, the response will be empty.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that all ranges for values above "),e("strong",[this._v("3")]),this._v(" are opened with a "),e("code",[this._v("]")]),this._v(".\nSo the border values (3, 6, 8 and 10) are always transformed to the lower range, since the "),e("code",[this._v("]")]),this._v(" excludes the given critera.")])}],!1,null,null,null);e.default=n.exports}}]);