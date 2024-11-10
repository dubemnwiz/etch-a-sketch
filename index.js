let container = document.querySelector('#container');

function makeGrid(x, divs) {
    for (let i = 0; i < divs; i++) {
        let box = document.createElement('div');
        box.classList.add('grid-item');
        box.style.width = (960/x - 1) + 'px';
        box.style.height = (960/x - 1) + 'px';
        container.appendChild(box);
    }
}

makeGrid(16, 256);

let erase = false;

const drawErase = document.querySelector('#erase');

drawErase.addEventListener('click', () => {
    erase = !erase;
});

container.addEventListener('mouseover', (e) => {
    let target = e.target;
    if (erase) {
        if (target.getAttribute('id') != 'container') {
            target.style.backgroundColor = 'white';
        }
    } else {
        if (target.getAttribute('id') != 'container') {
            target.style.backgroundColor = 'black';
        }
    }
});

const gridBtn = document.querySelector('#btn');

gridBtn.addEventListener('click', () => {
    let val = prompt('Create a new grid! Enter a number:');
    if (val <= 100) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        makeGrid(val, val * val);
    }
});
