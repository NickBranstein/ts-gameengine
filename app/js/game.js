var Game = (function () {
    function Game(context, width, height) {
        var _this = this;
        this.context = context;
        this.width = width;
        this.height = height;
        this.sprites = [];
        this.renderer = new Engine.Renderer(context, width, height, function (timestamp) { _this.renderWorld(timestamp); }); // wrap in a method ot preserve the reference to the class
        var sprite = new Engine.Sprite(150, 150, 80, 78, 'images/meteor.png');
        sprite.frames = 4;
        sprite.fps = 5;
        this.sprites.push(sprite);
        var s = new Engine.Sprite(300, 150, 80, 78, 'images/meteor.png');
        s.frames = 4;
        s.fps = 20;
        this.sprites.push(s);
    }
    Game.prototype.start = function () {
        this.renderer.start();
    };
    Game.prototype.stop = function () {
        this.renderer.stop();
    };
    Game.prototype.renderWorld = function (timestamp) {
        var _this = this;
        this.sprites.forEach(function (sprite) {
            sprite.render(_this.context, timestamp);
        });
    };
    ;
    return Game;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJSSxjQUFvQixPQUFZLEVBQVUsS0FBYSxFQUFVLE1BQWM7UUFKbkYsaUJBZ0NDO1FBNUJ1QixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBQyxTQUFTLElBQU0sS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsMERBQTBEO1FBRXRLLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLG9CQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sMEJBQVcsR0FBbkIsVUFBb0IsU0FBUztRQUE3QixpQkFJQztRQUhHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUNMLFdBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
