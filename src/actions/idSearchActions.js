import { getJobById } from '../service/ghApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchJobById,
  FETCH_JOBBYID,
  FETCH_JOBBYID_LOADING,
  _,
  FETCH_JOBBYID_ERROR,
] = createAction('FETCH_JOBBYID', (getJobById));
