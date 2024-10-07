import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import JobForm from "../components/JobForm";
import { addJob } from "../services/jobService";
import { Job } from "../utils/types";

const AddJobPage = () => {
  const navigate = useNavigate();

  const submitForm = (newJob: Job) => {
    addJob(newJob);
    toast.success("Job added successfully");
    navigate("/jobs");
  };

  return (
    <JobForm
      formTitle="Add a new job"
      submitLabel="Add Job"
      onSubmit={submitForm}
    />
  );
};

export default AddJobPage;
