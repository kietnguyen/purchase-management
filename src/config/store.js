import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const configureStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(),
  );
};

export default configureStore;
