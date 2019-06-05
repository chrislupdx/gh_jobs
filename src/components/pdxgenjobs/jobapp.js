import React from 'react';
import PropTypes from 'prop-types';

export default function Jobapp({ jobapp }) {
  return (
    <section>
      <p>{jobapp.title}</p>
      <p>{jobapp.created_at}</p>
      <p>{jobapp.company}</p>
      <p>{jobapp.company_url}</p>


    </section>
  );
}


Jobapp.propTypes = {
  jobapp: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};
