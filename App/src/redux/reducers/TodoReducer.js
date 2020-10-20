import {ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, REDO_TODO} from '../types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let index, id, completed_on;
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO:
      id = action.payload.id;
      index = state.findIndex((editTodo) => editTodo.id === id);
      state.splice(index, 1, action.payload);
      return [...state];
    case DONE_TODO:
      id = action.payload.id;
      completed_on = action.payload.completed_on;
      index = state.findIndex((doneTodo) => doneTodo.id === id);
      state[index].completed = true;
      state[index].completed_on = completed_on;
      return [...state];
    case DELETE_TODO:
      id = action.payload;
      index = state.findIndex((deleteTodo) => deleteTodo.id === id);
      state.splice(index, 1);
      return [...state];
    case REDO_TODO:
      id = action.payload;
      index = state.findIndex((redoTodo) => redoTodo.id === id);
      state[index].completed = false;
      return [...state];
    default:
      return state;
  }
};
