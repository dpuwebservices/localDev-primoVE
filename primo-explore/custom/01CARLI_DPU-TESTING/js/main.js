"use strict";

const libchat = require("./dpu_modules/libchat");
// const stackmap = require("./dpu_modules/stackmap"); *** uncomment when online maps are updated
const appMods = require("./dpu_modules/app-mods");


appMods.init();     
libchat.init();   
stackmap.init();  

// (function(){

//     /****************************************************************************************************/
  
//         /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
//       // const app = angular.module("viewCustom", ["angularLoad"]);
  
//     /****************************************************************************************************/


//   })();