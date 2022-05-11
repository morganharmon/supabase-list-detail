export function renderJuice(juice) {
    const anchor = document.createElement('a');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    anchor.href = `./animals/index.html?id=${juice.id}`;
    h2.textContent = juice.type;
    // const p = document.createElement('p');
    // p.textContent = `The ${animal.type} is of ${animal.size} size and is know for ${animal.behaviors}`;
    img.src = juice.image;
    img.alt = `${juice.type} juice`;

    anchor.append(div);
    div.append(h2, img);
    return anchor;
}