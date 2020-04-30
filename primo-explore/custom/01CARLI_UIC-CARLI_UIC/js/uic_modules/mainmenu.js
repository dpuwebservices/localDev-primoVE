/**
 * Remove "target" attributes in Main Menu anchor links
 * forcing pages to load in current tab
 */
function removeTargetAttrs() {
  const targetNode = document.getElementById("some-id");

  function remove() {
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

  remove();
  const observer = new MutationObserver(function (mutations, me) {
    remove();
  });

  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true,
  });
}

module.exports = {
  removeTargetAttrs
};
