import React, { useEffect, useState } from "react";
import { getFavorites } from "../utils/AddFavourites";
import { Badge, Link } from "@shopify/polaris";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="all-contests-cards">
      <h1 className="fav-heading">Favourites</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((fav) => (
            <div className="contest-card mt-4" key={fav.id}>
              <Link removeUnderline url={`/contest/${fav.id}`}>
                <h2>{fav.name}</h2>
              </Link>
            </div>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favourites;
