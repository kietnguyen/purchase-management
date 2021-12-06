import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const configureStore = () => {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
