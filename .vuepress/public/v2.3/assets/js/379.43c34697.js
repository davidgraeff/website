(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{704:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This is the Binding for Bosch Indego Connect lawn mowers.\nThank´s to zazaz-de who found out how the API works. His "),a("a",{attrs:{href:"https://github.com/zazaz-de/iot-device-bosch-indego-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Library"),a("OutboundLink")],1),t._v(" made this Binding possible.")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("The refresh interval is specified in seconds.")]),a("p",[t._v("A possible entry in your thing file could be:")]),t._m(4),t._m(5),t._m(6),a("p",[t._v("For example you can use this sitemap entry to control the mower manually:")]),t._m(7),t._m(8),a("p",[t._v("You can use this as .map file")]),t._m(9),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"bosch-indego-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bosch-indego-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Bosch Indego Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-of-the-thing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-thing","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration of the Thing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Currently the binding supports  "),e("em",[e("strong",[this._v("indego")])]),this._v("  mowers as a thing type with this parameters:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("parameter")]),a("th",[t._v("datatype")]),a("th",[t._v("required")])])]),a("tbody",[a("tr",[a("td",[t._v("username")]),a("td",[t._v("String")]),a("td",[t._v("yes")])]),a("tr",[a("td",[t._v("password")]),a("td",[t._v("String")]),a("td",[t._v("yes")])]),a("tr",[a("td",[t._v("refresh")]),a("td",[t._v("integer")]),a("td",[t._v("no (default: 180, minimum: 60)")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("boschindego"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("indego"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("lawnmower "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mail@example.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"idontneedtocutthelawnagain"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refresh"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("120")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("item-type")]),a("th",[t._v("description")]),a("th")])]),a("tbody",[a("tr",[a("td",[t._v("state")]),a("td",[t._v("Number")]),a("td",[t._v("You can send commands to this channel to control the mower and read the simplified state from it (1=mow, 2=return to dock, 3=pause)")])]),a("tr",[a("td",[t._v("errorcode")]),a("td",[t._v("Number")]),a("td",[t._v("Errorcode of the mower (0=no error, readonly)")])]),a("tr",[a("td",[t._v("statecode")]),a("td",[t._v("Number")]),a("td",[t._v("Detailed state of the mower. I included English and German map-files to read the state easier (readonly)")])]),a("tr",[a("td",[t._v("textualstate")]),a("td",[t._v("String")]),a("td",[t._v("State as a text. (readonly)")])]),a("tr",[a("td",[t._v("ready")]),a("td",[t._v("Number")]),a("td",[t._v("Shows if the mower is ready to mow (1=ready, 0=not ready, readonly)")])]),a("tr",[a("td",[t._v("mowed")]),a("td",[t._v("Dimmer")]),a("td",[t._v("Cut grass in percent (readonly)")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-perl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("indegostate  "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Mow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Return"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Pause"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"meaning-of-the-numeric-statecodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meaning-of-the-numeric-statecodes","aria-hidden":"true"}},[this._v("#")]),this._v(" Meaning of the numeric statecodes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("0=Reading status\n257=Charging\n258=Docked\n259=Docked - Software update\n260=Docked\n261=Docked\n262=Docked - Loading map\n263=Docked - Saving map\n513=Mowing\n514=Relocalising\n515=Loading map\n516=Learning lawn\n517=Paused\n518=Border cut\n519=Idle in lawn\n769=Returning to Dock\n770=Returning to Dock\n771=Returning to Dock - Battery low\n772=Returning to dock - Calendar timeslot ended\n773=Returning to dock - Battery temp range\n774=Returning to dock\n775=Returning to dock - Lawn complete\n776=Returning to dock - Relocalising\n")])])])}],!1,null,null,null);e.default=s.exports}}]);