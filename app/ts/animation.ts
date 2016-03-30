module Engine {
    export interface IAnimate{
        frames: number;
        fps: number;
        
        animate(context: CanvasRenderingContext2D): void;
    }
}