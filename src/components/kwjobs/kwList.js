import React from 'react';
import PropTypes from 'prop-types';
import Kwjobapp from './kwjobapp';

function kwList({ jobListings }) {
  const kwjobList = jobListings.map(kwapp => (
    <p key={kwapp.id}>
      <Kwjobapp kwJobapp={kwapp} />
    </p>
  ));

  return (
    <ul>
      {kwjobList}
    </ul>
  );
}

kwList.propTypes = {
  jobListings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};

export default kwList;
