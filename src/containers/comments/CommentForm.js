import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormButton, CommentInput, CommentFormDiv } from '../../styles';
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
      this.setState({ comment: '' });
    }

    updateComment = ({ target }) => {
      this.setState({ comment: target.value });
    }

    render() {
      const { comment } = this.state;
      return (
        <CommentFormDiv onSubmit={this.handleSubmit}>
          <CommentInput value={comment} onChange= {this.updateComment}></CommentInput>
          <FormButton>Submit Comment</FormButton>
        </CommentFormDiv>  
      );
    }
}
