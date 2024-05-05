import { useDispatch, useSelector } from "react-redux";
import { addFilteredJob } from "../utils/jobsSlice";
import { useRef } from "react";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import "./Body.css";
import Filter from "./Filter";

const Body = () => {
  useFetchJobData();
  const dispatch = useDispatch();
  const searchVal = useRef("");

  const filteredJobs = useSelector((store) => store.jobs.filteredjobList);

  if (filteredJobs === null) {
    return "Loading";
  }

  const handleClick = () => {
    console.log(searchVal);
    const filteredList = jobs.filter((job) =>
      job.companyName
        .toLowerCase()
        .includes(searchVal.current.value.toLowerCase())
    );
    dispatch(addFilteredJob(filteredList));
  };

  return (
    <div>
      <div className="filters">
        <Filter />
        {/*<input ref={searchVal} type="text" placeholder="search" />
        <button onClick={handleClick}>Search</button>*/}
      </div>
      <div className="jobs-container flex-container">
        {filteredJobs.map((job) => (
          <JobCard key={job.jdUid} data={job} />
        ))}
      </div>
    </div>
  );
};

export default Body;
