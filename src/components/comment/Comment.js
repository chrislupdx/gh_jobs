import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <section>
      <p>{comment}</p>
    </section>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
