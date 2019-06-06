import {
  fetchJobByKW,
  FETCH_JOBBYKW,
  FETCH_JOBBYKW_LOADING,
} from './kwSearchActions';

jest.mock('../service/ghApi.js');

describe('kw actions', () => {
  it('fetches a list of quotes then dispatches an action', () => {
    expect(fetchJobByKW()).toEqual({
      type: FETCH_JOBBYKW,
      pendingType: FETCH_JOBBYKW_LOADING,
      payload: expect.any(Promise)
    }); 
  });

});
