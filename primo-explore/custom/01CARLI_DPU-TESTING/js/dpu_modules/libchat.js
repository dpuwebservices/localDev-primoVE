function init() {

  const chatID = "cbd7444341bc11933de2ea1aa559adbb";
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
}

module.exports = {
  init
};
