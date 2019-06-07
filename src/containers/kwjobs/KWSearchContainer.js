import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchJobByKW } from '../../actions/kwSearchActions';
import KWSearchForm from './KWSearchForm';
import PropTypes from 'prop-types';

class KWSearchContainer extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired,
      match: PropTypes.object.isRequired,
      error: PropTypes.object
    }


    //kw is going to use match
    render() {
      return (
        <section>
          <KWSearchForm query={this.props.match.params.kw} />
        </section>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(query) {
    dispatch(fetchJobByKW({ query }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(KWSearchContainer);

//if this is the parent container,  it can be used for props to do listings
//it'll need a mapstate for rendering jobs  
