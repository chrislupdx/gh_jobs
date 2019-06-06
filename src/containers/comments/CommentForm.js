import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//can commentForm signal state change to the mapdispatch in createcomment
export default class CommentForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired
    }

    state = {
      comment: ''
    }

    handleSubmit = event => {
      event.preventDefault();

      const { comment } = this.state;
      const { id, onSubmit } = this.props;
      onSubmit(id, comment);
      //looks like ln22 clears comment, check its conditional
      console.log(id, comment, 'idcomment');
      this.setState({ comment: '' });
    }

    updateComment = ({ target }) => {
      this.setState({ comment: target.value });
    }

    render() {
      const { comment } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea value={comment} onChange= {this.updateComment}></textarea>
          <button>Submit</button>
        </form>
      );
    }
}
