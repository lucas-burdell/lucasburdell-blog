(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.memoize-one"],{

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar simpleIsEqual = function simpleIsEqual(a, b) {\n  return a === b;\n};\n\nfunction index (resultFn, isEqual) {\n  if (isEqual === void 0) {\n    isEqual = simpleIsEqual;\n  }\n\n  var lastThis;\n  var lastArgs = [];\n  var lastResult;\n  var calledOnce = false;\n\n  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {\n    return isEqual(newArg, lastArgs[index]);\n  };\n\n  var result = function result() {\n    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {\n      newArgs[_key] = arguments[_key];\n    }\n\n    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {\n      return lastResult;\n    }\n\n    lastResult = resultFn.apply(this, newArgs);\n    calledOnce = true;\n    lastThis = this;\n    lastArgs = newArgs;\n    return lastResult;\n  };\n\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n//# sourceURL=webpack:///./node_modules/memoize-one/dist/memoize-one.esm.js?");

/***/ })

}]);