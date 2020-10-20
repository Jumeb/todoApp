import {ADD_TODO, EDIT_TODO} from '../types';

export const AddTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const EditTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
