import Jobs from "@/services/api/jobs";
import { JobsData, JobTransformed } from "@/types/job";
import { searchByCombinedTerms } from "@/utils/search";
import { useEffect, useState } from "react";

function useGetJobs() {
  const [jobs, setJobs] = useState<JobsData>({});
  const [filteredJobs, setFilteredJobs] = useState<JobsData>();
  const [filteredTerms, setFilteredTerms] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!filteredTerms) {
      setFilteredJobs(undefined);
      return;
    }

    const searchJobs = async (query: string) => {
      if (!query) return;

      const properties = [
        "type",
        "title",
        "location",
      ] as (keyof JobTransformed)[];
      const filteredData = searchByCombinedTerms(jobs, query, properties);
      setFilteredJobs(filteredData);
    };

    searchJobs(filteredTerms);
  }, [jobs, filteredTerms]);

  const getJobs = async (onlyActive = true) => {
    return Jobs.List(onlyActive).then((data) => data);
  };

  return {
    jobs,
    filteredJobs,
    loading,
    filteredTerms,
    setFilteredTerms,
    getJobs,
  };
}

export default useGetJobs;
