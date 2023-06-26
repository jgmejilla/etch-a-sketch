canvas = document.querySelector('.canvas');
rem_size = 35;
grid_size = 30;
color = 'black';

min_size = 8;
max_size = 100;

function createCanvas() {
    for (let i = 0; i < grid_size; i++) {
        row = document.createElement('div');
        row.setAttribute('style', `
            height: ${(rem_size/grid_size)}rem; 
            width: 100%; 
    
            display: flex; 
            justify-content: center;
            align-items: center;
            `);
        canvas.appendChild(row);
    
        for (let j = 0; j < grid_size; j++) {
            cell = document.createElement('div');
            cell.setAttribute('style', `
            height: 100%; 
            width: ${rem_size/grid_size}rem;
            `)
            cell.setAttribute('id', `${i}-${j}`);
            cell.setAttribute('class', 'cell');
    
            cell.addEventListener('mouseover', changeColor)
            row.appendChild(cell);
        }
    }
}

createCanvas();

button_div = document.querySelector('.button-div');
button = document.createElement('button');
button.textContent = 'click me';
button.addEventListener('click', reset_grid);
button_div.appendChild(button);

slider = document.createElement('input');
slider.type = 'range';
slider.min = `${min_size}`;
slider.max = `${max_size}`; 
slider.value = `16`;
slider_div.appendChild(slider);

function reset_grid(e) {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style['background-color'] = 'white';
    });

    grid_size = slider.value;
    canvas.innerHTML = '';
    createCanvas();
}

function changeColor(e) {
    id = e.target.id;
    cell = document.getElementById(id);
    cell.style['background-color'] = color;
}