import { useState } from "react";
import Select from "react-select";
import "../styles/filter.css";
import { useSelector, useDispatch } from "react-redux";
import { addFilteredJob } from "../utils/jobsSlice";
import {
  role_options,
  num_of_emp_options,
  exp_options,
  remote_options,
  location_options,
  min_salary_options,
} from "../utils/constants";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [remoteFilter, setRemoteFilter] = useState([]);
  const [minExperienceFilter, setMinExperienceFilter] = useState([]);
  const [minSalaryFilter, setMinSalaryFilter] = useState([]);
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs.jobList);

  const handleClick = () => {
    const filteredList = jobs.filter((job) =>
      job.companyName.toLowerCase().includes(val.toLowerCase())
    );
    dispatch(addFilteredJob(filteredList));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleFilterChange = (selectedOptions) => {
    setSelectedFilters(selectedOptions);
    applyFilters(
      selectedOptions,
      locationFilter,
      remoteFilter,
      minExperienceFilter,
      minSalaryFilter
    );
  };

  const handleLocationFilter = (selectedOptions) => {
    setLocationFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      selectedOptions,
      remoteFilter,
      minExperienceFilter,
      minSalaryFilter
    );
  };

  const handleRemoteFilter = (selectedOptions) => {
    setRemoteFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      selectedOptions,
      minExperienceFilter,
      minSalaryFilter
    );
  };

  const handleMinExperienceFilter = (selectedOptions) => {
    setMinExperienceFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      remoteFilter,
      selectedOptions,
      minSalaryFilter
    );
  };

  const handleMinSalaryFilter = (selectedOptions) => {
    setMinSalaryFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      remoteFilter,
      minExperienceFilter,
      selectedOptions
    );
  };

  const applyFilters = (
    roleFilters,
    locationFilters,
    remoteFilters,
    minExperienceFilters,
    minSalaryFilters
  ) => {
    const filteredJobs = jobs.filter((job) => {
      const roleMatch = roleFilters.length
        ? roleFilters.some((option) =>
            job.jobRole.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      const locationMatch = locationFilters.length
        ? locationFilters.some((option) =>
            job.location.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      const remoteMatch = remoteFilters.length
        ? remoteFilters.some((option) =>
            job.location.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      const minExperienceMatch = minExperienceFilters.length
        ? minExperienceFilters.some((option) => {
            const minExperienceValue = parseInt(option.value);
            const jobMinExperience = parseFloat(job?.minExp);
            return jobMinExperience >= minExperienceValue;
          })
        : true;

      const minSalaryMatch = minSalaryFilters.length
        ? minSalaryFilters.some((option) => {
            const minSalaryValue = parseInt(option.value);
            const jobMinSalary = parseFloat(job?.minJdSalary);
            return jobMinSalary >= minSalaryValue;
          })
        : true;

      return (
        roleMatch &&
        locationMatch &&
        remoteMatch &&
        minExperienceMatch &&
        minSalaryMatch
      );
    });

    if (
      !roleFilters.length &&
      !locationFilters.length &&
      !remoteFilters.length &&
      !minExperienceFilters.length &&
      !minSalaryFilters.length
    ) {
      dispatch(addFilteredJob(jobs));
    } else {
      dispatch(addFilteredJob(filteredJobs));
    }
  };

  return (
    <div className="filter-container">
      <div className="select-wrapper">
        <Select
          options={role_options}
          defaultValue={selectedFilters}
          placeholder="Roles"
          onChange={handleFilterChange}
          isMulti
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={num_of_emp_options}
          defaultValue={selectedFilters}
          placeholder="Number of Employees"
          onChange={handleFilterChange}
          isMulti
        />
      </div>
      <div className="exp-container">
        <Select
          options={exp_options}
          defaultValue={selectedFilters}
          placeholder="Experience"
          onChange={handleMinExperienceFilter}
          isMulti
        />
      </div>
      <div className="exp-container">
        <Select
          options={remote_options}
          defaultValue={remoteFilter}
          placeholder="Remote"
          onChange={handleRemoteFilter}
          isMulti
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={location_options}
          defaultValue={locationFilter}
          placeholder="Location"
          onChange={handleLocationFilter}
          isMulti
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={min_salary_options}
          defaultValue={minSalaryFilter}
          placeholder="Minimum Base Pay Salary"
          onChange={handleMinSalaryFilter}
          isMulti
        />
      </div>
      <div className="search-box">
        <input
          className="search"
          type="text"
          placeholder="Search Company Name"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Filter;
