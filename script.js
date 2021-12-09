window.onload = function () {
    let paletteFirstColor = document.querySelector('.color');
    paletteFirstColor.classList.add('selected');

}

const blackButton = document.getElementById('black');
const greenButton = document.getElementById('green');
const pinkButton = document.getElementById('pink');
const greyButton = document.getElementById('grey');

blackButton.style.backgroundColor = 'black';
greenButton.style.backgroundColor = 'green';
pinkButton.style.backgroundColor = 'pink';
greyButton.style.backgroundColor = 'grey';

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


let pixelBoard = document.querySelector('#pixel-board');

function colorePixel (event){
    let corSelecionada = document.querySelector('.selected');    
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

pixelBoard.addEventListener('click', colorePixel);

let clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', function(){
    let allPixels = document.getElementsByClassName('pixel');
    for (let i=0; i<allPixels.length; i+=1){
        allPixels[i].style.backgroundColor='white';
    }
})

let boardGenerator = document.querySelector('#generate-board');
let inputSize = document.querySelector('#board-size')

function generateBoard () {
    if (inputSize.value==''){
        window.alert('Board inválido!');
    } else {
        removeBoard();
        
        let boardSize = inputSize.value;
        
        for (let countLines = 0; countLines<boardSize; countLines+=1){
            let newLine = document.createElement('div');
            newLine.className='lines';
            pixelBoard.appendChild(newLine);
        }
        let allLines = document.querySelectorAll('.lines');
        for (let runLines = 0; runLines<allLines.length; runLines+=1){
            for (let countPixels = 0; countPixels<boardSize; countPixels+=1){
                let newPixel = document.createElement('div');
                newPixel.className='pixel';
                allLines[runLines].appendChild(newPixel);
            }
        }
    } 
}

function removeBoard() {
    for (let indice=pixelBoard.childNodes.length-1; indice>=0; indice-=1){
        let filhoAtual = pixelBoard.childNodes[indice];
        filhoAtual.remove();
    }
}

boardGenerator.addEventListener('click', generateBoard);