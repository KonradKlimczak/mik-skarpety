import * as Router from '../Router';

import { categories } from '../devData';

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');
const mikMenu = document.querySelector('.mik-menu');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'));

export function render() {
  const menuItems = document.createDocumentFragment();
  categories.map(category => {
    const menuItem = document.createElement('li');
    menuItem.setAttribute('class', 'mik-menu-item');
    menuItem.setAttribute('data-url', category.url);
    menuItem.textContent = category.label;
    menuItems.appendChild(menuItem);
  });
  mikMenu.appendChild(menuItems);

  mikMenu.addEventListener('click', (e) => {
    if (!e.target.matches('li')) return;

    Router.Router.navigate(e.target.dataset.url);
  });
};
