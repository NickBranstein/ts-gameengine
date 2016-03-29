var Engine;
(function (Engine) {
    var Renderer = (function () {
        function Renderer(context) {
            var _this = this;
            this.context = context;
            this.render = function () {
                if (_this.running) {
                    _this.context.clearRect(0, 0, 800, 600);
                    _this.animate();
                    window.requestAnimationFrame(_this.render);
                }
            };
        }
        Renderer.prototype.start = function () {
            this.running = true;
            this.animationFrame = window.requestAnimationFrame(this.render);
        };
        // animations go here
        Renderer.prototype.animate = function () {
            this.context.fillStyle = "#000000";
            this.context.font = "25px helvewtica";
            this.context.fillText('This is just a test', 50, 50);
        };
        Renderer.prototype.stop = function () {
            this.context.clearRect(0, 0, 800, 600);
            window.cancelAnimationFrame(this.animationFrame);
            this.running = false;
        };
        return Renderer;
    }());
    Engine.Renderer = Renderer;
    var Animator = (function () {
        function Animator() {
        }
        return Animator;
    }());
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE1BQU0sQ0FzQ1o7QUF0Q0QsV0FBTyxNQUFNLEVBQUMsQ0FBQztJQUNYO1FBSUksa0JBQW9CLE9BQVk7WUFKcEMsaUJBZ0NDO1lBNUJ1QixZQUFPLEdBQVAsT0FBTyxDQUFLO1lBUXpCLFdBQU0sR0FBRztnQkFDWixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDTCxDQUFDLENBQUE7UUFiRCxDQUFDO1FBRU0sd0JBQUssR0FBWjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRSxDQUFDO1FBVUQscUJBQXFCO1FBQ2QsMEJBQU8sR0FBZDtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVNLHVCQUFJLEdBQVg7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtJQWhDWSxlQUFRLFdBZ0NwQixDQUFBO0lBRUQ7UUFBQTtRQUVBLENBQUM7UUFBRCxlQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7QUFDTCxDQUFDLEVBdENNLE1BQU0sS0FBTixNQUFNLFFBc0NaIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
