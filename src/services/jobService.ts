import { Job } from "../utils/types";

export const addJob = async (job: Job) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(job)
  });
  return;
}

export const updateJob = async (job: Job) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(job)
  });
  return;
}

export const deleteJob = async (jobId: string) => {
  await fetch(`/api/jobs/${jobId}`, {
    method: "DELETE",
  })
  return;
}