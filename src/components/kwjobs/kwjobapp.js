import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function kwJobapp({ kwJobapp }) {
  return (
    <section>
      <Link to ={`/${kwJobapp.id}`}>
        <p>{kwJobapp.title}</p>
      </Link>
      <p>{kwJobapp.created_at}</p>
      <p>{kwJobapp.company}</p>
      <p>{kwJobapp.company_url}</p>
    </section>
  );
}

kwJobapp.propTypes = {
  kwJobapp: PropTypes.object.isRequired
};
