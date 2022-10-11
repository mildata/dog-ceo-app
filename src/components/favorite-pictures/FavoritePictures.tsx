import { useContext, useState } from "react";
import { vars } from "../../models/constants";
import styles from "./FavoritePictures.module.scss";
import FavoriteImagesContext from "../../store/favorite-images-context";
import BreedPicture from "../breed-pictures/BreedPicture";
import Filter from "./Filter";
import { ImageItem } from "../../models/types";

const FavoritePictures = () => {
  //global state
  const favImgContext = useContext(FavoriteImagesContext);
  const hasItems = favImgContext && favImgContext.favoriteImages.length > 0;

  //remove image from favorites
  const removeFavImgHandler = (item: ImageItem) => {
    favImgContext?.handleImage(
      {
        url: item.url,
        breed: item.breed,
      }, vars.remove
    );
  };

  //component state
  const [selectedBreed, setSelectedBreed] = useState(vars.allBreeds);

  const filterSelectedBreed = (breedName: string) => {
    setSelectedBreed(breedName);
  };

  return (
    <>
      <h1 className={styles.heading1}> Your Favorite Pictures </h1>
      <Filter onSelected={filterSelectedBreed} />
      <div className={styles.wrapper}>
        {hasItems &&
          favImgContext.favoriteImages.map((item) => {
            return (
              (selectedBreed === item.breed ||
                selectedBreed === vars.allBreeds) && (
                <div key={item.url}>
                  <BreedPicture
                    url={item.url}
                    handleImage={() => { removeFavImgHandler(item) }}
                    showRemoveButton={true}
                  />
                  <h2 className={styles.heading2}>{item.breed}</h2>
                </div>
              )
            );
          })}
      </div>
    </>
  );
};

export default FavoritePictures;
