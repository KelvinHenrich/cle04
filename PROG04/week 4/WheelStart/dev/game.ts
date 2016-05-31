/// <reference path="car.ts"/>

class Game {
    
    private car1:Car;
    private car2:Car;
    private car3:Car;
    
    constructor() {
        
        this.car1 = new Car();
        this.car2 = new Car();
        this.car3 = new Car();
        
        // vraag: kan je meer cars maken die elk ergens anders starten?
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        this.car1.update();
        this.car2.update();
        this.car3.update();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 

