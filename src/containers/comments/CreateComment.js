import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from './CommentForm';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    console.log(dispatch);
    dispatch(createComment(id, comment));
  }
})
;

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
;
