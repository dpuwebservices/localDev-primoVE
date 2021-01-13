function init() {

  // button chat widget
  const chatID = "4661c700ed5936ed7ce684ec54e4eba1";
  // slide out chat widget
  // const chatID = "5b6ccf0890ace526e5703d7f2baf7e4f";
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
