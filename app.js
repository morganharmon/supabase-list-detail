// import functions and grab DOM elements
import { renderJuice } from './utils.js';
import { getJuices } from './fetch-utils.js';

const juiceSec = document.getElementById('juiceSec');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// for (let juice of juices) {
//     juiceSec.append(renderJuice(juice));
// }

async function loadData() {
    const juices = await getJuices();
    for (let juice of juices) {
        juiceSec.append(renderJuice(juice));
    }

}

loadData();