import '../node_modules/font-awesome/scss/font-awesome.scss';
import './global.scss';

const navbar = document.querySelector('.mik-navbar');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => navbar.classList.toggle('is-active'))
