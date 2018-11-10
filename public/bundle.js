/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var px_to_em__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! px-to-em */ \"./node_modules/px-to-em/pxToEm.mjs\");\n\nvar minRows = 5;\nvar maxRows = 7;\n\n(function () {\n  var resize = function resize() {\n    var textarea = document.getElementsByTagName('textarea')[0];\n    var scrollHeight = textarea.scrollHeight;\n    var diff = scrollHeight - textarea.clientHeight;\n    var rowCount = Object(px_to_em__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scrollHeight, textarea);\n\n    if (diff > 0 && rowCount <= maxRows) {\n      document.documentElement.style.setProperty('--row-count', \"\".concat(scrollHeight, \"px\"));\n    }\n  };\n\n  var textarea = document.getElementsByTagName('textarea')[0];\n  textarea.addEventListener('keyup', resize);\n})();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/px-to-em/pxToEm.mjs":
/*!******************************************!*\
  !*** ./node_modules/px-to-em/pxToEm.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pxToEm; });\n// Copyright © 2017 Jackson Ray Hamilton\n\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the “Software”), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n\n// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n// SOFTWARE.\n\nfunction isNumber (value) {\n  return value && typeof value === 'number';\n}\n\nfunction isBottomValue (value) {\n  return value === null || value === undefined;\n}\n\nfunction isObjectLike (value) {\n  return !isBottomValue(value) && typeof value === 'object';\n}\n\nfunction getPrototype (value) {\n  if (isBottomValue(value)) {\n    return value;\n  }\n  return Object.getPrototypeOf(value);\n}\n\nfunction getSource (func) {\n  return Function.prototype.toString.call(func);\n}\n\nfunction isPlainObject (value) {\n  if (!isObjectLike(value)) {\n    return false;\n  }\n  var prototype = getPrototype(value);\n  if (!isObjectLike(prototype)) {\n    return false;\n  }\n  var Constructor = prototype.constructor;\n  return typeof Constructor === 'function' &&\n    Constructor instanceof Constructor &&\n    getSource(Constructor) === getSource(Object);\n}\n\nfunction isElement (value) {\n  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);\n}\n\nfunction getPxFontSize (element) {\n  return parseFloat(getComputedStyle(element).fontSize);\n}\n\nfunction pxToEm (px, element) {\n  if (!isNumber(px)) {\n    throw new TypeError('px is not a number');\n  }\n  element = isBottomValue(element) ? document.documentElement : element;\n  if (!isElement(element)) {\n    throw new TypeError('element is not an element');\n  }\n  var temporaryElement = document.createElement('div');\n  temporaryElement.style.setProperty('position', 'absolute', 'important');\n  temporaryElement.style.setProperty('visibility', 'hidden', 'important');\n  temporaryElement.style.setProperty('font-size', '1em', 'important');\n  element.appendChild(temporaryElement);\n  var baseFontSize = getPxFontSize(temporaryElement);\n  temporaryElement.parentNode.removeChild(temporaryElement);\n  return px / baseFontSize;\n}\n\n\n//# sourceURL=webpack:///./node_modules/px-to-em/pxToEm.mjs?");

/***/ })

/******/ });