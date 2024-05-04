const JobCard = (props) => {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minJdSalary,
    minExp,
    salaryCurrencyCode,
  } = props.data;

  console.log(props);
  return (
    <div className="job-card">
      <div className="img">
        <img className="logo" src={logoUrl} alt="logo" />

        <div className="job-container">
          <ul>
            <li>{companyName}</li>
            <li>{jobRole}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <div>
        <h6>Estimated Salary:</h6>
        <h3>About Company:</h3>
        <h4>About us</h4>
        <h4>Minimum Experience</h4>
        <h4>{minExp}</h4>
      </div>
      <button>Easy Apply</button>
    </div>
  );
};

export default JobCard;
