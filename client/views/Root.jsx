import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'views/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'views';
import { userAuthenticated } from 'views/user/user.actions';

/* Before the app starts put the auth information back into Redux if it exists */
if ( localStorage.getItem( 'auth' )) {
  const auth = JSON.parse( localStorage.getItem( 'auth' ));
  store.dispatch( userAuthenticated( auth ));
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
