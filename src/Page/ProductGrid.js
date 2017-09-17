import * as Product from './../Data/Product';
const content = document.querySelector('#content');

const state = {
  products: {
    kind: 'notAsked'
  }
};

const renderProducts = products => {
  const productGrid = document.createDocumentFragment();
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerText = product.name;

    productGrid.appendChild(productElement);
  });
  content.appendChild(productGrid);
};

export const render = () => {
  content.innerHTML = '';
  switch (state.products.kind) {
    case 'notAsked':
      state.products.kind = 'loading';
      Product
        .getProducts()
        .then(products => {
          state.products.kind = 'success';
          state.products.data = products;
          render();
        });
        content.innerHTML = 'Loading...';
      break;

      case 'success':
      renderProducts(state.products.data);
      break;

  }
};
