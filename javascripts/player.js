class Player {
    constructor(ctx, w, h, x, y, posXW) {
      this.ctx = ctx
      this.gameWidth = w
      this.gameHeight = h
      this.keys= {    
        SPACE: 32,
        ARROWLEFT: 37,
        ARROWRIGHT: 39,
      };
      this.image = new Image()
      this.image.src = "img/catapulta.png"
      this.wallPosX = posXW
      
      
      this.width = 100
      this.height = 65
      this.posX0 = this.gameWidth / 4.5
      
      this.posX = this.posX0
      //this.posY0 = this.gameHeight * 0.98 - this.height     //Guardamos la posicion original para usarla como suelo
      this.posY = this.gameHeight*0.82 - this.height
  
      this.velY = 1
      this.velX = 1
      this.image.frames = 3         //Indicamos el numero de frames que tiene la imagen
      this.image.framesIndex = 0      //Frame actual menos 1, lo usaremos para recortar la imagen en drawImage
   

      this.direction = {
        ARROWLEFT: false,
        ARROWRIGHT: false,
      }
      this.balls = []           //Array de balas
      
      this.setListeners()       //Llamamos al listener para que desde el primer momento el jugador responda.
    }
    
    
  
    draw() {
      this.ctx.drawImage(
        this.image, 
        this.image.framesIndex * Math.floor(this.image.width/this.image.frames),  //Punto x donde empieza a recortar
        0,                                                                        //Punto y donde empieza a recortar
        Math.floor(this.image.width/this.image.frames),                           //Punto x donde termina de recortar
        this.image.height,                                                        //Punto y donde termina de recortar
        this.posX, 
        this.posY, 
        this.width, 
        this.height)

      this.balls.forEach(bullet => bullet.draw())      //El player dibuja las balas.
    }
  
    move() {
      
     //if (this.player.posX = this.wall.posX + this.wall.width){
       
     
     if(this.direction.ARROWLEFT) {
        if(this.posX>30){this.posX -= 5}
              //left no fuera pantalla
      }
      if(this.direction.ARROWRIGHT) {
        if(this.posX+this.width<605.71999999999997){
          this.posX += 5
        }
        
      }

     this.balls.forEach( bullet => bullet.move())      //Movemos las balas
    }
    
    animate(){ 
   
     // if(Game.framesCounter%2==0) {
        this.image.framesIndex++              //Cambiamos el frame de la imagen cada 5 fps.
        if(this.image.framesIndex>2) {
          this.image.framesIndex = 0
        }
     // }
      
    }
  
    setListeners() {

      document.onkeydown = (e) => {
        
        switch(e.keyCode){
          case this.keys.ARROWRIGHT:
            this.direction.ARROWRIGHT = true    
  
            break;

          case this.keys.ARROWLEFT:         
            this.direction.ARROWLEFT = true   
            break;

          case this.keys.SPACE:

            this.animate()
            this.shoot()                //Funcion de disparo
            break;
  
        }
      }
      document.onkeyup = (e) => {
        switch(e.keyCode){
         
          case this.keys.SPACE:
            this.image.framesIndex = 0
            break;
          case this.keys.ARROWLEFT:
            this.image.framesIndex = 2
            this.direction.ARROWLEFT = false

            break;

            case this.keys.ARROWRIGHT:
            this.image.framesIndex = 2
            this.direction.ARROWRIGHT = false
            break;
        }
      }
    }
  
    shoot() {
  
      //Instanciamos nuevas balas
     this.balls.push(new Balls(this.ctx, this.posX, this.posY, this.posY0, this.height))
      
    }
  }