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
import CommentListContainer from '../../containers/comments/CommentListContainer';
import { Loadingtext } from '../../styles';
import KWSearchContainer from '../kwjobs/KWSearchContainer';

class JobsByIdContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    jobapp: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    // id: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { jobapp, loading } = this.props;
    if(loading) return <Loadingtext>Loading...</Loadingtext>;
    return (
      <section>
        <KWSearchContainer query={this.props.match.params.query } />
        <AppDetailView jobapp={jobapp} />
        <CreateComment id={this.props.match.params.id} />
        <CommentListContainer id={this.props.match.params.id} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  jobapp: getJobsByIdDetail(state),
  loading: getJobsByIdLoading(state),
  error: getJobsByIdError(state),
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
