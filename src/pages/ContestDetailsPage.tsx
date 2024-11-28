import { useParams } from "react-router-dom";
import { useContests } from "../api/codeforcesApi";

const ContestDetailsPage = () => {
  const { contestId } = useParams<{ contestId: string }>();
  const { data, isLoading, isError, error } = useContests();

  const contest = data?.result.find(
    (contest) => contest.id === Number(contestId)
  );

  function convertToIST(startTimeSeconds: number) {
    const date = new Date(startTimeSeconds * 1000);
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-IN", options);
  }

  function convertToRelativeDays(startTimeSeconds: number) {
    const date = new Date(startTimeSeconds * 1000);
    const now = new Date();
    const diffTime = now.getTime() - date.getTime(); // Difference in milliseconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  const startTimeSeconds = contest?.startTimeSeconds;
  const diffDays = startTimeSeconds
    ? convertToRelativeDays(startTimeSeconds)
    : 0;

  return (
    <div>
      <h1>Contest Name: {contest?.name}</h1>
      <h1>Contest Details: {contestId}</h1>
      <p>Phase: {contest?.phase}</p>
      <p>Contest type: {contest?.type}</p>
      <p>
        Contest starts: {startTimeSeconds && convertToIST(startTimeSeconds)}
      </p>
      <p>
        {contest?.startTimeSeconds >= 0
          ? `Contest in ${Math.abs(diffDays)} days`
          : `${Math.abs(diffDays)} days ago`}
      </p>
    </div>
  );
};

export default ContestDetailsPage;
