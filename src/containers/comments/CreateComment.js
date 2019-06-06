import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from './CommentForm';


const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(createComment(id, comment));
  }
})
;

//links up mapdispatch+commentform
export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
;
