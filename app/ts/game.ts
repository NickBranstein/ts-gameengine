class Game {
    private renderer: Engine.Renderer;
    private sprites: Array<Engine.Sprite>;

    constructor(private context: any, private width: number, private height: number) {
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, () => {this.renderWorld();}); // wrap in a method ot preserve the reference to the class
                
        var sprite = new Engine.Sprite(80, 78, 'images/meteor.png');
        sprite.image.x = 50;
        sprite.image.y = 50;
        sprite.frames = 4;
        this.sprites.push(sprite);
    }
    
    public start(){
        this.renderer.start();
    }
    
    public stop() {
        this.renderer.stop();
    }
    
    private renderWorld(): void{
        this.sprites.forEach((sprite) => {
            sprite.render(this.context);
        });
    };
}