import { useState } from "react";
import Select from "react-select";
import "./filter.css";
import { useSelector, useDispatch } from "react-redux";
import { addFilteredJob } from "../utils/jobsSlice";
import {
  role_options,
  num_of_emp_options,
  exp_options,
  remote_options,
  location_options,
  min_salary_options, // Added min_salary_options import
} from "../utils/constants";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);
  const [remoteFilter, setRemoteFilter] = useState(null);
  const [minExperienceFilter, setMinExperienceFilter] = useState(null); // Added state for minimum experience filter
  const [minSalaryFilter, setMinSalaryFilter] = useState(null); // Added state for minimum salary filter
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs.jobList);

  const handleFilterChange = (selectedOptions) => {
    setSelectedFilters(selectedOptions);
    applyFilters(
      selectedOptions,
      locationFilter,
      remoteFilter,
      minExperienceFilter,
      minSalaryFilter
    ); // Updated to include minExperienceFilter and minSalaryFilter
  };

  const handleLocationFilter = (selectedOptions) => {
    setLocationFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      selectedOptions,
      remoteFilter,
      minExperienceFilter,
      minSalaryFilter
    ); // Updated to include minExperienceFilter and minSalaryFilter
  };

  const handleRemoteFilter = (selectedOptions) => {
    setRemoteFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      selectedOptions,
      minExperienceFilter,
      minSalaryFilter
    ); // Updated to include minExperienceFilter and minSalaryFilter
  };

  const handleMinExperienceFilter = (selectedOptions) => {
    setMinExperienceFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      remoteFilter,
      selectedOptions,
      minSalaryFilter
    ); // Updated to include minSalaryFilter
  };

  const handleMinSalaryFilter = (selectedOptions) => {
    setMinSalaryFilter(selectedOptions);
    applyFilters(
      selectedFilters,
      locationFilter,
      remoteFilter,
      minExperienceFilter,
      selectedOptions
    ); // Updated to include minExperienceFilter
  };

  const applyFilters = (
    roleFilters,
    locationFilters,
    remoteFilters,
    minExperienceFilters,
    minSalaryFilters
  ) => {
    // Filter jobs based on selected filters
    const filteredJobs = jobs.filter((job) => {
      // Check if any selected role matches the job's role
      const roleMatch = roleFilters
        ? roleFilters.some((option) =>
            job.jobRole.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      // Check if any selected location matches the job's location
      const locationMatch = locationFilters
        ? locationFilters.some((option) =>
            job.location.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      // Check if any selected remote matches the job's remote
      const remoteMatch = remoteFilters
        ? remoteFilters.some((option) =>
            job.location.toLowerCase().includes(option.value.toLowerCase())
          )
        : true;

      const minExperienceMatch = minExperienceFilters
        ? minExperienceFilters.some((option) => {
            const minExperienceValue = parseInt(option.value); // Parse the option value to integer
            const jobMinExperience = parseFloat(job?.minExp); // Parse the job's minimum experience to integer
            return jobMinExperience >= minExperienceValue; // Compare job's minimum experience with the selected minimum experience value
          })
        : true;

      // Check if any selected minimum salary matches the job's minimum salary
      const minSalaryMatch = minSalaryFilters
        ? minSalaryFilters.some((option) => {
            const minSalaryValue = parseInt(option.value); // Parse the option value to integer
            const jobMinSalary = parseFloat(job?.minJdSalary); // Parse the job's minimum salary to float
            return jobMinSalary >= minSalaryValue; // Compare job's minimum salary with the selected minimum salary value
          })
        : true;

      // Return true only if all filters match
      return (
        roleMatch &&
        locationMatch &&
        remoteMatch &&
        minExperienceMatch &&
        minSalaryMatch
      );
    });

    // Dispatch the filtered jobs
    dispatch(addFilteredJob(filteredJobs));
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
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={num_of_emp_options}
          defaultValue={selectedFilters}
          placeholder="Number of Employees"
          onChange={handleFilterChange}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="exp-container">
        <Select
          options={exp_options}
          defaultValue={selectedFilters}
          placeholder="Experience"
          onChange={handleMinExperienceFilter}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="exp-container">
        <Select
          options={remote_options}
          defaultValue={remoteFilter}
          placeholder="Remote"
          onChange={handleRemoteFilter}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={location_options}
          defaultValue={locationFilter}
          placeholder="Location"
          onChange={handleLocationFilter}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={min_salary_options}
          defaultValue={minSalaryFilter}
          placeholder="Minimum Base Pay Salary"
          onChange={handleMinSalaryFilter}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
    </div>
  );
};

export default Filter;
