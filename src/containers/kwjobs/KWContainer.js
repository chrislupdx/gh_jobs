import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchContainer from '../kwjobs/KWSearchContainer';

class KWContainer extends PureComponent {
  //rn just props for upload
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      error: PropTypes.object.isRequired
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
