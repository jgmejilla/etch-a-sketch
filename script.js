canvas = document.querySelector('.canvas');
rem_size = 35;
grid_size = 30;
color = 'black';

min_size = 8;
max_size = 64;

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
    
            cell.addEventListener('mouseover', shade)
            row.appendChild(cell);
        }
    }
}

createCanvas();


button_div = document.querySelector('.button-div');
button = document.createElement('button');
button.textContent = 'reset canvas';
button.addEventListener('click', reset_grid);
button_div.appendChild(button);

slider_div = document.querySelector('.slider-div');
slider = document.createElement('input');
slider.type = 'range';
slider.min = `${min_size}`;
slider.max = `${max_size}`; 
slider.value = `${(max_size+min_size)/2}`;
slider.addEventListener('input', changeValue);
slider_div.appendChild(slider);


function createSliderText() {
    text_size = document.createElement('p');
    text_size.innerHTML = `grid size: ${slider.value}x${slider.value}`;
    text_size.style['font-size'] = '15px';
    slider_div.appendChild(text_size);
}

createSliderText();

function changeValue(e) {
    console.log(slider.value);
    slider_div.removeChild(slider_div.lastChild);
    createSliderText();
}

function reset_grid(e) {
    console.log(slider.value);
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style['background-color'] = 'white';
    });

    grid_size = slider.value;
    canvas.innerHTML = '';
    createCanvas();
}

function shade(e) {
    id = e.target.id;
    cell = document.getElementById(id);
    cell.style['background-color'] = color;
}