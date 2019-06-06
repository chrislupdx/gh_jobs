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

  console.log(jobapp.description);
  return (
    <section>
      <p>{title}</p>
      <p>{company}</p>
      <p dangerouslySetInnerHTML={ { __html: how_to_apply }}></p>
      <p>{created_at}</p>
      <p>{location}</p>
      <p>{type}</p>
      <p dangerouslySetInnerHTML={ { __html: description }}></p>
    </section>
  );
}

AppDetailView.propTypes = {
  jobapp : PropTypes.object.isRequired
};

export default AppDetailView;
