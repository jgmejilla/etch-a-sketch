canvas = document.querySelector('.canvas');
rem_size = 35;
grid_size = 64;
color = 'black';

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
        border: 0.1px solid rgba(200, 200, 200, 0.2); 
        height: 100%; 
        width: ${rem_size/grid_size}rem;
        `)
        cell.setAttribute('id', `${i}-${j}`);

        cell.addEventListener('mouseover', changeColor)
        row.appendChild(cell);
    }
}

function changeColor(e) {
    id = e.target.id;
    cell = document.getElementById(id);
    
    cell.style['background-color'] = color;
    cell.style['border'] = `0.1px solid ${color}`;
}