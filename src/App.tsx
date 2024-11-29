import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContestListPage from "./pages/ContestListPage"; 
import ContestDetailsPage from "./pages/ContestDetailsPage"; 
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
