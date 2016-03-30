var Engine;
(function (Engine) {
    var Renderer = (function () {
        function Renderer(context, width, height, render) {
            var _this = this;
            this.context = context;
            this.width = width;
            this.height = height;
            this.render = render;
            this.renderLoop = function () {
                if (_this.running) {
                    _this.clear();
                    _this.animate();
                    _this.render();
                    window.requestAnimationFrame(_this.renderLoop);
                }
            };
        }
        Renderer.prototype.start = function () {
            this.running = true;
            this.animationFrame = window.requestAnimationFrame(this.renderLoop);
        };
        // animations go here
        Renderer.prototype.animate = function () {
            this.context.fillStyle = "#000000";
            this.context.font = "25px helvewtica";
            this.context.fillText('This is just a test', 100, 100);
        };
        Renderer.prototype.stop = function () {
            this.clear();
            window.cancelAnimationFrame(this.animationFrame);
            this.running = false;
        };
        Renderer.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height);
        };
        return Renderer;
    }());
    Engine.Renderer = Renderer;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE1BQU0sQ0EyQ1o7QUEzQ0QsV0FBTyxNQUFNLEVBQUMsQ0FBQztJQUtYO1FBSUksa0JBQW9CLE9BQWlDLEVBQVUsS0FBYSxFQUFVLE1BQWMsRUFBUyxNQUFrQjtZQUpuSSxpQkFxQ0M7WUFqQ3VCLFlBQU8sR0FBUCxPQUFPLENBQTBCO1lBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7WUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFZO1lBUXhILGVBQVUsR0FBRztnQkFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2QsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNMLENBQUMsQ0FBQTtRQWRELENBQUM7UUFFTSx3QkFBSyxHQUFaO1lBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZFLENBQUM7UUFXRCxxQkFBcUI7UUFDZCwwQkFBTyxHQUFkO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBRU0sdUJBQUksR0FBWDtZQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNaLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUVPLHdCQUFLLEdBQWI7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtJQXJDWSxlQUFRLFdBcUNwQixDQUFBO0FBQ0wsQ0FBQyxFQTNDTSxNQUFNLEtBQU4sTUFBTSxRQTJDWiIsImZpbGUiOiJyZW5kZXIuanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
