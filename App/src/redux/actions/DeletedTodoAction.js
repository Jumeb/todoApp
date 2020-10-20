import {DELETE_TODO} from '../types';

export const DeletedTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
