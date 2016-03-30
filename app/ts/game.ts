class Game {
    private renderer: Engine.Renderer;
    private sprites: Array<Engine.Sprite>;

    constructor(private context: any, private width: number, private height: number) {
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, (elapsedTime) => {this.renderWorld(elapsedTime);}); // wrap in a method ot preserve the reference to the class
                
        var sprite = new Engine.Sprite(150, 150, 80, 78, 'images/meteor.png');
        sprite.frames = 4;
        sprite.speed = 1000;
        this.sprites.push(sprite);
    }
    
    public start(){
        this.renderer.start();
    }
    
    public stop() {
        this.renderer.stop();
    }
    
    private renderWorld(elapsedTime): void{
        this.sprites.forEach((sprite) => {
            sprite.render(this.context, elapsedTime);
        });
    };
}