module objects {
   
    export class Asteroid extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES 
        private _dy:number;
        private _dx:number;

        // CONSTRUCTORS 
        //Creates an instance of asteroid
        
        constructor(imageString: string) {
            super(imageString);

            this.start();
        }

        // PRIVATE METHODS 
        //Resets the object outside of the viewport and sets the x and y locations
       
        private _reset():void {
            this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift

            this.y = -this.height;

            // get a random x location
            this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
        }

     
        private _checkBounds():void {
            if(this.y >= (480 + (this.height * 0.5))) {
                this._reset();
            }
        }
        
        // PUBLIC METHODS 

        //used to initialize public properties and private instance variables
        
        public start():void {
            this._reset();
        }

        //updates the object's properties every time it's called
      
        public update():void {
            this.position = new Vector2(this.x, this.y);
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        }
    }
}