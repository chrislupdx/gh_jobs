import reducer from './pdxJobsReducer';
import { FETCH_PDXJOBS, FETCH_PDXJOBS_LOADING } from '../actions/genSearchActions';

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
      genpdxjobList: ['one', 'two'],
      error: null
    });
  });

  it('handles the fetch pokemons loading action', () => {
    const initialState = {
      loading: false,
      genpdxjobList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_PDXJOBS_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      genpdxjobList: [],
      error: null
    });

   
  });

})
;
