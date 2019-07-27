import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Jobapp({ jobapp }) {
  return (
    <section>
      <Link to={`/${jobapp.id}`}> 
        <p>{jobapp.title}</p>
      </Link>
      <p>{jobapp.created_at}</p>
      <p>{jobapp.company}</p>
      <p>{jobapp.company_url}</p>

    </section>
  );
}


Jobapp.propTypes = {
  jobapp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired
};
