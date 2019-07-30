import React from 'react';
import PropTypes from 'prop-types';
import { DetailSection, FormButton } from '../../styles';

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
      <FormButton a href="/">Home</FormButton>
      <DetailSection>
        <p>{title}</p>
        <p>{company}</p>
        <p dangerouslySetInnerHTML={ { __html: how_to_apply }}></p>
        <p>{created_at}</p>
        <p>{location}</p>
        <p>{type}</p>
        <p dangerouslySetInnerHTML={ { __html: description }}></p>
      </DetailSection>
    </section>
  );
}

AppDetailView.propTypes = {
  jobapp : PropTypes.object.isRequired
};

export default AppDetailView;
