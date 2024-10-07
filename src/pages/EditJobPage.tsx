import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

import JobForm from "../components/JobForm";
import { Job } from "../utils/types";
import { updateJob } from "../services/jobService";

const EditJobPage = () => {
  const job = useLoaderData() as Job;
  const navigate = useNavigate();

  const goBack = () => {
    const confirm = window.confirm(
      "Are you sure you want to discard your changes?"
    );

    if (!confirm) return;

    navigate(`/jobs/${job.id}`);
  };

  const submitForm = (updatedJob: Job) => {
    updateJob(updatedJob);
    toast.success("Job updated successfully");
    navigate(`/jobs/${job.id}`);
  };
  return (
    <>
      <section>
        <div className="container px-6 py-6 m-auto">
          <a
            onClick={goBack}
            className="flex items-center text-indigo-500 hover:text-indigo-600"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Details
          </a>
        </div>
      </section>

      <JobForm
        job={job}
        formTitle="Edit job"
        submitLabel="Update Job"
        onSubmit={submitForm}
      />
    </>
  );
};

export default EditJobPage;
