import {combineReducers} from 'redux';
import Todos from './TodoReducer';

export default combineReducers({
  tasks: Todos,
});
