import { JobTransformed } from "@/types/job";
import { useEffect, useState } from "react";

function useGetJobs() {
  const [jobs, setJobs] = useState<{ [key: string]: JobTransformed[] }>({});
  const [loading, setLoading] = useState(true);

  const getJobs = async (onlyActive = true) => {
    return (await fetch(`/api/jobs?only-active=${onlyActive}`)).json();
  };

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .finally(() => setLoading(false));
  }, []);

  return { jobs, loading, getJobs };
}

export default useGetJobs;
