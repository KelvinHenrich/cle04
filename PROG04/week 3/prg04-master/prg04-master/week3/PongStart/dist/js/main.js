var Paddle = (function () {
    function Paddle(up, down) {
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.posY = 600;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Paddle.prototype.getY = function () {
        return this.posY;
    };
    Paddle.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.move = function () {
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translateY(" + this.posY + "px) scaleX(-1)";
    };
    return Paddle;
}());
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.posX = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.posY = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        this.move();
    }
    Ball.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX + 40 > window.innerWidth || this.posX < 0) {
            this.speedX *= -1;
        }
        if (this.posY + 40 > window.innerHeight || this.posY < 0) {
            this.speedY *= -1;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        this.char1 = new Paddle(87, 83);
        this.char2 = new Paddle(38, 40);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.char1.move();
        this.char2.move();
        this.ball.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map