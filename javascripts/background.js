
class Background {
    constructor(ctx, w, h){
      this.ctx = ctx
      this.width = w
      this.height = h
  
      this.image = new Image()
      this.image.src = "img/01452ff8c01984e53e02ef877afd6917.png"
      
      this.posX = 0
      this.posY = 0
  
      //this.velX = 5
    }

    draw() {
  
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    
    }
}
    