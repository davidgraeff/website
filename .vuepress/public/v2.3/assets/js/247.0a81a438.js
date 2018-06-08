(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{506:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("This binding allows openHAB to check whether a device is currently available on the network.")]),a("p",[e._v("There is also a binding specifically for openHAB 2 "),a("router-link",{attrs:{to:"/addons/bindings/network/"}},[e._v("here")]),e._v(".")],1),e._m(1),e._m(2),e._m(3),a("p",[e._v("Example: with a default refresh interval of 60 sec and 20 items, there are 20 * 60 * 24 = 28800 events per day, no matter whether the states change or not.")]),a("p",[e._v("Setting a cache period of 60 minutes, there are just 20 * 24 = 480 events per day, plus the actual changes.")]),a("p",[e._v("Worst case that could happen is that an item is changed by someone else (e.g. via a client or after item configuration reload) and might be out of sync with the NH cache until the next cache period is over. So the cache period should only be used if the Network Health binding is the only one changing these particular item states.")]),e._m(4),a("p",[e._v("The syntax for the NetworkHealth binding configuration string is explained here:")]),e._m(5),e._m(6),a("p",[e._v("Here are some examples of valid binding configuration strings:")]),e._m(7),e._m(8),e._m(9),e._m(10),a("p",[e._v("If the openHAB server user does not have permission to use ICMP for the ping, then Java will attempt to use the Echo server (port 7) on the remote device. If that service is not available, then the ping attempt fails.")]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"network-health-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-health-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Network Health Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the file "),t("code",[this._v("services/networkhealth.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),a("th",[e._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),a("th",[e._v("Description")])])]),a("tbody",[a("tr",[a("td",[e._v("timeout")]),a("td",[e._v("5000")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),a("td",[e._v("the default timeout (in milliseconds) if none is specified in the item configuration (see below)")])]),a("tr",[a("td",[e._v("refresh")]),a("td",[e._v("60000")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),a("td",[e._v("the interval (in milliseconds) that the binding checks for host reachability. This means that state updates for all items are sent to the event bus once per minute, even though the state does not change.  Assuming that the Network Health binding is the only one changing the items, these state updates are actually not needed.  This is where the new configuration of "),a("code",[e._v("cachePeriod")]),e._v(" comes into play.")])]),a("tr",[a("td",[e._v("cachePeriod")]),a("td",[e._v("0")]),a("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),a("td",[e._v("if set to a number larger than 0, the binding caches the states and does not send item updates for "),a("code",[e._v("cachePeriod")]),e._v(" minutes if the states do not change.  Setting the cache period does not introduce a permanent cache, so all item states are still updated after the configured cache period. Example: if "),a("code",[e._v("cachePeriod")]),e._v(" is 60, the online states are posted once per hour to the event bus; changes are always and immediately (refresh interval) posted to the event bus.  The recommended value is 60 minutes.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('nh="<hostname>[:port][:timeout]"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<hostname>")]),this._v(" is the name of the host to check, and the parts in "),t("code",[this._v("[]")]),this._v(" are optional. If no port is configured, a simple ping is issued. If no timeout is configured, the query defaults to "),t("code",[this._v("timeout")]),this._v(" milliseconds as set in the binding configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('nh="www.google.com:80"\nnh="openhab.org"\nnh="openhab.org:443"\nnh="openhab.org:443:2000"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("Network_OpenhabWebsite")]),e._v("   "),a("span",{attrs:{class:"token string"}},[e._v('"openHAB Web"')]),e._v("  "),a("span",{attrs:{class:"token tag"}},[e._v(" (Status, Network)")]),e._v("   "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" nh"),a("span",{attrs:{class:"token operator"}},[e._v("=")]),a("span",{attrs:{class:"token string"}},[e._v('"openhab.org:80"')]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"quirks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quirks","aria-hidden":"true"}},[this._v("#")]),this._v(" Quirks")])}],!1,null,null,null);t.default=s.exports}}]);