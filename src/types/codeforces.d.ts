export interface CodeforcesContest {
  id: number;
  name: string;
  type: "CF" | "ICPC";
  phase: "BEFORE" | "CODING" | "FINISHED" | "PENDING_SYSTEM_TEST";
  frozen: boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
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
