import _ from 'lodash';
import '../assets/styles.css';
import Player from './player';

class Main {
  constructor(name){
    this.name = name;
  }

  setupBackground(){
    const background = document.createElement('canvas');
    background.id = "fightingBackground"
    background.height = "500";
    background.width = "500";
    background.style = "background-image: url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2503094/910/607/m1/fpnw/wm1/game_background_130-.jpg?1491389381&s=c08b3be2ed8bea1644e27c7977de25cb'); background-repeat: no-repeat;";
    document.body.appendChild(background);
  }

  setupPlayer(){
    this.player = new Player("Kevin", {x: 0, y: 0});
    this.player.render();
    document.addEventListener("onkeypress", this.player.movement.bind(this))
  }

  render(){
    this.setupBackground();
    this.setupPlayer();
  }

}

const instance = new Main("Game1");
instance.render();
// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = "Welcome to Fighting";
//   return element;
// }
//
// document.body.appendChild(component());
