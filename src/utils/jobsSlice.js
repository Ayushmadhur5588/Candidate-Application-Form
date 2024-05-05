import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: null,
    viewjob : false
  },
  reducers: {
    addJob: (state, action) => {
      state.jobList = action.payload;
    },
    toggleViewJob : (state) => {
      state.viewjob = !state.viewjob;
    }
  },
});

export const { addJob , toggleViewJob} = jobsSlice.actions;

export default jobsSlice.reducer;
