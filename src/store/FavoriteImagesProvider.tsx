import { useReducer } from "react";
import FavoriteImagesContext from "./favorite-images-context";
import { vars } from "../models/constants";
import { FavoriteImages, ImageItem } from "../models/types";

type Props = {
  children: React.ReactNode
};

type ImgState = {
  favoriteImages: ImageItem[]
};

type ImgReducerAction = {
  type: string,
  item: ImageItem
}

const defaultState = { favoriteImages: [] };

const imgReducer = (state: ImgState, action: ImgReducerAction) => {
  // check if image is already added to favorite images
  const favoritedItem = state.favoriteImages.find(img => img.url === action.item.url);
  switch (action.type) {
    case vars.add:
      // store current state if image already exists in the context, otherwise, add the new image
      return {
        favoriteImages: favoritedItem
          ? state.favoriteImages
          : [...state.favoriteImages, action.item],
      };
    case vars.remove:
      const currentImgs = state.favoriteImages.filter(
        (item) => item.url !== action.item.url
      );
      return { favoriteImages: currentImgs };
    default:
      return defaultState;
  }
};

const FavoriteImagesProvider = (props: Props) => {
  const [imgState, dispactchAction] = useReducer(imgReducer, defaultState);

  const imageHandler = (item: ImageItem, type: string) => {
    dispactchAction({ type: type, item: item });
  };

  const imagesContext: FavoriteImages = {
    favoriteImages: imgState.favoriteImages,
    handleImage: imageHandler
  };

  return (
    <FavoriteImagesContext.Provider value={imagesContext}>
      {props.children}
    </FavoriteImagesContext.Provider>
  );
};

export default FavoriteImagesProvider;
