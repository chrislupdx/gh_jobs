export const getGenPdxJobsState = state => state.genpdxJobs;
export const getGenPdxJobs = state => getGenPdxJobsState(state).genpdxjobList;
export const getGenPdxJobsLoading = state => getGenPdxJobsState(state).loading;
export const getGenPdxJobsError = state => getGenPdxJobsState(state).error;
