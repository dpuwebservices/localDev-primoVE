function init() {
// will need to replace this with production hash (and change widget to button type)
  const chatID = "4661c700ed5936ed7ce684ec54e4eba1"; 
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
