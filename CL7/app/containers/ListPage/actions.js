/*
 *
 * ListPage actions
 *
 */

import { GET_POSTS, SET_POSTS } from './constants';

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  };
}
