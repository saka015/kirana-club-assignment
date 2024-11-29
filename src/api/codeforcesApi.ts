import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CodeforcesApiResponse, CodeforcesApiError } from "../types/codeforces";

const fetchContests = async (): Promise<CodeforcesApiResponse> => {
  try {
    const response = await axios.get<CodeforcesApiResponse>(
      "https://codeforces.com/api/contest.list"
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorData: CodeforcesApiError = error.response.data;
      console.error("Error fetching contests:", errorData);
      throw new Error(errorData.comment);
    } else {
      console.error("Network error fetching contests:", error.message);
      throw new Error("Failed to fetch data.");
    }
  }
};

export const useContests = () => {
  return useQuery<
    CodeforcesApiResponse,
    CodeforcesApiError,
    CodeforcesApiResponse["result"]
  >({
    queryKey: ["contests"],
    queryFn: fetchContests,
    staleTime: 300000,
    gcTime: 600000,
    refetchOnReconnect: true,
    retry: 3,
    retryDelay: 1000,
  });
};
