import counter from './counter';
import routes from './routes';
import { combineReducers } from 'redux';

export default combineReducers({
  routes,
  counter
});
