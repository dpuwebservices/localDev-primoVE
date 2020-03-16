(function() {
  "use strict";
  "use strict";

  console.log("UIC primo customizations version 1.0.7");

  var app = angular.module("viewCustom", ["angularLoad"]);

  var jQueryScript = document.createElement("script");
  jQueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
  document.getElementsByTagName("head")[0].appendChild(jQueryScript);
  jQueryScript.onload = function() {
    $(document).ready(function() {
      /**
       * UIC Library customizations
       */
    });
  };

  // LibAnswers chat button
  // hat tip https://developers.exlibrisgroup.com/blog/embedding-springshare-libchat-widget-into-the-primo-nu/
  // (function() {
  //   var lc = document.createElement("script");
  //   lc.type = "text/javascript";
  //   lc.async = "true";
  //   lc.src =
  //     ("https:" == document.location.protocol ? "https://" : "http://") +
  //     "v2.libanswers.com/load_chat.php?hash=a8f3cdd768831e345ca9d2f796ff5e5d";
  //   var s = document.getElementsByTagName("script")[0];
  //   s.parentNode.insertBefore(lc, s);
  // })();
})();