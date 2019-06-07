import { getJobByKW } from '../service/ghApi';

export const FETCH_JOBBYKW = 'FETCH_JOBBYKW';
export const FETCH_JOBBYKW_LOADING = 'FETCH_JOBBYKW_LOADING';
export const FETCH_JOBBYKW_ERROR = 'FETCH_JOBBYKW_ERROR';

export const fetchJobByKW = query => ({
  type: FETCH_JOBBYKW,
  pendingType: FETCH_JOBBYKW_LOADING,
  payload: getJobByKW(query)
});
