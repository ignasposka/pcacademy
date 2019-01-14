import { SET_DATA } from './constants';

const initialState = {
  list: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return action.list;
    default:
      return state;
  }
}
