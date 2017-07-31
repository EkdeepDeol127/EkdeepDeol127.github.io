var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var galaxyPath = (function (_super) {
        __extends(galaxyPath, _super);
        function galaxyPath(imageString) {
            var _this = _super.call(this, core.assets.getResult(imageString)) || this;
            _this.width = 800;
            _this.height = 1422;
            _this.x = 400;
            _this.y = 300;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS 
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        galaxyPath.prototype._reset = function () {
            this.y = 400;
            this.x = 300;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        galaxyPath.prototype._checkBounds = function () {
            if (this.y >= 700 || this.x >= 900 || this.y <= -100 || this.x <= -100) {
                this._reset();
            }
        };
        // PUBLIC METHODS 
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        galaxyPath.prototype.start = function () {
            this._reset();
            this.speed = .8; // 5px per frame down
        };
        // This method updates the object's properties every time it's called
        galaxyPath.prototype.update = function () {
            //this._checkBounds();
            this.galaxyMove();
        };
        galaxyPath.prototype.galaxyMove = function () {
            this.radians = this.rotation * (Math.PI / 180);
            this.x -= this.speed * Math.cos(this.radians);
            this.y -= this.speed * Math.sin(this.radians);
        };
        galaxyPath.prototype.giveData = function (rot) {
            this.rotation = rot;
        };
        return galaxyPath;
    }(createjs.Bitmap));
    objects.galaxyPath = galaxyPath;
})(objects || (objects = {}));
//# sourceMappingURL=galaxyPath.js.map