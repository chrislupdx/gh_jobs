import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchForm from './KWSearchForm';


const mapDispatchToProps = (dispatch) => ({
  onSubmit(query) {
    dispatch(fetchJobByKW(query));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(KWSearchForm);

//if this is the parent container,  it can be used for props to do listings
//it'll need a mapstate for rendering jobs  
