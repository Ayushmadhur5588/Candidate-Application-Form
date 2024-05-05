import { useState } from "react";
import Select from "react-select";
import "./filter.css";

const Filter = () => {
  const [val, setVal] = useState(null);
  console.log(val);
  const options = [
    { value: "frontend engineer", label: "Frontend Engineer" },
    { value: "backend engineer", label: "Backend Engineer" },
    { value: "fullstack engineer", label: "Fullstack Engineer" },
    { value: "product manager", label: "Product Manager" },
    { value: "senior engineer", label: "Senior Engineer" },
    { value: "android developer", label: "Android Developer" },
  ];

  return (
    <div className="filter-container">
      <div className="select-wrapper">
        <Select
          options={options}
          defaultValue={val}
          placeholder="Roles"
          onChange={setVal}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={options}
          defaultValue={val}
          placeholder="Number of Employees"
          onChange={setVal}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="exp-container">
        <Select
          options={options}
          defaultValue={val}
          placeholder="Experience"
          onChange={setVal}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="exp-container">
        <Select
          options={options}
          defaultValue={val}
          placeholder="Remote"
          onChange={setVal}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
      <div className="select-wrapper">
        <Select
          options={options}
          defaultValue={val}
          placeholder="Minimum Base Pay Salary"
          onChange={setVal}
          isMulti
          noOptionsMessage={() => "No Roles Found"}
          styles={{}}
        />
      </div>
    </div>
  );
};

export default Filter;
