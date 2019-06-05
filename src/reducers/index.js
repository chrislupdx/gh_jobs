import { combineReducers } from 'redux';
import pdxjobs from './pdxJobsReducer';
import jobsbyid from './idJobsReducer';

export default combineReducers({
  pdxjobs,
  jobsbyid
});
