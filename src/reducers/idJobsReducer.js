import {
  FETCH_JOBBYID,
  FETCH_JOBBYID_LOADING,
} from '../actions/idSearchActions';

const initialState = {
  jobapp: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  // console.log(action.payload, 'idjobs');
  switch(action.type) {
    case FETCH_JOBBYID:
      return { ...initialState, jobapp: action.payload, loading: false };
    case FETCH_JOBBYID_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
