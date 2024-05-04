import { useDispatch, useSelector } from "react-redux";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import "./Body.css";

const Body = () => {
  const jobs = useSelector((store) => store.jobs.jobList);

  useFetchJobData();

  if (jobs === null) {
    return "Loading";
  }

  return (
    <div>
      <div className="job-container flex-container">
        {/*jobs.map((job) => (
          <JobCard key={job.jdUid} data={job} />
        ))*/}
        <JobCard data={jobs[0]}/>
      </div>
    </div>
  );
};

export default Body;
