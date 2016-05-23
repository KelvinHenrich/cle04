class Paddle {
    
    private div:HTMLElement;
    
    private downkey : number;
    private upkey : number;
    
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    // private posX : number;
    private posY : number;
    
    constructor(up:number , down:number) {
        // div element maken
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        
        // bewegen
        this.upkey = up;
        this.downkey = down;
        
        this.posY = 600 ;
        
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        
    }
    
        // bal kan positie opvragen
    
    public getY():number {
        return this.posY;
    }
    
    // snelheid veranderen als je een key indrukt
    private onKeyDown(event:KeyboardEvent):void {
            switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
            }
    }   
    
    private onKeyUp(event:KeyboardEvent):void {
            switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 0;
            break;
        case this.downkey:
            this.downSpeed = 0;
            break;
        }
    }
    
    
    public move() : void {
        
        this.posY = this.posY - this.upSpeed + this.downSpeed;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translateY("+this.posY+"px) scaleX(-1)";
    }

    
}

