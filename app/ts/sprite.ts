module Engine {
   export class Sprite implements IAnimate, IRender {
       public frames: number;
       public speed: number;
       public image: HTMLImageElement;
       private currentFrame: number;
       
        constructor(public frameWidth: number, public frameHeight: number, source: string) {
            this.image = new Image();
            this.image.src = source;
            this.image.x = 0;
            this.image.y = 0;
            this.currentFrame = 0;
        }
        
        public render(context: CanvasRenderingContext2D): void {
            if(this.frames != null)
                this.animate(context);
               
             // render the sprite
            context.drawImage(this.image, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.image.height, 
                50, 50, this.frameWidth, this.image.height);
        }
        
        public animate(context: CanvasRenderingContext2D): void {
            // advance the sprite animation
            this.currentFrame++;
            
            if (this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
            
            this.image.x = this.currentFrame * this.frameWidth;
        }
    }   
}