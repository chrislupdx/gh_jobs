import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import Comments from '../../components/comment/Comments';


const mapStateToProps = (state, { id }) => ({
  comment: getComments(state, id)
});

export default connect(
  mapStateToProps,
  null,
)(Comments);

