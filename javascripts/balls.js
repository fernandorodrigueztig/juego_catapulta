class Balls {
    constructor( ctx, x, y, y0, playerH) {
      this.ctx = ctx
      this.posX = x;
      this.posY = y;
      this.posY0 = y0
      this.playerHeight = playerH
      this.radius = 5;
      this.velX = 10;
      this.velY = -10;
      this.image = new Image()
      this.image.src = "img/bola.png";
      this.gravity = 0.4;
      this.width = 12
      this.height = 12
    }
  
    draw() {        
      
     
      this.ctx.drawImage(this.image, this.posX + 5, this.posY + 10, this.width, this.height);//this.ctx.fillStyle = "red";
      
    }
  
    move() {
      this.posX += this.velX        
      this.posY += this.velY        
      this.velY += this.gravity     
  
      if(this.posY >= this.playerHeight + this.posY0){
        this.velY *= -1   
      }
    }
  }