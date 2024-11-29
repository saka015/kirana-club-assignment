export interface CodeforcesContest {
  id: number;
  name: string;
  type: "CF" | "ICPC";
  phase: "BEFORE" | "CODING" | "FINISHED" | "PENDING_SYSTEM_TEST";
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
  result: string | undefined | null;
}

export interface CodeforcesApiResponse {
  status: "OK";
  result: CodeforcesContest[];
}

export interface CodeforcesApiError {
  status: string | number;
  comment: string;
}

export type CodeforcesApiResult = CodeforcesApiResponse | CodeforcesApiError;

// Optional: Add a type guard to check if the response is an error
export function isCodeforcesApiError(response: CodeforcesApiResult): response is CodeforcesApiError {
  return typeof response.status === 'string' || typeof response.status === 'number';
}
