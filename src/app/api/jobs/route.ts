import { NextRequest, NextResponse } from "next/server";
import { capitalizeWords, formatLocation, specialCases } from "@/utils/format";
import { Job, JobTransformed } from "@/types/job";

export async function GET(req: NextRequest) {
  const apiUrl = "https://run.mocky.io";
  const result = await (
    await fetch(`${apiUrl}/v3/8fc51aca-478a-4802-945b-688855d78e36`)
  ).json();
  const jobs = result.jobs;

  const onlyActive = req.nextUrl.searchParams.get("only-active") === "true";

  const filteredJobs = onlyActive
    ? jobs.filter((job: Job) => job.is_active)
    : jobs;

  const groupedJobs: Record<string, JobTransformed[]> = {};

  filteredJobs.forEach((job: Job) => {
    const type = capitalizeWords(job.type);
    const titleWithLevel = job.title.replace("(", `${job.level} (`);

    if (!groupedJobs[type]) groupedJobs[type] = [];

    groupedJobs[type].push({
      type: type,
      title: specialCases(capitalizeWords(titleWithLevel)),
      location: job.location ? formatLocation(job.location) : "Remoto",
    });
  });

  return NextResponse.json(groupedJobs);
}
