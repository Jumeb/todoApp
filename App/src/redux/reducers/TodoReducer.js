import {ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO} from '../types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let id = state.length + 1;
  let index, todo;
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: id, todo: action.payload}];
    case EDIT_TODO:
      id = action.payload.id;
      todo = action.payload.todo;
      index = state.findIndex((editTodo) => editTodo.id === id);
      state.splice(index, 1, {id, todo});
      return state;
    case DONE_TODO:
      id = action.payload.id;
      todo = action.payload.todo;
      index = state.findIndex((doneTodo) => doneTodo.todo === todo);
      state.splice(index - 1, 1);
      return state;
    case DELETE_TODO:
      todo = action.payload;
      index = state.findIndex((deleteTodo) => deleteTodo.todo === todo);
      state.splice(index - 1, 1);
      return state;
    default:
      return state;
  }
};
