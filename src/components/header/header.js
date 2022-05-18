const btnWrapper = document.querySelector('#menu-btn');
const btn = document.querySelector('.hamburger-menu');

btnWrapper.addEventListener('click', () => {
  btn.classList.toggle('hamburger-menu--active')
})