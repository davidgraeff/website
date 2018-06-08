(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{623:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This page describes the Global Cache IR binding (1.x), which allows openHAB items to send commands to the corresponding IR devices from one or more instances of Global Cache.")]),t._m(1),a("p",[t._v("There is also a binding specifically for openHAB 2 "),a("router-link",{attrs:{to:"/addons/bindings/globalcache/"}},[t._v("here")]),t._v(".")],1),t._m(2),t._m(3),a("p",[t._v("The Global Cache IR binding allows you to define named instances of Global Cache device in your configuration. When defining your item configuration, you can use the name to refer to your instances.  In doing so, you can easily change the address by which your Global Cache instance can be reached without having to reconfigure all of your items.")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("Where")]),a("ul",[t._m(10),t._m(11),t._m(12),a("li",[a("code",[t._v("<code>")]),t._v(" is the Global Cache format IR code which is to be sent over IR devices as a command through GC100. For conversion between Global Cache format IR codes and Hex (CCF) codes, you can download iConvert tool (Windows only) from "),a("a",{attrs:{href:"http://www.globalcache.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Global Cache"),a("OutboundLink")],1),t._v(" downloads page. You can also download different IR Hex (CCF) codes to control other devices from "),a("a",{attrs:{href:"http://www.remotecentral.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.remotecentral.com"),a("OutboundLink")],1),t._v(".")])]),t._m(13),a("p",[t._v("The following example is tested with DENON 1940CI DVD player to control it using IR receiver through global cache. IR receiver receives the IR pulse from Global Cache device and sends it as IR command to the DVD player.")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),a("p",[t._v("This binding works with the iTach devices. For configuration, use 1 for module and 1-3 for connectors, depending on which connector your IR emitter is connected.")]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"global-cache-ir-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-cache-ir-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Cache IR Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.smarthome.com/media/catalog/product/8/1/8115big.jpg",alt:"Global Cache Device"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the "),e("code",[this._v("services/gc100ir.cfg")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("<instance>")]),t._v(".host")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("IP address of the GC100 device")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Where "),e("code",[this._v("<instance>")]),this._v(" is the name by which you can refer to this instance in your item configuration.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("living.host=192.168.2.70\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('gc100ir="{[<instance>|<module>|<connector>|<code>]}"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("<instance>")]),this._v(" is prefixed by ‘#’, a named instance configured in the "),e("code",[this._v("services/gc100ir.cfg")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("<module>")]),this._v(" is the numeric value which specifies the module number of GC100.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("<connector>")]),this._v(" is the numeric value which specifies the connector number of GC100.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://static.trustedreviews.com/94/8d9886/6e1c/7077-dendvd1940bk.jpg",alt:"DENON 1940CI DVD Player"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("\t"),a("span",{attrs:{class:"token class-name"}},[t._v("GC100_IR_DENON_DVD_LIVING_POWER_MODE_ON")]),t._v("\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" gc100ir"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"[#living|4|1|38028,1,1,10,31,10,31,10,31,10,71,10,31,10,70,10,31,10,31,10,31,10,70,10,70,10,31,10,71,10,31,10,31,10,1765,10,31,10,31,10,31,10,71,10,31,10,31,10,71,10,70,10,71,10,31,10,31,10,70,10,31,10,71,10,71,10,1685,10,31,10,31,10,31,10,71,10,31,10,71,10,31,10,31,10,31,10,70,10,70,10,31,10,71,10,31,10,31,10,1764]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sitemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Sitemap")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t"),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GC100_IR_DENON_DVD_LIVING_POWER_MODE_ON  "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Power ON"')]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("POWERON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"POWER ON"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t"),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GC100_IR_DENON_DVD_LIVING_POWER_MODE_STANDBY  "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Stand by"')]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("STANDBY"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"STAND BY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t"),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GC100_IR_DENON_DVD_LIVING_PLAY_STATE  "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Play"')]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PLAY"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PLAY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t"),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("GC100_IR_DENON_DVD_LIVING_PAUSE_STATE  "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Pause"')]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PAUSE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PAUSE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"itach-ip2ir-and-wf2ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#itach-ip2ir-and-wf2ir","aria-hidden":"true"}},[this._v("#")]),this._v(" iTach IP2IR and WF2IR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://i0.wp.com/www.globalcache.com/wp-content/uploads/2009/10/iTachIP2IR-medtrans.png?resize=150%2C128",alt:""}})])}],!1,null,null,null);e.default=n.exports}}]);