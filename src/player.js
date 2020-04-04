
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
import Bullet from './bullet';
class Player {
  constructor(name){
    this.name = name;
    this.x = 100;
    this.y = 350;
    this.frameIndex = 1;
    this.runIndex = 1;
    this.batman = new Image();
    this.batman.src = '../assets/image/batman_sprites.png';
    document.addEventListener("keydown", this.movement.bind(this));
    document.addEventListener("keyup", this.resting.bind(this));
    this.setUpPlayerImage();
    this.bullets = [];
    // this.bullet = this.x;
    // this.setupBackground();
  }

  setUpPlayerImage(){
    window.onload = () => {
      const ctx = document.getElementById("fightingBackground")
      this.ctx = ctx.getContext("2d");
      this.drawctx(30, 5, 50, 78);
      // this.ctx.drawImage(this.batman, 30, 5, 50, 78, this.x + 100, this.y, 50, 100);
      // this.ctx.drawImage(this.batman, 30, 580, 50, 78, this.x + 100, this.y, 50, 100);
    }
  }

  resting(){
    this.drawctx(30, 5, 50, 78);
    this.runIndex = 1;
  }

  gravity(){
      const gravity = setInterval(() => {
        if(this.y + 25 >= 350){
          clearInterval(gravity);
        }
        this.y += 25;
        this.drawctx(30, 5, 50, 78, 0, 25);
      }, 200)
  }

  drawBullets(){
    this.bullets.forEach(b => {
      this.ctx.fillRect(b.x, b.y, 20, 20);
      b.bulletShots();
    })
  }

  movement(e){
    switch(e.keyCode){
      case 32:
        const bullet = new Bullet(this.x + 70, this.y, this.ctx);
        this.bullets.push(bullet);
        setInterval(() => {
          this.drawBullets();
        }, 200)
        break;
      case 37:
        this.x = this.x > 0 ? this.x - 1 : this.x;
        break;
      case 39:
        this.x += 20;
        this.rightSprite();
        break;
      case 38:
        if(this.y == 350){
          this.y -= 100;
          this.drawctx(30, 5, 50, 78, 0, 0, 100)
          this.gravity()
        }
         break;
      case 40:
        this.y = this.y < 0 ? this.y + 1 : this.y;
        break;
      default:
        return this.x;
    }
  }

  rightSprite(){
    switch(this.runIndex){
      case 1:
        this.drawctx(30, 580, 50, 78);
        break;
      case 2:
        this.drawctx(137, 580, 50, 78);
        break;
      case 3:
        this.drawctx(245, 580, 50, 78);
        break;
      case 4:
        this.drawctx(345, 580, 50, 78);
        break;
      case 5:
        this.drawctx(455, 580, 50, 78);
        break;
      case 6:
        this.drawctx(565, 580, 50, 78);
        break;
      case 7:
        this.drawctx(670, 580, 50, 78);
        break;
      case 8:
        this.drawctx(775, 580, 50, 78);
        break;
      default:
        this.drawctx(30, 5, 50, 78);
    }
    this.runIndex = this.runIndex > 8 ? 1 : this.runIndex + 1;
  }

  // runSprite(){
  //   switch(this.frameIndex){
  //     case 1:
  //       this.drawctx(140, 238, 50, 78);
  //       break;
  //     case 2:
  //       this.drawctx(250, 243, 50, 78);
  //       break;
  //     default:
  //       this.drawctx(30, 238, 50, 78);
  //   }
  //   this.frameIndex = this.frameIndex > 2 ? 0 : this.frameIndex + 1;
  // }

  drawctx(posX, posY, width, height, widthErase = 20, heightErase = 0, upStuff = 0){
    this.ctx.clearRect(this.x - widthErase, this.y - heightErase + upStuff, 50, 100);
    this.ctx.drawImage(this.batman, posX, posY, width, height, this.x, this.y, 50, 100);
  }

}

export default Player;
