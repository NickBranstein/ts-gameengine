var Engine;
(function (Engine) {
    var Sprite = (function () {
        function Sprite(x, y, frameWidth, frameHeight, source, frames, speed) {
            this.x = x;
            this.y = y;
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.image = new Image();
            this.image.src = source;
            this.currentFrame = 0;
            this.frames = frames;
            this.speed = speed;
            this.lastElapsedTime = 0;
        }
        Sprite.prototype.render = function (context, elapsedTime) {
            this.lastElapsedTime += elapsedTime;
            //console.log(elapsedTime);
            while (this.lastElapsedTime > this.speed) {
                this.lastElapsedTime -= this.speed;
                if (this.frames != null)
                    this.animate(context);
            }
            // render the sprite
            context.drawImage(this.image, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.image.height, this.x, this.y, this.frameWidth, this.image.height);
        };
        Sprite.prototype.animate = function (context) {
            // advance the sprite animation
            this.currentFrame++;
            if (this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
        };
        return Sprite;
    }());
    Engine.Sprite = Sprite;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE1BQU0sQ0F5Q1o7QUF6Q0QsV0FBTyxNQUFNLEVBQUMsQ0FBQztJQUNaO1FBT0ssZ0JBQW1CLENBQVMsRUFBUyxDQUFTLEVBQVMsVUFBa0IsRUFBUyxXQUFtQixFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsS0FBYztZQUFuSSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1lBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7WUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUNqRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFTSx1QkFBTSxHQUFiLFVBQWMsT0FBaUMsRUFBRSxXQUFXO1lBQ3hELElBQUksQ0FBQyxlQUFlLElBQUksV0FBVyxDQUFDO1lBQ3BDLDJCQUEyQjtZQUMzQixPQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRW5DLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFQSxvQkFBb0I7WUFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDcEcsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRU0sd0JBQU8sR0FBZCxVQUFlLE9BQWlDO1lBQzVDLCtCQUErQjtZQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0F2Q0QsQUF1Q0UsSUFBQTtJQXZDVyxhQUFNLFNBdUNqQixDQUFBO0FBQ0wsQ0FBQyxFQXpDTSxNQUFNLEtBQU4sTUFBTSxRQXlDWiIsImZpbGUiOiJzcHJpdGUuanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
