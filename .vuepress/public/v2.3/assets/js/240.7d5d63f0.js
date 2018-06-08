(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{495:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("The NTP binding is used for displaying the local date and time based update from an NTP server.")]),t._m(1),n("p",[t._v("This binding supports one ThingType: ntp")]),t._m(2),n("p",[t._v("Discovery is used to place one default item in the inbox as a convenient way to add a Thing for the local time.")]),t._m(3),n("p",[t._v("The binding has no configuration options, all configuration is done at Thing level.")]),t._m(4),n("p",[t._v("The thing has a few configuration options:")]),n("table",[t._m(5),n("tbody",[n("tr",[n("td",[t._v("hostname")]),n("td",[t._v("NTP host server, e.g. "),n("a",{attrs:{href:"http://nl.pool.ntp.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("nl.pool.ntp.org"),n("OutboundLink")],1)])]),t._m(6),t._m(7),t._m(8),t._m(9)])]),t._m(10),n("p",[t._v("The ntp binding has two channels:")]),t._m(11),n("p",[t._v("See the "),n("a",{attrs:{href:"http://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("java documentation"),n("OutboundLink")],1),t._v(" for the detailed information on the formatting")]),t._m(12),n("p",[t._v("Things:")]),t._m(13),n("p",[t._v("Items:")]),t._m(14),n("DocPreviousVersions"),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ntp-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ntp-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" NTP Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Option")]),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("refreshInterval")]),e("td",[this._v("Interval that new time updates are posted to the eventbus in seconds")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("refreshNtp")]),e("td",[this._v("Number of updates between querying the NTP server (e.g. with refreshinterval = 60 (seconds) and refreshNtp = 30 the NTP server is queried each half hour.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("timeZone")]),e("td",[this._v("Timezone, can be left blank for using the default system one")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("locale")]),e("td",[this._v("Locale, can be left blank for using the default system one")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("dateTime")]),this._v(" which provides the data in a dateTime type")]),e("li",[e("code",[this._v("string")]),this._v(" which provides the data in a string type. The string channel can be configured with the formatting of the date & time. This also allows proper representation of timezones other than the java machine default one.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ntp:ntp:demo  [ hostname="nl.pool.ntp.org", refreshInterval=60, refreshNtp=30 ]\n')])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),t._v("  "),n("span",{attrs:{class:"token string"}},[t._v('"Date [%1$tA, %1$td.%1$tm.%1$tY %1$tH:%1$tM]"')]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"ntp:ntp:demo:dateTime"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);