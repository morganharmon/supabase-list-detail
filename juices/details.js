import { getJuiceById } from '../fetch-utils.js';
import { renderJuiceDetail } from '../utils.js';
const juiceSec = document.getElementById('juiceSec');

const params = new URLSearchParams(window.location.search);

async function loadData() {
    const juice = await getJuiceById(params.get('id'));
    const div = renderJuiceDetail(juice);
    juiceSec.append(div);
}

loadData();