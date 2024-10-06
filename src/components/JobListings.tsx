import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import Spinner from "./Spinner";

type Job = {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

const JobCard = ({ job }: { job: Job }) => {
  const [expandDescription, setExpandDescription] = useState(false);

  let description = job.description;

  if (!expandDescription) {
    description = description.slice(0, 90) + "...";
  }

  return (
    <div className="relative bg-white shadow-md rounded-xl">
      <div className="p-4">
        <div className="mb-6">
          <div className="my-2 text-gray-600">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          className="mb-4 text-indigo-600 hover:text-indigo-600"
          onClick={() => setExpandDescription((prev) => !prev)}
        >
          {expandDescription ? "Less" : "More"}
        </button>

        <h3 className="mb-2 text-indigo-500">{job.salary} / Year</h3>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="mb-3 text-orange-700">
            <FaMapMarker className="inline mb-1 mr-1 text-lg" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const JobListings = ({ isHome = false }: { isHome?: boolean }) => {
  const [jobs, setJobs] = useState([] as Job[]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs list at render
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = `/api/jobs${isHome ? "?_limit=3" : ""}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching jobs data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Job list */}
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
