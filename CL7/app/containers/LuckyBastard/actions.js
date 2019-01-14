import { SET_DATA } from './constants';

export default function setData(list) {
  return {
    type: SET_DATA,
    list,
  };
}
