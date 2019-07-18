class Wall {
    constructor(ctx, w, h, x, y){
    this.ctx = ctx,
    this.width= w,
    this.height= h,
    this.posX = x,
    this.posY = y
    }

    draw (){
    
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    

      }
    }
    