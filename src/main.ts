import { Vector2D } from './modules/vector';
import {Animation, AnimationManager,AnimationLoopPoint} from './modules/animation';
import {v4 as uuidv4} from 'uuid';


class Object {
  public readonly ID: string = uuidv4();
  public readonly NAME: string;
  public position: Vector2D = new Vector2D(0,0);
  public animationManager?: AnimationManager;
  private speed: number = 120;
  
  constructor(name: string = 'unnamed'){
    this.NAME = name;
  }
  public start(){
    this.animationManager?.changeAnimation('middle');
  }

  public update(deltaTime: number) {
    var currentAnimTriggerName : string = 'middle';
    var movePosX = 0;
    var movePosY= 0;
    if(pressedKeys['up'] == true){
      this.position.y -= this.speed * deltaTime;
      movePosY = (this.speed * deltaTime) * -1;
      currentAnimTriggerName = 'middle';
    }
    if(pressedKeys['down'] == true){
      movePosY = (this.speed * deltaTime)
      currentAnimTriggerName = 'middle';
    }
    if(pressedKeys['left'] == true){
      movePosX = (this.speed * deltaTime) * -1; 
      currentAnimTriggerName = 'left';

    }
    if(pressedKeys['right'] == true){
      movePosX = (this.speed * deltaTime);
      currentAnimTriggerName = 'right';
    }
     
    this.position.x += movePosX;
    this.position.y += movePosY;

    this.animationManager?.changeAnimation(currentAnimTriggerName);
    this.animationManager?.update();
    return;
  }

  public draw(context : CanvasRenderingContext2D | null){
      context?.drawImage(this.animationManager!.spriteSheet,
         this.animationManager?.animationDrawInfo.x ?? 0,
         this.animationManager?.animationDrawInfo.y ?? 0,
         this.animationManager?.animationDrawInfo.width ?? 0,
         this.animationManager?.animationDrawInfo.height ?? 0,
         this.position.x,
         this.position.y,
          32,48);
  }
}

let _now: number;
let _then: number;
let _delta: number = 0;
let _accumlatedTime: number = 0;
let _fps: number = 60.0;
let _fpsInterval: number = 0;

let _canvas: HTMLCanvasElement;
let _ctx: CanvasRenderingContext2D | null;

let objects: Object[] = [];

let keyMap: { [key: number]: string } = {
  39: 'right',
  37: 'left',
  38: 'up',
  40: 'down'
};

let pressedKeys: { [key: string]: boolean } = {
  'left': false,
  'right': false,
  'up': false,
  'down': false
}

function start(): void {
  init();
  _then = performance.now();
  _fpsInterval = 1000 / _fps;
  objects.forEach(obj=>{
    obj.start()
  });
  loop();
}

function init(): void {
  _canvas = <HTMLCanvasElement>document.getElementById("screen");
  _ctx = _canvas.getContext("2d");

  setupDemoData();
}

function loop(): void {
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

function update(): void {
  objects.forEach(obj=>{
    obj.update(_delta);
  });
}

function draw(): void {
  _ctx?.clearRect(0,0,_canvas.width, _canvas.height);
  objects.forEach(obj=>{
    obj.draw(_ctx);
  });
}

function keydown(event: KeyboardEvent) {
  var key = keyMap[event.keyCode]
  pressedKeys[key] = true
}
function keyup(event: KeyboardEvent) {
  var key = keyMap[event.keyCode]
  pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false);

function setupDemoData(){
   var char: Object = new Object('controllerable_reimu');
   var anims: Animation[] = [
    new Animation('middle', 0,0,32,48,8,5, null),
    new Animation('left', 0,48,32,48,8,5, new AnimationLoopPoint(4,8)),
    new Animation('right', 0,96,32,48,8,5, new AnimationLoopPoint(4,8)),
   ]
   var spriteSheetImage = new Image();
   spriteSheetImage.src = '../assets/images/hakurei_reimu.png';
   var animManager : AnimationManager = new AnimationManager(anims, spriteSheetImage);
   char.animationManager = animManager;
   objects.push(char);
}

start();
//./images/hakurei_reimu.png


