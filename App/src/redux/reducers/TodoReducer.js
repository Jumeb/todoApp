import {ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO} from '../types';

const INITIAL_STATE = {todoLength: 0, taskList: []};

export default (state = INITIAL_STATE, action) => {
  let index, todo;
  switch (action.type) {
    case ADD_TODO:
      let todos = state.todoLength + 1;
      let tasks = [...state.taskList, action.payload];
      // console.log(state);
      return {...state, todoLength: todos, taskList: tasks};
    case EDIT_TODO:
      index = state.taskList.findIndex((editTodo) => editTodo.todo === todo);
      state.taskList.splice(index, 1, action.payload);
      // console.log(state);
      return state;
    case DONE_TODO:
      todo = action.payload;
      todos = state.todoLength - 1;
      index = state.taskList.findIndex((doneTodo) => doneTodo.todo === todo);
      state.taskList.splice(index, 1);
      console.log(state);
      return {...state, todoLength: todos};
    case DELETE_TODO:
      todo = action.payload;
      todos = state.todoLength - 1;
      index = state.taskList.findIndex((doneTodo) => doneTodo.todo === todo);
      state.taskList.splice(index, 1);
      console.log(state);
      return {...state, todoLength: todos};
    default:
      return state;
  }
};
