(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{781:function(e,t,o){"use strict";o.r(t);var n=o(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),o("p",[e._v("openHAB 2 used "),o("a",{attrs:{href:"https://www.eclipse.org/smarthome/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse SmartHome"),o("OutboundLink")],1),e._v(" as its core framework. Although many classes are similar, all of them have at least a different namespace ("),o("code",[e._v("org.eclipse.smarthome")]),e._v(" instead of "),o("code",[e._v("org.openhab")]),e._v(") - as a result, none the existing 1.x add-ons would work on openHAB 2.")]),e._m(1),o("p",[e._v("Currently, the compatibility layer focuses on the official APIs, i.e. an add-ons that does no dirty things should be able to run. Taking the huge number of 1.x add-ons into account, it is likely that there are a couple of problems with one or another. Some problems might be due to bugs in the compatibility bundle, others might be solvable within the add-on.")]),e._m(2),o("p",[e._v("While the openHAB distribution already contains many add-ons of openHAB 1, there are still quite some of them missing - please help testing them - if they are confirmed to be working, they can be included in the distribution.\nTest a not included add-on is very straight forward:")]),e._m(3),e._m(4),o("p",[e._v("All developers are encouraged to help on this in order to quickly make as many 1.x add-ons compatible with the openHAB 2 runtime as possible.\nHere is what you need to do:")]),o("ul",[o("li",[e._v("Setup a the "),o("router-link",{attrs:{to:"../development/ide.html"}},[e._v("openHAB 2 IDE")]),e._v(".")],1),o("li",[e._v("Import your 1.x add-on from your local openHAB 1 git clone into your workspace.")]),o("li",[e._v("If it compiles, the first major step is already done. If not, try to figure out why there are compilation problems and if you cannot solve them, ask on the mailing list for help.")]),o("li",[e._v("After adding some configuration, start up the runtime through the launch configuration (make sure your bundle is activated and started by default) from within the IDE.")]),o("li",[e._v("Go and test and report your findings by creating issues or pull requests for the "),o("a",{attrs:{href:"https://github.com/openhab/openhab/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("add-on in openHAB 1"),o("OutboundLink")],1),e._v(".")])]),e._m(5),o("ol",[o("li",[e._v('The first step is to create a "Karaf feature" for it, in which required dependencies (i.e. to io.transport bundles) can also be declared. Such a feature can also include the required configuration, therefore you should create a file '),o("code",[e._v("<youraddon>.cfg")]),e._v(" in "),o("code",[e._v("features/openhab-addons-external/src/main/resources/conf")]),e._v(" with the same content as what is within "),o("code",[e._v("openhab.cfg")]),e._v(", but without the "),o("code",[e._v("<yourbinding>:")]),e._v(" prefix on the lines of the parameters.\nThis config file then needs to be added to "),o("code",[e._v("features/openhab-addons-external/pom.xml")]),e._v(" so that the build is aware of it.\nThe feature itself is then added to "),o("code",[e._v("features/openhab-addons/src/main/feature/feature.xml")]),e._v(", referencing the bundle, the config file and its dependencies (if any). The result should look "),o("a",{attrs:{href:"https://github.com/openhab/openhab/pull/3988/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("similar to this"),o("OutboundLink")],1),e._v(".\nThis will automatically make the add-on a part of the distro with the next build.")]),o("li",[e._v('Note that with defining a Karaf feature, bindings are available for installation through the Paper UI in the "Extensions" menu, but they are not listed under "Configuration->Bindings" (although it is fully operational after installation). In order to have bindings listed there as well, you need to add some meta-information to the binding bundle. This information should be put into '),o("code",[e._v("ESH-INF/binding/binding.xml")]),e._v(" and its content is "),o("a",{attrs:{href:"https://www.eclipse.org/smarthome/documentation/development/bindings/xml-reference.html#xml-structure-for-binding-definitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("described here"),o("OutboundLink")],1),e._v(". Do not forget to add "),o("code",[e._v("ESH-INF")]),e._v(" to your "),o("code",[e._v("build.properties")]),e._v(", so that it is packaged in the bundle. See a "),o("a",{attrs:{href:"https://github.com/openhab/openhab/blob/master/bundles/binding/org.openhab.binding.nest/ESH-INF/binding/binding.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("real life example of such meta-data here"),o("OutboundLink")],1),e._v(" - note the "),o("code",[e._v("service-id")]),e._v(" element in the XML, which needs to point to the service id of your binding, which is by default "),o("code",[e._v("org.openhab.<bindingId>")]),e._v(" for all 1.x bindings.")])]),e._m(6),o("p",[e._v("Note that the maintenance and support of the 1.x add-ons will continue. There is absolutely no need and no rush to port them to the new 2.x APIs - especially as there are only new APIs for bindings so far, but nothing yet for actions, persistence services or other types of add-ons. Even for bindings you have to be aware that the new APIs are not yet stable and are likely to change over time. Nonetheless, if you "),o("router-link",{attrs:{to:"../development/bindings.html"}},[e._v("start a completely new binding")]),e._v(" for openHAB, you are encouraged to go for openHAB 2 APIs directly - especially, if your devices can be discovered and formally described. A positive side effect of implementing a binding against the new APIs is the fact that your code is potentially automatically compatible with other Eclipse-SmartHome-based systems (of which there will be more in future).")],1),o("DocPreviousVersions"),o("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"compatibility-layer-for-openhab-1-x-add-ons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-layer-for-openhab-1-x-add-ons","aria-hidden":"true"}},[this._v("#")]),this._v(" Compatibility Layer for openHAB 1.x Add-ons")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To still make it possible to use 1.x add-ons, there is a special bundle in openHAB 2, which serves as a compatibility layer. It effectively exposes and consumes all relevant classes and services from the "),t("code",[this._v("org.openhab")]),this._v(" namespace and internally delegates or proxies them to the according "),t("code",[this._v("org.eclipse.smarthome")]),this._v(" classes and services.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-use-openhab-1-x-add-ons-that-are-not-part-of-the-distribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-openhab-1-x-add-ons-that-are-not-part-of-the-distribution","aria-hidden":"true"}},[this._v("#")]),this._v(" How to use openHAB 1.x Add-ons that are not part of the distribution")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("Start your runtime")]),o("li",[e._v("Install the 1.x compatibility layer by running "),o("code",[e._v("feature:install openhab-runtime-compat1x")]),e._v(" in the openHAB console")]),o("li",[e._v("As with openHAB 1.x, simply take the jar file of your add-on and place it in the "),o("code",[e._v("${openhab.home}/addons")]),e._v(" folder.")]),o("li",[e._v("Copy your personal "),o("code",[e._v("openhab.cfg")]),e._v(" file to "),o("code",[e._v("${openhab.home}/conf/services/openhab.cfg")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-solve-problems-with-a-certain-add-on"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-solve-problems-with-a-certain-add-on","aria-hidden":"true"}},[this._v("#")]),this._v(" How to solve problems with a certain add-on?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-add-a-successfully-tested-1-x-add-on-to-the-distribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-a-successfully-tested-1-x-add-on-to-the-distribution","aria-hidden":"true"}},[this._v("#")]),this._v(" How to add a successfully tested 1.x Add-on to the distribution")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"future-plans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-plans","aria-hidden":"true"}},[this._v("#")]),this._v(" Future Plans")])}],!1,null,null,null);t.default=i.exports}}]);