import {DELETE_TODO} from '../types';

export const DeletedTodo = (id, todo) => {
  return {
    type: DELETE_TODO,
    payload: {id, todo},
  };
};
