import React from "react";

const FavoriteImagesContext = React.createContext({
  favoriteImages: [],
  addImage: (item) => {},
  removeImage: (url) => {},
});

export default FavoriteImagesContext;
