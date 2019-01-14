import { SET_DATA } from './constants';

export function setData(list) {
  return {
    type: SET_DATA,
    list,
  };
}
