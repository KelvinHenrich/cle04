var Car = (function () {
    function Car() {
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.width = 400;
        this.height = 124;
        this.speed = 40;
        this.frontWheel = new Wheel();
        this.frontWheel.x = 80;
        this.frontWheel.y = 130;
        this.backWheel = new Wheel();
        this.backWheel.x = 310;
        this.backWheel.y = 130;
    }
    Car.prototype.update = function () {
        this.x += this.speed;
        this.frontWheel.x += this.speed;
        this.frontWheel.update();
        this.backWheel.x += this.speed;
        this.backWheel.update();
        this.draw();
    };
    Car.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        this.car1 = new Car();
        this.car2 = new Car();
        this.car3 = new Car();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.car1.update();
        this.car2.update();
        this.car3.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Wheel = (function () {
    function Wheel() {
        this.div = document.createElement("wheel");
        document.body.appendChild(this.div);
        this.x = 0;
        this.y = 0;
        this.width = 62;
        this.height = 62;
    }
    Wheel.prototype.update = function () {
        this.draw();
    };
    Wheel.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
//# sourceMappingURL=main.js.map