export const CREATECOMMENT = 'CREATECOMMENT';
export const createComment = ({ id, comment }) => ({
  type: 'CREATECOMMENT',
  payload: { id, comment }
})
;
