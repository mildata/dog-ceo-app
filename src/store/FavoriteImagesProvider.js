import { useReducer } from "react";
import FavoriteImagesContext from "./favorite-images-context";

const defaultState = { favoriteImages: [] };
const imgReducer = (state, action) => {
    // check if image is already added to favorite images
    const favoritedItem = state.favoriteImages.find(
      (img) => img.url === action.item.url
    );
  if (action.type === "ADD") {
    // store current state if image already exists in the context, otherwise, add the new image
    return {
      favoriteImages: favoritedItem
        ? state.favoriteImages
        : [...state.favoriteImages, action.item],
    };
  }
  if (action.type === "REMOVE") {
    const currentImgs = state.favoriteImages.filter(
      (item) => item.url !== action.item.url
    );
    return { favoriteImages: currentImgs };
  }
  return defaultState;
};

const FavoriteImagesProvider = (props) => {
  const [imgState, dispactchAction] = useReducer(imgReducer, defaultState);

  const addFavImageHandler = (item) => {
    dispactchAction({ type: "ADD", item: item });
  };
  const removeFavImageHandler = (item) => {
    dispactchAction({ type: "REMOVE", item: item });
  };
  const imagesContext = {
    favoriteImages: imgState.favoriteImages,
    addImage: addFavImageHandler,
    removeImage: removeFavImageHandler,
  };

  return (
    <FavoriteImagesContext.Provider value={imagesContext}>
      {props.children}
    </FavoriteImagesContext.Provider>
  );
};

export default FavoriteImagesProvider;
