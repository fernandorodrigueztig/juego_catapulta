const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    framesCounter: 0,
    score: undefined,
    archers: [],
    found: [],
 
  init: function() {
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.width = window.innerWidth * .98
    this.height = window.innerHeight * 0.98
    this.canvas.width = this.width 
    this.canvas.height = this.height 
    
    this.start()
  },
  reset: function() {         //reset del game
    this.background = new Background(this.ctx, this.width, this.height)
    this.wall = new Wall(this.ctx, 40, 100, this.width/2, this.height *2/3)
    
    this.player = new Player (this.ctx, this.width, this.height,this.width/2)
    this.archer = new Archer (this.ctx,this.width/2, this.height/2)
    this.score = 0
  },
  start: function () {
    this.reset ()
    this.interval = setInterval(() =>{
      this.framesCounter ++
      console.log(this.score)
      this.deleteBalls()
      this.clearBalls()
      this.collisionWall()
     // this.collisionArcher()
     this.collisions2()
     // console.log("start")
      this.generateArcher()
     // if(this.archers.splice(j) this.score++
      if(this.framesCounter > 1000) this.framesCounter = 0
        this.drawAll()
        this.moveAll()
    }, 1000/60  )
    
  },
  restart: function() {
       this.archer = []
  },
  drawAll: function() {
        this.background.draw()
        this.wall.draw ()
        this.player.draw(this.framesCounter)
        //this.archer.draw()
        console.log("drawAll")
        this.archers.forEach( arc => arc.draw()) 
        console.log("drawAll") 
        //this.drawScore()
      },
  moveAll: function() {
       
       this.player.move()
        //this.obstacles.forEach(obs => obs.move())
    
      },

  deleteBalls: function(){
    this.player.balls = this.player.balls.filter(elm =>
    elm.posY<this.canvas.height
    
    );
  },    //funcion eliminar bolas

  
  

  clearBalls: function() {        //funcion para limpiar balls
    this.player.balls.forEach( (balls, idx) => {
      
      if(balls.posY >= this.wall.posY + this.wall.height) {
        
        this.player.balls.splice(idx, 1)
        
      } 
    })
  },

  collisionWall: function (){
    this.player.balls.forEach( (balls, idx) => {
  
      if (this.wall.posX < balls.posX + balls.width &&
        this.wall.posX + this.wall.width >= balls.posX &&
        this.wall.posY < balls.posY + balls.height &&
        this.wall.height + this.wall.posY > balls.posY)
   {
      this.player.balls.splice(idx, 1)
   }
  })
  },
  collisions2: function(){
    console.log("collisions2")
         for (let i = 0; i < this.player.balls.length; i++){
           for (let j = 0; j < this.archers.length; j++){
            
            
           if (this.player.balls[i].posX + this.player.balls[i].width >= this.archers[j].posX
             && this.player.balls[i].posY + this.player.balls[i].height >this.archers[j].posY
             &&this.player.balls[i].posX <=this.archers[j].posX+ this.archers[j].width
             && this.player.balls[i].posY< this.archers[j].posY + this.archers[j].height)
              {


                this.archers.splice(j, 1)
                this.found.push(this.archers[j])
                this.score = this.found.length
    
           }
    
     
           }
         }
     },
    
  
  generateArcher: function (){
    console.log("generateArcher")
    if (this.framesCounter%180==0){
    let randomX = 800 + Math.floor(Math.random()*200);
    this.archers.push(new Archer(this.ctx, randomX, 500))
  }}}


