import {DONE_TODO} from '../types';

const INITIAL_STATE = {doneLength: 0, doneList: []};

export default (state = INITIAL_STATE, action) => {
  let todo, todos;
  switch (action.type) {
    case DONE_TODO:
      todo = action.payload.todo;
      let index = state.doneList.findIndex(
        (doneTodo) => doneTodo.todo === todo,
      );
      if (index === -1) {
        todos = state.doneLength + 1;
        let tasks = [...state.doneList, action.payload];
        return {...state, todoLength: todos, doneList: tasks};
      }
      return state;
    default:
      return state;
  }
};
