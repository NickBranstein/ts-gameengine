module Engine {
    export interface IRender {        
        lastElapsedTime;
        render(context: CanvasRenderingContext2D, elapsedTime): void;
    }
    
    export class Renderer {
        private animationFrame: number;
        private running: boolean;
        private lastTimestamp;
        
        constructor(private context: CanvasRenderingContext2D, private width: number, private height: number, public render: (elapsedTime) => void) {   
        }
        
        public start() : any {
            this.running = true;
            this.animationFrame = window.requestAnimationFrame((timestamp) => this.renderLoop(timestamp));
        }
        
        public renderLoop(timestamp) {
            if (this.lastTimestamp == null || this.lastTimestamp == undefined) {
                this.lastTimestamp = timestamp;
            }
            
            let elapsedTime = timestamp += this.lastTimestamp;
            this.lastTimestamp = timestamp;
            
            if (this.running) {
                this.clear();
                this.animate();            
                this.render(elapsedTime);
                window.requestAnimationFrame((time) => this.renderLoop(time));    
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