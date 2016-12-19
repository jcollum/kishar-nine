import * as types from './actionTypes';

export function increment() {
  return {
    type: types.increment
  };
}

export function decrement() {
  return {
    type: types.decrement
  };
}
