//Criando paleta de cores

let arrayCores = ['black', 'red', 'green', 'blue'];
let listaDeCores = ['Blue', 'BlueViolet', 'Brown', 'CadetBlue', 'Chartreuse', 'Coral', 'Chocolate', 'Crimson', 'Cyan', 'DarkMagenta', 'DarkGreen', 'DarkOrange', 'FireBrick', 'Gold', 'Green', 'GreenYellow', 'Indigo', 'LightSalmon', 'Red'];

//Tornando paleta de cores aleatórias, exceto o preto
function coresAleatórias () {
    for (let index = 1; index < arrayCores.length; index ++) {
        arrayCores[index] = listaDeCores[Math.floor(Math.random() * listaDeCores.length)];
    }
    return(arrayCores);
}
coresAleatórias ()

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

let tamanhoBoardInicial = 5;

function criarBoard (tamanhoBoardInicial) {
    let pixelContainer = document.querySelector('#pixel-container');
    

    let pixelBoard = document.querySelector('#pixel-board');
    // pixelBoard.style.backgroundColor = 'blue';
    pixelBoard.style.marginLeft = 'auto';
    pixelBoard.style.marginRight = 'auto';
    let boardWidth = 42 * tamanhoBoardInicial;
    let boardWidthString = boardWidth + "px";
    pixelBoard.style.width = boardWidthString;

    for(var line = 1; line <= tamanhoBoardInicial; line ++) {
        for (var index2 = 1; index2 <= tamanhoBoardInicial; index2 ++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            pixelBoard.appendChild(pixel);
        }    
    }
}
criarBoard (tamanhoBoardInicial)

//Determinando o preto como cor inicial
function corInicial () {
    let black = document.getElementById('black')
    black.className = 'color selected';
}

window.onload = function () {
    // alert('Olá');
    corInicial ();
    selecionaCor ();
    paint ();
}

//Criando função que selecione uma cor da paleta de cores

let corSelecionada = '';

function selecionaCor () {

    let paletaDeCores = document.getElementById('color-palette');

    paletaDeCores.addEventListener('click', function (evento) {
        let cores = document.getElementsByClassName('color');
        for (let index = 0; index < cores.length; index ++) {
            cores[index].className = 'color';
        }
        corSelecionada = evento.target.style.backgroundColor;
        // console.log(corSelecionada);
        let elementoSelecionado = evento.target;
        elementoSelecionado.className = 'color selected';
        // console.log(elementoSelecionado);
    });
}

function paint () {
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.addEventListener('click', function (evento) {
        if (evento.target.style.backgroundColor !== corSelecionada) {
        evento.target.style.backgroundColor = corSelecionada;
        } else {
            evento.target.style.backgroundColor = 'white';
        }
        // console.log(evento.target);        
    })
}

function resetBoard () {
    let btnClear = document.getElementById('clear-board');
    let pixels = document.getElementsByClassName('pixel');
    btnClear.addEventListener('click', function () {
        for(let index = 0; index < pixels.length; index ++) {
            pixels[index].style.backgroundColor = 'white';
            // pixelBg.style.backgroundColor = 'white';
            // console.log(pixelBg);
        }
    });
}
resetBoard ();


let boardSize = document.getElementById('board-size');
let boardSizeValue = "";
let btnVQV = document.getElementById('generate-board');
let pixels = document.getElementsByClassName('pixel');
let tamanhoBoard = tamanhoBoardInicial;
function validateInput (){
        boardSizeValue = boardSize.value;
        if (boardSize.value === "") {
            alert('Board inválido!');        
        } else if (boardSize.value > 50) {
            boardSize.value = 50;
        } else if (boardSize.value < 5) {
            boardSize.value = 5;
        } 
        tamanhoBoard = boardSize.value 
        console.log(boardSizeValue)       
        return(tamanhoBoard);        
}
btnVQV.addEventListener('click', validateInput)
