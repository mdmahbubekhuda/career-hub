import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);

  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setFilterJobs(jobsApplied);

      // alternate to filter
      // const jobsApplied = [];
      // for (const id of storedJobIds) {
      //   const job = jobs.find((job) => job.id === id);
      //   if (job) jobsApplied.push(job);
      // }
    }
  }, [jobs]);

  // filter jobs
  const handleJobsFilter = (filter) => {
    if (filter === "all") setFilterJobs(appliedJobs);
    if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilterJobs(remoteJobs);
    }

    if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilterJobs(onsiteJobs);
    }
  };
  return (
    <div>
      <h1 className="text-2xl">Applied Jobs {appliedJobs.length}</h1>
      {/* dropdown - filter */}
      <details className="dropdown mb-32">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {filterJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} : {job.company_name} : {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
