import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 my-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center my-8">
        <button
          onClick={() =>
            jobs.length > dataLength
              ? setDataLength(jobs.length)
              : setDataLength(4)
          }
          className="btn btn-neutral"
        >
          {dataLength === jobs.length ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
