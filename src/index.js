import '../node_modules/font-awesome/scss/font-awesome.scss';
import './global.scss';

const categories = ['Nowość', 'Best seller', 'Męskie', 'Damskie', 'Dziecięce']

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');
const mikMenu = document.querySelector('.mik-menu');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'))

mikMenu.innerHTML = categories
  .map(category => `
  <li class="mik-menu-item">
    ${category}
  </li>
  `)
  .join('');