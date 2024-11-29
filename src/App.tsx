import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Link, AccountConnection } from "@shopify/polaris";
import { useState, useCallback } from "react";
import ContestList from "./components/ContestList"; // Assuming this exists
import ContestListPage from "./pages/ContestListPage"; // Assuming this exists
import ContestDetailsPage from "./pages/ContestDetailsPage"; // Create this component
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/allcontests",
          element: <ContestListPage />,
        },
        {
          path: "/contest/:contestId",
          element: <ContestDetailsPage />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
