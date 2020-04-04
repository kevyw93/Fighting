class Bullet {
  constructor(posX, posY, ctx){
    this.x = posX;
    this.y = posY;
    this.frameIndex = 1;
    this.ctx = ctx;
  }

  bulletShots(){
    this.x += 30;
  }
}

export default Bullet;
