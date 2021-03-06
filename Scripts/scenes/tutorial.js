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
var scenes;
(function (scenes) {
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        //creates an instance on Tutorial
        function Tutorial() {
            var _this = _super.call(this) || this;
            //private _portal: objects.Portal;
            //timers for intructions
            _this._time = 20;
            _this._timeTwo = 50;
            _this._timeThree = 100;
            _this._timeFour = 150;
            return _this;
        }
        Tutorial.prototype._scoreUpdate = function () {
            this._scoreLabel.text = "Score: " + core.score;
            this._livesLabel.text = "Lives: " + core.lives;
        };
        Tutorial.prototype.Start = function () {
            //sound
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("mainTheme");
                this._sound.loop = -1;
            }
            //background
            this._backgr = new objects.Galaxy("tutorial");
            this.addChild(this._backgr);
            //player
            this._playerBullet = new objects.Bullet("playerBullet");
            this.addChild(this._playerBullet);
            this._player = new objects.Player("player");
            this.addChild(this._player);
            //asteroids
            this._asteroid = new Array();
            for (var count = 0; count < 4; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }
            this._collision = new managers.Collision();
            //labels
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "monospace", "#FFFF00", 260, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "monospace", "#FFFF00", 20, 5, false);
            this.addChild(this._livesLabel);
            //instructions
            this._instrOne = new objects.Label("USE THE ARROW KEYS TO MOVE", "40px", "monospace", "#FFFF00", 100, 150, false);
            this.addChild(this._instrOne);
            this._instrTwo = new objects.Label("USE THE MOUSE TO AIM AND SHOOT", "40px", "monospace", "#FFFF00", 50, 150, false);
            this._instrThree = new objects.Label(" AVOID ENEMIES AND BLAST YOUR \n       WAY TO THE PORTAL ", "40px", "monospace", "#FFFF00", 25, 150, false);
            //development buttons
            this._menuButton = new objects.Button("menuButton", 125, 450, true);
            //startbutton event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            this._playButton = new objects.Button("playButton", 650, 450, true);
            //playbutton event listener
            this._playButton.on("click", this._playButtonClick, this);
            core.stage.addChild(this);
        };
        Tutorial.prototype.Update = function () {
            var _this = this;
            this._backgr.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._playerBullet.update();
            this._collision.update();
            //asteroid update
            this._asteroid.forEach(function (asteroid) {
                asteroid.giveData(_this._player.x, _this._player.y);
                _this._collision.checkPlayer(_this._player, asteroid);
                _this._collision.checkEnemy(_this._playerBullet, asteroid);
                if (_this._collision.checkEnemy)
                    asteroid.update();
            });
            this._scoreUpdate();
            if (core.lives < 1) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 100;
                core.score = 0;
            }
            //TIMER FOR FIRST INTRUCTION
            if (this._time <= 0) {
                this.removeChild(this._instrOne);
            }
            else {
                this._time -= 0.1;
            }
            //TIMER FOR SECOND INSTRUCTION
            if (this._timeTwo <= 25)
                this.addChild(this._instrTwo);
            if (this._timeTwo <= 1)
                this.removeChild(this._instrTwo);
            else {
                this._timeTwo -= 0.1;
            }
            //TIMER FOR THIRD INSTRUCTION
            if (this._timeThree <= 50)
                this.addChild(this._instrThree);
            if (this._timeThree <= 1)
                this.removeChild(this._instrThree);
            else {
                this._timeThree -= 0.1;
            }
            //TIMER FOR BUTTONS INSTRUCTION
            if (this._timeFour <= 50) {
                this.addChild(this._playButton);
                this.addChild(this._menuButton);
            }
            else {
                this._timeFour -= 0.1;
            }
        };
        Tutorial.prototype._menuButtonClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        Tutorial.prototype._playButtonClick = function (event) {
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map