import {DONE_TODO, REDO_TODO} from '../types';

export const DoneTodo = (done) => {
  return {
    type: DONE_TODO,
    payload: done,
  };
};

export const RedoTodo = (id) => {
  return {
    type: REDO_TODO,
    payload: id,
  };
};
