export class AnimationLoopPoint {
    start: number = 0;
    end: number = 0;
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}

export class Animation {
    name: string;
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
    frame: number;
    waitFrame: number;
    loopInfo?: AnimationLoopPoint | null;

    constructor(name: string, offsetX: number, offsetY: number, width: number, height: number, frame: number, waitFrame: number, loopInfo: AnimationLoopPoint | null) {
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
class drawInfo{
    public x: number = 0;
    public y: number = 0;
    public width: number = 0;
    public height: number = 0;
}

export class AnimationManager {
    public spriteSheet: HTMLImageElement;
    public animationDrawInfo : drawInfo = new drawInfo();

    private animations: Animation[];

    private currentSequenceCount: number = 0;
    private currentWaitFrameCount: number = 0;

    //루프 포인트를 위해서 현재의 시작프레임과 끝프레임을 저장하기 위함
    private currentStartFrame: number = 0;
    private currentEndFrame: number = 0;

    private currentAnimationIndex:number = 0;
    private loopedOnece = false;
    constructor(animations: Animation[], sheet: HTMLImageElement) {
        this.animations = animations;
        this.spriteSheet = sheet;
    }

    public update() {
        var nowAnim = this.animations[this.currentAnimationIndex];
        if(nowAnim.waitFrame <= this.currentWaitFrameCount){
            if(this.currentSequenceCount >= this.currentEndFrame - 1){
                
                if(this.loopedOnece == false){
                    if(nowAnim.loopInfo != null){
                        console.log('루프 포인트 기준으로 재설정됨!');
                        console.log(`[info] start = ${nowAnim.loopInfo.start}, end = ${nowAnim.loopInfo.end}`);
                        this.currentStartFrame = nowAnim.loopInfo.start;
                        this.currentEndFrame = nowAnim.loopInfo.end;
                    }
                    this.loopedOnece = true;
                }
                this.currentSequenceCount = this.currentStartFrame;
            }
            else{
                this.currentSequenceCount ++;
            }
            this.updateDarawInfo();
            this.currentWaitFrameCount = 0;

        }else{
            this.currentWaitFrameCount++;
        }

    }

    private updateDarawInfo(){
        //console.log(`seq: ${this.currentSequenceCount}, x offset: ${ this.animations[this.currentAnimationIndex].offsetX +
        //    (this.animations[this.currentAnimationIndex].width * this.currentSequenceCount)}`);

        this.animationDrawInfo.width =this.animations[this.currentAnimationIndex].width;
        this.animationDrawInfo.height = this.animations[this.currentAnimationIndex].height;
        
        this.animationDrawInfo.x = 
            this.animations[this.currentAnimationIndex].offsetX +
            (
                this.animations[this.currentAnimationIndex].width * this.currentSequenceCount
            );

        this.animationDrawInfo.y = this.animations[this.currentAnimationIndex].offsetY
    }

    public changeAnimation(name: string) {
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
    private resetAnimationRunner(){
        console.log('animation runner resetted');
        this.currentWaitFrameCount = 0;
        this.currentSequenceCount = 0;
        this.currentStartFrame = 0;
        this.currentEndFrame = this.animations[this.currentAnimationIndex].frame;
        this.loopedOnece = false;
    }
}
