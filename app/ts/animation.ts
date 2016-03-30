module Engine {
    export interface IAnimate{
        frames: number;
        speed: number;
        
        animate(context: CanvasRenderingContext2D): void;
    }
}