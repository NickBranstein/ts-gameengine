var Game = (function () {
    function Game(context, width, height) {
        var _this = this;
        this.context = context;
        this.width = width;
        this.height = height;
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, function () { _this.renderWorld(); }); // wrap in a method ot preserve the reference to the class
        var sprite = new Engine.Sprite(80, 78, 'images/meteor.png');
        sprite.image.x = 50;
        sprite.image.y = 50;
        sprite.frames = 4;
        this.sprites.push(sprite);
    }
    Game.prototype.start = function () {
        this.renderer.start();
    };
    Game.prototype.stop = function () {
        this.renderer.stop();
    };
    Game.prototype.renderWorld = function () {
        var _this = this;
        this.sprites.forEach(function (sprite) {
            sprite.render(_this.context);
        });
    };
    ;
    return Game;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJSSxjQUFvQixPQUFZLEVBQVUsS0FBYSxFQUFVLE1BQWM7UUFKbkYsaUJBNEJDO1FBeEJ1QixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsY0FBTyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtRQUVwSixJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLG9CQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sMEJBQVcsR0FBbkI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBQ0wsV0FBQztBQUFELENBNUJBLEFBNEJDLElBQUEiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
