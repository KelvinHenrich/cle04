class Car {
    
    private div: HTMLElement;
    private speed: number;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    public frontWheel:Wheel;
    public backWheel:Wheel;

    constructor() {
        this.div = document.createElement("car");
        document.body.appendChild(this.div);
        
        this.x = 20;
        this.y = 40;
        this.width = 400;
        this.height = 124;
        this.speed = 40;
                
        // hier moet je twee wielen toevoegen met "new". 
        // zorg dat beide wielen een eigen locatie krijgen
        // vraag: waar update je de wielen?
        
       this.frontWheel = new Wheel();
       this.frontWheel.x = 80 ;
       this.frontWheel.y = 130 ;
       
       this.backWheel = new Wheel();
       this.backWheel.x = 310 ;
       this.backWheel.y = 130 ; 
       
        
    }
        
    public update():void {
        this.x += this.speed;
        this.frontWheel.x += this.speed;
        this.frontWheel.update();
        this.backWheel.x += this.speed;
        this.backWheel.update();
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}