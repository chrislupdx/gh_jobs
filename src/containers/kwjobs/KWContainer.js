import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchContainer from '../kwjobs/KWSearchContainer';
import KwList from '../../components/kwjobs/kwList';
import { getKWJobsList, getKWJobsLoading, getKWJobsError } from '../../selectors/kwSelector';
import { Loadingtext, FormButton } from '../../styles';
class KWContainer extends PureComponent {
  //rn just props for upload
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    error: PropTypes.object,
    kwJobList: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { kwJobList, loading } = this.props;
    if(loading) return <Loadingtext>Loading...</Loadingtext>;
    return (
      <section>
        <FormButton a href="/">Home</FormButton>
        <KWSearchContainer query={this.props.match.params.query } />
        <KwList jobListings = {kwJobList} />
      </section>
    );
  }

}

const mapStateToProps = state => ({
  kwJobList: getKWJobsList(state),
  loading: getKWJobsLoading(state),
  error: getKWJobsError(state)

});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchJobByKW(props.match.params.kw));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KWContainer);
