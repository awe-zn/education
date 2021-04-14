const hambuguer = document.querySelector('.hamburguer');
const nav = document.querySelector('nav');

hambuguer.addEventListener('click', handleToggleHamburguer);

function handleToggleHamburguer({ target }) {
  target.classList.toggle('active');
  nav.classList.toggle('active');
}
