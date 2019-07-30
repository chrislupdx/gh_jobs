import { combineReducers } from 'redux';
import jobsbyid from './idJobsReducer';
import comments from './commentReducer';
import kwswearch from './searchKwReducer';

export default combineReducers({
  jobsbyid,
  comments,
  kwswearch
});
