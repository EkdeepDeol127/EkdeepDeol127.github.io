module objects {
        export class Portal extends objects.GameObject {

                constructor(imageString: string) {
                        super(imageString)
                        this.regX = this.width * 0.5;
                        this.regY = this.height * 0.5;
                        this.start();
                }

                public start() {
                        this.y = -200;
                        this.x = 400;
                }

                public update() {
                        this.position = new Vector2(this.x, this.y); //for collision
                        this.checkBounds();
                }

                public checkBounds() {
                        if (this.y == 300)
                                core.ifSpawn = true;
                        else {
                                this.y += 1;
                        }
                }
        }
}