import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comment, id }) {
  if(!comment) return null;
  const commentList = comment.map((comment, i) => (
    <li key={i}>
      <Comment id={i} comment={comment} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired
};

export default Comments;
