"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "__federation_expose_useAddToCartHook";
exports.ids = ["__federation_expose_useAddToCartHook"];
exports.modules = {

/***/ "./hooks/useAddToCart.ts":
/*!*******************************!*\
  !*** ./hooks/useAddToCart.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAddToCartHook: () => (/* binding */ useAddToCartHook)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useAddToCartHook() {\n    const [itemsCount, setItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    return {\n        itemsCount,\n        addToCart: ()=>setItemsCount((i)=>i + 1),\n        clearCart: ()=>setItemsCount(0)\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAddToCartHook);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBZGRUb0NhcnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUUxQixTQUFTQztJQUNaLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUNyRCxPQUFPO1FBQ0hFO1FBQ0FFLFdBQVcsSUFBTUQsY0FBYyxDQUFDRSxJQUFNQSxJQUFJO1FBQzFDQyxXQUFXLElBQU1ILGNBQWM7SUFDbkM7QUFDSjtBQUVBLGlFQUFlRixnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja291dC8uL2hvb2tzL3VzZUFkZFRvQ2FydC50cz9iNTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkVG9DYXJ0SG9vaygpIHtcbiAgICBjb25zdCBbaXRlbXNDb3VudCwgc2V0SXRlbXNDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zQ291bnQsXG4gICAgICAgIGFkZFRvQ2FydDogKCkgPT4gc2V0SXRlbXNDb3VudCgoaSkgPT4gaSArIDEpLFxuICAgICAgICBjbGVhckNhcnQ6ICgpID0+IHNldEl0ZW1zQ291bnQoMCksXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQWRkVG9DYXJ0SG9vaztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUFkZFRvQ2FydEhvb2siLCJpdGVtc0NvdW50Iiwic2V0SXRlbXNDb3VudCIsImFkZFRvQ2FydCIsImkiLCJjbGVhckNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useAddToCart.ts\n");

/***/ })

};
;