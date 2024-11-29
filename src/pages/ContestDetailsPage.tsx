import { Link, useParams } from "react-router-dom";
import { useContests } from "../api/codeforcesApi";
import { Spinner, Text, Tooltip } from "@shopify/polaris";
import { Card, InlineGrid } from "@shopify/polaris";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} from "../utils/AddFavourites";
import { useState } from "react";
import { UseContestsReturn, ContestFavorite } from "../types/codeforces";

const ContestDetailsPage = () => {




  const { contestId } = useParams<{ contestId: string }>();
  const { data, isLoading } = useContests() as UseContestsReturn;

  const [favorites, setFavorites] = useState<ContestFavorite[]>(getFavorites());

  const contest = data?.result?.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (contest: any) => contest.id === Number(contestId)
  );
  const convertToIST = (startTimeSeconds: number) =>
    new Date(startTimeSeconds * 1000).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

  const convertToRelativeDays = (startTimeSeconds: number) => {
    const diffDays = Math.floor(
      (Date.now() - startTimeSeconds * 1000) / (1000 * 60 * 60 * 24)
    );
    return diffDays;
  };

  const handleAddToFavorites = () => {
    if (contest) {
      addToFavorites({ id: contest.id, name: contest.name });
      setFavorites(getFavorites());
    }
  };

  const handleRemoveFromFavorites = () => {
    if (contest) {
      removeFromFavorites(contest.id);
      setFavorites(getFavorites());
    }
  };

  const isInFavorites = favorites.some((fav) => fav?.id === contest?.id);

  const startTimeSeconds = contest?.startTimeSeconds;

  const diffDays = startTimeSeconds !== undefined
    ? convertToRelativeDays(startTimeSeconds)
    : 0;

  if (isLoading) {
    return (
      <div className="flex-center h-screen">
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  }
  return (
    <div className="contest-details">
      <Card roundedAbove="sm">
        <div className="contest-details-container">
          <div className="notification flex-center flex-row">
            {contest?.phase !== "FINISHED" ? (
              <div className="flex blue-bg">
                <span className="reminder">
                  <CiBellOn />
                </span>
                <Text as="p" variant="headingMd" tone="caution">
                  <p className="blue">
                    {contest?.startTimeSeconds !== undefined && contest.startTimeSeconds >= 0
                      ? `Contest in ${Math.abs(diffDays)} days`
                      : `${Math.abs(diffDays)} days ago`}
                  </p>
                </Text>
              </div>
            ) : (
              <div className="flex bg-gray">
                <span className="reminder">
                  <CiBellOn />
                </span>
                <Text as="p" variant="headingMd" tone="caution">
                  <p className="gray">Contest Finished</p>
                </Text>
              </div>
            )}

            <div className="favorite-icon">
              <Tooltip
                content={
                  isInFavorites ? "Remove from favorites" : "Add to favorites"
                }
              >
                {isInFavorites ? (
                  <IoHeartSharp
                    className="fav-icon"
                    onClick={handleRemoveFromFavorites}
                    style={{ color: "red" }}
                  />
                ) : (
                  <IoHeartOutline
                    className="fav-icon"
                    onClick={handleAddToFavorites}
                  />
                )}
              </Tooltip>
            </div>
          </div>
          <InlineGrid columns="2fr auto">
            <Text as="p" variant="headingXl" tone="caution">
              {contest?.name}
            </Text>
          </InlineGrid>
          <div className="flex mt-4">
            <span style={{ fontSize: "15px" }}>Contest starts:</span>
            <Text as="p" variant="headingMd" tone="caution">

              {startTimeSeconds !== undefined && convertToIST(startTimeSeconds)}
            </Text>
          </div>
          <div className="flex">
            <span style={{ fontSize: "15px" }}>Contest type:</span>
            <Text as="p" variant="headingMd" tone="caution">
              {contest?.type}
            </Text>
          </div>
          <Link
            to={`https://codeforces.com/contest/${contest?.id}`}
            target="_blank"
          >
            <button className="go_to_contest">Go to contest</button>
          </Link>
        </div>
      </Card>
    </div>
  );

};
export default ContestDetailsPage;
