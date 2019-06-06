import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJobById } from '../../actions/idSearchActions';
import {    
  getJobsByIdDetail,
  getJobsByIdLoading,
  getJobsByIdError
} from '../../selectors/jobsByIdSelector';

class JobsByIdContainer extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      jobapp: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.object
    }

    componentDidMount() {
      console.log(this.props.fetch);
      this.props.fetch();
    }

    render() {
      const { jobapp, loading } = this.props;
      if(loading) return <h1>loading</h1>;
      return <AppDetailView jobapp={jobapp} />;
    }
}

const mapStateToProps = state => ({
  jobapp: getJobsByIdDetail(state),
  loading: getJobsByIdLoading(state),
  error: getJobsByIdError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchJobById());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsByIdContainer);
