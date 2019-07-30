import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Searchform, FormButton, Searchtextarea } from '../../styles';

export default class KWSearchForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    }

    state = {
      query: 'pick a keyword',
      location: 'pick a location'
    }

    handleSubmit = event => {
      event.preventDefault();

      const { query, location } = this.state;
      const { onSubmit } = this.props;
      onSubmit(query, location);
      this.setState({ query: '', location: '' });
    }

    updateKWSearch = ({ target }) => {
      this.setState({ query: target.value });
    }

    updateLocationSearch = ({ target }) => {
      this.setState({ location: target.value });
    }

    render() {
      const { query, location } = this.state;
      return (
        <Searchform onSubmit={this.handleSubmit}>
          <Searchtextarea value={query} onChange= {this.updateKWSearch}>
          </Searchtextarea>
          <Searchtextarea value={location} onChange={this.updateLocationSearch}>
          </Searchtextarea>
          <FormButton>search</FormButton>
        </Searchform>
      );
    }
}
