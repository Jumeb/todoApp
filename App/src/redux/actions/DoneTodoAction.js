import {DONE_TODO} from '../types';

export const DoneTodo = (id, todo) => {
  console.log(todo, 'love this');
  return {
    type: DONE_TODO,
    payload: {id, todo},
  };
};
