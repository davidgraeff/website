(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{674:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("The DMX binding integrates DMX devices. There are different output devices supported as well as Dimmers and Chasers.")]),s("p",[e._v("Each output device (bridges) is representing exactly one universe, each thing is bound to a bridge.\nAt least one bridge and one thing is needed for the binding to work properly.")]),e._m(1),e._m(2),s("p",[e._v("Two DMX over Ethernet devices are supported as DMX output:  ArtNet and sACN/E1.31.\nThe ArtNet bridge can only be operated in unicast mode (broadcast mode is not supported as the specification recommends using it if more than 40 nodes are connected, which is unlikely in the case of a smarthome).\nThe sACN bridge supports both, unicast and multicast.")]),s("p",[e._v("Additionally Lib485 devices are supported via the Lib485 bridge.")]),e._m(3),s("p",[e._v("The most generic thing is a dimmer.\nA dimmer can contain one or more DMX channels.\nIt can be bound to Switch and Dimmer items.\nIf more than one DMX channel is defined, the item will be updated according to the state of the first DMX channel.\nThere are two other things similar to the dimmer thing.\nOne is the color thing, it can be bound to Switch, Dimmer or Color Items and is best used for RGB lamps.\nThe second one is the tunable white thing, it allows to control the color temperature of lamps with seperate DMX channels for cool white and warm white.")]),s("p",[e._v("The last supported thing is a chaser.\nIt can contain one or more DMX channels and binds to Switch items only.\nIf the thing receives an ON command all running fades in all channels are either suspended (if resumeAfter is set to true) or cleared and replaced with the fades defined in this thing.\nAn OFF command stops the fades and either restores the previously suspended fades (if resumeAfter is set to true) or just holds the current values.\nIf any of the DMX channels in a chaser receives a command from another thing, the status of the chaser is updated to OFF.\nChaser things define a control channel that can be used to dynamically change the chasers fade configuration.")]),e._m(4),s("p",[e._v("Discovery is not supported at the moment. You have to add all bridges and things manually.")]),e._m(5),s("p",[e._v("Since the brightness perception of the human eye is not linear, all bridges support "),s("code",[e._v("applycurve")]),e._v(",  a list of channels "),s("code",[e._v("applycurve")]),e._v(" that have a CIE 1931 lightness correction (cf. "),s("a",{attrs:{href:"http://www.poynton.com/PDFs/SMPTE93_Gamma.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Poynton, C.A.: “Gamma” and its Disguises: The Nonlinear Mappings of Intensity in Perception, CRTs, Film and Video, SMPTE Journal Dec. 1993, pp. 1099 - 1108"),s("OutboundLink")],1),e._v(") applied.\nThis list follows the format of the thing channel definition.\nThis is used regardless of the thing(s) that are associated to the channel.")]),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31),e._m(32),e._m(33),e._m(34),e._m(35),e._m(36),e._m(37),e._m(38),s("p",[e._v("This example defines a sACN/E1.31 bridge in unicast mode which transmits universe 2 and three things: a three channel dimmer used to control a RGB light, which takes 1s to fade from one color to another and 10s from 0-100% on incremental dim commands, a single channel dimmer which will turn on only to 90% if it receives a ON command and does not fully switch off (to 10%) if it receives an OFF command and chaser which changes the colors like a traffic light.")]),e._m(39),e._m(40),e._m(41),e._m(42),e._m(43),e._m(44),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"dmx-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dmx-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" DMX Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bridges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bridges","aria-hidden":"true"}},[this._v("#")]),this._v(" Bridges")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#things","aria-hidden":"true"}},[this._v("#")]),this._v(" Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All bridges can make use of the "),t("code",[this._v("refreshrate")]),this._v(" option.\nIt determines at what frequency the DMX output is refreshed.\nThe achievable refresh rate depends on the number of channels and the output type.\nA value of "),t("code",[this._v("0")]),this._v(" disables the output, the default value is 30 Hz.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"artnet-bridge-artnet-bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#artnet-bridge-artnet-bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" ArtNet Bridge ("),t("code",[this._v("artnet-bridge")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The ArtNet bridge has one mandatory configuration value: network address ("),t("code",[this._v("address")]),this._v(").\nThe network address defines the IP address of the receiving node, it is also allowed to use a FQDN if DNS resolution is available.\nIf necessary the default port 6454 can be changed by adding "),t("code",[this._v(":<port>")]),this._v(" to the address.\nMultiple receivers can be added, separated by a comma.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The universe ("),t("code",[this._v("universe")]),this._v(") can range from 0-32767, this value defaults to 0.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("There are two more configuration values that usually don't need to be touched.\nThe address and port of the sender will be automatically selected by the kernel, if they need to be set to a fixed value, this can be done with "),s("code",[e._v("localaddress")]),e._v(".\nThe format is identical to the receiver address.\nUnlike DMX512-A (E1.11), the ArtNet standard allows to suppress repeated transmissions of unchanged universes for a certain time.\nThis is enabled by default and will re-transmit unchanged data with a fixed refresh rate of 800ms.\nIf for some reason continuous transmission is needed, the "),s("code",[e._v("refreshmode")]),e._v(" can be set to "),s("code",[e._v("always")]),e._v(", opposed to the default "),s("code",[e._v("standard")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lib485-bridge-lib485-bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lib485-bridge-lib485-bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" Lib485 Bridge ("),t("code",[this._v("lib485-bridge")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Lib385 bridge has one mandatory configuration value: network address ("),t("code",[this._v("address")]),this._v(").\nThis is the host/port where lib485 is running.\nThis can be an IP address but it is also allowed to use a FQDN if DNS resolution is available.\nIf necessary the default port 9020 can be changed by adding "),t("code",[this._v(":<port>")]),this._v(" to the address.\nThe default address is localhost.\nMultiple receivers can be added, separated by a comma.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sacn-e1-31-bridge-sacn-bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sacn-e1-31-bridge-sacn-bridge","aria-hidden":"true"}},[this._v("#")]),this._v(" sACN/E1.31 Bridge ("),t("code",[this._v("sacn-bridge")]),this._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The sACN bridge has one mandatory configuration value: transmission mode ("),s("code",[e._v("mode")]),e._v(").\nThe transmission mode can be set to either "),s("code",[e._v("unicast")]),e._v(" or "),s("code",[e._v("multicast")]),e._v(", where the later one is the default value.\nIf unicast mode is selected, it is mandatory to define the network address ("),s("code",[e._v("address")]),e._v(") of the receiving node.\nThis can be an IP address but it is also allowed to use a FQDN if DNS resolution is available.\nIf necessary the default port 5568 can be changed by adding "),s("code",[e._v(":<port>")]),e._v(" to the address.\nMultiple receivers can be added, separated by a comma.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The universe ("),t("code",[this._v("universe")]),this._v(") can range from 1-63999, this value defaults to 1.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There are some more configuration values that usually don't need to be touched.\nThe address and port of the sender will be automatically selected by the kernel, if they need to be set to a fixed value, this can be done with "),t("code",[this._v("localaddress")]),this._v(".\nThe format is identical to the receiver address.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Unlike DMX512-A (E1.11), the E1.31 standard allows to suppress repeated transmissions of unchanged universes for a certain time.\nThis is enabled by default and will re-transmit unchanged data with a fixed refresh rate of 800ms.\nIf for some reason continuous transmission is needed, the "),t("code",[this._v("refreshmode")]),this._v(" can be set to "),t("code",[this._v("always")]),this._v(", opposed to the default "),t("code",[this._v("standard")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"chaser-thing-chaser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chaser-thing-chaser","aria-hidden":"true"}},[this._v("#")]),this._v(" Chaser Thing ("),t("code",[this._v("chaser")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There are two mandatory configuration values for a chaser thing: the "),t("code",[this._v("dmxid")]),this._v(" and "),t("code",[this._v("steps")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("dmxid")]),this._v(" is a list of DMX channels that are associated with this thing.\nThere are several possible formats: "),t("code",[this._v("channel,channel,channel,...")]),this._v(" or "),t("code",[this._v("channel/width")]),this._v(" or a combination of both.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("steps")]),this._v(" value is a list of steps that shall be run by the chaser.\nThe format of a single step is "),t("code",[this._v("fadetime:value,value2, ...:holdtime")]),this._v(", two or more steps are concatenated by "),t("code",[this._v("step1|step2|...")]),this._v(".\nIn textual configuration line-breaks, spaces and tabs are allowed for readability.\nThe fadetime is used for fading from the current value to the new value.\nIn contrast to the dimmer thing, this is an absolute value.\nThe hold time defines how long this step shall wait before advancing to the next step.\nA value of -1 is used to hold forever.\nBoth times are in ms.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("An optional configuration value is "),t("code",[this._v("resumeafter")]),this._v(".\nIt defaults to false but if set to true, the original state of the channel (including running fades) will be suspended until the chaser receives an OFF command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dimmer-thing-dimmer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dimmer-thing-dimmer","aria-hidden":"true"}},[this._v("#")]),this._v(" Dimmer Thing ("),t("code",[this._v("dimmer")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is one mandatory configuration value for a dimmer thing.\nIt is the "),t("code",[this._v("dmxid")]),this._v(", a list of DMX channels that are associated with this thing.\nThere are several possible formats: "),t("code",[this._v("channel1,channel2,channel3,...")]),this._v(" or "),t("code",[this._v("channel/width")]),this._v(" or a combination of both.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("code",[e._v("fadetime")]),e._v(" option allows a smooth transition from the current to the new value.\nThe time unit is ms and the interval is for a fade from 0-100%.\nIf the current value is 25% and the new value is 75% the time needed for this change is half of "),s("code",[e._v("fadetime")]),e._v(".\n"),s("code",[e._v("fadetime")]),e._v("is used for absolute values or ON/OFF commands send to the "),s("code",[e._v("brightness")]),e._v(" channel.\nRelated is the "),s("code",[e._v("dimtime")]),e._v(" option: it defines the time in ms from 0-100% if incremental dimming ("),s("code",[e._v("INCREASE")]),e._v("/"),s("code",[e._v("DECREASE")]),e._v(") is used.\nFor convenient use "),s("code",[e._v("dimtime")]),e._v(" usually is set to a larger value than "),s("code",[e._v("fadetime")]),e._v(".\nTypical values are 500-1000 ms for "),s("code",[e._v("fadetime")]),e._v(" and 2000-5000 ms for "),s("code",[e._v("dimtime")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Advanced options are the "),t("code",[this._v("turnonvalue")]),this._v("and the "),t("code",[this._v("turnoffvalue")]),this._v(".\nThey default to 255 (equals 100%) and 0 (equals 0%) respectively.\nThis value can be set individually for all DMX channels, the format is "),t("code",[this._v("value1,value2, ...")]),this._v(" with values from 0 to 255.\nIf less values than DMX channels are defined, the values will be re-used from the beginning (i.e. if two values are defined, value1 will be used for channel1, channel3, ... and value2 will be used for channel2, channel4, ...).\nThese values will be used if the thing receives an ON or OFF command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"color-thing-color"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color-thing-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Color Thing ("),t("code",[this._v("color")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is one mandatory configuration value for a dimmer thing.\nIt is the "),t("code",[this._v("dmxid")]),this._v(", a list of DMX channels that are associated with this thing.\nThere are several possible formats: "),t("code",[this._v("channel1,channel2,channel3,...")]),this._v(" or "),t("code",[this._v("channel/width")]),this._v(" or a combination of both.\nThe number of channels has to be a multiple of three.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("code",[e._v("fadetime")]),e._v(" option allows a smooth transition from the current to the new value.\nThe time unit is ms and the interval is for a fade from 0-100%.\nIf the current value is 25% and the new value is 75% the time needed for this change is half of "),s("code",[e._v("fadetime")]),e._v(".\n"),s("code",[e._v("fadetime")]),e._v("is used for absolute values or ON/OFF commands send to the "),s("code",[e._v("brightness")]),e._v(" channel.\nRelated is the "),s("code",[e._v("dimtime")]),e._v(" option: it defines the time in ms from 0-100% if incremental dimming ("),s("code",[e._v("INCREASE")]),e._v("/"),s("code",[e._v("DECREASE")]),e._v(") is used.\nFor convenient use "),s("code",[e._v("dimtime")]),e._v(" usually is set to a larger value than "),s("code",[e._v("fadetime")]),e._v(".\nTypical values are 500-1000 ms for "),s("code",[e._v("fadetime")]),e._v(" and 2000-5000 ms for "),s("code",[e._v("dimtime")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Advanced options are the "),t("code",[this._v("turnonvalue")]),this._v("and the "),t("code",[this._v("turnoffvalue")]),this._v(".\nThey default to 255 (equals 100%) and 0 (equals 0%) respectively.\nThis value can be set individually for all DMX channels, the format is "),t("code",[this._v("value1,value2, ...")]),this._v(" with values from 0 to 255.\nIf less values than DMX channels are defined, the values will be re-used from the beginning (i.e. if two values are defined, value1 will be used for channel1, channel3, ... and value2 will be used for channel2, channel4, ...).\nThese values will be used if the thing receives an ON or OFF command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tunable-white-thing-tunablewhite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tunable-white-thing-tunablewhite","aria-hidden":"true"}},[this._v("#")]),this._v(" Tunable White Thing ("),t("code",[this._v("tunablewhite")]),this._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("There is one mandatory configuration value for a dimmer thing.\nIt is the "),s("code",[e._v("dmxid")]),e._v(", a list of DMX channels that are associated with this thing.\nThere are several possible formats: "),s("code",[e._v("channel1,channel2,channel3,...")]),e._v(" or "),s("code",[e._v("channel/width")]),e._v(' or a combination of both.\nThe number of channels has to be even. In the order "cool white, warm white".\nAdditionally a channel for cool and warm white brightness as well as color temperature ('),s("code",[e._v("0")]),e._v(" being the coolest, "),s("code",[e._v("100")]),e._v(" being the warmest) will be provided.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("code",[e._v("fadetime")]),e._v(" option allows a smooth transition from the current to the new value.\nThe time unit is ms and the interval is for a fade from 0-100%.\nIf the current value is 25% and the new value is 75% the time needed for this change is half of "),s("code",[e._v("fadetime")]),e._v(".\n"),s("code",[e._v("fadetime")]),e._v("is used for absolute values or ON/OFF commands send to the "),s("code",[e._v("brightness")]),e._v(" channel.\nRelated is the "),s("code",[e._v("dimtime")]),e._v(" option: it defines the time in ms from 0-100% if incremental dimming ("),s("code",[e._v("INCREASE")]),e._v("/"),s("code",[e._v("DECREASE")]),e._v(") is used.\nFor convenient use "),s("code",[e._v("dimtime")]),e._v(" usually is set to a larger value than "),s("code",[e._v("fadetime")]),e._v(".\nTypical values are 500-1000 ms for "),s("code",[e._v("fadetime")]),e._v(" and 2000-5000 ms for "),s("code",[e._v("dimtime")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Advanced options are the "),t("code",[this._v("turnonvalue")]),this._v("and the "),t("code",[this._v("turnoffvalue")]),this._v(".\nThey default to 255 (equals 100%) and 0 (equals 0%) respectively.\nThis value can be set individually for all DMX channels, the format is "),t("code",[this._v("value1,value2, ...")]),this._v(" with values from 0 to 255.\nIf less values than DMX channels are defined, the values will be re-used from the beginning (i.e. if two values are defined, value1 will be used for channel1, channel3, ... and value2 will be used for channel2, channel4, ...).\nThese values will be used if the thing receives an ON or OFF command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Type-ID")]),s("th",[e._v("Thing")]),s("th",[e._v("Item")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("brightness")]),s("td",[e._v("dimmer, tunablewhite")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness")])]),s("tr",[s("td",[e._v("color")]),s("td",[e._v("color")]),s("td",[e._v("Switch, Dimmer, Color")]),s("td",[e._v("allows to set the color and brightness")])]),s("tr",[s("td",[e._v("colortemperature")]),s("td",[e._v("tunablewhite")]),s("td",[e._v("Number")]),s("td",[e._v("allows to set the color temperature")])]),s("tr",[s("td",[e._v("brightness_r")]),s("td",[e._v("color")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness of the red channel")])]),s("tr",[s("td",[e._v("brightness_g")]),s("td",[e._v("color")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness of the green channel")])]),s("tr",[s("td",[e._v("brightness_b")]),s("td",[e._v("color")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness of the blue channel")])]),s("tr",[s("td",[e._v("brightness_cw")]),s("td",[e._v("tunablewhite")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness of the cool white channel")])]),s("tr",[s("td",[e._v("brightness_ww")]),s("td",[e._v("tunablewhite")]),s("td",[e._v("Switch, Dimmer")]),s("td",[e._v("controls the brightness of the warm white channel")])]),s("tr",[s("td",[e._v("control")]),s("td",[e._v("chaser")]),s("td",[e._v("String")]),s("td",[e._v("allows to change the chaser steps")])]),s("tr",[s("td",[e._v("switch")]),s("td",[e._v("chaser")]),s("td",[e._v("Switch")]),s("td",[e._v("turns the chaser ON or OFF")])]),s("tr",[s("td",[e._v("mute")]),s("td",[e._v("(all bridges)")]),s("td",[e._v("Switch")]),s("td",[e._v("mutes the DMX output of the bridge")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note:")]),this._v(" the string send to the control channel of chaser things has to be formatted like the "),t("code",[this._v("steps")]),this._v(" configuration of the chaser thing. If the new string is invalid, the old configuration will be used.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"full-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"demo-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-things","aria-hidden":"true"}},[this._v("#")]),this._v(" demo.things:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("Bridge")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("dmx"),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("sacn")]),s("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("bridge"),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v("mybridge "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" mode"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"unicast"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" address"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"192.168.0.60"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" universe"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token number"}},[e._v("2")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n color  "),s("span",{attrs:{class:"token class-name"}},[e._v("rgb")]),e._v("    "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("dmxid"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"5/3"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" fadetime"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token number"}},[e._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" dimtime"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token number"}},[e._v("10000")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n dimmer "),s("span",{attrs:{class:"token class-name"}},[e._v("single")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("dmxid"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"50"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" fadetime"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token number"}},[e._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" turnonvalue"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"230"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" turnoffvalue"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"25"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n chaser ampel  "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("dmxid"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"10,12,13"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" steps"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"100:255,0,0:1000|100:255,255,0:500|100:0,0,255:1000|100:0,255,0:500"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" \n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"demo-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-items","aria-hidden":"true"}},[this._v("#")]),this._v(" demo.items:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("Color")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("MyColorItem")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"My Color Item"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"dmx:color:mybridge:rgb:color"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("Dimmer")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("MyDimmerItem")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"My Dimmer Item"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"dmx:dimmer:mybridge:single:brightness"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("MyChaserItem")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"My Chaser Item"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"dmx:chaser:mybridge:ampel:switch"')]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"demo-sitemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" demo.sitemap:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("sitemap")]),e._v(" demo "),s("span",{attrs:{class:"token constant"}},[e._v("label")]),s("span",{attrs:{class:"token operator"}},[e._v("=")]),s("span",{attrs:{class:"token string"}},[e._v('"Main Menu"')]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{attrs:{class:"token keyword"}},[e._v("Frame")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{attrs:{class:"token comment"}},[e._v("// Color")]),e._v("\n        "),s("span",{attrs:{class:"token keyword"}},[e._v("Colorpicker")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("item")]),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("MyColorItem\n        \n        "),s("span",{attrs:{class:"token comment"}},[e._v("// Dimmer")]),e._v("\n        "),s("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("item")]),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("MyDimmerItem\n        "),s("span",{attrs:{class:"token keyword"}},[e._v("Slider")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("item")]),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("MyDimmerItem\n        \n        "),s("span",{attrs:{class:"token comment"}},[e._v("// Chaser")]),e._v("\n        "),s("span",{attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),s("span",{attrs:{class:"token class-name"}},[e._v("item")]),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("MyChaserItem\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);