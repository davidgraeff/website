(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{428:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("AddonLogo"),s("p",[t._v("This binding integrates the "),s("a",{attrs:{href:"http://www.samsung.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Samsung TV's"),s("OutboundLink")],1),t._v(".")]),t._m(1),s("p",[t._v("Samsung TV C (2010), D (2011), E (2012) and F (2013) models should be supported.\nBecause Samsung does not publish any documentation about the TV's UPnP interface, there could be differences between different TV models, which could lead to mismatch problems.")]),s("p",[t._v("Tested TV models:")]),t._m(2),t._m(3),s("p",[t._v("The TV's are discovered through UPnP protocol in the local network and all devices are put in the Inbox.")]),t._m(4),s("p",[t._v("The binding does not require any special configuration.")]),t._m(5),s("p",[t._v("The Samsung TV Thing requires the host name and port address as a configuration value in order for the binding to know how to access it. Samsung TV publish several UPnP devices and hostname is used to recognize those UPnP devices.\nPort address is used for remote control emulation protocol.\nAdditionally, a refresh interval can be configured in milliseconds to specify how often TV resources are polled.")]),s("p",[t._v("E.g.")]),t._m(6),t._m(7),s("p",[t._v("TVs support the following channels:")]),t._m(8),s("p",[t._v("E.g.")]),t._m(9),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"samsung-tv-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#samsung-tv-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Samsung TV Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Model")]),s("th",[t._v("State")]),s("th",[t._v("Notes")])])]),s("tbody",[s("tr",[s("td",[t._v("UE46E5505")]),s("td",[t._v("OK")]),s("td",[t._v("Initial contribution is done by this model")])]),s("tr",[s("td",[t._v("UE46D5700")]),s("td",[t._v("PARTIAL")]),s("td",[t._v("Supports at my home only commands via the fake remote, no discovery")])]),s("tr",[s("td",[t._v("UE40F6500")]),s("td",[t._v("OK")]),s("td",[t._v("All channels except "),s("code",[t._v("colorTemperature")]),t._v(", "),s("code",[t._v("programTitle")]),t._v(" and "),s("code",[t._v("channelName")]),t._v(" are working")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("samsungtv"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tv"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("livingroom")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostName"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"192.168.1.10"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("55000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refreshInterval"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),s("th",[t._v("Item Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("volume")]),s("td",[t._v("Dimmer")]),s("td",[t._v("Volume level of the TV.")])]),s("tr",[s("td",[t._v("mute")]),s("td",[t._v("Switch")]),s("td",[t._v("Mute state of the TV.")])]),s("tr",[s("td",[t._v("brightness")]),s("td",[t._v("Dimmer")]),s("td",[t._v("Brightness of the TV picture.")])]),s("tr",[s("td",[t._v("contrast")]),s("td",[t._v("Dimmer")]),s("td",[t._v("Contrast of the TV picture.")])]),s("tr",[s("td",[t._v("sharpness")]),s("td",[t._v("Dimmer")]),s("td",[t._v("Sharpness of the TV picture.")])]),s("tr",[s("td",[t._v("colorTemperature")]),s("td",[t._v("Number")]),s("td",[t._v("Color temperature of the TV picture. Minimum value is 0 and maximum 4.")])]),s("tr",[s("td",[t._v("sourceName")]),s("td",[t._v("String")]),s("td",[t._v("Name of the current source.")])]),s("tr",[s("td",[t._v("sourceId")]),s("td",[t._v("Number")]),s("td",[t._v("Id of the current source.")])]),s("tr",[s("td",[t._v("channel")]),s("td",[t._v("Number")]),s("td",[t._v("Selected TV channel number.")])]),s("tr",[s("td",[t._v("programTitle")]),s("td",[t._v("String")]),s("td",[t._v("Program title of the current channel.")])]),s("tr",[s("td",[t._v("channelName")]),s("td",[t._v("String")]),s("td",[t._v("Name of the current TV channel.")])]),s("tr",[s("td",[t._v("url")]),s("td",[t._v("String")]),s("td",[t._v("Start TV web browser and go the given web page.")])]),s("tr",[s("td",[t._v("stopBrowser")]),s("td",[t._v("Switch")]),s("td",[t._v("Stop TV's web browser and go back to TV mode.")])]),s("tr",[s("td",[t._v("power")]),s("td",[t._v("Switch")]),s("td",[t._v("TV power. Some of the Samsung TV models doesn't allow to set Power ON remotely.")])]),s("tr",[s("td",[t._v("keyCode")]),s("td",[t._v("String")]),s("td",[t._v("The key code channel emulates the infrared remote controller and allows to send virtual button presses.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("TV_Volume")]),t._v("   "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:volume"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("TV_Mute")]),t._v("     "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:mute"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("TV_KeyCode")]),t._v("  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:keyCode"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);