import { combineReducers } from 'redux';
import purchase from './purchase';
import purchases from './purchases';

export default combineReducers({
  purchase,
  purchases,
});
