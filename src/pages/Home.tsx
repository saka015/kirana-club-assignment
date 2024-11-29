import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="dot-bg home-page">
      <main>
        <Link to="/allcontests">
          <button>All Contests 🚀</button>
        </Link>
        <Link to="/favourites">
          <button>Favourite Contests ❤️</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
