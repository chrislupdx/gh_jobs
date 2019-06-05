export const getJobsByIdState = state => state.jobsbyid;

export const getJobsByIdDetail = state => getJobsByIdState(state).jobapp;
export const getJobsByIdLoading = state => getJobsByIdState(state).loading;
export const getJobsByIdError = state => getJobsByIdState(state).error;
