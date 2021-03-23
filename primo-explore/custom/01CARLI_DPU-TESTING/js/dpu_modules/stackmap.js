/* StackMap: Start */
function init() {
 
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
    css2.href = "https://www.stackmapintegration.com/depaul-primove/StackMap.min.css";
   a.appendChild(css2);

    var w = document.createElement("script");
    w.type = "text/javascript"; w.async = true;
    w.src = "https://www.stackmapintegration.com/depaul-primove/StackMap.min.js";
   var b = document.body;
    b.appendChild(w);

})();

module.exports = {
    init
  };
/* StackMap: END */