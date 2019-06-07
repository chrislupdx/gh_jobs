import { 
  FETCH_JOBBYKW,
  FETCH_JOBBYKW_LOADING,
  FETCH_JOBBYKW_ERROR
} from '../actions/kwSearchActions';

const initialState = {
  loading: false,
  kwJobList: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_JOBBYKW_LOADING:
      return { ...state, loading: true };
    case FETCH_JOBBYKW:
      return { ...state, error: null, loading: true };
    case FETCH_JOBBYKW_ERROR:
      return { ...state, loading: false, error: action.payload };
  }
}
