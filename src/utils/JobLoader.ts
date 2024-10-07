import { LoaderFunction } from "react-router-dom";
import { Job } from "./types";

export const jobLoader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  return (await res.json()) as Job;
};