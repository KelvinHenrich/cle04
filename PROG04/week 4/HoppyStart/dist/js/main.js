var Tree = (function () {
    function Tree() {
        console.log("Constructor Tree");
    }
    return Tree;
}());
var game = (function () {
    function game() {
        var tree = new Tree();
        requestAnimationFrame(this.update.bind(this));
    }
    game.prototype.update = function () {
    };
    return game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map