export class AnimationLoopPoint {
    constructor(start, end) {
        this.start = 0;
        this.end = 0;
        this.start = start;
        this.end = end;
    }
}
export class Animation {
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
export class AnimationManager {
    constructor(animations, sheet) {
        this.animationDrawInfo = new drawInfo();
        this.currentAnimationIndex = 0;
        this.currentSpriteSequence = 0;
        this.currentFrameCount = 0;
        this.animations = animations;
        this.spriteSheet = sheet;
    }
    update() {
        if (this.currentFrameCount >= this.animations[this.currentAnimationIndex].waitFrame) {
            this.currentFrameCount = 0;
            this.currentSpriteSequence++;
            if (this.currentSpriteSequence >= this.animations[this.currentAnimationIndex].frame) {
                this.currentSpriteSequence = 0;
            }
        }
        this.currentFrameCount++;
    }
    updateDarawInfo() {
        this.animationDrawInfo.width = this.animations[this.currentAnimationIndex].width;
        this.animationDrawInfo.height = this.animations[this.currentAnimationIndex].height;
        this.animationDrawInfo.x = this.animations[this.currentAnimationIndex].offsetX * this.currentSpriteSequence;
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
    }
}
//# sourceMappingURL=animation.js.map