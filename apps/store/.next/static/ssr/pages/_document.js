"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
__webpack_require__("./node_modules/.federation/entry.61a28af914fba5ee7a8d354ca3d849d1.js");
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))



var promises = [];
var __webpack_exports__ = Promise.all([
	__webpack_require__.f.consumes || function(chunkId, promises) {},
	__webpack_require__.f.remotes || function(chunkId, promises) {},
].reduce((p, handler) => (handler('pages/_document', p), p), promises)
).then(() => (__webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@module-federation"], () => (__webpack_exec__("./node_modules/.federation/entry.61a28af914fba5ee7a8d354ca3d849d1.js"), __webpack_exec__("../../node_modules/next/dist/pages/_document.js")))));
module.exports = __webpack_exports__;

})();