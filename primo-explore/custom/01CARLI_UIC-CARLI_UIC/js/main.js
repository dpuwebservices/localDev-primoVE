/**
 * LibChat
 */
(function () {
  "use strict";
  const chatID = "325a3faf25b8f6445806d60e21bcc210";
  const chat_element = document.createElement("div");
  const protocol = document.location.protocol ? "https://" : "http://";
  const chat_script = document.createElement("script");
  document.body.appendChild(chat_element);
  chat_element.setAttribute("id", `libchat_${chatID}`);
  chat_script.setAttribute("type", "text/javascript");
  chat_script.setAttribute("async", "true");
  chat_script.setAttribute(
    "src",
    `${protocol}v2.libanswers.com/load_chat.php?hash=${chatID}`
  );
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
  css1.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  css1.crossorigin = "anonymous";
  a.appendChild(css1);

  var css2 = document.createElement("link");
  css2.type = "text/css";
  css2.rel = "Stylesheet";
  css2.href =
    "https://www.stackmapintegration.com/uic-primove/StackMap.min.css";
  a.appendChild(css2);

  var w = document.createElement("script");
  w.type = "text/javascript";
  w.async = true;
  w.src = "https://www.stackmapintegration.com/uic-primove/StackMap.min.js";
  var b = document.body;
  b.appendChild(w);
})();

/**
 * Browzine
 * add link on Journals search page
 */
// (function () {
//   "use strict";

//   if (window.location.href.match("jsearch")) {
//     var new_card = document.createElement("md-card", { class: "default-card" });
//     new_card.innerHTML = `
//       <md-card-title>
//         <md-card-title-text>
//           <span class="md-headline">Browzine</span>
//         </md-card-title-text>
//       </md-card-title>
//       <md-card-content>
//         <p><a href="https://browzine.com/libraries/81">Browzine<a> lets you flip through and read UIC Library-subscribed Journals, equivalent to browsing through physical Library stacks.</p>
//       </md-card-content>
//       <md-card-actions layout="row" layout-align="end center">
//         <md-button class="md-accent md-raised" href="https://browzine.com/libraries/81">Visit Browzine</md-button>
//         </md-button>
//       </md-card-actions>`;

//     // callback executed when canvas was found
//     function addCard(parent_element) {
//       parent_element.prepend(new_card);
//     }

//     // set up the mutation observer
//     var observer = new MutationObserver(function (mutations, me) {
//       var existing_card = document.querySelector("md-card");
//       if (existing_card) {
//         addCard(existing_card.parentElement);
//         me.disconnect(); // stop observing
//         return;
//       }
//     });

//     // start observing
//     observer.observe(document, {
//       childList: true,
//       subtree: true,
//     });
//   }
// })();

/**
 * Remove Target attributes in Main Menu
 * so pages load in current tab
 */
(function () {
  "use strict";

  function removeTargetAttrs() {
    const menulinks = document.querySelectorAll("prm-main-menu a");
    if (menulinks) {
      menulinks.forEach((link) => {
        // kill all "target" attributes in the main menu
        link.removeAttribute("target");

        // remove now-false Aria label
        const attr = "aria-label";
        const match = ", opens in a new window";
        if (link.getAttribute(attr) && link.getAttribute(attr).match(match)) {
          link.setAttribute(attr, link.getAttribute(attr).replace(match, ""));
        }
      });
    }
  }

  removeTargetAttrs();

  const observer = new MutationObserver(function (mutations, me) {
    removeTargetAttrs();
  });

  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true,
  });
})();
