export interface CodeforcesContest {
  id: number;
  name: string;
  type: "CF" | "ICPC";
  phase: "BEFORE" | "CODING" | "FINISHED" | "PENDING_SYSTEM_TEST";
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any;
}

export interface CodeforcesApiResponse {
  status: "OK";
  result: CodeforcesContest[];
}

export interface CodeforcesApiError {
  status: string | number;
  comment: string;
}

export interface ContestFavorite {
  id: number;
  name: string;
}

export type CodeforcesApiResult = CodeforcesApiResponse | CodeforcesApiError;

export function isCodeforcesApiError(
  response: CodeforcesApiResult
): response is CodeforcesApiError {
  return (
    typeof response.status === "string" || typeof response.status === "number"
  );
}

export interface CodeforcesContestResponse {
  result: CodeforcesContest[];
}


export type UseContestsReturn = {
  data?: CodeforcesContestResponse;
  isLoading: boolean;
};
