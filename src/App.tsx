import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, AccountConnection } from "@shopify/polaris";
import { useState, useCallback } from "react";
import ContestList from "./components/ContestList"; // Assuming this exists
import ContestListPage from "./pages/ContestListPage"; // Assuming this exists
import ContestDetailsPage from "./pages/ContestDetailsPage"; // Create this component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ContestListPage />} />
          <Route path="/contest/:contestId" element={<ContestDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
