/*
 *
 * ListPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_POSTS } from './constants';

export const initialState = fromJS({
  posts: [],
});

function listPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return state.set('posts', action.posts);
    default:
      return state;
  }
}

export default listPageReducer;
