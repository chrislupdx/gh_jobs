import reducer from './pdxJobsReducer';
import { FETCH_PDXJOBS, 
  FETCH_PDXJOBS_LOADING, 
  FETCH_PDXJOBS_ERROR } from '../actions/genSearchActions';

describe('pdxJobsReducer', () => {
    
  it('handles the fetch jobs reducer ', () => {
    const initialState = {
      loading: true,
      genPdxJobList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_PDXJOBS,
      payload: ['one', 'two']
    });

    expect(newState).toEqual({
      loading: false,
      genPdxJobList: ['one', 'two'],
      error: null
    });
  });

  it('handles the fetch jobs loading action', () => {
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

  it('handles the fetch jobs error actoin', () => {
    const initialState = {
      loading: true,
      genpdxjobList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_PDXJOBS_ERROR,
      payload: 'errrrr'
    });

    expect(newState).toEqual({
      loading: false,
      genpdxjobList: [],
      error: 'errrrr'
    });
  });


})
;
