import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenPdxJobs, getGenPdxJobsLoading, getGenPdxJobsError } from '../../selectors/pdxJobsSelector';
import { fetchPdxJobs } from '../../actions/genSearchActions';
import List from '../../components/pdxgenjobs/list';

class PdxGenJobList extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pdxgenjobs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { pdxgenjobs, loading } = this.props;
    if(loading) return <h1>loading</h1>;
    return <List jobapps ={pdxgenjobs} />;
  }
}

const mapStateToProps = state => ({
  pdxgenjobs: getGenPdxJobs(state),
  loading: getGenPdxJobsLoading(state),
  error: getGenPdxJobsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPdxJobs);
  }
});

// export default PdxGenJobList;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PdxGenJobList);
