function appendJournalsCard() {
  var new_card = document.createElement("md-card");

  new_card.className = "default-card";
  new_card.innerHTML = `
  <md-card-title>
    <md-card-title-text>
      <span class="md-headline">Browzine</span>
    </md-card-title-text>
  </md-card-title>
  <md-card-content>
    <p><a href="https://browzine.com/libraries/81">Browzine</a> lets you flip through and read UIC Library-subscribed Journals, equivalent to browsing through physical Library stacks.</p>
  </md-card-content>
  <md-card-footer layout="row" layout-align="end center">
    <md-button><a class="md-accent md-raised" href="https://browzine.com/libraries/81">Visit Browzine</a></md-button>
  </md-card-footer>`;

  function placeCard() {
    const existing_card = document.querySelectorAll("md-card")[0];
    if (window.location.href.match("jsearch")) {
      if (existing_card) {
        existing_card.parentElement.append(new_card);
      }
    }
  }

  // initial appearance on direct load
  const observer = new MutationObserver(function (mutations, me) {
    const existing_card = document.querySelectorAll("md-card")[0];
    if (existing_card) {
      placeCard();
      me.disconnect(); // stop observing
    }
  });

  // subsequent appearances after navigation
  let loc = window.location.href;
  setInterval(function () {
    if (loc != window.location.href) {
      placeCard();
      loc = window.location.href;
    }
  }, 100); // check every 100ms

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

module.exports = {
  appendJournalsCard,
};
