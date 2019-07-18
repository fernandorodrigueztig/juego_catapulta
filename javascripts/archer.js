class Archer {
    constructor(ctx, x, y) {
      this.ctx = ctx,
      this.width = 45,
      this.height = 35,
 //     this.posX = 850,
      this.posX = x,
      this.posY = 500,
      

      this.image = new Image ()
      this.image.src = "img/arquero.png";
      
    }
    draw() {        
        
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
      
    }}