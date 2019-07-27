import React from 'react';
import PropTypes from 'prop-types';
import Jobapp from './jobapp';
import { list } from '../../styles';


function List({ jobapps }) {
  const jobappList = jobapps.map(app => (
    <li key={app.id}>
      <Jobapp jobapp={app} />
    </li>
  ));

  return (
    <ul className= "list">
      {jobappList}
    </ul>
  );
}

List.propTypes = {
  jobapps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};

export default List;
