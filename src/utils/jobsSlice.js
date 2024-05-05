import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: null,
    filteredjobList: null,
    viewjob : false
  },
  reducers: {
    addJob: (state, action) => {
      state.jobList = action.payload;
    },
    addFilteredJob: (state, action) => {
      state.filteredjobList = action.payload;
    },
    toggleViewJob : (state) => {
      state.viewjob = !state.viewjob;
    }
  },
});

export const { addJob , toggleViewJob, addFilteredJob} = jobsSlice.actions;

export default jobsSlice.reducer;
