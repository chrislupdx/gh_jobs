import React from 'react';
import PropTypes from 'prop-types';
import { CommentText } from '../../styles';
function Comment({ comment }) {
  return (
    <section>
      <CommentText>{comment}</CommentText>
    </section>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
