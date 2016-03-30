module Engine {
   export class Sprite implements IAnimate, IRender {
       public frames: number;
       public speed: number;
       public image: HTMLImageElement;
       private currentFrame: number;
       lastElapsedTime;
       
        constructor(public x: number, public y: number, public frameWidth: number, public frameHeight: number, source: string, frames?: number, speed?: number) {
            this.image = new Image();
            this.image.src = source;
            this.currentFrame = 0;
            this.frames = frames;
            this.speed = speed;
            this.lastElapsedTime = 0;
        }
        
        public render(context: CanvasRenderingContext2D, elapsedTime): void {
            this.lastElapsedTime += elapsedTime;
            //console.log(elapsedTime);
            while(this.lastElapsedTime > this.speed){ // this will control how fast we loop through our spritemap
                this.lastElapsedTime -= this.speed;
                
                if(this.frames != null)
                    this.animate(context);        
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