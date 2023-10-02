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
        var nowAnim = this.animations[this.currentAnimationIndex];
        if (nowAnim.waitFrame <= this.currentWaitFrameCount) {
            if (this.currentSequenceCount >= this.currentEndFrame - 1) {
                if (this.loopedOnece == false) {
                    if (nowAnim.loopInfo != null) {
                        console.log('루프 포인트 기준으로 재설정됨!');
                        console.log(`[info] start = ${nowAnim.loopInfo.start}, end = ${nowAnim.loopInfo.end}`);
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
        //console.log(`seq: ${this.currentSequenceCount}, x offset: ${ this.animations[this.currentAnimationIndex].offsetX +
        //    (this.animations[this.currentAnimationIndex].width * this.currentSequenceCount)}`);
        this.animationDrawInfo.width = this.animations[this.currentAnimationIndex].width;
        this.animationDrawInfo.height = this.animations[this.currentAnimationIndex].height;
        this.animationDrawInfo.x =
            this.animations[this.currentAnimationIndex].offsetX +
                (this.animations[this.currentAnimationIndex].width * this.currentSequenceCount);
        this.animationDrawInfo.y = this.animations[this.currentAnimationIndex].offsetY;
    }
    changeAnimation(name) {
        var index = this.animations.findIndex(ani => ani.name === name);
        if (index === -1) {
            console.error(`no animation name of [${name}]`);
            return;
        }
        if (index == this.currentAnimationIndex) {
            return;
        }
        this.currentAnimationIndex = index;
        this.resetAnimationRunner();
        this.updateDarawInfo();
    }
    resetAnimationRunner() {
        console.log('animation runner resetted');
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
        var currentAnimTriggerName = 'middle';
        var movePosX = 0;
        var movePosY = 0;
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
let objects = [];
let keyMap = {
    39: 'right',
    37: 'left',
    38: 'up',
    40: 'down'
};
let pressedKeys = {
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
    }
    requestAnimationFrame(loop);
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
    var key = keyMap[event.keyCode];
    pressedKeys[key] = true;
}
function keyup(event) {
    var key = keyMap[event.keyCode];
    pressedKeys[key] = false;
}
window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);
function setupDemoData() {
    var char = new Object('controllerable_reimu');
    var anims = [
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('middle', 0, 0, 32, 48, 8, 5, null),
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('left', 0, 48, 32, 48, 8, 5, new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationLoopPoint(4, 8)),
        new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.Animation('right', 0, 96, 32, 48, 8, 5, new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationLoopPoint(4, 8)),
    ];
    var spriteSheetImage = new Image();
    spriteSheetImage.src = '../assets/images/hakurei_reimu.png';
    var animManager = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.AnimationManager(anims, spriteSheetImage);
    char.animationManager = animManager;
    objects.push(char);
}
start();
//./images/hakurei_reimu.png

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bi8uL3NyYy9tb2R1bGVzL2FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vc3JjL21vZHVsZXMvdmVjdG9yLnRzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMS9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjEvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAOS4wLjEvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDkuMC4xL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMS9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEA5LjAuMS9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaXRlX2FuaW1hdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Nwcml0ZV9hbmltYXRpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcHJpdGVfYW5pbWF0aW9uLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkxvb3BQb2ludCB7XG4gICAgc3RhcnQ6IG51bWJlciA9IDA7XG4gICAgZW5kOiBudW1iZXIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb2Zmc2V0WDogbnVtYmVyO1xuICAgIG9mZnNldFk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGZyYW1lOiBudW1iZXI7XG4gICAgd2FpdEZyYW1lOiBudW1iZXI7XG4gICAgbG9vcEluZm8/OiBBbmltYXRpb25Mb29wUG9pbnQgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGZyYW1lOiBudW1iZXIsIHdhaXRGcmFtZTogbnVtYmVyLCBsb29wSW5mbzogQW5pbWF0aW9uTG9vcFBvaW50IHwgbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgICAgIHRoaXMud2FpdEZyYW1lID0gd2FpdEZyYW1lO1xuICAgICAgICB0aGlzLmxvb3BJbmZvID0gbG9vcEluZm87XG4gICAgfVxufVxuY2xhc3MgZHJhd0luZm97XG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25NYW5hZ2VyIHtcbiAgICBwdWJsaWMgc3ByaXRlU2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHVibGljIGFuaW1hdGlvbkRyYXdJbmZvIDogZHJhd0luZm8gPSBuZXcgZHJhd0luZm8oKTtcblxuICAgIHByaXZhdGUgYW5pbWF0aW9uczogQW5pbWF0aW9uW107XG5cbiAgICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZUNvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFdhaXRGcmFtZUNvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLy/ro6jtlIQg7Y+s7J247Yq466W8IOychO2VtOyEnCDtmITsnqzsnZgg7Iuc7J6R7ZSE66CI7J6E6rO8IOuBne2UhOugiOyehOydhCDsoIDsnqXtlZjquLAg7JyE7ZWoXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhcnRGcmFtZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRFbmRGcmFtZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgY3VycmVudEFuaW1hdGlvbkluZGV4Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBsb29wZWRPbmVjZSA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbnM6IEFuaW1hdGlvbltdLCBzaGVldDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gc2hlZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIG5vd0FuaW0gPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdO1xuICAgICAgICBpZihub3dBbmltLndhaXRGcmFtZSA8PSB0aGlzLmN1cnJlbnRXYWl0RnJhbWVDb3VudCl7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRTZXF1ZW5jZUNvdW50ID49IHRoaXMuY3VycmVudEVuZEZyYW1lIC0gMSl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb29wZWRPbmVjZSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5vd0FuaW0ubG9vcEluZm8gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn66Oo7ZSEIO2PrOyduO2KuCDquLDspIDsnLzroZwg7J6s7ISk7KCV65CoIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtpbmZvXSBzdGFydCA9ICR7bm93QW5pbS5sb29wSW5mby5zdGFydH0sIGVuZCA9ICR7bm93QW5pbS5sb29wSW5mby5lbmR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFydEZyYW1lID0gbm93QW5pbS5sb29wSW5mby5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVuZEZyYW1lID0gbm93QW5pbS5sb29wSW5mby5lbmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb29wZWRPbmVjZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlQ291bnQgPSB0aGlzLmN1cnJlbnRTdGFydEZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZUNvdW50ICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXJhd0luZm8oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFdhaXRGcmFtZUNvdW50ID0gMDtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFdhaXRGcmFtZUNvdW50Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGFyYXdJbmZvKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHNlcTogJHt0aGlzLmN1cnJlbnRTZXF1ZW5jZUNvdW50fSwgeCBvZmZzZXQ6ICR7IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleF0ub2Zmc2V0WCArXG4gICAgICAgIC8vICAgICh0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLndpZHRoICogdGhpcy5jdXJyZW50U2VxdWVuY2VDb3VudCl9YCk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25EcmF3SW5mby53aWR0aCA9dGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbkluZGV4XS53aWR0aDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EcmF3SW5mby5oZWlnaHQgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLmhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRHJhd0luZm8ueCA9IFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbkluZGV4XS5vZmZzZXRYICtcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLndpZHRoICogdGhpcy5jdXJyZW50U2VxdWVuY2VDb3VudFxuICAgICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRyYXdJbmZvLnkgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLm9mZnNldFlcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlQW5pbWF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFuaW1hdGlvbnMuZmluZEluZGV4KGFuaSA9PiBhbmkubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYG5vIGFuaW1hdGlvbiBuYW1lIG9mIFske25hbWV9XWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRBbmltYXRpb25JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMucmVzZXRBbmltYXRpb25SdW5uZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXJhd0luZm8oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZXNldEFuaW1hdGlvblJ1bm5lcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0aW9uIHJ1bm5lciByZXNldHRlZCcpO1xuICAgICAgICB0aGlzLmN1cnJlbnRXYWl0RnJhbWVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFydEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50RW5kRnJhbWUgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uSW5kZXhdLmZyYW1lO1xuICAgICAgICB0aGlzLmxvb3BlZE9uZWNlID0gZmFsc2U7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvcjJEIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIFxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4ID8/IDA7XG4gICAgICAgIHRoaXMueSA9IHkgPz8gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgKHg6ICR7dGhpcy54LnRvU3RyaW5nKCl9LCB5OiAke3RoaXMueS50b1N0cmluZygpfSlgO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYWduaXR1ZGUodjI6IFZlY3RvcjJEKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAqIHYyLngpICsgKHRoaXMueSAqIHYyLnkpKTtcbiAgICB9XG59IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi9tb2R1bGVzL3ZlY3Rvcic7XG5pbXBvcnQge0FuaW1hdGlvbiwgQW5pbWF0aW9uTWFuYWdlcixBbmltYXRpb25Mb29wUG9pbnR9IGZyb20gJy4vbW9kdWxlcy9hbmltYXRpb24nO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuXG5cbmNsYXNzIE9iamVjdCB7XG4gIHB1YmxpYyByZWFkb25seSBJRDogc3RyaW5nID0gdXVpZHY0KCk7XG4gIHB1YmxpYyByZWFkb25seSBOQU1FOiBzdHJpbmc7XG4gIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMkQgPSBuZXcgVmVjdG9yMkQoMCwwKTtcbiAgcHVibGljIGFuaW1hdGlvbk1hbmFnZXI/OiBBbmltYXRpb25NYW5hZ2VyO1xuICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxMjA7XG4gIFxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgPSAndW5uYW1lZCcpe1xuICAgIHRoaXMuTkFNRSA9IG5hbWU7XG4gIH1cbiAgcHVibGljIHN0YXJ0KCl7XG4gICAgdGhpcy5hbmltYXRpb25NYW5hZ2VyPy5jaGFuZ2VBbmltYXRpb24oJ21pZGRsZScpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIHZhciBjdXJyZW50QW5pbVRyaWdnZXJOYW1lIDogc3RyaW5nID0gJ21pZGRsZSc7XG4gICAgdmFyIG1vdmVQb3NYID0gMDtcbiAgICB2YXIgbW92ZVBvc1k9IDA7XG4gICAgaWYocHJlc3NlZEtleXNbJ3VwJ10gPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZCAqIGRlbHRhVGltZTtcbiAgICAgIG1vdmVQb3NZID0gKHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpICogLTE7XG4gICAgICBjdXJyZW50QW5pbVRyaWdnZXJOYW1lID0gJ21pZGRsZSc7XG4gICAgfVxuICAgIGlmKHByZXNzZWRLZXlzWydkb3duJ10gPT0gdHJ1ZSl7XG4gICAgICBtb3ZlUG9zWSA9ICh0aGlzLnNwZWVkICogZGVsdGFUaW1lKVxuICAgICAgY3VycmVudEFuaW1UcmlnZ2VyTmFtZSA9ICdtaWRkbGUnO1xuICAgIH1cbiAgICBpZihwcmVzc2VkS2V5c1snbGVmdCddID09IHRydWUpe1xuICAgICAgbW92ZVBvc1ggPSAodGhpcy5zcGVlZCAqIGRlbHRhVGltZSkgKiAtMTsgXG4gICAgICBjdXJyZW50QW5pbVRyaWdnZXJOYW1lID0gJ2xlZnQnO1xuXG4gICAgfVxuICAgIGlmKHByZXNzZWRLZXlzWydyaWdodCddID09IHRydWUpe1xuICAgICAgbW92ZVBvc1ggPSAodGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7XG4gICAgICBjdXJyZW50QW5pbVRyaWdnZXJOYW1lID0gJ3JpZ2h0JztcbiAgICB9XG4gICAgIFxuICAgIHRoaXMucG9zaXRpb24ueCArPSBtb3ZlUG9zWDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gbW92ZVBvc1k7XG5cbiAgICB0aGlzLmFuaW1hdGlvbk1hbmFnZXI/LmNoYW5nZUFuaW1hdGlvbihjdXJyZW50QW5pbVRyaWdnZXJOYW1lKTtcbiAgICB0aGlzLmFuaW1hdGlvbk1hbmFnZXI/LnVwZGF0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQgOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsKXtcbiAgICAgIGNvbnRleHQ/LmRyYXdJbWFnZSh0aGlzLmFuaW1hdGlvbk1hbmFnZXIhLnNwcml0ZVNoZWV0LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25NYW5hZ2VyPy5hbmltYXRpb25EcmF3SW5mby54ID8/IDAsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvbk1hbmFnZXI/LmFuaW1hdGlvbkRyYXdJbmZvLnkgPz8gMCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlcj8uYW5pbWF0aW9uRHJhd0luZm8ud2lkdGggPz8gMCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlcj8uYW5pbWF0aW9uRHJhd0luZm8uaGVpZ2h0ID8/IDAsXG4gICAgICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgMzIsNDgpO1xuICB9XG59XG5cbmxldCBfbm93OiBudW1iZXI7XG5sZXQgX3RoZW46IG51bWJlcjtcbmxldCBfZGVsdGE6IG51bWJlciA9IDA7XG5sZXQgX2FjY3VtbGF0ZWRUaW1lOiBudW1iZXIgPSAwO1xubGV0IF9mcHM6IG51bWJlciA9IDYwLjA7XG5sZXQgX2Zwc0ludGVydmFsOiBudW1iZXIgPSAwO1xuXG5sZXQgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5sZXQgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcblxubGV0IG9iamVjdHM6IE9iamVjdFtdID0gW107XG5cbmxldCBrZXlNYXA6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDM5OiAncmlnaHQnLFxuICAzNzogJ2xlZnQnLFxuICAzODogJ3VwJyxcbiAgNDA6ICdkb3duJ1xufTtcblxubGV0IHByZXNzZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcbiAgJ2xlZnQnOiBmYWxzZSxcbiAgJ3JpZ2h0JzogZmFsc2UsXG4gICd1cCc6IGZhbHNlLFxuICAnZG93bic6IGZhbHNlXG59XG5cbmZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xuICBpbml0KCk7XG4gIF90aGVuID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIF9mcHNJbnRlcnZhbCA9IDEwMDAgLyBfZnBzO1xuICBvYmplY3RzLmZvckVhY2gob2JqPT57XG4gICAgb2JqLnN0YXJ0KClcbiAgfSk7XG4gIGxvb3AoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcbiAgX2NhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlblwiKTtcbiAgX2N0eCA9IF9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIHNldHVwRGVtb0RhdGEoKTtcbn1cblxuZnVuY3Rpb24gbG9vcCgpOiB2b2lkIHtcbiAgX25vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBfZGVsdGEgPSAoX25vdyAtIF90aGVuKTtcbiAgX3RoZW4gPSBfbm93O1xuXG4gIF9hY2N1bWxhdGVkVGltZSArPSBfZGVsdGE7XG5cbiAgaWYgKF9mcHNJbnRlcnZhbCA8PSBfYWNjdW1sYXRlZFRpbWUpIHtcbiAgICBfZGVsdGEgPSBfYWNjdW1sYXRlZFRpbWUgLyAxMDAwO1xuICAgIF9hY2N1bWxhdGVkVGltZSA9IDA7XG4gICAgdXBkYXRlKCk7XG4gICAgZHJhdygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpOiB2b2lkIHtcbiAgb2JqZWN0cy5mb3JFYWNoKG9iaj0+e1xuICAgIG9iai51cGRhdGUoX2RlbHRhKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXcoKTogdm9pZCB7XG4gIF9jdHg/LmNsZWFyUmVjdCgwLDAsX2NhbnZhcy53aWR0aCwgX2NhbnZhcy5oZWlnaHQpO1xuICBvYmplY3RzLmZvckVhY2gob2JqPT57XG4gICAgb2JqLmRyYXcoX2N0eCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBrZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gIHZhciBrZXkgPSBrZXlNYXBbZXZlbnQua2V5Q29kZV1cbiAgcHJlc3NlZEtleXNba2V5XSA9IHRydWVcbn1cbmZ1bmN0aW9uIGtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gIHZhciBrZXkgPSBrZXlNYXBbZXZlbnQua2V5Q29kZV1cbiAgcHJlc3NlZEtleXNba2V5XSA9IGZhbHNlXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duLCBmYWxzZSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5dXAsIGZhbHNlKTtcblxuZnVuY3Rpb24gc2V0dXBEZW1vRGF0YSgpe1xuICAgdmFyIGNoYXI6IE9iamVjdCA9IG5ldyBPYmplY3QoJ2NvbnRyb2xsZXJhYmxlX3JlaW11Jyk7XG4gICB2YXIgYW5pbXM6IEFuaW1hdGlvbltdID0gW1xuICAgIG5ldyBBbmltYXRpb24oJ21pZGRsZScsIDAsMCwzMiw0OCw4LDUsIG51bGwpLFxuICAgIG5ldyBBbmltYXRpb24oJ2xlZnQnLCAwLDQ4LDMyLDQ4LDgsNSwgbmV3IEFuaW1hdGlvbkxvb3BQb2ludCg0LDgpKSxcbiAgICBuZXcgQW5pbWF0aW9uKCdyaWdodCcsIDAsOTYsMzIsNDgsOCw1LCBuZXcgQW5pbWF0aW9uTG9vcFBvaW50KDQsOCkpLFxuICAgXVxuICAgdmFyIHNwcml0ZVNoZWV0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgIHNwcml0ZVNoZWV0SW1hZ2Uuc3JjID0gJy4uL2Fzc2V0cy9pbWFnZXMvaGFrdXJlaV9yZWltdS5wbmcnO1xuICAgdmFyIGFuaW1NYW5hZ2VyIDogQW5pbWF0aW9uTWFuYWdlciA9IG5ldyBBbmltYXRpb25NYW5hZ2VyKGFuaW1zLCBzcHJpdGVTaGVldEltYWdlKTtcbiAgIGNoYXIuYW5pbWF0aW9uTWFuYWdlciA9IGFuaW1NYW5hZ2VyO1xuICAgb2JqZWN0cy5wdXNoKGNoYXIpO1xufVxuXG5zdGFydCgpO1xuLy8uL2ltYWdlcy9oYWt1cmVpX3JlaW11LnBuZ1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==