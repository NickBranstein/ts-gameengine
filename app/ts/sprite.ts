module Engine {
   export class Sprite implements IAnimate, IRender {
       public frames: number;
       public fps: number;
       public image: HTMLImageElement;
       private currentFrame: number;
       lastTimestamp;
       
        constructor(public x: number, public y: number, public frameWidth: number, public frameHeight: number, source: string, frames?: number, fps?: number) {
            this.image = new Image();
            this.image.src = source;
            this.currentFrame = 0;
            this.frames = frames;
            this.fps = fps;
            this.lastTimestamp = 0;
        }
        
        public render(context: CanvasRenderingContext2D, timestamp): void {    
            if (this.lastTimestamp == null || this.lastTimestamp == undefined) {
                this.lastTimestamp = timestamp;
            }
            
            let elapsedTime =  timestamp - this.lastTimestamp;
            
            if(this.frames != null && elapsedTime > (1000 / this.fps)){
                    this.animate(context);    
                    this.lastTimestamp = timestamp;    
            }
            
             // render the sprite
            context.drawImage(this.image, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.image.height, 
                this.x, this.y, this.frameWidth, this.image.height);
        }
        
        public animate(context: CanvasRenderingContext2D): void {
            // advance the sprite animation
            this.currentFrame++;
            
            if (this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
        }
    }   
}