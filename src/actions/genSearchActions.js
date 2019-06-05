import { getGenPdxJobs } from '../service/ghApi';
import { createAction } from 'promise-middleware-redux';


export const [
  fetchPdxJobs,
  FETCH_PDXJOBS,
  FETCH_PDXJOBS_LOADING,
  _,
  FETCH_PDXJOBS_ERROR
] = createAction('FETCH_PDXJOBS', getGenPdxJobs);
