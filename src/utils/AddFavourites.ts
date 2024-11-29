// utils/AddFavorites.ts

interface ContestFavorite {
  id: number;
  name: string;
  // Add other properties you want to store as needed
}

const addToFavorites = (contest: ContestFavorite): void => {
  let favorites: ContestFavorite[] = [];

  const storedFavorites = localStorage.getItem("favorites");

  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
  }

  //Check if contest already exists
  const existingFavorite = favorites.find((fav) => fav.id === contest.id);
  if (existingFavorite) {
    console.log("Contest already in favorites");
    return;
  }

  favorites.push(contest);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFromFavorites = (contestId: number): void => {
  let favorites: ContestFavorite[] = [];
  const storedFavorites = localStorage.getItem("favorites");

  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
  }

  const updatedFavorites = favorites.filter((fav) => fav.id !== contestId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

const getFavorites = (): ContestFavorite[] => {
  const storedFavorites = localStorage.getItem("favorites");
  if (storedFavorites) {
    return JSON.parse(storedFavorites);
  }
  return [];
};

export { addToFavorites, removeFromFavorites, getFavorites };
