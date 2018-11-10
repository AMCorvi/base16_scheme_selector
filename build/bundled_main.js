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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base16/schemes.js":
/*!*******************************!*\
  !*** ./src/base16/schemes.js ***!
  \*******************************/
/*! exports provided: readDir, arrayOfFile, listOfSchemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readDir\", function() { return readDir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayOfFile\", function() { return arrayOfFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listOfSchemes\", function() { return listOfSchemes; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * create function that will output array containing file paths of the base16\n * scheme shell files\n *\n * @param {object} options={} collections of options for configuration and dependceny injection for testing purposes\n * @param {string} pathToSchemeDirectory path of the directory to the base16 scheme files\n * @returns {Promise<array>} of file paths\n */\n\nvar readDir = function readDir() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var pathToSchemeDirectory = arguments.length > 1 ? arguments[1] : undefined;\n  return new Promise(function (resolve, reject) {\n    if (options.fs.hasOwnProperty(\"readdir\")) {\n      options.fs.readdir(pathToSchemeDirectory, \"utf-8\", function (err, files) {\n        // if an error occures in reading the file directory\n        //      - reject promise with error\n        //  else\n        //      - pass resolve promise with array of files\n        if (err) return reject(err);else resolve(files);\n      });\n    } // return definitive error when fs modules (or properly mocked alternative) is not passed\n    else {\n        return reject(new Error(\"Expected 'options' variable to contain field 'fs' of type object which itself contains a readdir method, but such method was not available\", __filename));\n      }\n  });\n};\nvar arrayOfFile = function arrayOfFile(path) {\n  return readDir({\n    fs: fs__WEBPACK_IMPORTED_MODULE_0___default.a\n  }, path);\n};\nvar listOfSchemes = function listOfSchemes() {\n  return readDir({\n    fs: fs__WEBPACK_IMPORTED_MODULE_0___default.a\n  }, \"\".concat(Object(os__WEBPACK_IMPORTED_MODULE_1__[\"homedir\"])(), \"/.config/base16-shell/scripts/\"));\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./src/base16/schemes.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base16_schemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base16/schemes */ \"./src/base16/schemes.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n// import the base16 file paths\n\n\n\nfunction main() {\n  //initialize and welcome user to the scheme selector\n  // pass an array of base16 scheme paths to the selector\n  var out;\n  Object(_base16_schemes__WEBPACK_IMPORTED_MODULE_0__[\"listOfSchemes\"])().then(console.log).catch(console.error);\n} // Run the program\n\n\nmain();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ })

/******/ });