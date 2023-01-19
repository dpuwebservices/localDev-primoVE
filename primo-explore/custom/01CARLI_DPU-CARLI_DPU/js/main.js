"use strict";

// keep modules seperate when available.

// LibChat chat reference module by Springshare
const libchat = require("./dpu_modules/libchat");

// StackMap location mapping for catalog
const stackmap = require("./dpu_modules/stackmap"); 

// Not really used any longer, but have a backup of the emergency access to HathiTrust items that was activated during the pandemic. If need to revert, rename that fime to just app-mods.js
const appMods = require("./dpu_modules/app-mods");


appMods.init();     
libchat.init();   
stackmap.init(); 


// from initial package from Ex Libris
// (function(){

//     /****************************************************************************************************/
  
//         /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
//       // const app = angular.module("viewCustom", ["angularLoad"]);
  
//     /****************************************************************************************************/


//   })();