canvas = document.querySelector('.canvas');
rem_size = 35;
grid_size = 16;

for (let i = 0; i < grid_size; i++) {
    row = document.createElement('div');
    row.setAttribute('style', `
        border: 1px solid black; 
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
        border: 1px solid black; 
        height: 100%; 
        width: ${rem_size/grid_size}rem;
        `)
        cell.
        row.appendChild(cell);
    }
}

