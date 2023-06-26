// to-do only change color when mouseover and mousedown

canvas = document.querySelector('.canvas');
rem_size = 35;
grid_size = 30;
color = 'black';
is_down = false;

random_color = false;
darken_color = false;
eraser_color = false;

min_size = 8;
max_size = 64;

body = document.getElementsByTagName('body')[0];
body.addEventListener('mousedown', mousedown)
body.addEventListener('mouseup', mouseup)

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

left = document.querySelector('.left');

button = document.createElement('button');
button.textContent = 'reset canvas';
button.addEventListener('click', reset_grid);
left.appendChild(button);

checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('click', toggleRandom);

checkbox2 = document.querySelector('.checkbox2');
checkbox2.addEventListener('click', toggleEraser);

slider = document.createElement('input');
slider.type = 'range';
slider.min = `${min_size}`;
slider.max = `${max_size}`; 
slider.value = `${(max_size+min_size)/2}`;
slider.addEventListener('input', changeValue);
left.appendChild(slider);

createCanvas();
createSliderText();

function createSliderText() {
    reset_grid();
    text_size = document.createElement('p');
    text_size.innerHTML = `grid size: ${slider.value}x${slider.value}`;
    text_size.style['font-size'] = '15px';
    left.appendChild(text_size);
}

function changeValue(e) {
    console.log(slider.value);
    left.removeChild(left.lastChild);
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
    if (is_down) {
        id = e.target.id;
        cell = document.getElementById(id);

        r = getRandomInt(255);
        g = getRandomInt(255);
        b = getRandomInt(255);

        if (random_color && !eraser_color) {
            cell.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
            console.log(cell.style['background-color']);
        } else if (darken_color) { /*to-do in the future (probably not)*/
            cell.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
        } else if (eraser_color) {
            cell.style['background-color'] = `rgb(255, 255, 255)`;
        } else {
            cell.style['background-color'] = `rgb(0, 0, 0)`;
        }

        
        
        /*body.style['background-color'] = cell.style['background-color']*/
    }
}

function mousedown(e) {
    is_down = true;
    //console.log(is_down);
}

function mouseup(e) {
    is_down = false;
    //console.log(is_down);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function toggleRandom(e) {
    if (eraser_color) {
        checkbox2.checked = false;
    }
    random_color = checkbox.checked;
    eraser_color = checkbox2.checked;
}

function toggleEraser(e) {
    if (random_color) {
        checkbox.checked = false;
    }
    random_color = checkbox.checked;
    eraser_color = checkbox2.checked;
}