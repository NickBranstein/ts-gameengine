class Game {
    private renderer: Engine.Renderer;

    constructor(private context: any) {
        this.renderer = new Engine.Renderer(context);   
    }
    
    public start(){
        this.renderer.start();
    }
    
    public stop() {
        this.renderer.stop();
    }
}