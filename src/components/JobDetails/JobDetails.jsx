import { useLoaderData, useParams } from "react-router-dom";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();

  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    experiences,
    educational_requirements,
    job_title,
    contact_information,
    salary,
  } = job;

  const { address, email, phone } = contact_information;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Applied Successfully!");
  };

  return (
    <div className="grid grid-cols-5 gap-4 my-8 job-title">
      <div className="col-span-3">
        <p>
          <span>Job Description:</span> {job_description}
        </p>
        <p>
          <span>Job Responsibilities:</span> {job_responsibility}
        </p>
        <p>
          <span>Educational Requirements:</span>
          <br />
          {educational_requirements}
        </p>
        <p>
          <span>Experiences:</span> <br /> {experiences}
        </p>
      </div>
      <div className="col-span-2">
        <div className="bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a] p-4 space-y-4 rounded-md">
          <h1>Job Details</h1>
          <hr />
          <p>
            <span>Salary:</span>
            {salary}
          </p>
          <p>
            <span>Job Title:</span>
            {job_title}
          </p>
          <h1>Contact Information</h1>
          <hr />
          <p>
            <span>Phone:</span>
            {phone}
          </p>
          <p>
            <span>Email:</span>
            {email}
          </p>
          <p>
            <span>Address:</span>
            {address}
          </p>
        </div>
        <button
          onClick={handleApplyJob}
          className="btn btn-neutral w-full mt-4 rounded-md"
        >
          Apply Now
        </button>
      </div>
      {/* when wanna use everywhere place it in main.js */}
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
