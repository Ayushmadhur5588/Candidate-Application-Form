import { useSelector } from "react-redux";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import Filter from "./Filter";
import "../styles/joblist.css";

const JobList = () => {
  useFetchJobData();
  const filteredJobs = useSelector((store) => store.jobs.filteredjobList);

  return (
    <>
      <>
        <Filter />
      </>
      <div className="jobs-container flex-container">
        {filteredJobs.map((job) => (
          <JobCard key={job.jdUid} data={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
