import * as Router from '../Router';

import { categories } from '../devData';

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');
const mikMenu = document.querySelector('.mik-menu');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'));

export default () => {
  categories.map(category => {
    const menuItem = document.createElement('li');
    menuItem.setAttribute('class', 'mik-menu-item');
    menuItem.setAttribute('data-url', category.url);
    menuItem.textContent = category.label;
    mikMenu.appendChild(menuItem);
  });

  mikMenu.addEventListener('click', (e) => {
    if (!e.target.matches('li')) return; // skip this unless it's an input
    Router.Router
      .navigate(e.target.dataset.url);
  });
};


