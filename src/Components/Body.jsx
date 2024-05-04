import { useDispatch, useSelector } from "react-redux";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import Jobcard from "./JobCard";
const Body = () => {
  const jobs = useSelector((store) => store.jobs.jobList);

  useFetchJobData();

  if(jobs === null){
    return "Loading";
  }

  return (
    <div>
      <div className="job-container"></div>
      <h2>Hello</h2>
      {jobs.map((job) => (
        <JobCard key={job.jdUid} data={job} />
      ))}
    </div>
  );
};

export default Body;
