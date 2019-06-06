import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from './CommentForm';


//can this component recieve state+props from commentForm
const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(createComment({ id, comment }));
  }
})
;

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
;
