class Game {
    private renderer: Engine.Renderer;
    private sprites: Array<Engine.Sprite>;

    constructor(private context: any, private width: number, private height: number) {
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, (timestamp) => {this.renderWorld(timestamp);}); // wrap in a method ot preserve the reference to the class
                
        var sprite = new Engine.Sprite(150, 150, 80, 78, 'images/meteor.png');
        sprite.frames = 4;
        sprite.fps = 5;
        this.sprites.push(sprite);
        
        var s = new Engine.Sprite(300, 150, 80, 78, 'images/meteor.png');
        s.frames = 4;
        s.fps = 20;
        this.sprites.push(s);
    }
    
    public start(){
        this.renderer.start();
    }
    
    public stop() {
        this.renderer.stop();
    }
    
    private renderWorld(timestamp): void{
        this.sprites.forEach((sprite) => {
            sprite.render(this.context, timestamp);
        });
    };
}