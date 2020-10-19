import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../types';

export const AddTodo = (todo, date, createdOn) => {
  return {
    type: ADD_TODO,
    payload: {todo, date, createdOn},
  };
};

export const EditTodo = (todo, date, createdOn) => {
  return {
    type: EDIT_TODO,
    payload: {todo, date, createdOn},
  };
};
