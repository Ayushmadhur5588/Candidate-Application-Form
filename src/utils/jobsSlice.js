import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: null,
  },
  reducers: {
    addJob: (state, action) => {
      state.jobList = action.payload;
    },
  },
});

export const { addJob } = jobsSlice.actions;

export default jobsSlice.reducer;
