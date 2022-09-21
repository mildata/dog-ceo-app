import { useEffect, useState, useContext } from "react";
import styles from "./BreedPictures.module.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchBreedImages } from "../../services/services";
import FavoriteImagesContext from "../../store/favorite-images-context";
import BreedPicture from "./BreedPicture";

const BreedPictures = () => {
  const { breed } = useParams();

  //global state management
  const favImgContext = useContext(FavoriteImagesContext);

  // add image to favorites
  const addFavImgHandler = (url) => {
    favImgContext.addImage({
      url: url,
      breed: breed,
    });
  };

  //remove image from favorites
  const removeFavImgHandler = (url) => {
    favImgContext.removeImage({
      url: url,
    });
  };

  //internal state management
  const [imgUrls, setImgUrls] = useState([]);

  // initially set to undefined, to help UI distinguish between initial and updated state
  const [breedFound, setBreedFound] = useState(undefined);

  const backToAllBreedsLink = (
    <Link to="/">Check out the breed list to find all breeds</Link>
  );

  // fetch breed images from an API
  useEffect(() => {
    const getBreedImages = async () => {
      const response = await fetchBreedImages(breed);
      if (response) {
        setBreedFound(true);
        setImgUrls(response.message);
      } else {
        setBreedFound(false);
      }
    };
    getBreedImages();
  }, []);


  return (
    <>
      {breedFound !== undefined && !breedFound && (
        <>
          <h1 className={styles.heading1}>Breed not found</h1>
          <div>{backToAllBreedsLink}</div>
        </>
      )}

      {breedFound && (
        <>
          <div className={styles["heading-wrap"]}>
            <h1 className={styles.heading1}>{breed}</h1>
          </div>
          <div className={styles.wrapper}>
            {imgUrls.length === 0 && (
              <div>
                <h3>No images found</h3>
                <div>{backToAllBreedsLink}</div>
              </div>
            )}
            {imgUrls.map((url, i) => {
              const favorited =
                favImgContext.favoriteImages.findIndex(
                  (el) => el.url === url
                ) === -1
                  ? false
                  : true;
              return (
                <div key={url} className={styles.content}>
                  <BreedPicture
                    url={url}
                    add={addFavImgHandler}
                    remove={removeFavImgHandler}
                    showRemoveButton={favorited}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default BreedPictures;
