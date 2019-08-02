import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DetailText } from '../../styles';

export default function kwJobapp({ kwJobapp }) {
  return (
    <section>
      <Link to ={`/${kwJobapp.id}`}>
        <DetailText>{kwJobapp.title}</DetailText>
      </Link>
      <DetailText>{kwJobapp.created_at}</DetailText>
      <DetailText>{kwJobapp.company}</DetailText>
      <DetailText>{kwJobapp.company_url}</DetailText>
    </section>
  );
}

kwJobapp.propTypes = {
  kwJobapp: PropTypes.object.isRequired
};
