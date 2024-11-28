import React, { useState, useCallback, useEffect } from "react";
import { useContests } from "../api/codeforcesApi";
import { CodeforcesContest, CodeforcesApiResponse } from "../types/codeforces";
import { Banner, Link, TextField, Select } from "@shopify/polaris";
import debounce from "lodash/debounce";

function ContestListPage() {
  // Fetch contests
  const { data, isLoading, isError, error } = useContests();

  // States for search and filter
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>("");
  const [selectedContestType, setSelectedContestType] = useState<string>("");

  // Debounced effect for filtering logic
  const debouncedHandleSearch = useCallback(
    debounce((value: string) => setDebouncedSearchValue(value), 1000),
    []
  );

  useEffect(() => {
    debouncedHandleSearch(searchValue);
    return () => {
      debouncedHandleSearch.cancel(); // Clean up debounce on unmount
    };
  }, [searchValue, debouncedHandleSearch]);

  const handleSelectChange = useCallback(
    (value: string) => setSelectedContestType(value),
    []
  );

  const handleClearButtonClick = useCallback(() => {
    setSearchValue("");
    setDebouncedSearchValue(""); // Clear both search values
  }, []);

  // Loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.comment || "An error occurred"}</p>;
  }

  // Filtered contests
  const contestsData = data as CodeforcesApiResponse;
  const filteredContests = contestsData.result.filter((contest) => {
    const typeMatch =
      selectedContestType === "" || contest.type === selectedContestType;
    const nameMatch = contest.name
      .toLowerCase()
      .includes(debouncedSearchValue.toLowerCase());
    return typeMatch && nameMatch;
  });

  // Filter options
  const options = [
    { label: "All", value: "" },
    { label: "ICPC", value: "ICPC" },
    { label: "Codeforces", value: "CF" },
  ];

  return (
    <>
      <Banner title="Contests" />

      <div className="flex">
        <Select
          label="Contest Type"
          options={options}
          onChange={handleSelectChange}
          value={selectedContestType}
        />
        <TextField
          label="Search Contests"
          value={searchValue}
          onChange={(value) => setSearchValue(value)} // Update searchValue immediately
          clearButton
          onClearButtonClick={handleClearButtonClick}
          helpText="Search by contest name"
          autoComplete="off"
        />
      </div>

      <hr />

      <ul>
        {filteredContests.map((contest: CodeforcesContest) => (
          <li key={contest.id}>
            <Link removeUnderline url={`/contest/${contest.id}`}>
              {contest.name} ({contest.type}) - {contest.phase}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContestListPage;
