import { createComment, CREATECOMMENT } from './commentActions'
;

describe('post comment', () => {
  it('can add a comment', () => {
    expect(createComment('b638fa4c-ebb7-11e8-9ea5-6578f16a7b3f', 'a comment')).toEqual({
      type: CREATECOMMENT,
      payload: {
        id: 'b638fa4c-ebb7-11e8-9ea5-6578f16a7b3f',
        comment: 'a comment'
      }
    });
  });
})
;
