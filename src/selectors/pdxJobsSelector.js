export const getGenPdxJobsState = state => state.pdxjobs;

export const getGenPdxJobsList = state => getGenPdxJobsState(state).genPdxJobList;
export const getGenPdxJobsLoading = state => getGenPdxJobsState(state).loading;
export const getGenPdxJobsError = state => getGenPdxJobsState(state).error;
