const chatID = "325a3faf25b8f6445806d60e21bcc210";

// var lc = document.createElement("script");
// lc.type = "text/javascript";
// lc.async = "true";
// lc.src =
//   ("https:" == document.location.protocol ? "https://" : "http://") +
//   `v2.libanswers.com/load_chat.php?hash=${chatID}`;
// var s = document.getElementsByTagName("script")[0];
// s.parentNode.insertBefore(lc, s);

/* <div id="libchat_1389aa26189218078bb2f0ebf1bbdb0c"></div>
<script type="text/javascript" src="https://v2.libanswers.com/load_chat.php?hash=1389aa26189218078bb2f0ebf1bbdb0c"></script> */

(function() {
  const chat_element = document.createElement("div");
  chat_element.setAttribute("id", `libchat_${chatID}`);
  document.body.appendChild(chat_element);

  const protocol = document.location.protocol ? "https://" : "http://";

  const chat_script = document.createElement("script");
  chat_script.setAttribute("type", "text/javascript");
  chat_script.setAttribute("async", "true");
  chat_script.setAttribute(
    "src",
    `${protocol}v2.libanswers.com/load_chat.php?hash=${chatID}`
  );

  // const s = document.getElementsByTagName("script")[0];
  // s.parentNode.insertBefore(lc, s);

  document.body.appendChild(chat_script);
})();
