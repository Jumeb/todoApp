import {DONE_TODO} from '../types';

export const DoneTodo = (todo, date, createdOn, completedOn) => {
  return {
    type: DONE_TODO,
    payload: {todo, date, createdOn, completedOn},
  };
};
