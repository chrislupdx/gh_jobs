import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJobById } from '../../actions/idSearchActions';
import {    
  getJobsByIdDetail,
  getJobsByIdLoading,
  getJobsByIdError
} from '../../selectors/jobsByIdSelector';
import AppDetailView from '../../components/detailapp/appDetail';
import CreateComment from '../comments/CreateComment';

class JobsByIdContainer extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      jobapp: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      error: PropTypes.object
    }

    componentDidMount() {
      this.props.fetch(this.props.id);
      console.log('didmount', this.props.id);
    }

    render() {
      const { jobapp, loading } = this.props;
      if(loading) return <h1>loading</h1>;

      return (
        <section>
          <AppDetailView jobapp={jobapp} />
          <CreateComment id={this.props.id} />
        </section>
      );
    }
}

const mapStateToProps = state => ({
  jobapp: getJobsByIdDetail(state),
  loading: getJobsByIdLoading(state),
  error: getJobsByIdError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchJobById(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsByIdContainer);
