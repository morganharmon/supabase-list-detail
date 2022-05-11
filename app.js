// import functions and grab DOM elements
import { renderJuice } from './utils.js';
import { getJuices } from './fetch-utils.js';

const juiceSec = document.getElementById('juiceSec');


async function loadData() {
    const juices = await getJuices();
    for (let juice of juices) {
        juiceSec.append(renderJuice(juice));
    }

}

loadData();