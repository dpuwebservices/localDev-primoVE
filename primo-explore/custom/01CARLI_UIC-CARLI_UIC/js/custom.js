(function(){
"use strict";
"use strict";

/**
 * Remove "target" attributes in Main Menu anchor links
 * forcing pages to load in current tab
 */
(function () {
  "use strict";

  var targetNode = document.getElementById("some-id");

  function removeTargetAttrs() {
    var menulinks = document.querySelectorAll("prm-main-menu a");
    if (menulinks) {
      menulinks.forEach(function (link) {
        // kill all "target" attributes in the main menu
        link.removeAttribute("target");

        // remove now-false Aria label
        var attr = "aria-label";
        var match = ", opens in a new window";
        if (link.getAttribute(attr) && link.getAttribute(attr).match(match)) {
          link.setAttribute(attr, link.getAttribute(attr).replace(match, ""));
        }
      });
    }
  }

  removeTargetAttrs();
  var observer = new MutationObserver(function (mutations, me) {
    removeTargetAttrs();
  });

  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
  });
})();

/**
 * LibChat
 */
(function () {
  "use strict";

  var chatID = "325a3faf25b8f6445806d60e21bcc210";
  var chat_element = document.createElement("div");
  var protocol = document.location.protocol ? "https://" : "http://";
  var chat_script = document.createElement("script");
  document.body.appendChild(chat_element);
  chat_element.setAttribute("id", "libchat_" + chatID);
  chat_script.setAttribute("type", "text/javascript");
  chat_script.setAttribute("async", "true");
  chat_script.setAttribute("src", protocol + "v2.libanswers.com/load_chat.php?hash=" + chatID);
  document.body.appendChild(chat_script);
})();

/**
 * Stackmap
 */
(function () {
  "use strict";

  var a = document.querySelector("head");
  var css1 = document.createElement("link");
  css1.type = "text/css";
  css1.rel = "Stylesheet";
  css1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  css1.crossorigin = "anonymous";
  a.appendChild(css1);

  var css2 = document.createElement("link");
  css2.type = "text/css";
  css2.rel = "Stylesheet";
  css2.href = "https://www.stackmapintegration.com/uic-primove/StackMap.min.css";
  a.appendChild(css2);

  var w = document.createElement("script");
  w.type = "text/javascript";
  w.async = true;
  w.src = "https://www.stackmapintegration.com/uic-primove/StackMap.min.js";
  var b = document.body;
  b.appendChild(w);
})();

/**
 * Add Browzine link on Journals search page
 */
(function () {
  "use strict";

  var new_card = document.createElement("md-card");
  new_card.className = "default-card";
  new_card.innerHTML = "\n      <md-card-title>\n        <md-card-title-text>\n          <span class=\"md-headline\">Browzine</span>\n        </md-card-title-text>\n      </md-card-title>\n      <md-card-content>\n        <p><a href=\"https://browzine.com/libraries/81\">Browzine</a> lets you flip through and read UIC Library-subscribed Journals, equivalent to browsing through physical Library stacks.</p>\n      </md-card-content>\n      <md-card-actions layout=\"row\" layout-align=\"end center\">\n        <h4><a class=\"md-accent md-raised\" href=\"https://browzine.com/libraries/81\">Visit Browzine</a></h4>\n      </md-card-actions>";

  function placeCard() {
    var existing_card = document.querySelectorAll("md-card")[0];
    if (window.location.href.match("jsearch")) {
      if (existing_card) {
        existing_card.parentElement.append(new_card);
      }
    }
  }

  // initial appearance on direct load
  var observer = new MutationObserver(function (mutations, me) {
    var existing_card = document.querySelectorAll("md-card")[0];
    if (existing_card) {
      placeCard();
      me.disconnect(); // stop observing
    }
  });

  // subsequent appearances after navigation
  var loc = window.location.href;
  setInterval(function () {
    if (loc != window.location.href) {
      placeCard();
      loc = window.location.href;
    }
  }, 100); // check every 100ms

  observer.observe(document, {
    childList: true,
    subtree: true
  });
})();
})();