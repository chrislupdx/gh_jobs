import React from 'react';
import PropTypes from 'prop-types';

function AppDetailView({ jobapp }) {
  const {
    type,
    created_at,
    company,
    location,
    title,
    description,
    how_to_apply
  } = jobapp;

  return (
    <section>
      <p>{title}</p>
      <p>{company}</p>
      <p>{created_at}</p>
      <p>{how_to_apply}</p>
      <p>{location}</p>
      <p>{type}</p>
      <p>{description}</p>
    </section>
  );
}

AppDetailView.propTypes = {
  jobapp : PropTypes.object.isRequired
};

export default AppDetailView;
