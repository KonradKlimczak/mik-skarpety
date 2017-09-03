import * as Router from './Router';
import initMenu from './Page/Menu';


export default () => {
  initRouter();
  initMenu();
};

function initRouter() {
  // configuration
  Router.Router.config({ mode: 'history'});

  // returning the user to the initial state
  Router.Router.navigate();

  // adding routes
  Router.Router
    .add('new', function() {
      console.log('new socks');
    })
    .add('products/men', function() {
      console.log('men');
    })
    .listen();

  // forwarding
  Router.Router.navigate('/');
}

