import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

//what're you doing with id here
function Comments({ comment }) {
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
};

export default Comments;
