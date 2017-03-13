import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router-dom';
import reducers from './reducers';


const middleware = applyMiddleware(
  routerMiddleware( browserHistory ),
  logger(),
  thunk
);
const store = createStore( reducers, middleware );


export default store;
