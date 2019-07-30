import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchForm from './KWSearchForm';


const mapDispatchToProps = (dispatch) => ({
  onSubmit(query, location) {
    // console.log(query, location, 'onsub');
    dispatch(fetchJobByKW(query, location));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(KWSearchForm);
