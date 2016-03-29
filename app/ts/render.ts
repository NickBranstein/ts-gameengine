module Engine {
    export class Renderer {
        private animationFrame: number;
        private running: boolean;
        
        constructor(private context: any) {   
        }
        
        public start() : any {
            this.running = true;
            this.animationFrame = window.requestAnimationFrame(this.render)
        }
        
        public render = () : any =>  {
            if (this.running) {
                this.context.clearRect(0,0,800,600);
                this.animate();            
                window.requestAnimationFrame(this.render);    
            }
        }
        
        // animations go here
        public animate() : any {
            this.context.fillStyle = "#000000";
            this.context.font = "25px helvewtica"; 
            this.context.fillText('This is just a test', 50, 50);
        }
        
        public stop(){
            this.context.clearRect(0,0,800,600);
            window.cancelAnimationFrame(this.animationFrame);
            this.running = false;
        }
    }
    
    class Animator {
        
    }
}