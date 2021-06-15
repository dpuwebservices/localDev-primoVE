function init() {

  const app = angular.module("viewCustom", ["angularLoad"]);

// **********************  UIC code to collapse I-Share holdings
  app.component("prmAlmaOtherMembersAfter", {
    bindings: {
        parentCtrl: "<",
    },
    controller: [
        function () {
        var ctrl = this;
        ctrl.parentCtrl.isCollapsed = true;
        },
    ],
    });       
// ********************** end UIC code 
 
  }

  
module.exports = {
    init
};
  