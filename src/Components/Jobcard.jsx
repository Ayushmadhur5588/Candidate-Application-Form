import "../styles/jobcard.css";
const JobCard = ({ data }) => {
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
  } = data;

  return (
    <div className="job-card">
      <div className="img">
        <a href={logoUrl} target="_blank" rel="noopener noreferrer">
          <img className="logo" src={logoUrl} alt="logo" />
        </a>

        <div className="job-container">
          <ul>
            <li className="company-name">{companyName}</li>
            <li className="job-role">{jobRole}</li>
            <li className="location">{location}</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="estimated-salary">
          Estimated Salary:
          {minJdSalary && !maxJdSalary && ` ₹${minJdSalary} LPA`}
          {!minJdSalary && maxJdSalary && ` ₹${maxJdSalary} LPA`}
          {minJdSalary &&
            maxJdSalary &&
            ` ₹${minJdSalary} - ${maxJdSalary} LPA`}
          {!minJdSalary && !maxJdSalary && "N/A"}
          {minJdSalary && maxJdSalary && " ✅"}
        </p>

        <h3 className="about-company">About Company:</h3>
        <h4 className="about-us">About us</h4>

        <div className={"paragraph-container"}>
          <p className="job-details">{jobDetailsFromCompany}</p>
        </div>
        <div className="btn-container">
          <a href={jdLink}>
            <button
              className="view-btn"
              onClick={() => {
                window.location.href = { jdLink };
              }}
            >
              View Job
            </button>
          </a>
        </div>

        <h4 className="min-exp">Minimum Experience</h4>
        <h4 className="min-expval">
          {minExp !== null ? `${minExp} years` : "\u00A0"}
        </h4>
        <button className="easy-apply">⚡️ Easy Apply</button>
        <button className="unlock-btn">⚡️ Unlock Referral Asks</button>
      </div>
    </div>
  );
};

export default JobCard;
