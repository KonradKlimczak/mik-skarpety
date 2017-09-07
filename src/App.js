import * as Router from './Router';
import * as Menu from './Page/Menu';
import * as Main from './Page/Main';


export default () => {
  initRouter();
  Menu.render();
};

function initRouter() {
  // configuration
  Router.Router.config({ mode: 'history'});

  // returning the user to the initial state
  Router.Router.navigate();

  // adding routes
  Router.Router
    .add('new', function() {
      Main.render();
    })
    .add('products/men', function() {
      console.log('men');
    })
    .listen();

  // forwarding
  Router.Router.navigate('/');
}

