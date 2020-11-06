import {ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, REDO_TODO} from '../types';
import {storeData} from '../../utils/storage';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let index, id, completed_on, todos;
  switch (action.type) {
    case ADD_TODO:
      todos = action.payload;
      console.log(todos);
      if (todos.length === undefined) {
        state.push(todos);
        storeData('Todos', state);
        return [...state];
      }
      state.push(...todos);
      storeData('Todos', state);
      return [...state];
    case EDIT_TODO:
      id = action.payload.id;
      index = state.findIndex((editTodo) => editTodo.id === id);
      state.splice(index, 1, action.payload);
      storeData('Todos', state);
      return [...state];
    case DONE_TODO:
      id = action.payload.id;
      completed_on = action.payload.completed_on;
      index = state.findIndex((doneTodo) => doneTodo.id === id);
      state[index].completed = true;
      state[index].completed_on = completed_on;
      storeData('Todos', state);
      return [...state];
    case DELETE_TODO:
      id = action.payload;
      index = state.findIndex((deleteTodo) => deleteTodo.id === id);
      state.splice(index, 1);
      storeData('Todos', state);
      return [...state];
    case REDO_TODO:
      id = action.payload;
      index = state.findIndex((redoTodo) => redoTodo.id === id);
      state[index].completed = false;
      storeData('Todos', state);
      return [...state];
    default:
      return state;
  }
};
