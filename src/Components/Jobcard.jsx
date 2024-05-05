import { useDispatch, useSelector } from "react-redux";
import { toggleViewJob } from "../utils/jobsSlice";

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

  const dispatch = useDispatch();
  const viewJob = useSelector((store) => store.jobs?.viewjob);
  const handleClick = () => {
    dispatch(toggleViewJob());
  };

  return (
    <div className="job-card">
      <div className="img">
        <img className="logo" src={logoUrl} alt="logo" />
        <div className="job-container">
          <ul>
            <li className="company-name">{companyName}</li>
            <li className="job-role">{jobRole}</li>
            <li className="location">{location}</li>
          </ul>
        </div>
      </div>
      <div>
        <h6 className="estimated-salary">Estimated Salary:</h6>
        <h3 className="about-company">About Company:</h3>
        <h4 className="about-us">About us</h4>
        <div className={`paragraph-container ${viewJob ? "full-content" : ""}`}>
          <p className="job-details">{jobDetailsFromCompany}</p>
        </div>
        <div className="btn-container">
          <button className="view-btn" onClick={handleClick}>{viewJob ? 'Show Less' : 'Show More'}</button>
        </div>
        <h4 className="min-exp">Minimum Experience</h4>
        <h4 className="min-expval">{minExp} years</h4>
        <button className="easy-apply">⚡️ Easy Apply</button>
        <button className="unlock-btn">⚡️ Unlock Referral Asks</button>
      </div>
    </div>
  );
};

export default JobCard;
