class Player {
  constructor(name, placement){
    this.name = name;
    this.x, this.y = placement.x, placement.y;
  }

  movement(move){
    switch(move){
      case "L":
        this.x = this.x > 0 ? this.x - 1 : this.x;
        break;
      case "R":
        this.x += 1;
        break;
      case "U":
        this.y += 1;
         break;
      case "D":
        this.y = this.y > 0 ? this.y - 1 : this.y;
        break;
      default:
        return this.x;
    }
  }

  render(){
    const canvas = document.getElementById("fightingBackground");
    // debugger
    const ctx = canvas.getContext("2d");
    // ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 10, 10);
    // this.canvas.style = "background-color: blue; z-index: 2;";
    // return body.appendChild(this.canvas);
  }

}

export default Player;
