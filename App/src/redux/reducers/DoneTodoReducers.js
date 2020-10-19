import {DONE_TODO} from '../types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let id, todo;
  switch (action.type) {
    case DONE_TODO:
      id = action.payload.id;
      todo = action.payload.todo;
      let index = state.findIndex((doneTodo) => doneTodo.todo === todo);
      state.splice(index, 1, {id, todo});
      return state;
    default:
      return state;
  }
};
