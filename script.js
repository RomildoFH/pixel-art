/* eslint-disable no-param-reassign */
// Criando paleta de cores

const arrayCores = ['black', 'red', 'green', 'blue'];
const listaDeCores1 = [
  'Blue',
  'BlueViolet',
  'Brown',
  'CadetBlue',
  'Chartreuse',
  'Coral',
  'Chocolate',
];
const listaDeCores2 = ['Crimson', 'Cyan', 'DarkMagenta', 'DarkGreen', 'DarkOrange', 'FireBrick'];
const listaDeCores3 = ['Gold', 'Green', 'GreenYellow', 'Indigo', 'LightSalmon', 'Red'];
const pixelboardId = '#pixel-board';

// Tornando paleta de cores aleatórias, exceto o preto
function coresAleatórias() {
  for (let index = 1; index < arrayCores.length; index += 1) {
    arrayCores[1] = listaDeCores1[Math.floor(Math.random() * listaDeCores1.length)];
    arrayCores[2] = listaDeCores2[Math.floor(Math.random() * listaDeCores2.length)];
    arrayCores[3] = listaDeCores3[Math.floor(Math.random() * listaDeCores3.length)];
  }
  return (arrayCores);
}
coresAleatórias();

function criarCores(arrayCores) {
  const paletaDeCores = document.getElementById('color-palette');
  for (let index = 0; index < arrayCores.length; index += 1) {
    const cor = document.createElement('div');
    cor.className = 'color';
    cor.id = arrayCores[index];
    cor.style.backgroundColor = arrayCores[index];
    paletaDeCores.appendChild(cor);
  }
}
criarCores(arrayCores);

// Validando o input
let tamanhoBoardInicial = 20;
const boardSize = document.getElementById('board-size');
const btnVQV = document.getElementById('generate-board');
const btnRandom = document.getElementById('random');

function validateInput() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  tamanhoBoardInicial = boardSize.value;
  return (tamanhoBoardInicial);
}

function criarBoard() {
  const pixelBoard = document.querySelector(pixelboardId);
  pixelBoard.style.marginLeft = 'auto';
  pixelBoard.style.marginRight = 'auto';
  const boardWidth = 42 * tamanhoBoardInicial;
  const boardWidthString = `${boardWidth}px`;
  pixelBoard.style.width = boardWidthString;

  for (let line = 1; line <= tamanhoBoardInicial; line += 1) {
    for (let index2 = 1; index2 <= tamanhoBoardInicial; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixelBoard.appendChild(pixel);
    }
  }
}
criarBoard();

function removePixels() {
  const pixelBoard = document.querySelector(pixelboardId);

  // Código pesquisado em https://www.w3schools.com/jsref/met_node_removechild.asp
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

btnVQV.addEventListener('click', () => {
  validateInput();
  removePixels();
  criarBoard();
});

// Determinando o preto como cor inicial
function corInicial() {
  const black = document.getElementById('black');
  black.className = 'color selected';
}

// Criando função que selecione uma cor da paleta de cores
let corSelecionada = '';

function selecionaCor() {
  const paletaDeCores = document.getElementById('color-palette');

  paletaDeCores.addEventListener('click', (evento) => {
    const cores = document.getElementsByClassName('color');
    for (let index = 0; index < cores.length; index += 1) {
      cores[index].className = 'color';
    }
    corSelecionada = evento.target.style.backgroundColor;
    const elementoSelecionado = evento.target;
    elementoSelecionado.className = 'color selected';
  });
}

function paint() {
  const pixelBoard = document.querySelector(pixelboardId);
  pixelBoard.addEventListener('click', (evento) => {
    if (evento.target.style.backgroundColor !== corSelecionada
      && evento.target.id !== 'pixel-board') {
      evento.target.style.backgroundColor = corSelecionada;
    } else {
      evento.target.style.backgroundColor = 'white';
    }
  });
}

function resetBoard() {
  const btnClear = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  btnClear.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

btnRandom.addEventListener('click', () => {
  for (let index = 0; index < 4; index += 1) {
    const colorPallet = document.getElementById('color-palette');
    if (colorPallet.hasChildNodes()) {
      colorPallet.removeChild(colorPallet.children[0]);
    }
  }
  coresAleatórias();
  criarCores(arrayCores);
});

window.onload = function () {
  // alert('Olá');
  corInicial();
  selecionaCor();
  paint();
  resetBoard();
};
