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