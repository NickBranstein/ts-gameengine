var Engine;
(function (Engine) {
    var Renderer = (function () {
        function Renderer(context, width, height, render) {
            this.context = context;
            this.width = width;
            this.height = height;
            this.render = render;
        }
        Renderer.prototype.start = function () {
            var _this = this;
            this.running = true;
            this.animationFrame = window.requestAnimationFrame(function (timestamp) { return _this.renderLoop(timestamp); });
        };
        Renderer.prototype.renderLoop = function (timestamp) {
            var _this = this;
            if (this.lastTimestamp == null || this.lastTimestamp == undefined) {
                this.lastTimestamp = timestamp;
            }
            var elapsedTime = timestamp += this.lastTimestamp;
            this.lastTimestamp = timestamp;
            if (this.running) {
                this.clear();
                this.animate();
                this.render(elapsedTime);
                window.requestAnimationFrame(function (time) { return _this.renderLoop(time); });
            }
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

//# sourceMappingURL=data:application/json;base64,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
