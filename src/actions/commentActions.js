// import { createAction } from 'promise-middleware-redux';
// import fetchComment from './returnCommentFrmState';

// export const [
//   createComment,
//   CREATECOMMENT,
//   CREATECOMMENT_LOADING,
//   _,
//   CREATECOMMENT_ERROR
// ] = createAction('CREATECOMENT', createComment)
// ;

// export const CREATECOMMENT = 'CREATECOMMENT';
// export const CREATECOMMENT_LOADING = 'CREATECOMMENT_LOADING';

// export const createComment = (id, comment) => ({
//   type: CREATECOMMENT,
//   pendingType: CREATECOMMENT_LOADING,
// payload: { id, comment }
// })
// ;

export const CREATECOMMENT = 'CREATECOMMENT';
export const createComment = (id, comment) => ({
  type: 'CREATECOMMENT',
  payload: { id, comment }
})
;
