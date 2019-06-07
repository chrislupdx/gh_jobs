export const getkwJobsState = state => state.kwswearch;

export const getKWJobsList = state => getkwJobsState(state).kwJobList;
export const getKWJobsLoading = state => getkwJobsState(state).loading;
export const getKWJobsError = state => getkwJobsState(state).error;
