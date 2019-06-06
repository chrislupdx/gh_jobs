import { createAction } from 'promise-middleware-redux';
import fetchComment from './returnCommentFrmState';

export const [
  createComment,
  CREATECOMMENT,
  CREATECOMMENT_LOADING,
  _,
  CREATECOMMENT_ERROR
] = createAction('CREATECOMENT', fetchComment)
;
