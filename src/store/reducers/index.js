import { combineReducers } from 'redux';
import {user} from './users';
import {todos} from './todos';

export default combineReducers({
  user, todos
})
