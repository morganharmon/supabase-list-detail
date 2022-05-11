// import functions and grab DOM elements

// let state

import { juices } from './data.js';
import { renderJuices } from './utils.js';

const animalsSec = document.getElementById('animals');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

for (let animal of animals) {
    animalsSec.append(renderAnimal(animal));
}