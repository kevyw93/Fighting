import _ from 'lodash';
import '../assets/styles.css';
import Player from './player';

class Main {
  constructor(name){
    this.name = name;
    this.setupBackground();
  }

  setupBackground(){
    const background = document.createElement('canvas');
    background.id = "fightingBackground"
    background.height = "500";
    background.width = "500";
    background.style = "background-color: yellow;"
    document.body.appendChild(background);
    // const background = document.getElementById('canvas-container');
    // console.log(background)
    // background.style.height = "500px";
    // background.style.width = "500px";
    // background.style.backgroundColor = "blue";
  }

  setupPlayer(){
    this.player = new Player("Kevin");
    // this.player.render();
  }

  render(){
    // this.setupBackground();
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
