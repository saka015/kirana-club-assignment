import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
