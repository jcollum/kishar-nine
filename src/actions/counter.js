import * as types from './actionTypes';

export function increment() {
  alert('counter incr');
  return {
    type: types.increment
  };
}

export function decrement() {
  alert('counter decr');
  return {
    type: types.decrement
  };
}
