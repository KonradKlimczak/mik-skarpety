import '../node_modules/font-awesome/scss/font-awesome.scss';
import './global.scss';

import { categories } from './devData';
import { initSearch } from './searchInput';

initSearch();

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');
const mikMenu = document.querySelector('.mik-menu');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'));

mikMenu.innerHTML = categories
  .map(category => `
  <li class="mik-menu-item">
    ${category}
  </li>
  `)
  .join('');
