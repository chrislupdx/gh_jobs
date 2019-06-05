import reducer from './pdxJobsReducer';
import { FETCH_PDXJOBS } from '../actions/genSearchActions';

describe('pdxJobsReducer', () => {
    
  it('handles the fetch jobs reducer ', () => {
    const initialState = {
      loading: false,
      genpdxjobList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_PDXJOBS,
      payload: ['one', 'two']
    });

    expect(newState).toEqual({
      loading: false,
      genpdxjobList: [],
      error: null
    });
  });


})
;
