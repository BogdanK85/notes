import { nanoid } from 'nanoid';
import { ADD_TODO, DELETE_TODO } from './actionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      id: nanoid(),
      text,
    },
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
