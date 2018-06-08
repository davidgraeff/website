(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{810:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[e("a",{attrs:{href:"https://mycroft.ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mycroft AI"),e("OutboundLink")],1),t._v(" is the world’s first open source voice enabled assistant.\nThe skill allows you to connect a running Mycroft instance to your openHAB system.\nSupported natural voice commands and responses can freely be modified and extended.")]),e("p",[t._v("The skill currently supportes the English (U.S.) and English (U.K.) languages but new languages are easily added via configuration files.")]),t._m(1),t._m(2),e("ul",[e("li",[t._v("A running "),e("a",{attrs:{href:"https://mycroft.ai/get-mycroft/",target:"_blank",rel:"noopener noreferrer"}},[t._v("instance of Mycroft"),e("OutboundLink")],1),t._v(" (Mark 1, picroft, ...)")]),e("li",[t._v("A running instance of openHAB (version 1.x or v2.x)")]),e("li",[t._v("openHAB must be reacheable from the Mycroft instance")])]),t._m(3),e("p",[t._v("The openHAB skill has to be installed on your Mycroft instance, please refer to the "),e("a",{attrs:{href:"https://docs.mycroft.ai/skills.and.features/adding.skills",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),e("OutboundLink")],1),t._v(" to learn how to install a skill.")]),e("p",[t._v("Clone the "),e("a",{attrs:{href:"https://github.com/openhab/openhab-mycroft.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("skill repository"),e("OutboundLink")],1),t._v(" into the Mycroft skills directory,\nthen trigger installation of needed dependencies:")]),t._m(4),e("p",[t._v("If on "),e("a",{attrs:{href:"https://docs.mycroft.ai/development/installation/raspberry.pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("picroft"),e("OutboundLink")],1),t._v(", use the skills directory "),e("code",[t._v("/opt/mycroft/skills")]),t._v(" and skip the "),e("code",[t._v("workon mycroft")]),t._v(" command.")]),t._m(5),t._m(6),t._m(7),e("p",[t._v("Restart mycroft for the changes to take effect.")]),t._m(8),e("p",[t._v("Items are exposed to openHAB skill for Mycroft through the use of tags.\nSee the "),e("a",{attrs:{href:"https://www.openhab.org/addons/integrations/hueemulation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hue Emulation"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://www.openhab.org/addons/integrations/homekit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HomeKit Add-on"),e("OutboundLink")],1),t._v(" documentation for details about tagging and available tags.")]),e("ul",[e("li",[t._m(9),e("p",[t._v("See "),e("a",{attrs:{href:"https://www.openhab.org/docs/configuration/items.html#item-definition-and-syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("Item Definition and Syntax"),e("OutboundLink")],1)]),e("p",[t._v("Some examples of tagged items are:")]),t._m(10)])]),e("p",[t._v("If items are modified in openHAB, a refresh in Mycroft is needed by the voice command:")]),t._m(11),t._m(12),t._m(13),e("p",[t._v("In combination with the Mycroft skill (and other similar services) you are thereby tempted to break with your naming scheme and introduce confusion into your setup.\nopenHAB Tip: You may define multiple Items bound to one channel.\nInstead of manipulating the label of one single Item, you can define multiple Items specifically for voice commands.\nSee the following example:")]),t._m(14),t._m(15),e("p",[t._v("Each item tag supports different command, here is the summary:")]),t._m(16),e("p",[t._v("With references to the above item definitions, here are an examples of working commands:")]),t._m(17),t._m(18),t._m(19),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mycroft-ai-skill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mycroft-ai-skill","aria-hidden":"true"}},[this._v("#")]),this._v(" Mycroft AI Skill")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"general-configuration-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-configuration-instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" General Configuration Instructions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"skill-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skill-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Skill Installation")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/.mycroft/skills\n"),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/openhab/openhab-mycroft.git skill-openhab\nworkon mycroft\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" skill-openhab\npip "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -r requirements.txt\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"skill-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skill-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Skill Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Add the block below to your "),s("code",[this._v("mycroft.conf")]),this._v(" file:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" "),e("span",{attrs:{class:"token property"}},[t._v('"openHABSkill"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token property"}},[t._v('"host"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"openHAB server ip"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{attrs:{class:"token property"}},[t._v('"port"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"openHAB server port"')]),t._v("\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"openhab-item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openhab-item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" openHAB Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Items via .items - File")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("KitchenLight")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),e("span",{attrs:{class:"token function"}},[t._v(" <light>")]),e("span",{attrs:{class:"token tag"}},[t._v(" (gKitchen)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"Lighting"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"hue:0200:1:bloom1:color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("DiningroomLight")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Diningroom Light"')]),e("span",{attrs:{class:"token function"}},[t._v(" <light>")]),e("span",{attrs:{class:"token tag"}},[t._v(" (gKitchen)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"Lighting"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"hue:0200:1:bloom1:color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("GoodNight")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Good Night"')]),t._v("\t"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"Switchable"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MqttID1Temperature")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Bedroom Temperature"')]),e("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"CurrentTemperature"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"<[mosquitto:mysensors/SI/1/1/1/0/0:state:default]"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MqttID1Humidity")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Bedroom Humidity"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"CurrentHumidity"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"<[mosquitto:mysensors/SI/1/0/1/0/1:state:default]"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("gThermostat")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Main Thermostat"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"gMainThermostat"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MainThermostatCurrentTemp")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Main Thermostat Current Temperature"')]),e("span",{attrs:{class:"token tag"}},[t._v(" (gMainThermostat)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"CurrentTemperature"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MainThermostatTargetTemperature")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Main Thermostat Target Temperature"')]),e("span",{attrs:{class:"token tag"}},[t._v(" (gMainThermostat)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"TargetTemperature"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MainThermostatHeatingCoolingMode")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Main Thermostat Heating/Cooling Mode"')]),e("span",{attrs:{class:"token tag"}},[t._v(" (gMainThermostat)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"homekit:HeatingCoolingMode"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("em",[this._v('"Hey Mycroft, refresh openHAB Items"')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"item-label-recommendation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-label-recommendation","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Label Recommendation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('Matching of voice commands to Items happens based on the Item label (e.g. "Kitchen Light").\nIt is therefore advisable, to choose labels that can be used to form natural commands.\nAs an example, compare "Hey Mycroft, turn on the '),s("em",[this._v("Kitchen Light")]),this._v('" vs. "Hey Mycroft, turn on the '),s("em",[this._v("Ground Floor LEDs Kitchen")]),this._v('".')])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Common/main Item bound to a binding channel")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Kitchen_Light")]),t._v("    "),e("span",{attrs:{class:"token string"}},[t._v('"Ground Floor LEDs Kitchen"')]),e("span",{attrs:{class:"token function"}},[t._v(" <light>")]),e("span",{attrs:{class:"token tag"}},[t._v(" (gKitchen)")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"..."')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Two Items with labels fitting for voice commands, bound to the same binding channel")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Kitchen_Light_A")]),t._v("  "),e("span",{attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),t._v("                   "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"Lighting"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"..."')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Kitchen_Light_A2")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Kitchen LEDs"')]),t._v("                    "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"Lighting"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"..."')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example-voice-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-voice-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Voice Commands")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Tag")]),e("th",[t._v("Key word")]),e("th",[t._v("Commands")])])]),e("tbody",[e("tr",[e("td",[e("code",[t._v("Switchable")])]),e("td",[t._v("turn")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("switch")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("put")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("what's")]),e("td",[t._v("status")])]),e("tr",[e("td"),e("td"),e("td")]),e("tr",[e("td",[e("code",[t._v("Lighting")])]),e("td",[t._v("turn")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("switch")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("put")]),e("td",[t._v("on, off")])]),e("tr",[e("td"),e("td",[t._v("dim")]),e("td")]),e("tr",[e("td"),e("td",[t._v("dim by")]),e("td",[t._v("value in percentage")])]),e("tr",[e("td"),e("td",[t._v("brighten")]),e("td")]),e("tr",[e("td"),e("td",[t._v("brighten by")]),e("td",[t._v("value in percentage")])]),e("tr",[e("td"),e("td"),e("td")]),e("tr",[e("td",[e("code",[t._v("Thermostat")])]),e("td",[t._v("adjust to")]),e("td",[t._v("values in degrees")])]),e("tr",[e("td"),e("td",[t._v("regulate to")]),e("td",[t._v("values in degrees")])]),e("tr",[e("td"),e("td",[t._v("tune to")]),e("td",[t._v("values in degrees")])]),e("tr",[e("td"),e("td",[t._v("decrease by")]),e("td",[t._v("values in degrees")])]),e("tr",[e("td"),e("td",[t._v("increase by")]),e("td",[t._v("values in degrees")])]),e("tr",[e("td"),e("td",[t._v("what's")]),e("td",[t._v("adjusted to")])]),e("tr",[e("td"),e("td",[t._v("what's")]),e("td",[t._v("regulated to")])]),e("tr",[e("td"),e("td",[t._v("what's")]),e("td",[t._v("tuned to")])]),e("tr",[e("td"),e("td"),e("td")]),e("tr",[e("td",[e("code",[t._v("CurrentHumidity")])]),e("td",[t._v("what's")]),e("td",[t._v("humidity")])]),e("tr",[e("td"),e("td"),e("td")]),e("tr",[e("td",[e("code",[t._v("CurrentTemperature")])]),e("td",[t._v("what's")]),e("td",[t._v("temperature")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("em",[t._v('"Hey Mycroft, turn on Diningroom Light"')])]),e("li",[e("em",[t._v('"Hey Mycroft, switch off Kitchen Light"')])]),e("li",[e("em",[t._v('"Hey Mycroft, put on Good Night"')])]),e("li",[e("em",[t._v('"Hey Mycroft, what is Good Night status?"')])]),e("li",[e("em",[t._v('"Hey Mycroft, set Diningroom to 50 percent"')])]),e("li",[e("em",[t._v('"Hey Mycroft, dim Kitchen"')])]),e("li",[e("em",[t._v('"Hey Mycroft, brighten Kitchen"')])]),e("li",[e("em",[t._v('"Hey Mycroft, dim Kitchen by 20 percent"')])]),e("li",[e("em",[t._v('"Hey Mycroft, what\'s Bedroom temperature?"')])]),e("li",[e("em",[t._v('"Hey Mycroft, what\'s Bedroom humidity?"')])]),e("li",[e("em",[t._v('"Hey Mycroft, adjust Main Thermostat to 21 degrees"')])]),e("li",[e("em",[t._v('"Hey Mycroft, regulate Main Thermostat to 20 degrees"')])]),e("li",[e("em",[t._v('"Hey Mycroft, decrease Main Thermostat by 2 degrees"')])]),e("li",[e("em",[t._v('"Hey Mycroft, increase Main Thermostat by 1 degrees"')])]),e("li",[e("em",[t._v('"Hey Mycroft, what is Main Thermostat regulated to?"')])]),e("li",[e("em",[t._v('"Hey Mycroft, what is Main Thermostat tuned to?"')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"additional-comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-comments","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Comments")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("By default all temperatures are in Celsius, no test so far about the tag Fahrenheit to the thermostat group item (which should also be tagged with "),s("code",[this._v("Thermostat")]),this._v(").")])])}],!1,null,null,null);s.default=n.exports}}]);