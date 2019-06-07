import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class KWSearchForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
      query: PropTypes.string.isRequired
    }

    state = {
      query: ''
    }

    handleSubmit = event => {
      event.preventDefault();

      const { query } = this.state;
      const { onSubmit } = this.props;
      onSubmit(query);
      this.setState({ query: '' });
    }

    updateKWSearch = ({ target }) => {
      this.setState({ query: target.value });
    } 

    render() {
      const { query } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea value={query} onChange= {this.updateKWSearch}>
          </textarea>
          <button>search for another listing</button>
        </form>
      );
    }
}

