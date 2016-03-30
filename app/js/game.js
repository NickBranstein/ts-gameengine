var Game = (function () {
    function Game(context, width, height) {
        var _this = this;
        this.context = context;
        this.width = width;
        this.height = height;
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, function (elapsedTime) { _this.renderWorld(elapsedTime); }); // wrap in a method ot preserve the reference to the class
        var sprite = new Engine.Sprite(150, 150, 80, 78, 'images/meteor.png');
        sprite.frames = 4;
        sprite.speed = 1000;
        this.sprites.push(sprite);
    }
    Game.prototype.start = function () {
        this.renderer.start();
    };
    Game.prototype.stop = function () {
        this.renderer.stop();
    };
    Game.prototype.renderWorld = function (elapsedTime) {
        var _this = this;
        this.sprites.forEach(function (sprite) {
            sprite.render(_this.context, elapsedTime);
        });
    };
    ;
    return Game;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJSSxjQUFvQixPQUFZLEVBQVUsS0FBYSxFQUFVLE1BQWM7UUFKbkYsaUJBMkJDO1FBdkJ1QixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBQyxXQUFXLElBQU0sS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsMERBQTBEO1FBRTFLLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sb0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTywwQkFBVyxHQUFuQixVQUFvQixXQUFXO1FBQS9CLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBQ0wsV0FBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
