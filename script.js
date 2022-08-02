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
