(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{430:function(e,t,a){"use strict";a.r(t);var r=a(43),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"setting-up-email-alerts-with-azure-app-servicess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-email-alerts-with-azure-app-servicess","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up Email Alerts with Azure App Servicess")]),e._v(" "),a("p",[a("strong",[e._v("Alerts")]),e._v(" allows you to receive an alert based on monitoring metric for your Azure app services. You can be notified in a variety of ways such as the Azure Portal, Webhooks or Email. In this post, we'll setup an alert based on a 404 error message and send it via email.")]),e._v(" "),a("p",[e._v("In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),a("strong",[e._v("Monitoring")]),e._v(" then you will see "),a("strong",[e._v("Alert")]),e._v(". Open it and select "),a("strong",[e._v("Add Alert")]),e._v(" as shown below.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/alertblog1.png")}}),e._v(" "),a("p",[e._v("Here you'll see the following options:")]),e._v(" "),a("ul",[a("li",[e._v("Resouce - selects which resource you want the alert active on.")]),e._v(" "),a("li",[e._v("Name - you'll need to give it a unique name.")]),e._v(" "),a("li",[e._v("Description (optional) - Provide a description of the alert. Though this is optional, I'd recommend adding one.")]),e._v(" "),a("li",[e._v("Alert on Metric or Events - You can trigger an alert on some metric or an event.")])]),e._v(" "),a("p",[a("strong",[e._v("Metric vs. Event")]),e._v('  A metric would be something like "If we receive 5 or more Http Server Errors over the last 5 minutes then trigger an alert". An Event would be if something Started, Stopped, Deleted or all of the above happened with our App Service than trigger an alert.')]),e._v(" "),a("p",[e._v("Go ahead and select a resource and provide a "),a("strong",[e._v("Name")]),e._v(" and "),a("strong",[e._v("Description")]),e._v(" and select "),a("strong",[e._v("Http 404")]),e._v(" for the metric with the "),a("strong",[e._v("Greater than")]),e._v(" condition set for "),a("strong",[e._v("O threshold")]),e._v(" and "),a("strong",[e._v("Over the last 5 minutes")]),e._v(". Go ahead and add a checkmark for the email and provide an additional email address as shown below.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/alertblog2.png")}}),e._v(" "),a("p",[e._v("Press "),a("strong",[e._v("OK")]),e._v(" and it will save the alert.")]),e._v(" "),a("p",[e._v("Head back to your website (*.azurewebsites.net) and enter an invalid page to trigger a 404 error. In my case, I entered http://app.azurewebsites.net/"),a("strong",[e._v("TESTING/")]),e._v(". It should throw an error unless you have a custom error page defined.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Server Error in '/' Application.\n\nThe resource cannot be found.\n\nDescription: HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable.  Please review the following URL and make sure that it is spelled correctly. \n\nRequested URL: /TESTING/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("Take a look at your email and you should see an email from Azure as shown below.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/alertblog3.png")}}),e._v(" "),a("p",[e._v("Go back into the Azure Portal and search for "),a("strong",[e._v("Alerts")]),e._v(" and then the alert that you just created. You can see when it was last triggered as well as other information. If you click on the alert, then you'll see you can also do additional things such as run a logic app when this alert triggers.")])])},[],!1,null,null,null);t.default=n.exports}}]);