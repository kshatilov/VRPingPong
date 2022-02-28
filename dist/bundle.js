/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "./src/VRButton.js":
/*!*************************!*\
  !*** ./src/VRButton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VRButton\": () => (/* binding */ VRButton)\n/* harmony export */ });\nclass VRButton {\r\n\r\n    static createButton ( renderer, options ) {\r\n\r\n        if ( options ) {\r\n\r\n            console.error( 'THREE.VRButton: The \"options\" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.' );\r\n\r\n        }\r\n\r\n        const button = document.createElement( 'button' );\r\n\r\n        function showEnterVR ( /*device*/ ) {\r\n\r\n            let currentSession = null;\r\n\r\n            async function onSessionStarted ( session ) {\r\n\r\n                session.addEventListener( 'end', onSessionEnded );\r\n\r\n                await renderer.xr.setSession( session );\r\n                button.textContent = 'EXIT VR';\r\n\r\n                currentSession = session;\r\n\r\n            }\r\n\r\n            function onSessionEnded ( /*event*/ ) {\r\n\r\n                currentSession.removeEventListener( 'end', onSessionEnded );\r\n\r\n                button.textContent = 'ENTER VR';\r\n\r\n                currentSession = null;\r\n\r\n            }\r\n\r\n            //\r\n\r\n            button.style.display = '';\r\n\r\n            button.style.cursor = 'pointer';\r\n            button.style.left = 'calc(50% - 50px)';\r\n            button.style.width = '100px';\r\n\r\n            button.textContent = 'ENTER VR';\r\n\r\n            button.onmouseenter = function () {\r\n\r\n                button.style.opacity = '1.0';\r\n\r\n            };\r\n\r\n            button.onmouseleave = function () {\r\n\r\n                button.style.opacity = '0.5';\r\n\r\n            };\r\n\r\n            button.onclick = function () {\r\n\r\n                if ( currentSession === null ) {\r\n\r\n                    // WebXR's requestReferenceSpace only works if the corresponding feature\r\n                    // was requested at session creation time. For simplicity, just ask for\r\n                    // the interesting ones as optional features, but be aware that the\r\n                    // requestReferenceSpace call will fail if it turns out to be unavailable.\r\n                    // ('local' is always available for immersive sessions and doesn't need to\r\n                    // be requested separately.)\r\n\r\n                    const sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'layers' ] };\r\n                    navigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );\r\n\r\n                } else {\r\n\r\n                    currentSession.end();\r\n\r\n                }\r\n\r\n            };\r\n\r\n        }\r\n\r\n        function disableButton () {\r\n\r\n            button.style.display = '';\r\n\r\n            button.style.cursor = 'auto';\r\n            button.style.left = 'calc(50% - 75px)';\r\n            button.style.width = '150px';\r\n\r\n            button.onmouseenter = null;\r\n            button.onmouseleave = null;\r\n\r\n            button.onclick = null;\r\n\r\n        }\r\n\r\n        function showWebXRNotFound () {\r\n\r\n            disableButton();\r\n\r\n            button.textContent = 'VR NOT SUPPORTED';\r\n\r\n        }\r\n\r\n        function stylizeElement ( element ) {\r\n\r\n            element.style.position = 'absolute';\r\n            element.style.bottom = '20px';\r\n            element.style.padding = '12px 6px';\r\n            element.style.border = '1px solid #fff';\r\n            element.style.borderRadius = '4px';\r\n            element.style.background = 'rgba(0,0,0,0.5)';\r\n            element.style.color = 'rgba(255,255,255,0.9)';\r\n            element.style.font = 'normal 13px sans-serif';\r\n            element.style.textAlign = 'center';\r\n            element.style.opacity = '0.5';\r\n            element.style.outline = 'none';\r\n            element.style.zIndex = '999';\r\n\r\n        }\r\n\r\n        if ( 'xr' in navigator ) {\r\n\r\n            button.id = 'VRButton';\r\n            button.style.display = 'none';\r\n\r\n            stylizeElement( button );\r\n\r\n            navigator.xr.isSessionSupported( 'immersive-vr' ).then( function ( supported ) {\r\n\r\n                supported ? showEnterVR() : showWebXRNotFound();\r\n\r\n                if ( supported && VRButton.xrSessionIsGranted ) {\r\n\r\n                    button.click();\r\n\r\n                }\r\n\r\n            } );\r\n\r\n            return button;\r\n\r\n        } else {\r\n\r\n            const message = document.createElement( 'a' );\r\n\r\n            if ( window.isSecureContext === false ) {\r\n\r\n                message.href = document.location.href.replace( /^http:/, 'https:' );\r\n                message.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message\r\n\r\n            } else {\r\n\r\n                message.href = 'https://immersiveweb.dev/';\r\n                message.innerHTML = 'WEBXR NOT AVAILABLE';\r\n\r\n            }\r\n\r\n            message.style.left = 'calc(50% - 90px)';\r\n            message.style.width = '180px';\r\n            message.style.textDecoration = 'none';\r\n\r\n            stylizeElement( message );\r\n\r\n            return message;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    static xrSessionIsGranted = false;\r\n\r\n    static registerSessionGrantedListener () {\r\n\r\n        if ( 'xr' in navigator ) {\r\n\r\n            navigator.xr.addEventListener( 'sessiongranted', () => {\r\n\r\n                VRButton.xrSessionIsGranted = true;\r\n\r\n            } );\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nVRButton.registerSessionGrantedListener();\r\n\r\n\n\n//# sourceURL=webpack://vrpingpong/./src/VRButton.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Engine(canvas);\r\nconst scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);\r\nlet box;\r\n\r\nvar createScene = async function () {\r\n    var camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.FreeCamera(\"camera1\", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), scene);\r\n    camera.setTarget(babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());\r\n    camera.attachControl(canvas, true);\r\n    var light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight(\"light1\", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), scene);\r\n    light.intensity = 0.7;\r\n    const env = scene.createDefaultEnvironment();\r\n    const xr = await scene.createDefaultXRExperienceAsync({\r\n        floorMeshes: [env.ground],\r\n    });\r\n    return scene;\r\n};\r\n\r\ncreateScene();\r\nscene.createDefaultXRExperienceAsync();\r\n\r\nlet createBox = () => {\r\n    box = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.CreateBox(\"box\", 2, scene);\r\n    const boxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(\"material\", scene);\r\n    boxMaterial.emissiveColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0.58, 0.86);\r\n    box.material = boxMaterial;\r\n    box.position._x = 10;\r\n    box.position._y = 10;\r\n    box.position._z = 10;\r\n}\r\ncreateBox();\r\n\r\nvar renderLoop = function () {\r\n    box.rotation.x += 0.002;\r\n    box.rotation.y += 0.004;\r\n    scene.render();\r\n};\r\n\r\nengine.runRenderLoop(renderLoop);\r\n\r\n\r\n\n\n//# sourceURL=webpack://vrpingpong/./src/main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	__webpack_require__("./src/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/VRButton.js");
/******/ 	
/******/ })()
;