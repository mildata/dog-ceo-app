import { useContext, useState } from "react";
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
    console.log(breedName);
  };

  return (
    <>
      <Filter onSelected={filterSelectedBreed} />
      <h3> Your Favorite Pictures </h3>
      {hasItems &&
        imgContext.favoriteImages.map((item) => {
          return (
            (selectedBreed === item.breed ||
              selectedBreed === "All breeds") && (
              <div key={item.url}>
                <h3>{item.breed}</h3>
                <BreedPicture
                  url={item.url}
                  remove={removeFavImgHandler}
                  showRemoveButton={true}
                />
              </div>
            )
          );
        })}
    </>
  );
};

export default FavoritePictures;
