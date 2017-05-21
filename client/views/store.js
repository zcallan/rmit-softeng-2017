/* This file creates the Redux store, used to store the state of the application */

/* Import dependencies */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router-dom';
import reducers from './reducers';

/* Create the middleware for the store, which allows us to do things like log actions */
const middleware = applyMiddleware(
  routerMiddleware( browserHistory ),
  logger(),
  thunk
);

/* Create an export the store */
const store = createStore( reducers, middleware );
export default store;
