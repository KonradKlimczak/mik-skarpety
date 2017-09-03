import '../node_modules/font-awesome/scss/font-awesome.scss';
import './global.scss';

import { categories } from './devData';
import { initSearch } from './searchInput';
import App from './App';
import * as Router from './Router';

App();

initSearch();

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');
const mikMenu = document.querySelector('.mik-menu');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'));

mikMenu.innerHTML = categories
  .map(category => `
  <li class="mik-menu-item" data-url="${category.url}">
    ${category.label}
  </li>
  `)
  .join('');

mikMenu.addEventListener('click', (e) => {
  if (!e.target.matches('li')) return; // skip this unless it's an input
  Router.Router
    .navigate(e.target.dataset.url);
});
