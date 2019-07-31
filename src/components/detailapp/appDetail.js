import React from 'react';
import PropTypes from 'prop-types';
import { DetailSection, FormButton, DetailText } from '../../styles';

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
      <DetailSection>
        <DetailText>{title}</DetailText>
        <DetailText>{company}</DetailText>
        <DetailText dangerouslySetInnerHTML={ { __html: how_to_apply }}></DetailText>
        <DetailText>{created_at}</DetailText>
        <DetailText>{location}</DetailText>
        <DetailText>{type}</DetailText>
        <DetailText dangerouslySetInnerHTML={ { __html: description }}></DetailText>
      </DetailSection>
    </section>
  );
}

AppDetailView.propTypes = {
  jobapp : PropTypes.object.isRequired
};

export default AppDetailView;
