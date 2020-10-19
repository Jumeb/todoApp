import {DELETE_TODO} from '../types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_TODO:
      const {id, todo} = action.payload;
      return [...state, {id, todo}];
    default:
      return state;
  }
};
