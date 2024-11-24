const resltado = document.querySelector('.resultado')
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

resltado.innerHTML = `<h2>${score}/10</h2>`