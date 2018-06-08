(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{601:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),n("p",[e._v("The "),n("a",{attrs:{href:"http://www.sitewhere.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere"),n("OutboundLink")],1),e._v(" persistence service allows openHAB item states to be forwarded to a SiteWhere server instance running locally or in the cloud. Selected events from an openHAB instance can be stored in SiteWhere under a virtual device with hardware ID specified in the persistence provider implementation.")]),n("p",[e._v("Events are delivered via the SiteWhere agent which uses the MQTT protocol. The SiteWhere "),n("a",{attrs:{href:"http://documentation.sitewhere.org/userguide/adminui/adminui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("administrative application"),n("OutboundLink")],1),e._v(" may be used to view data for the virtual device. It can also be used to issue commands to items in openHAB, based on the SiteWhere command framework. See "),n("a",{attrs:{href:"http://documentation.sitewhere.org/integration/openhab.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),n("OutboundLink")],1),e._v(" for a step-by-step walkthrough.")]),e._m(1),e._m(2),e._m(3),n("p",[e._v("Change the port to another value, such as 9090.")]),e._m(4),e._m(5),e._m(6),e._m(7),n("DocPreviousVersions"),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"sitewhere-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sitewhere-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" SiteWhere Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Both SiteWhere and openHAB use port 8080 by default, so the port will need to be changed if both are running on the same machine. To change the port for SiteWhere, open the file "),t("code",[this._v("conf/server.xml")]),this._v(" file and look for the following:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Connector")]),e._v(" "),n("span",{attrs:{class:"token attr-name"}},[e._v("port")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("8080"),n("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),n("span",{attrs:{class:"token attr-name"}},[e._v("protocol")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("HTTP/1.1"),n("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),n("span",{attrs:{class:"token attr-name"}},[e._v("connectionTimeout")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("20000"),n("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),n("span",{attrs:{class:"token attr-name"}},[e._v("redirectPort")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[e._v("=")]),n("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("8443"),n("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("No configuration is necessary for SiteWhere to listen for events on the MQTT transport if using the default tenant configuration. The SiteWhere agent used by the persistence service is configured to send MQTT messages on the topic where SiteWhere is listening.  Otherwise, this service can be configured in the file "),t("code",[this._v("services/sitewhere.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Property")]),n("th",[e._v("Default")]),n("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("defaultHardwareId")]),n("td",[n("code",[e._v("123-OPENHAB-777908324")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),n("td",[e._v("hardware ID of device that will receive events. It provides an association between the openHAB instance and a SiteWhere device. Once connected, if no device exists in SiteWhere with the given hardware ID, a new openHAB virtual device will be registered under that ID. All data sent from the openHAB instance will be recorded under the virtual device. If more than one openHAB instance is connecting to SiteWhere, different hardware IDs should be used for each instance. SiteWhere can scale to support thousands or even millions of openHAB instances running concurrently.")])]),n("tr",[n("td",[e._v("specificationToken")]),n("td",[n("code",[e._v("5a95f3f2-96f0-47f9-b98d-f5c081d01948")])]),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),n("td",[e._v("device specification token used if device is not already registered. It indicates the device specification to be used if a new device needs to be registered with SiteWhere (if the hardware id does not exist). The default value corresponds to the "),n("em",[e._v("openHAB Virtual Device")]),e._v(" specification included with the SiteWhere sample data. This specification includes the device commands used to trigger events on the openHAB bus from SiteWhere.")])]),n("tr",[n("td",[e._v("mqttHost")]),n("td",[e._v("localhost")]),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),n("td",[e._v("host name for the MQTT broker that SiteWhere is listening to")])]),n("tr",[n("td",[e._v("mqttPort")]),n("td",[e._v("1883")]),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),n("td",[e._v("port number for the MQTT broker that SiteWhere is listening to")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is done in the file "),t("code",[this._v("persistence/sitewhere.persist")]),this._v(".")])}],!1,null,null,null);t.default=a.exports}}]);