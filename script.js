window.onload = function () {
    let paletteFirstColor = document.querySelector('.color');
    paletteFirstColor.classList.add('selected');

}

const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');
const fourthButton = document.getElementById('fourth-button');

firstButton.style.backgroundColor = 'black';

//Exercício 12 - Bônus - Para a geração de cores aleatórias, foi feita uma busca no site dev.to. A melhor maneira para tal, conforme sugerido, é converter o numero de cores existentes menos um (16777215), multiplicado por um numero aleatorio entre 0 e 1, inteiro, para uma string hexadecimal, que representará uma cor. O número teto 16777215 foi escolhido pois ele retorna #ffffff (branco, ou seja, cor da ponta)

function generateColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

secondButton.style.backgroundColor = generateColor();
thirdButton.style.backgroundColor = generateColor();
fourthButton.style.backgroundColor = generateColor();

function changeClass (event) {
    const currentSelectedElement = document.querySelector('.selected');
    if (currentSelectedElement.id != event.target.id){
        currentSelectedElement.classList.remove('selected');
        event.target.classList.add('selected');
    }
}

firstButton.addEventListener('click', changeClass);
secondButton.addEventListener('click', changeClass);
thirdButton.addEventListener('click', changeClass);
fourthButton.addEventListener('click', changeClass);


let pixelBoard = document.querySelector('#pixel-board');

function colorePixel (event){
    let corSelecionada = document.querySelector('.selected');    
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
    let lineDivs = document.querySelectorAll('.lines');
    for (let j=0; j<lineDivs.length; j+=1){
        lineDivs[j].style.backgroundColor='whitesmoke';
    }
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

        if (boardSize<5){
            boardSize=5;
        } else if (boardSize>50){
            boardSize=50;
        }
        
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