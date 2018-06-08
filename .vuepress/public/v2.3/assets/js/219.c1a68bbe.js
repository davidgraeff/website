(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{464:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("AddonLogo"),t._m(1),a("p",[t._v("The binding can auto-discover the Pioneer AVRs present on your local network.\nThe auto-discovery is enabled by default.\nTo disable it, you can create a file in the services directory called pioneeravr.cfg with the following content:")]),t._m(2),a("p",[t._v("This configuration parameter only control the PioneerAVR auto-discovery process, not the openHAB auto-discovery.\nMoreover, if the openHAB auto-discovery is disabled, the PioneerAVR auto-discovery is disabled too.")]),t._m(3),a("p",[t._v("In the things folder, create a file called pioneeravr.things (or any other name) and configure your AVRs inside.")]),a("p",[t._v("The binding can control AVRs through the local network (ipAvr/ipAvrUnsupported thing type) or through a Serial connection (serialAvr) if the AVR is directly connected to your computer.")]),a("p",[t._v("Configuration of ipAvr/ipAvrUnsupported:")]),t._m(4),a("p",[t._v("Configuration of serialAvr:")]),t._m(5),a("p",[t._v("Example:")]),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("Here after are the ID values of the input sources (depending on you AVR input sources might not be available):")]),t._m(10),t._m(11),a("p",[t._v("*demo.Things:")]),t._m(12),a("p",[t._v("*demo.items:")]),t._m(13),a("p",[t._v("*demo.sitemap:")]),t._m(14),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"pioneer-avr-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pioneer-avr-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Pioneer AVR Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("#Put your configuration here\norg.openhab.pioneeravr:enableAutoDiscovery=false\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("address: the hostname/ipAddress of the AVR on the local network. (mandatory)")]),s("li",[this._v("tcpPort: the port number to use to connect to the AVR. (optional, default to 23)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("serialPort: the name of the serial port on your computer. (mandatory)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('pioneeravr:ipAvr:vsx921IP [ address="192.168.1.25", tcpPort="23" ]\npioneeravr:serialAvr:vsx921Serial [ serialPort="COM9" ]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("power: power On/Off the AVR. Receive power events.")]),s("li",[this._v("volumeDimmer: Increase/Decrease the volume on the AVR or set the volume as %. Receive volume change events (in %).")]),s("li",[this._v("volumeDb: Set the volume of the AVR in dB (from -80.0 to 12 with 0.5 dB steps). Receive volume change events (in dB).")]),s("li",[this._v("mute: Mute/Unmute the AVR. Receive mute events.")]),s("li",[this._v("setInputSource: Set the input source of the AVR. See input source mapping for more details. Receive source input change events with the input source ID.")]),s("li",[this._v("displayInformation: Receive display events. Reflect the display on the AVR front panel.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"input-source-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-source-mapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Input Source Mapping")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("04: DVD")]),a("li",[t._v("25: BD")]),a("li",[t._v("05: TV/SAT")]),a("li",[t._v("06: SAT/CBL")]),a("li",[t._v("15: DVR/BDR")]),a("li",[t._v("10: VIDEO 1(VIDEO)")]),a("li",[t._v("14: VIDEO 2")]),a("li",[t._v("19: HDMI 1")]),a("li",[t._v("20: HDMI 2")]),a("li",[t._v("21: HDMI 3")]),a("li",[t._v("22: HDMI 4")]),a("li",[t._v("23: HDMI 5")]),a("li",[t._v("24: HDMI 6")]),a("li",[t._v("34: HDMI 7")]),a("li",[t._v("35: HDMI 8")]),a("li",[t._v("26: HOME MEDIA GALLERY(Internet Radio)")]),a("li",[t._v("44: Media Server")]),a("li",[t._v("38: Internet Radio")]),a("li",[t._v("17: iPod/USB")]),a("li",[t._v("48: MHL")]),a("li",[t._v("01: CD")]),a("li",[t._v("03: CD-R/TAPE")]),a("li",[t._v("02: TUNER")]),a("li",[t._v("00: PHONO")]),a("li",[t._v("13: USB-DAC")]),a("li",[t._v("12: MULTI CH IN")]),a("li",[t._v("33: ADAPTER PORT (BT)")]),a("li",[t._v("18: XM RADIO")]),a("li",[t._v("27: SIRIUS")]),a("li",[t._v("40: SiriusXM")]),a("li",[t._v("41: PANDORA")]),a("li",[t._v("45: Favourites")]),a("li",[t._v("57: Spotify")]),a("li",[t._v("31: HDMI (cyclic)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('pioneeravr:ipAvr:vsx921 [ address="192.168.188.89" ]\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* Pioneer AVR Items */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921PowerSwitch")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"Power"')]),t._v("                               "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:power"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921MuteSwitch")]),t._v("            "),a("span",{attrs:{class:"token string"}},[t._v('"Mute"')]),t._v("                   "),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:mute"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921VolumeDimmer")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.1f] %"')]),t._v("       "),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:volumeDimmer"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921VolumeNumber")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.1f] dB"')]),t._v("       "),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:volumeDb"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921InputSourceSet")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"Input"')]),t._v("                   "),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("       "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:setInputSource"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("vsx921InformationDisplay")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Information [%s]"')]),t._v("       "),a("span",{attrs:{class:"token function"}},[t._v(" <none>")]),t._v("        "),a("span",{attrs:{class:"token tag"}},[t._v(" (All)")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"pioneeravr:ipAvr:vsx921:displayInformation"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Pioneer AVR"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921PowerSwitch\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921MuteSwitch "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Mute"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OFF"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Un-Mute"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921VolumeDimmer\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921VolumeNumber "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"-80"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"12"')]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"0.5"')]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921InputSourceSet "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("04")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"DVD"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"DVR/BDR"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("25")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"BD"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vsx921InformationDisplay\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);