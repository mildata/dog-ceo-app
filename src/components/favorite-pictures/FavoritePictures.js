import { useContext, useState } from "react";
import styles from "./FavoritePictures.module.scss";
import FavoriteImagesContext from "../../store/favorite-images-context";
import BreedPicture from "../breed-pictures/BreedPicture";
import Filter from "./Filter";

const FavoritePictures = () => {
  //global state
  const imgContext = useContext(FavoriteImagesContext);
  const hasItems = imgContext.favoriteImages.length > 0;

  //remove image from favorites
  const removeFavImgHandler = (url) => {
    imgContext.removeImage({
      url: url,
    });
  };

  //component state
  const [selectedBreed, setSelectedBreed] = useState("All breeds");

  const filterSelectedBreed = (breedName) => {
    setSelectedBreed(breedName);
  };

  return (
    <>
      <h1 className={styles.heading1}> Your Favorite Pictures </h1>
      <Filter onSelected={filterSelectedBreed} />
      <div className={styles.wrapper}>
        {hasItems &&
          imgContext.favoriteImages.map((item) => {
            return (
              (selectedBreed === item.breed ||
                selectedBreed === "All breeds") && (
                <div key={item.url}>
                  <BreedPicture
                    url={item.url}
                    remove={removeFavImgHandler}
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
