import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchContainer from '../kwjobs/KWSearchContainer';

class KWContainer extends PureComponent {
  //rn just props for upload
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <section>
        <KWSearchContainer query={this.props.match.params.query } />
      </section>
    );
  }

}

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchJobByKW(props.match.params.kw));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(KWContainer);
