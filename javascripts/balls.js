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
  
    draw() {        //DIbujamos las balas con un arco
      //this.ctx.beginPath()
     
      this.ctx.drawImage(this.image, this.posX + 5, this.posY + 10, this.width, this.height);//this.ctx.fillStyle = "red";
      // this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
      // this.ctx.fill();
      // this.ctx.closePath();
    }
  
    move() {
      this.posX += this.velX        
      this.posY += this.velY        //Añadimos velY linear para que caigan
      this.velY += this.gravity     //Modificamos la velY para generar el efecto gravedad
  
      if(this.posY >= this.playerHeight + this.posY0){
        this.velY *= -1   //Si llegan al suelo invertimos su velocidad para que "reboten"
      }
    }
  }