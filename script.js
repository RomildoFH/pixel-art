//Criando paleta de cores
let color1 = document.getElementById('black');
let arrayCores = ['black', 'red', 'green', 'blue'];

function criarCores (arrayCores) {
    let paletaDeCores = document.getElementById('color-palette');
    for(let index = 0; index < arrayCores.length; index ++) {
        let cor = document.createElement('div');
        cor.className = 'color';
        cor.id = arrayCores[index];
        cor.style.backgroundColor = arrayCores[index];
        paletaDeCores.appendChild(cor);
    }
}
criarCores (arrayCores);

let pixelContainer = document.querySelector('#pixel-container');
let tamanhoBoard = 5;
let pixelBoard = document.querySelector('#pixel-board');
// pixelBoard.style.backgroundColor = 'blue';
pixelBoard.style.marginLeft = 'auto';
pixelBoard.style.marginRight = 'auto';
let boardWidth = 42 * tamanhoBoard;
let boardWidthString = boardWidth + "px";
pixelBoard.style.width = boardWidthString;

for(var line = 1; line <= tamanhoBoard; line ++) {
    for (var index2 = 1; index2 <= tamanhoBoard; index2 ++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(pixel);
    }    
}

