window.onload = function () {
    let paletteFirstColor = document.querySelector('.color');
    paletteFirstColor.classList.add('selected');
}

const blackButton = document.getElementById('black');
const greenButton = document.getElementById('green');
const pinkButton = document.getElementById('pink');
const greyButton = document.getElementById('grey');


function changeClass (event) {
    const currentSelectedElement = document.querySelector('.selected');
    if (currentSelectedElement.id != event.target.id){
        currentSelectedElement.classList.remove('selected');
        event.target.classList.add('selected');
    }
}

blackButton.addEventListener('click', changeClass);
greenButton.addEventListener('click', changeClass);
pinkButton.addEventListener('click', changeClass);
greyButton.addEventListener('click', changeClass);

blackButton.style.backgroundColor = 'black';
greenButton.style.backgroundColor = 'green';
pinkButton.style.backgroundColor = 'pink';
greyButton.style.backgroundColor = 'grey';

let firstLine = document.querySelector('#first-line');
let secondLine = document.querySelector('#second-line');
let thirdLine = document.querySelector('#third-line');
let fourthLine = document.querySelector('#fourth-line');
let fifthLine = document.querySelector('#fifth-line');

function colorePixel (event){
    let corSelecionada = document.querySelector('.selected');    
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

firstLine.addEventListener('click', colorePixel);
secondLine.addEventListener('click', colorePixel);
thirdLine.addEventListener('click', colorePixel);
fourthLine.addEventListener('click', colorePixel);
fifthLine.addEventListener('click', colorePixel);