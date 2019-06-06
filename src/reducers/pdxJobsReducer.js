import {
  FETCH_PDXJOBS,
  FETCH_PDXJOBS_LOADING,
  FETCH_PDXJOBS_ERROR
} from '../actions/genSearchActions';

const initialState = {
  loading: false,
  genPdxJobList: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PDXJOBS_LOADING:
      return { ...state, loading: true };
    case FETCH_PDXJOBS:
      return { ...state, error: null, loading: false, genPdxJobList: action.payload };
    case FETCH_PDXJOBS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
