!function o(l,a,u){function s(e,t){if(!a[e]){if(!l[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[e]={exports:{}};l[e][0].call(i.exports,function(t){return s(l[e][1][t]||t)},i,i.exports,o,l,a,u)}return a[e].exports}for(var c="function"==typeof require&&require,t=0;t<u.length;t++)s(u[t]);return s}({1:[function(t,e,r){"use strict";e.exports={init:function(){var t=angular.module("viewCustom",["angularLoad","hathiTrustAvailability"]);t.component("prmAlmaOtherMembersAfter",{bindings:{parentCtrl:"<"},controller:[function(){this.parentCtrl.isCollapsed=!0}]}),t.component("prmSearchResultAvailabilityLineAfter",{template:'<hathi-trust-availability ignore-copyright="false" entity-id="https://shib.is.depaul.edu/idp/shibboleth"></hathi-trust-availability>'}),angular.module("hathiTrustAvailability",[]).constant("hathiTrustBaseUrl","https://catalog.hathitrust.org/api/volumes/brief/json/").config(["$sceDelegateProvider","hathiTrustBaseUrl",function(t,e){var r=t.resourceUrlWhitelist();r.push(e+"**"),t.resourceUrlWhitelist(r)}]).factory("hathiTrust",["$http","$q","hathiTrustBaseUrl",function(r,a,n){function t(t){if(t.length){var e=n+t.join("|");return r.jsonp(e,{cache:!0,jsonpCallbackParam:"callback"}).then(function(t){return t.data})}return a.resolve(null)}var e={};return e.findRecord=function(n){return t(n).then(function(t){for(var e=0;e<n.length;e++){var r=Object.keys(t[n[e]].records)[0];if(r)return a.resolve(t[n[e]].records[r].recordURL)}return a.resolve(null)}).catch(function(t){console.error(t)})},e.findFullViewRecord=function(l){return t(l).then(function(t){for(var e=null,r=0;!e&&r<l.length;r++)for(var n=t[l[r]],i=0;i<n.items.length;i++){var o=n.items[i];if("full view"===o.usRightsString.toLowerCase()){e=n.records[o.fromRecord].recordURL;break}}return a.resolve(e)}).catch(function(t){console.error(t)})},e}]).controller("hathiTrustAvailabilityController",["hathiTrust",function(e){var r=this;r.$onInit=function(){r.msg||(r.msg="Full Text Available at HathiTrust"),r.hideOnline&&i()||r.hideIfJournal&&t()||o()};function n(t){return t.match(/^(\(ocolc\))?\d+$/i)}var t=function(){return!(-1==r.prmSearchResultAvailabilityLine.result.pnx.addata.format[0].toLowerCase().indexOf("journal"))},i=function(){var t=r.prmSearchResultAvailabilityLine.result.delivery||[];return t.GetIt1?r.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(function(t){return t.links.some(function(t){return t.isLinktoOnline})}):-1!==t.deliveryCategory.indexOf("Alma-E")},o=function(){var t=(r.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid||[]).filter(n).map(function(t){return"oclc:"+t.toLowerCase().replace("(ocolc)","")});e[r.ignoreCopyright?"findRecord":"findFullViewRecord"](t).then(function(t){var e;t&&(r.fullTextLink=(e=t,r.entityId?e+"?signon=swle:"+r.entityId:e))})}}]).component("hathiTrustAvailability",{require:{prmSearchResultAvailabilityLine:"^prmSearchResultAvailabilityLine"},bindings:{entityId:"@",ignoreCopyright:"<",hideIfJournal:"<",hideOnline:"<",msg:"@?"},controller:"hathiTrustAvailabilityController",template:'<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">                <md-icon alt="HathiTrust Logo">                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">  <image id="image0" width="16" height="16" x="0" y="0"                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEXuegXvegTsewTveArw                  eQjuegftegfweQXsegXweQbtegnsegvxeQbvegbuegbvegbveQbtegfuegbvegXveQbvegbsfAzt                  plfnsmfpq1/wplPuegXvqFrrq1znr2Ptok/sewvueQfuegbtegbrgRfxyJPlsXDmlTznnk/rn03q                  pVnomkjnlkDnsGnvwobsfhPveQXteQrutHDqpF3qnUnpjS/prmDweQXsewjvrWHsjy7pnkvqqGDv                  t3PregvqhB3uuXjusmzpp13qlz3pfxTskC3uegjsjyvogBfpmkHpqF/us2rttXLrgRjrgBjttXDo                  gx/vtGznjzPtfhHqjCfuewfrjCnwfxLpjC7wtnDogBvssmjpfhLtegjtnEjrtnTmjC/utGrsew7s                  o0zpghnohB/roUrrfRHtsmnlkTbrvH3tnEXtegXvegTveQfqhyHvuXjrrGTpewrsrmXqfRHogRjt                  q2Dqewvqql/wu3vqhyDueQnwegXuegfweQPtegntnUvnt3fvxI7tfhTrfA/vzJvmtXLunEbtegrw                  egTregzskjbsxI/ouoPsqFzniyrz2K3vyZnokDLpewvtnkv30J/w17XsvYXjgBbohR7nplnso1L0                  1Kf40Z/um0LvegXngBnsy5juyJXvsGftrGTnhB/opVHoew7qhB7rzJnnmErkkz3splbqlT3smT3t                  tXPqqV7pjzHvunjrfQ7vewPsfA7uoU3uqlruoEzsfQ/vegf///9WgM4fAAAAFHRSTlOLi4uLi4uL                  i4uLi4uLi4tRUVFRUYI6/KEAAAABYktHRLvUtndMAAAAB3RJTUUH4AkNDgYNB5/9vwAAAQpJREFU                  GNNjYGBkYmZhZWNn5ODk4ubh5WMQERUTl5CUEpWWkZWTV1BUYlBWUVVT19BUUtbS1tHV0zdgMDQy                  NjE1MzRXsrC0sraxtWOwd3B0cnZxlXZz9/D08vbxZfDzDwgMCg4JdQsLj4iMio5hiI2LT0hMSk5J                  TUvPyMzKzmHIzcsvKCwqLiktK6+orKquYZCuratvaGxqbmlta+8QNRBl6JQ26Oru6e3rnzBx0uQ8                  aVGGvJopU6dNn1E8c9bsOXPniYoySM+PXbBw0eIlS5fl1C+PFRFlEBUVXbFy1eo1a9fliQDZYIHY                  9fEbNm7avEUUJiC6ddv2HTt3mSuBBfhBQEBQSEgYzOIHAHtfTe/vX0uvAAAAJXRFWHRkYXRlOmNy                  ZWF0ZQAyMDE2LTA5LTEzVDE0OjA2OjEzLTA1OjAwNMgVqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAx                  Ni0wOS0xM1QxNDowNjoxMy0wNTowMEWVrRQAAAAASUVORK5CYII=" />                  </svg>                 </md-icon>                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">                {{ ::$ctrl.msg }}                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>                </a>              </span>'})}}},{}],2:[function(t,e,r){"use strict";e.exports={init:function(){var t="4661c700ed5936ed7ce684ec54e4eba1",e=document.createElement("div"),r=document.location.protocol?"https://":"http://",n=document.createElement("script");document.body.appendChild(e),e.setAttribute("id","libchat_"+t),n.setAttribute("type","text/javascript"),n.setAttribute("async","true"),n.setAttribute("src",r+"v2.libanswers.com/load_chat.php?hash="+t),document.body.appendChild(n)}}},{}],3:[function(t,e,r){"use strict";var n=t("./dpu_modules/libchat");t("./dpu_modules/app-mods").init(),n.init()},{"./dpu_modules/app-mods":1,"./dpu_modules/libchat":2}]},{},[3]);
//# sourceMappingURL=custom.js.map
