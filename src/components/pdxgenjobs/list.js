import React from 'react';
import PropTypes from 'prop-types';
import Jobapp from './jobapp';

function List({ jobapps }) {
  const jobappList = jobapps.map(app => (
    <li key={app.id}>
      <Jobapp jobapp={app} />
    </li>
  ));

  return (
    <ul>
      {jobappList}
    </ul>
  );
}

List.propTypes = {
  jobapps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default List;
