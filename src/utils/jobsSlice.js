import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: [],
    filteredjobList: [],
    viewjob : false
  },
  reducers: {
    addJob: (state, action) => {
      state.jobList = [...state.jobList, ...action.payload]; // Append new data to existing list
    },
    addFilteredJob: (state, action) => {
      state.filteredjobList = action.payload;
    },
    addAllJob : (state, action) => {
      state.filteredjobList = [...state.filteredjobList, ...action.payload]; // Append new data to existing list
    },
    toggleViewJob : (state) => {
      state.viewjob = !state.viewjob;
    }
  },
});

export const { addJob , toggleViewJob, addFilteredJob, addAllJob} = jobsSlice.actions;

export default jobsSlice.reducer;
