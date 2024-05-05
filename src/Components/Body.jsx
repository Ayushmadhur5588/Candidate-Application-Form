import { useDispatch, useSelector } from "react-redux";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import "./Body.css";

const Body = () => {
  const jobs = useSelector((store) => store.jobs.jobList);
  const dispatch = useDispatch();

  useFetchJobData();

  if (jobs === null) {
    return "Loading";
  }

  return (
    <div>
      <div className="jobs-container flex-container">
        {jobs.map((job) => (
          <JobCard key={job.jdUid} data={job} />
        ))}
      </div>
    </div>
  );
};

export default Body;
