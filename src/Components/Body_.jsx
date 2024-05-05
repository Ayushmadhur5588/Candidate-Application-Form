import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredJob } from "../utils/jobsSlice";
import { useRef } from "react";
import useFetchJobData from "../hooks/useFetchJobData";
import JobCard from "./JobCard";
import "./Body.css";

const Bodyy = () => {
  useFetchJobData();
  const dispatch = useDispatch();
  const searchVal = useRef("");
  const [selectedRole, setSelectedRole] = useState(""); // State to store selected role

  const jobs = useSelector((store) => store.jobs.jobList);
  const filteredJobs = useSelector((store) => store.jobs.filteredjobList);

  const handleClick = () => {
    const filteredList = jobs.filter((job) =>
      job.companyName.toLowerCase().includes(searchVal.current.value.toLowerCase())
    );
    dispatch(addFilteredJob(filteredList));
  };

  // Function to handle changing selected role
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  // Function to filter jobs based on selected role
  const filterJobsByRole = () => {
    if (selectedRole) {
      const filteredList = jobs.filter((job) => job.jobRole.toLowerCase() === selectedRole.toLowerCase());
      dispatch(addFilteredJob(filteredList));
    }
  };

  return (
    <div>
      <div className="filters">
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">Select Role</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="founding">Founding</option>
          <option value="product manager">Product Manager</option>
          <option value="full stack">Full Stack</option>
          <option value="founding fullstack">Founding Fullstack</option>
          <option value="senior engineer">Senior Engineer</option>
        </select>
        <input ref={searchVal} type="text" placeholder="Search" />
        <button onClick={handleClick}>Search</button>
        <button onClick={filterJobsByRole}>Filter by Role</button>
      </div>
      <div className="jobs-container flex-container">
        {filteredJobs.map((job) => (
          <JobCard key={job.jdUid} data={job} />
        ))}
      </div>
    </div>
  );
};

export default Bodyy;
