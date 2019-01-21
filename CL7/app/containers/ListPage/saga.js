import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_POSTS, SET_POSTS } from './constants';
import * as postsService from '../../api/PostService';

function* getPosts() {
  const result = yield call(postsService.get);
  yield put({
    type: SET_POSTS,
    posts: result.data,
  });
}

// Individual exports for testing
export default function* getPostsSaga() {
  yield takeEvery(GET_POSTS, getPosts);
}
