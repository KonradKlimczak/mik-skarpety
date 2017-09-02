import '../node_modules/font-awesome/scss/font-awesome.scss';
import './global.scss';

const categories = ['Nowość', 'Best seller', 'Męskie', 'Damskie', 'Dziecięce']
const products = [{
  category: 'Męskie',
  name: 'Skarpety garniturowe'
}, {
  category: 'Męskie',
  name: 'Skarpety sportowe'
}, {
  category: 'Damskie',
  name: 'Skarpety w kwiaty'
}]


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

function findMatches(wordToMatch, ciproductsties) {
  return products.filter(product => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return product.category.match(regex) || product.name.match(regex)
  });
}

function displayMatches() {
  if (this.value === '') {
    suggestions.innerHTML = '';
    return;
  }
  const matchArray = findMatches(this.value, products);
  suggestions.innerHTML = matchArray
    .map(product => `
      <li>
        <span class="name">${product.name}</span>
      </li>
    `)
    .join('');
}
const searchInput = document.getElementById('search-offer');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
