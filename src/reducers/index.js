import { combineReducers } from 'redux';
import pdxjobs from './pdxJobsReducer';
import jobsbyid from './idJobsReducer';
import comments from './commentReducer';
import kwswearch from './searchKwReducer';

export default combineReducers({
  pdxjobs,
  jobsbyid,
  comments,
  kwswearch
});
