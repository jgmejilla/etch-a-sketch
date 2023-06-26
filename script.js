sketchbook = document.querySelector('.screen');



size = 4;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        p = document.createElement('p');
        p.textContent = ';'
        screen.appendChild(p);
    }
}
