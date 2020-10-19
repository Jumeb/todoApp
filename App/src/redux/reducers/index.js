import {combineReducers} from 'redux';
import Todos from './TodoReducer';
import Deleted from './DeletedTodoReducers';
import Done from './DoneTodoReducers';

export default combineReducers({
  tasks: Todos,
  deleted: Deleted,
  done: Done,
});
