import { combineReducers } from 'redux';
import pdxjobs from './pdxJobsReducer';
import jobsbyid from './idJobsReducer';
import comments from './commentReducer';

export default combineReducers({
  pdxjobs,
  jobsbyid,
  comments
});
