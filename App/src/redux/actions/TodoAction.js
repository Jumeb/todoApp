import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../types';

export const AddTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const EditTodo = (id, todo) => {
  return {
    type: EDIT_TODO,
    payload: {id, todo},
  };
};
