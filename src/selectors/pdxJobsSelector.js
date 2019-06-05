export const getGenPdxJobsState = state => state.genpdxJobs;
export const getGenPdxJobs = state => getGenPdxJobs(state).genpdxjobList;
export const getGenPdxJobsLoading = state => getGenPdxJobsState(state).loading;

