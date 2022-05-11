export function renderJuice(juice) {
    const anchor = document.createElement('a');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    anchor.href = `./juices/index.html?id=${juice.id}`;
    h2.textContent = juice.type;
    img.src = juice.image;
    img.alt = `${juice.type} juice`;

    anchor.append(div);
    div.append(h2, img);
    return anchor;
}

export function renderJuiceDetail(juice) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h2.textContent = juice.type;
    p.textContent = `${juice.type} juice is ${juice.color} and is full of ${juice.vitamins}`;
    img.src = juice.image;
    img.alt = `${juice.type} juice`;
    div.append(h2, img, p);
    return div;
}