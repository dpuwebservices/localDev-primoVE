const chatID = "a8f3cdd768831e345ca9d2f796ff5e5d";

(function initChat() {
  if (document.getElementById(`libchat_${chatID}`)) {
    var lc = document.createElement("script");
    lc.type = "text/javascript";
    lc.async = "true";
    lc.src =
      ("https:" == document.location.protocol ? "https://" : "http://") +
      `v2.libanswers.com/load_chat.php?hash=${chatID}`;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(lc, s);
  } else {
    setTimeout(initChat, 15);
  }
})();
