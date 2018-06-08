(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{492:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("AddonLogo"),a("p",[t._v("This binding integrates the Oceanic water softener and management system ("),a("a",{attrs:{href:"http://www.oceanic.be",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.oceanic.be"),a("OutboundLink")],1),t._v(", but also distributed by Syr in Germany ("),a("a",{attrs:{href:"http://www.syr.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.syr.de"),a("OutboundLink")],1),t._v(")).\nThe binding supports the Limex IQ and Limex Pro water softeners and require the optional CAN-Serial gateway has to be installed")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("All things support the following channels (non-exhaustive):")]),t._m(7),t._m(8),a("p",[t._v(".things")]),t._m(9),a("p",[t._v(".items")]),t._m(10),t._m(11),a("p",[t._v("The Oceanic binding makes use of the nrjavaserial library, and unfortunately java and serial ports never have been a great marriage.")]),a("p",[t._v("Although some work is being done to improve things ("),a("a",{attrs:{href:"https://github.com/eclipse/smarthome/issues/4465",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/eclipse/smarthome/issues/4465"),a("OutboundLink")],1),t._v("), the best thing is to avoid serial ports as much as possible, as some issues ("),a("a",{attrs:{href:"https://github.com/NeuronRobotics/nrjavaserial/issues/96",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/NeuronRobotics/nrjavaserial/issues/96"),a("OutboundLink")],1),t._v(") are not resolved.")]),a("p",[t._v("For example, On Ubuntu 17.10 nrjavaserial seems to return only HEX 00 characters through the InputStream of the SerialPort.")]),a("p",[t._v("Within the Oceanic binding two routes are provided:")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),a("p",[t._v("Both workarounds can be implemented using a systemd system manager script, for example:")]),t._m(17),a("p",[t._v("However, in order to fix permissions at the OS level, one has to issue following commands in order to make /dev/ttyS1 accessible by the 'openhab' system user (that is used to start up the openHAB runtime), and to make the tty both readable and writable.")]),t._m(18),a("p",[t._v("Alternatively, these commands can be executed through a script that is attached to the systemd system manager script.")]),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"oceanic-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oceanic-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Oceanic Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("serial")]),this._v(" - A water softener connected to the openHAB host by means of a serial port")]),s("li",[s("strong",[this._v("network")]),this._v(" - A water softener that can be reached through a TCP proxy. See Known Issues below as when to use this kind of configuration")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("strong",[this._v("serial")]),this._v(" Thing configuration requires the name of the serial port that is used to connect the ESH host with the Oceanic unit, and the interval period in seconds to poll the Oceanic unit")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("strong",[this._v("network")]),this._v(" Thing configuration requires the hostname or ip address of the proxy, the TCP port number to connect to, and the interval period in seconds to poll the Oceanic unit")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),a("th",[t._v("Item Type")]),a("th",[t._v("Description")]),a("th"),a("th")])]),a("tbody",[a("tr",[a("td",[t._v("alarm")]),a("td",[t._v("String")]),a("td",[t._v("Current alarm description, if any")]),a("td"),a("td")]),a("tr",[a("td",[t._v("alert")]),a("td",[t._v("String")]),a("td",[t._v("Current alert description, if any, to notify a shortage of salt")]),a("td"),a("td")]),a("tr",[a("td",[t._v("totalflow")]),a("td",[t._v("Number")]),a("td",[t._v("Current flow in l/min")]),a("td"),a("td")]),a("tr",[a("td",[t._v("maxflow")]),a("td",[t._v("Number")]),a("td",[t._v("Maximum flow recorded, in l/min")]),a("td"),a("td")]),a("tr",[a("td",[t._v("reserve")]),a("td",[t._v("Number")]),a("td",[t._v("Water reserve in l before regeneration has to start")]),a("td"),a("td")]),a("tr",[a("td",[t._v("cycle")]),a("td",[t._v("String")]),a("td",[t._v("Indicates the stage of the regeneration cycle")]),a("td"),a("td")]),a("tr",[a("td",[t._v("endofcycle")]),a("td",[t._v("String")]),a("td",[t._v("Indicates the time to the end of the current cycle")]),a("td"),a("td")]),a("tr",[a("td",[t._v("endofgeneration")]),a("td",[t._v("String")]),a("td",[t._v("Indicates the time to the end of the current generation")]),a("td"),a("td")]),a("tr",[a("td",[t._v("inlethardness")]),a("td",[t._v("Number")]),a("td",[t._v("Water hardness at the inlet")]),a("td"),a("td")]),a("tr",[a("td",[t._v("outlethardness")]),a("td",[t._v("Number")]),a("td",[t._v("Water hardness at the outlet")]),a("td"),a("td")]),a("tr",[a("td",[t._v("salt")]),a("td",[t._v("String")]),a("td",[t._v("Volume of salt remaining, in kg")]),a("td"),a("td")]),a("tr",[a("td",[t._v("consumption(today)(currentweek)(...)")]),a("td",[t._v("String")]),a("td",[t._v("Water consumption, in l, for that period")]),a("td"),a("td")]),a("tr",[a("td",[t._v("regeneratenow")]),a("td",[t._v("Switch")]),a("td",[t._v("Start an immediate regeneration")]),a("td"),a("td")]),a("tr",[a("td",[t._v("regeneratelater")]),a("td",[t._v("Switch")]),a("td",[t._v("Start a delayed regeneration")]),a("td"),a("td")]),a("tr",[a("td",[t._v("lastgeneration")]),a("td",[t._v("DateTime")]),a("td",[t._v("Date and Time of the last regeneration cycle")]),a("td"),a("td")]),a("tr",[a("td",[t._v("pressure")]),a("td",[t._v("Number")]),a("td",[t._v("Water pressure, in bar")]),a("td"),a("td")]),a("tr",[a("td",[t._v("minpressure")]),a("td",[t._v("Number")]),a("td",[t._v("Minimum water pressure recorded, in bar")]),a("td"),a("td")]),a("tr",[a("td",[t._v("maxpressure")]),a("td",[t._v("Number")]),a("td",[t._v("Maximum water pressure recorded, in bar")]),a("td"),a("td")]),a("tr",[a("td",[t._v("normalregenerations")]),a("td",[t._v("Number")]),a("td",[t._v("Number of regenerations completed")]),a("td"),a("td")]),a("tr",[a("td",[t._v("serviceregenerations")]),a("td",[t._v("Number")]),a("td",[t._v("Number of service regenerations completed")]),a("td"),a("td")]),a("tr",[a("td",[t._v("incompleteregenerations")]),a("td",[t._v("Number")]),a("td",[t._v("Number of incomplete regenerations")]),a("td"),a("td")]),a("tr",[a("td",[t._v("allregenerations")]),a("td",[t._v("Number")]),a("td",[t._v("Number of all regenerations")]),a("td"),a("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("serial"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("s1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" port"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/dev/tty.usbserial-FTWGX64N"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("network"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("s2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ipAddress"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.0.6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" portNumber"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("9000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicVolume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume [%d]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:totalflow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicAlarm")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"alarm: [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:alarm"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicAlert")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"alert: [%s]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:alert"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicReserve")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:reserve"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicCycle")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:cycle"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicEOC")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:endofcycle"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicEOG")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:endofgeneration"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicHU")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:hardnessunit"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicInletHardness")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:inlethardness"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicOutletHardness")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:outlethardness"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicCylState")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:cylinderstate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicSalt")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:salt"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsToday")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume today is [%d]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptiontoday"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsYday")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume yesterday was [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptionyesterday"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicPressure")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:pressure"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicLastGeneration")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:lastgeneration"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicAllGen")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:allregenerations"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicMaxFlow")]),a("span",{attrs:{class:"token tag"}},[t._v(" (oceanic)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:maxflow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsThisWk")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume this week is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptioncurrentweek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsThisMnth")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume this month is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptioncurrentmonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsLastMnth")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume last month is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptionlastmonth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsComplete")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume all time is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptioncomplete"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsUntreated")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume untreated is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptionuntreated"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("oceanicConsLastWk")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"volume last week is [%d]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oceanic"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"oceanic:serial:s1:consumptionlastweek"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v('Connect to the Oceanic softener over a serial port that is outside the scope of the Java Virtual Machine, setup a TCP "proxy" on the host that is connected to the softener, and make openHAB connect to that proxy over a plain TCP connection. This can be achieved with '),s("code",[this._v("socat")]),this._v(":")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("             /usr/bin/socat -v TCP-LISTEN:9000 /dev/ttyUSB0,raw,echo=0           \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the above example, the name of the host running socat, and the TCP port number 9000, will be part of the "),s("strong",[this._v("network")]),this._v(" Thing configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("Connect to the Oceanic softener over a serial port on the openHAB host and use "),s("code",[this._v("socat")]),this._v(" to pipe the data from that serial port to a pseudo tty, which has to be manipulated in a CommPortIdentifier.PORT_RAW manner.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("             /usr/bin/socat -v /dev/ttyUSB0,raw,echo=0 pty,link=/dev/ttyS1,raw,echo=0            \n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[t._v("             "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n             WantedBy"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("multi"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target   \n\n             "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n             #Type"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("forking\n             ExecStart"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("socat "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("ttyUSB0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("raw"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("echo"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" pty"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("link"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("ttyS1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("raw"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("echo"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n             #PIDFile"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("run"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("socat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid\n             User"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n             Restart"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("always\n             RestartSec"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("             \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("             sudo useradd  -G dialout openhab\n             sudo chgrp dialout /dev/ttyS1\n             sudo chmod 777 /dev/ttyS1 \n")])])])}],!1,null,null,null);s.default=e.exports}}]);