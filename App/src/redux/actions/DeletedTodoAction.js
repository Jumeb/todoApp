import {DELETE_TODO} from '../types';

export const DeletedTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};
