/// <reference path="ball.ts"/>

class Game {
    
    // geef hier de ball instance een naam
    private char1:Paddle;
    private char2:Paddle;
    
    private ball:Ball;
    
    constructor() {
        // maak hier een ball instance
        this.ball = new Ball();

        this.char1 = new Paddle(87, 83);
        this.char2 = new Paddle(38, 40);  
           
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private gameLoop():void{
        // roep hier de move functie van de bal aan
        this.char1.move();
        this.char2.move();
        // this.ball.checkPaddle(this.paddle);
        this.ball.move();
        
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 
