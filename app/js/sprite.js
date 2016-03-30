var Engine;
(function (Engine) {
    var Sprite = (function () {
        function Sprite(frameWidth, frameHeight, source) {
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.image = new Image();
            this.image.src = source;
            this.image.x = 0;
            this.image.y = 0;
            this.currentFrame = 0;
        }
        Sprite.prototype.render = function (context) {
            if (this.frames != null)
                this.animate(context);
            // render the sprite
            context.drawImage(this.image, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.image.height, 50, 50, this.frameWidth, this.image.height);
        };
        Sprite.prototype.animate = function (context) {
            // advance the sprite animation
            this.currentFrame++;
            if (this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
            this.image.x = this.currentFrame * this.frameWidth;
        };
        return Sprite;
    }());
    Engine.Sprite = Sprite;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE1BQU0sQ0FtQ1o7QUFuQ0QsV0FBTyxNQUFNLEVBQUMsQ0FBQztJQUNaO1FBTUssZ0JBQW1CLFVBQWtCLEVBQVMsV0FBbUIsRUFBRSxNQUFjO1lBQTlELGVBQVUsR0FBVixVQUFVLENBQVE7WUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVNLHVCQUFNLEdBQWIsVUFBYyxPQUFpQztZQUMzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV6QixvQkFBb0I7WUFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDcEcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVNLHdCQUFPLEdBQWQsVUFBZSxPQUFpQztZQUM1QywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdkQsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQWpDRCxBQWlDRSxJQUFBO0lBakNXLGFBQU0sU0FpQ2pCLENBQUE7QUFDTCxDQUFDLEVBbkNNLE1BQU0sS0FBTixNQUFNLFFBbUNaIiwiZmlsZSI6InNwcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
