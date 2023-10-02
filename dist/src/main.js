import { Vector2D } from './modules/vector';
import { AnimationManager } from './modules/animation';
import { v4 as uuidv4 } from 'uuid';
import * as loader from './modules/jsonLoader';
class Object {
    constructor(name = 'unnamed') {
        this.ID = uuidv4();
        this.position = new Vector2D(0, 0);
        this.speed = 10;
        this.NAME = name;
    }
    update(deltaTime) {
        var _a, _b, _c;
        (_a = this.animationManager) === null || _a === void 0 ? void 0 : _a.update();
        if (pressedKeys['up'] == true) {
            this.position.y -= this.speed * deltaTime;
            (_b = this.animationManager) === null || _b === void 0 ? void 0 : _b.changeAnimation('middle');
        }
        if (pressedKeys['down'] == true) {
            this.position.y += this.speed * deltaTime;
            (_c = this.animationManager) === null || _c === void 0 ? void 0 : _c.changeAnimation('middle');
        }
        if (pressedKeys['left'] == true) {
            this.position.x -= this.speed * deltaTime;
        }
        if (pressedKeys['right'] == true) {
            this.position.x += this.speed * deltaTime;
        }
        console.log(`${this.position.toString()}`);
        return;
    }
    draw(context) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console === null || console === void 0 ? void 0 : console.log("ID: " + this.ID);
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
let objects;
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
start();
function keydown(event) {
    console.log(`${event.keyCode}`);
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
    var anims = loader.loadFromFile('./animations/reimu.json');
    var spriteSheetImage = loader.loadFromFile('./images/hakurei_reimu.png');
    var animManager = new AnimationManager(anims, spriteSheetImage);
    char.animationManager = animManager;
    objects.push(char);
}
//# sourceMappingURL=main.js.map