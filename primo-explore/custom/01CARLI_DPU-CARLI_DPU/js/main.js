"use strict";

const libchat = require("./dpu_modules/libchat");
const htApp = require("./dpu_modules/hathitrust-and-collapse");

htApp.init();     
libchat.init();     

// (function(){

//     /****************************************************************************************************/
  
//         /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
//       // const app = angular.module("viewCustom", ["angularLoad"]);
  
//     /****************************************************************************************************/


//   })();