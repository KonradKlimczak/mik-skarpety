import { products } from './devData';

function findMatches(wordToMatch, products) {
  return products.filter(product => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return product.category.match(regex) || product.name.match(regex);
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
      <option>
        <span class="name">${product.name}</span>
      </option>
    `)
    .join('');
}
const searchInput = document.getElementById('search-offer');
const suggestions = document.getElementById('product-suggestions');


export const initSearch = () => {
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
};
