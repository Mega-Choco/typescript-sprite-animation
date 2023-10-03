/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/animation.ts":
/*!**********************************!*\
  !*** ./src/modules/animation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   AnimationLoopPoint: () => (/* binding */ AnimationLoopPoint),
/* harmony export */   AnimationManager: () => (/* binding */ AnimationManager)
/* harmony export */ });
class AnimationLoopPoint {
    constructor(start, end) {
        this.start = 0;
        this.end = 0;
        this.start = start;
        this.end = end;
    }
}
class Animation {
    constructor(name, offsetX, offsetY, width, height, frame, waitFrame, loopInfo) {
        this.name = name;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.width = width;
        this.height = height;
        this.frame = frame;
        this.waitFrame = waitFrame;
        this.loopInfo = loopInfo;
    }
}
class drawInfo {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
}
class AnimationManager {
    constructor(animations, sheet) {
        this.animationDrawInfo = new drawInfo();
        this.currentSequenceCount = 0;
        this.currentWaitFrameCount = 0;
        //루프 포인트를 위해서 현재의 시작프레임과 끝프레임을 저장하기 위함
        this.currentStartFrame = 0;
        this.currentEndFrame = 0;
        this.currentAnimationIndex = 0;
        this.loopedOnece = false;
        this.animations = animations;
        this.spriteSheet = sheet;
    }
    update() {
        let nowAnim = this.animations[this.currentAnimationIndex];
        if (nowAnim.waitFrame <= this.currentWaitFrameCount) {
            if (this.currentSequenceCount >= this.currentEndFrame - 1) {
                if (this.loopedOnece == false) {
                    if (nowAnim.loopInfo != null) {
                        this.currentStartFrame = nowAnim.loopInfo.start;
                        this.currentEndFrame = nowAnim.loopInfo.end;
                    }
                    this.loopedOnece = true;
                }
                this.currentSequenceCount = this.currentStartFrame;
            }
            else {
                this.currentSequenceCount++;
            }
            this.updateDarawInfo();
            this.currentWaitFrameCount = 0;
        }
        else {
            this.currentWaitFrameCount++;
        }
    }
    updateDarawInfo() {
        this.animationDrawInfo.width = this.animations[this.currentAnimationIndex].width;
        this.animationDrawInfo.height = this.animations[this.currentAnimationIndex].height;
        this.animationDrawInfo.x =
            this.animations[this.currentAnimationIndex].offsetX +
                (this.animations[this.currentAnimationIndex].width * this.currentSequenceCount);
        this.animationDrawInfo.y = this.animations[this.currentAnimationIndex].offsetY;
    }
    changeAnimation(name) {
        let index = this.animations.findIndex(ani => ani.name === name);
        if (name === this.animations[this.currentAnimationIndex].name) {
            return;
        }
        if (index === -1) {
            return;
        }
        this.currentAnimationIndex = index;
        this.resetAnimationRunner();
        this.updateDarawInfo();
    }
    resetAnimationRunner() {
        this.currentWaitFrameCount = 0;
        this.currentSequenceCount = 0;
        this.currentStartFrame = 0;
        this.currentEndFrame = this.animations[this.currentAnimationIndex].frame;
        this.loopedOnece = false;
    }
}


/***/ }),

/***/ "./src/modules/vector.ts":
/*!*******************************!*\
  !*** ./src/modules/vector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector2D: () => (/* binding */ Vector2D)
/* harmony export */ });
class Vector2D {
    constructor(x, y) {
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
    }
    toString() {
        return `(x: ${this.x.toString()}, y: ${this.y.toString()})`;
    }
    magnitude(v2) {
        return Math.sqrt((this.x * v2.x) + (this.y * v2.y));
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/regex.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/regex.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/validate.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/validate.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/vector */ "./src/modules/vector.ts");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/modules/animation.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");



class Object {
    constructor(name = 'unnamed') {
        this.ID = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        this.position = new _modules_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
        this.speed = 120;
        this.NAME = name;
    }
    start() {
        var _a;
        (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.changeAnimation('middle');
    }
    update(deltaTime) {
        var _a, _b;
        let currentAnimTriggerName = 'middle';
        let movePosX = 0;
        let movePosY = 0;
        if (pressedKeys['up'] == true) {
            this.position.y -= this.speed * deltaTime;
            movePosY = (this.speed * deltaTime) * -1;
            currentAnimTriggerName = 'middle';
        }
        if (pressedKeys['down'] == true) {
            movePosY = (this.speed * deltaTime);
            currentAnimTriggerName = 'middle';
        }
        if (pressedKeys['left'] == true) {
            movePosX = (this.speed * deltaTime) * -1;
            currentAnimTriggerName = 'left';
        }
        if (pressedKeys['right'] == true) {
            movePosX = (this.speed * deltaTime);
            currentAnimTriggerName = 'right';
        }
        this.position.x += movePosX;
        this.position.y += movePosY;
        (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.changeAnimation(currentAnimTriggerName);
        (_b = this.animationManager) === null || _b === void 0 ? void 0 : _b.update();
        return;
    }
    draw(context) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        context === null || context === void 0 ? void 0 : context.drawImage(this.animationManager.spriteSheet, (_b = (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.animationDrawInfo.x) !== null && _b !== void 0 ? _b : 0, (_d = (_c = this.animationManager) === null || _c === void 0 ? void 0 : _c.animationDrawInfo.y) !== null && _d !== void 0 ? _d : 0, (_f = (_e = this.animationManager) === null || _e === void 0 ? void 0 : _e.animationDrawInfo.width) !== null && _f !== void 0 ? _f : 0, (_h = (_g = this.animationManager) === null || _g === void 0 ? void 0 : _g.animationDrawInfo.height) !== null && _h !== void 0 ? _h : 0, this.position.x, this.position.y, 32, 48);
    }
}
let _now;
let _then;
let _delta = 0;
let _accumlatedTime = 0;
let _fps = 60.0;
let _fpsInterval = 0;
let _canvas;
let _ctx;
const objects = [];
const keyMap = {
    39: 'right',
    37: 'left',
    38: 'up',
    40: 'down'
};
const pressedKeys = {
    'left': false,
    'right': false,
    'up': false,
    'down': false
};
function start() {
    init();
    _then = performance.now();
    _fpsInterval = 1000 / _fps;
    objects.forEach(obj => {
        obj.start();
    });
    loop();
}
function init() {
    _canvas = document.getElementById("screen");
    _ctx = _canvas.getContext("2d");
    setupDemoData();
}
function loop() {
    _now = performance.now();
    _delta = (_now - _then);
    _then = _now;
    _accumlatedTime += _delta;
    if (_fpsInterval <= _accumlatedTime) {
        _delta = _accumlatedTime / 1000;
        _accumlatedTime = 0;
        update();
        draw();
        requestAnimationFrame(loop);
        return;
    }
    requestAnimationFrame(loop);
    return;
}
function update() {
    objects.forEach(obj => {
        obj.update(_delta);
    });
}
function draw() {
    _ctx === null || _ctx === void 0 ? void 0 : _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
    objects.forEach(obj => {
        obj.draw(_ctx);
    });
}
function keydown(event) {
    let key = keyMap[event.keyCode];
    pressedKeys[key] = true;
}
function keyup(event) {
    let key = keyMap[event.keyCode];
    pressedKeys[key] = false;
}
window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);
function setupDemoData() {
    let char = new Object('controllerable_reimu');
    let anims = [
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('middle', 0, 0, 32, 48, 8, 5, null),
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('left', 0, 48, 32, 48, 8, 5, new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationLoopPoint(4, 8)),
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('right', 0, 96, 32, 48, 8, 5, new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationLoopPoint(4, 8)),
    ];
    let spriteSheetImage = new Image();
    spriteSheetImage.src = '../assets/images/hakurei_reimu.png';
    let animManager = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationManager(anims, spriteSheetImage);
    char.animationManager = animManager;
    objects.push(char);
}
start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ3hCLElBQUkseURBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzVDLElBQUkseURBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxrRUFBa0IsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSx5REFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLGtFQUFrQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUNELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNuQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsb0NBQW9DLENBQUM7SUFDNUQsSUFBSSxXQUFXLEdBQXNCLElBQUksZ0VBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbkYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztJQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vLi9zcmMvbW9kdWxlcy9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi8uL3NyYy9tb2R1bGVzL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjEvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDkuMC4xL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDkuMC4xL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMS9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjEvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjEvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBbmltYXRpb25Mb29wUG9pbnQge1xuICAgIHN0YXJ0OiBudW1iZXIgPSAwO1xuICAgIGVuZDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICBvZmZzZXRZOiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBmcmFtZTogbnVtYmVyO1xuICAgIHdhaXRGcmFtZTogbnVtYmVyO1xuICAgIGxvb3BJbmZvPzogQW5pbWF0aW9uTG9vcFBvaW50IHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBmcmFtZTogbnVtYmVyLCB3YWl0RnJhbWU6IG51bWJlciwgbG9vcEluZm86IEFuaW1hdGlvbkxvb3BQb2ludCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgICAgICB0aGlzLndhaXRGcmFtZSA9IHdhaXRGcmFtZTtcbiAgICAgICAgdGhpcy5sb29wSW5mbyA9IGxvb3BJbmZvO1xuICAgIH1cbn1cbmNsYXNzIGRyYXdJbmZve1xuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uTWFuYWdlciB7XG4gICAgcHVibGljIHNwcml0ZVNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHB1YmxpYyBhbmltYXRpb25EcmF3SW5mbyA6IGRyYXdJbmZvID0gbmV3IGRyYXdJbmZvKCk7XG5cbiAgICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvbltdO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50U2VxdWVuY2VDb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRXYWl0RnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8v66Oo7ZSEIO2PrOyduO2KuOulvCDsnITtlbTshJwg7ZiE7J6s7J2YIOyLnOyeke2UhOugiOyehOqzvCDrgZ3tlITroIjsnoTsnYQg7KCA7J6l7ZWY6riwIOychO2VqFxuICAgIHByaXZhdGUgY3VycmVudFN0YXJ0RnJhbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50RW5kRnJhbWU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRBbmltYXRpb25JbmRleDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbG9vcGVkT25lY2UgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihhbmltYXRpb25zOiBBbmltYXRpb25bXSwgc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IHNoZWV0O1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBub3dBbmltID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbkluZGV4XTtcbiAgICAgICAgaWYobm93QW5pbS53YWl0RnJhbWUgPD0gdGhpcy5jdXJyZW50V2FpdEZyYW1lQ291bnQpe1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50U2VxdWVuY2VDb3VudCA+PSB0aGlzLmN1cnJlbnRFbmRGcmFtZSAtIDEpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9vcGVkT25lY2UgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBpZihub3dBbmltLmxvb3BJbmZvICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhcnRGcmFtZSA9IG5vd0FuaW0ubG9vcEluZm8uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbmRGcmFtZSA9IG5vd0FuaW0ubG9vcEluZm8uZW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9vcGVkT25lY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZUNvdW50ID0gdGhpcy5jdXJyZW50U3RhcnRGcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2VDb3VudCArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGFyYXdJbmZvKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXYWl0RnJhbWVDb3VudCA9IDA7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXYWl0RnJhbWVDb3VudCsrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURhcmF3SW5mbygpe1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRyYXdJbmZvLndpZHRoID10aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLndpZHRoO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRyYXdJbmZvLmhlaWdodCA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleF0uaGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmltYXRpb25EcmF3SW5mby54ID0gXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLm9mZnNldFggK1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleF0ud2lkdGggKiB0aGlzLmN1cnJlbnRTZXF1ZW5jZUNvdW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRHJhd0luZm8ueSA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleF0ub2Zmc2V0WVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VBbmltYXRpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuYW5pbWF0aW9ucy5maW5kSW5kZXgoYW5pID0+IGFuaS5uYW1lID09PSBuYW1lKTtcbiAgICBcbiAgICAgICAgaWYobmFtZSA9PT0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbkluZGV4XS5uYW1lKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5yZXNldEFuaW1hdGlvblJ1bm5lcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhcmF3SW5mbygpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0QW5pbWF0aW9uUnVubmVyKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFdhaXRGcmFtZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJ0RnJhbWUgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRFbmRGcmFtZSA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleF0uZnJhbWU7XG4gICAgICAgIHRoaXMubG9vcGVkT25lY2UgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmVjdG9yMkQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHggPz8gMDtcbiAgICAgICAgdGhpcy55ID0geSA/PyAwO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAoeDogJHt0aGlzLngudG9TdHJpbmcoKX0sIHk6ICR7dGhpcy55LnRvU3RyaW5nKCl9KWA7XG4gICAgfVxuXG4gICAgcHVibGljIG1hZ25pdHVkZSh2MjogVmVjdG9yMkQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54ICogdjIueCkgKyAodGhpcy55ICogdjIueSkpO1xuICAgIH1cbn0iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL21vZHVsZXMvdmVjdG9yJztcbmltcG9ydCB7QW5pbWF0aW9uLCBBbmltYXRpb25NYW5hZ2VyLEFuaW1hdGlvbkxvb3BQb2ludH0gZnJvbSAnLi9tb2R1bGVzL2FuaW1hdGlvbic7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XG5cblxuY2xhc3MgT2JqZWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IElEOiBzdHJpbmcgPSB1dWlkdjQoKTtcbiAgcHVibGljIHJlYWRvbmx5IE5BTUU6IHN0cmluZztcbiAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyRCA9IG5ldyBWZWN0b3IyRCgwLDApO1xuICBwdWJsaWMgYW5pbWF0aW9uTWFuYWdlcj86IEFuaW1hdGlvbk1hbmFnZXI7XG4gIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDEyMDtcbiAgXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9ICd1bm5hbWVkJyl7XG4gICAgdGhpcy5OQU1FID0gbmFtZTtcbiAgfVxuICBwdWJsaWMgc3RhcnQoKXtcbiAgICB0aGlzLmFuaW1hdGlvbk1hbmFnZXI/LmNoYW5nZUFuaW1hdGlvbignbWlkZGxlJyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgbGV0IGN1cnJlbnRBbmltVHJpZ2dlck5hbWUgOiBzdHJpbmcgPSAnbWlkZGxlJztcbiAgICBsZXQgbW92ZVBvc1ggPSAwO1xuICAgIGxldCBtb3ZlUG9zWT0gMDtcbiAgICBpZihwcmVzc2VkS2V5c1sndXAnXSA9PSB0cnVlKXtcbiAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkICogZGVsdGFUaW1lO1xuICAgICAgbW92ZVBvc1kgPSAodGhpcy5zcGVlZCAqIGRlbHRhVGltZSkgKiAtMTtcbiAgICAgIGN1cnJlbnRBbmltVHJpZ2dlck5hbWUgPSAnbWlkZGxlJztcbiAgICB9XG4gICAgaWYocHJlc3NlZEtleXNbJ2Rvd24nXSA9PSB0cnVlKXtcbiAgICAgIG1vdmVQb3NZID0gKHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpXG4gICAgICBjdXJyZW50QW5pbVRyaWdnZXJOYW1lID0gJ21pZGRsZSc7XG4gICAgfVxuICAgIGlmKHByZXNzZWRLZXlzWydsZWZ0J10gPT0gdHJ1ZSl7XG4gICAgICBtb3ZlUG9zWCA9ICh0aGlzLnNwZWVkICogZGVsdGFUaW1lKSAqIC0xOyBcbiAgICAgIGN1cnJlbnRBbmltVHJpZ2dlck5hbWUgPSAnbGVmdCc7XG5cbiAgICB9XG4gICAgaWYocHJlc3NlZEtleXNbJ3JpZ2h0J10gPT0gdHJ1ZSl7XG4gICAgICBtb3ZlUG9zWCA9ICh0aGlzLnNwZWVkICogZGVsdGFUaW1lKTtcbiAgICAgIGN1cnJlbnRBbmltVHJpZ2dlck5hbWUgPSAncmlnaHQnO1xuICAgIH1cbiAgICAgXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IG1vdmVQb3NYO1xuICAgIHRoaXMucG9zaXRpb24ueSArPSBtb3ZlUG9zWTtcblxuICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlcj8uY2hhbmdlQW5pbWF0aW9uKGN1cnJlbnRBbmltVHJpZ2dlck5hbWUpO1xuICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlcj8udXBkYXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dCA6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwpe1xuICAgICAgY29udGV4dD8uZHJhd0ltYWdlKHRoaXMuYW5pbWF0aW9uTWFuYWdlciEuc3ByaXRlU2hlZXQsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvbk1hbmFnZXI/LmFuaW1hdGlvbkRyYXdJbmZvLnggPz8gMCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlcj8uYW5pbWF0aW9uRHJhd0luZm8ueSA/PyAwLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25NYW5hZ2VyPy5hbmltYXRpb25EcmF3SW5mby53aWR0aCA/PyAwLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25NYW5hZ2VyPy5hbmltYXRpb25EcmF3SW5mby5oZWlnaHQgPz8gMCxcbiAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAzMiw0OCk7XG4gIH1cbn1cblxubGV0IF9ub3c6IG51bWJlcjtcbmxldCBfdGhlbjogbnVtYmVyO1xubGV0IF9kZWx0YTogbnVtYmVyID0gMDtcbmxldCBfYWNjdW1sYXRlZFRpbWU6IG51bWJlciA9IDA7XG5sZXQgX2ZwczogbnVtYmVyID0gNjAuMDtcbmxldCBfZnBzSW50ZXJ2YWw6IG51bWJlciA9IDA7XG5cbmxldCBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbmxldCBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xuXG5jb25zdCBvYmplY3RzOiBPYmplY3RbXSA9IFtdO1xuXG5jb25zdCBrZXlNYXA6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDM5OiAncmlnaHQnLFxuICAzNzogJ2xlZnQnLFxuICAzODogJ3VwJyxcbiAgNDA6ICdkb3duJ1xufTtcblxuY29uc3QgcHJlc3NlZEtleXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge1xuICAnbGVmdCc6IGZhbHNlLFxuICAncmlnaHQnOiBmYWxzZSxcbiAgJ3VwJzogZmFsc2UsXG4gICdkb3duJzogZmFsc2Vcbn1cblxuZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XG4gIGluaXQoKTtcbiAgX3RoZW4gPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgX2Zwc0ludGVydmFsID0gMTAwMCAvIF9mcHM7XG4gIG9iamVjdHMuZm9yRWFjaChvYmo9PntcbiAgICBvYmouc3RhcnQoKVxuICB9KTtcbiAgbG9vcCgpO1xufVxuXG5mdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICBfY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyZWVuXCIpO1xuICBfY3R4ID0gX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgc2V0dXBEZW1vRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBsb29wKCk6IHZvaWQge1xuICBfbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIF9kZWx0YSA9IChfbm93IC0gX3RoZW4pO1xuICBfdGhlbiA9IF9ub3c7XG5cbiAgX2FjY3VtbGF0ZWRUaW1lICs9IF9kZWx0YTtcblxuICBpZiAoX2Zwc0ludGVydmFsIDw9IF9hY2N1bWxhdGVkVGltZSkge1xuICAgIF9kZWx0YSA9IF9hY2N1bWxhdGVkVGltZSAvIDEwMDA7XG4gICAgX2FjY3VtbGF0ZWRUaW1lID0gMDtcbiAgICB1cGRhdGUoKTtcbiAgICBkcmF3KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIHJldHVybjtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCk6IHZvaWQge1xuICBvYmplY3RzLmZvckVhY2gob2JqPT57XG4gICAgb2JqLnVwZGF0ZShfZGVsdGEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhdygpOiB2b2lkIHtcbiAgX2N0eD8uY2xlYXJSZWN0KDAsMCxfY2FudmFzLndpZHRoLCBfY2FudmFzLmhlaWdodCk7XG4gIG9iamVjdHMuZm9yRWFjaChvYmo9PntcbiAgICBvYmouZHJhdyhfY3R4KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgbGV0IGtleSA9IGtleU1hcFtldmVudC5rZXlDb2RlXVxuICBwcmVzc2VkS2V5c1trZXldID0gdHJ1ZVxufVxuZnVuY3Rpb24ga2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgbGV0IGtleSA9IGtleU1hcFtldmVudC5rZXlDb2RlXVxuICBwcmVzc2VkS2V5c1trZXldID0gZmFsc2Vcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWRvd24sIGZhbHNlKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXl1cCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBzZXR1cERlbW9EYXRhKCl7XG4gICBsZXQgY2hhcjogT2JqZWN0ID0gbmV3IE9iamVjdCgnY29udHJvbGxlcmFibGVfcmVpbXUnKTtcbiAgIGxldCBhbmltczogQW5pbWF0aW9uW10gPSBbXG4gICAgbmV3IEFuaW1hdGlvbignbWlkZGxlJywgMCwwLDMyLDQ4LDgsNSwgbnVsbCksXG4gICAgbmV3IEFuaW1hdGlvbignbGVmdCcsIDAsNDgsMzIsNDgsOCw1LCBuZXcgQW5pbWF0aW9uTG9vcFBvaW50KDQsOCkpLFxuICAgIG5ldyBBbmltYXRpb24oJ3JpZ2h0JywgMCw5NiwzMiw0OCw4LDUsIG5ldyBBbmltYXRpb25Mb29wUG9pbnQoNCw4KSksXG4gICBdXG4gICBsZXQgc3ByaXRlU2hlZXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgc3ByaXRlU2hlZXRJbWFnZS5zcmMgPSAnLi4vYXNzZXRzL2ltYWdlcy9oYWt1cmVpX3JlaW11LnBuZyc7XG4gICBsZXQgYW5pbU1hbmFnZXIgOiBBbmltYXRpb25NYW5hZ2VyID0gbmV3IEFuaW1hdGlvbk1hbmFnZXIoYW5pbXMsIHNwcml0ZVNoZWV0SW1hZ2UpO1xuICAgY2hhci5hbmltYXRpb25NYW5hZ2VyID0gYW5pbU1hbmFnZXI7XG4gICBvYmplY3RzLnB1c2goY2hhcik7XG59XG5cbnN0YXJ0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9