import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CodeforcesApiResponse, CodeforcesApiError } from "../types/codeforces";

const fetchContests = async (): Promise<CodeforcesApiResponse> => {
  try {
    const response = await axios.get<CodeforcesApiResponse>(
      "https://codeforces.com/api/contest.list"
    );
    return response.data; // Successfully fetched contests
  } catch (error: any) {
    if (error.response) {
      // API-specific error
      const errorData: CodeforcesApiError = error.response.data;
      console.error("Error fetching contests:", errorData);
      throw new Error(errorData.comment); // Throw an error with the comment
    } else {
      // Network or unknown error
      console.error("Network error fetching contests:", error.message);
      throw new Error("Failed to fetch data."); // Throw a generic error
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
