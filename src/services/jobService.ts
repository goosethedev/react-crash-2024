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