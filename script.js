// Barra de Navegacion para Telefonos Movil
const bMore = document.querySelector('#bMore');
const links = document.querySelector('#links');

bMore.addEventListener("click", (e) => {
    links.classList.toggle('collapsed')
});