const container = document.querySelector('#container');

function makeGrid(x, divs) {
    for (let i = 0; i < divs; i++) {
        let box = document.createElement('div');
        box.classList.add('grid-item');
        box.style.width = (960/x) + 'px';
        box.style.height = (960/x) + 'px';
        container.appendChild(box);
    }
}

makeGrid(16, 256);
