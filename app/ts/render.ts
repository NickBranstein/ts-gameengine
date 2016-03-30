module Engine {
    export interface IRender {
        render(context: CanvasRenderingContext2D): void;
    }
    
    export class Renderer {
        private animationFrame: number;
        private running: boolean;
        
        constructor(private context: CanvasRenderingContext2D, private width: number, private height: number, public render: () => void) {   
        }
        
        public start() : any {
            this.running = true;
            this.animationFrame = window.requestAnimationFrame(this.renderLoop)
        }
        
        public renderLoop = () : any =>  {
            if (this.running) {
                this.clear();
                this.animate();            
                this.render();
                window.requestAnimationFrame(this.renderLoop);    
            }
        }
        
        // animations go here
        public animate() : any {
            this.context.fillStyle = "#000000";
            this.context.font = "25px helvewtica"; 
            this.context.fillText('This is just a test', 100, 100);
        }
        
        public stop(){
            this.clear()
            window.cancelAnimationFrame(this.animationFrame);
            this.running = false;
        }
        
        private clear(){
            this.context.clearRect(0, 0, this.width, this.height);
        }
    }
}