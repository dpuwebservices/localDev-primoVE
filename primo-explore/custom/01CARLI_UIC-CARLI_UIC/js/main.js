"use strict";

const mainmenu = require("./uic_modules/mainmenu");
const libchat = require("./uic_modules/libchat");
const stackmap = require("./uic_modules/stackmap");
const browzine = require("./uic_modules/browzine");

const app = angular.module("viewCustom", ["angularLoad"]);

libchat.init();
stackmap.init();

mainmenu.removeTargetAttrs();
browzine.appendJournalsCard();

// app.component("myInstitutionComponent", {
//   template: `<span style="margin-left: 40%;">Hello World</span>`,
// });

// app.component("prmSearchBarAfter", {
//   bindings: { parentCtrl: `<` },
//   template: `<my-institution-component></my-institution-component>`,
// });
