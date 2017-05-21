/**
 * This file is the entry point to the application, it imports all of the core
 * dependencies required to load the application and renders the top level
 * component on the users screen
 */

 /* Import all the dependencies */
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'views/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'views';
import { userAuthenticated } from 'views/user/user.actions';
import API from 'utils/api/api.js';

/* Before the app starts put the auth information back into Redux if it exists */
if ( localStorage.getItem( 'auth' )) {
  const auth = JSON.parse( localStorage.getItem( 'auth' ));
  API.setToken( auth.token );
  store.dispatch( userAuthenticated( auth ));
}

/* Render the application onto the screen */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
