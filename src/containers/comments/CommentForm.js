import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired
    }

    state = {
      comment: ''
    }

    handlSubmit = event => {
      event.preventDefault();

      const { comment } = this.state;
      const { id, onSubmit } = this.props;
      onSubmit(id, comment);
      this.setState({ comment: '' });
    }

    updateComment = ({ target }) => {
      this.setState({ comment: target.value });
    }

    render() {
      const { comment } = this.state;
      return (
        <form onSubmit={this.handlSubmit}>
          <textarea value={comment} onChange= {this.updateComment}></textarea>
          <button>Submit</button>
        </form>
      );
    }
}
