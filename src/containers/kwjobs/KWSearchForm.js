import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class KWSearchForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    }
    //what are we actually doing with query in state here

    //onsubmit takes query from props, so state is likely unneeded


    state = {
      query: ''
    }

    handleSubmit = event => {
      event.preventDefault();

      const { query } = this.state;
      const { onSubmit } = this.props;
      console.log(query, 'qunery');
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

