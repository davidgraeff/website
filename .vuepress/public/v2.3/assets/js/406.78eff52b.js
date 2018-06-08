(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{744:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("AddonLogo"),a("p",[t._v("The Telegram Action service allows sending formatted messages to Telegram clients ("),a("a",{attrs:{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://telegram.org"),a("OutboundLink")],1),t._v("), by using the Telegram Bot API.")]),t._m(1),a("p",[t._v("As described in the Telegram Bot API, this is the manual procedure needed in order to get the necessary information.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),a("p",[t._v("telegram.rules")]),t._m(17),t._m(18),a("p",[t._v("telegram.rules")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("telegram.rules")]),t._m(23),a("p",[t._v("telegram.rules")]),t._m(24),a("p",[t._v("If an image is on a web server requiring authentication, credentials can be passed as additional parameters:")]),a("p",[t._v("telegram.rules")]),t._m(25),a("p",[t._v("To send a base64 jpeg or png image:")]),a("p",[t._v("telegram.rules")]),t._m(26),a("p",[t._v("To send an image based on an Image Item:")]),a("p",[t._v("telegram.rules")]),t._m(27),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"telegram-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#telegram-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Telegram Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Create the Bot and get the Token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("On a Telegram client open a chat with BotFather.")]),e("li",[this._v("write "),e("code",[this._v("/newbot")]),this._v(" to BotFather, fill all the needed information, write down the token. This is the authentication token needed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Create the destination chat and get the chatId")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Open a new chat with your new Bot and post a message on the chat")]),a("li",[t._v("Open a browser and invoke "),a("code",[t._v("https://api.telegram.org/bot<token>/getUpdates")]),t._v(" (where "),a("code",[t._v("<token>")]),t._v(" is the authentication token previously obtained)")]),a("li",[t._v("Look at the JSON result and write down the value of "),a("code",[t._v("result[0].message.chat.id")]),t._v('. That is the chatId. Note that Telegram group chat chatIds are prefixed with a dash "-" that must be included in the config file. (e.g. bot1.chatId: -22334455)')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Each of the actions returns "),e("code",[this._v("true")]),this._v(" on success or "),e("code",[this._v("false")]),this._v(" on failure.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("sendTelegram(String group, String message)")]),t._v(": Sends a Telegram via Telegram REST API - direct message")]),a("li",[a("code",[t._v("sendTelegram(String group, String format, Object... args)")]),t._v(": Sends a Telegram via Telegram REST API - build message with format and args")]),a("li",[a("code",[t._v("sendTelegramPhoto(String group, String photoURL, String caption)")]),t._v(": Sends a Picture via Telegram REST API")]),a("li",[a("code",[t._v("sendTelegramPhoto(String group, String photoURL, String caption, Integer timeoutMillis)")]),t._v(": Sends a Picture via Telegram REST API, using custom HTTP timeout")]),a("li",[a("code",[t._v("sendTelegramPhoto(String group, String photoURL, String caption, String username, String password)")]),t._v(": Sends a Picture, protected by username/password authentication, via Telegram REST API")]),a("li",[a("code",[t._v("sendTelegramPhoto(String group, String photoURL, String caption, String username, String password, int timeoutMillis, int retries)")]),t._v(": Sends a Picture, protected by username/password authentication, using custom HTTP timeout and retries, via Telegram REST API")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The action can be configured in "),e("code",[this._v("services/telegram.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("bots")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("Comma-separated list of "),a("code",[t._v("<bot-name>")]),t._v("s")])]),a("tr",[a("td",[a("code",[t._v("<bot name>.chatId")])]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("chat id")])]),a("tr",[a("td",[a("code",[t._v("<bot name>.token")])]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("authentication token")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bots=bot1,bot2\n\nbot1.chatId=22334455\nbot1.token=xxxxxxxxxxx\n\nbot2.chatId=654321\nbot2.token=yyyyyyyyyyy\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It this example two bots can be used ("),e("code",[this._v("bot1")]),this._v(" and "),e("code",[this._v("bot2")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-a-text-message-to-telegram-chat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-a-text-message-to-telegram-chat","aria-hidden":"true"}},[this._v("#")]),this._v(" Send a text message to telegram chat")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with Fixed Message"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Foo "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegram")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"item Foo changed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-a-text-message-with-a-formatted-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-a-text-message-with-a-formatted-message","aria-hidden":"true"}},[this._v("#")]),this._v(" Send a text message with a formatted message")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with Formatted Message"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Foo "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegram")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"item Foo changed to %s and number is %.1f"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("23.56")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"send-an-image-to-telegram-chat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-an-image-to-telegram-chat","aria-hidden":"true"}},[this._v("#")]),this._v(" Send an image to telegram chat")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When sending an image from a URL, do not place the username/password in the URL like this:\n"),e("code",[this._v("http://<username>:<password>@server/image.png")]),this._v("; pass the credentials to the "),e("code",[this._v("sendTelegramPhoto")]),this._v("\nmethod instead.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("http")]),this._v(" and "),e("code",[this._v("https")]),this._v(" are the only protocols allowed.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image and caption from image accessible by url"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"sent from openHAB"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image without caption from image accessible by url"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token constant"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with image without caption from image accessible by url"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://www.openhab.org/assets/images/openhab-logo-top.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token constant"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"username"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"password"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with base64 image and caption"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Light_GF_Living_Table "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" base64Image "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"data:image/jpeg;base64, LzlqLzRBQ..."')]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base64Image"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"sent from Openhab"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Send telegram with Image Item image and caption"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Webcam_Image "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("sendTelegramPhoto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bot1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Webcam_Image")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toFullString"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"sent from Openhab"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);