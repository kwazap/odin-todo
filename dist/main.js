/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.render)()\nconst project1 = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('name')\nproject1.addTask('newtask', 'descr')\nproject1.addTask('newtask', 'descsdar')\nproject1.addTask('AAAA', 'bbbbb')\n\nproject1.removeTask(1)\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nclass Project {\n    constructor (projectName) {\n        this.projectName = projectName;\n        this.taskArray = []\n    }\n\n    get name() {\n        return this.projectName;\n    }\n\n    addTask(taskName, descritpion) {\n        this.taskArray.push(new _task__WEBPACK_IMPORTED_MODULE_1__.Task(taskName, descritpion, this.taskArray.length))\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('taskAdded', this.taskArray)\n    }\n\n    removeTask(id) {\n        this.taskArray[id] = null\n        this.taskArray = this.taskArray.filter(n => n)\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('taskAdded', this.taskArray)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/project.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub)\n/* harmony export */ });\n\nconst pubsub = {\n    events: {},\n\n    subscribe (eventName, fn) {\n        this.events[eventName] = this.events[eventName] || []          \n        if (this.events[eventName] == []) {\n            this.events[eventName].push(fn)\n        } else {\n            for (let i = 0; i < this.events[eventName].length; i++) {\n                if (this.events[eventName][i] == fn) {\n                    return\n                }                \n            }\n            this.events[eventName].push(fn)\n        }\n    },\n\n    publish(eventName, value) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach(fn => {\n                fn(value)\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack://odin-todo/./src/pubsub.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction render(what) {\n    \n    if (!what) {\n    } else {\n        if (document.querySelector('.cc')) {\n            document.querySelector('.cc').remove()\n        }\n        let result = Object.values(what)\n        const cc = document.createElement('div')\n        cc.className = 'cc'\n        const container = document.querySelector('.container')\n        container.appendChild(cc)\n        result.forEach(element => {\n            const div = document.createElement('div')\n            div.textContent = element.taskName\n            cc.appendChild(div)\n        });\n    }\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('taskAdded', render)\n}\n\n//# sourceURL=webpack://odin-todo/./src/render.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(taskName, descritpion, id){\n        this.taskName = taskName\n        this.descritpion = descritpion\n        this.id = id\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;