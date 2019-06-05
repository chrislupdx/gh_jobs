import React from 'react';
import PropTypes from 'prop-types';

export default function Jobapp({ jobapp }) {
  return (
    <section>
      <p>{jobapp.type}</p>

    </section>
  );
}


Jobapp.propTypes = {
  jobapp: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};
