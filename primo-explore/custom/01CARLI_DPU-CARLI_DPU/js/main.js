"use strict";

const libchat = require("./dpu_modules/libchat");
libchat.init();

const htApp = require("./dpu_modules/hathitrust");
htApp.init();

(function(){
    "use strict";
     
    /****************************************************************************************************/
  
        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
        // const app = angular.module("viewCustom", ["angularLoad"]);
  
    /****************************************************************************************************/
    // Code from UIC to initially collapse I-Share libraries
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

          
  
  })();