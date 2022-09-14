import { useEffect, useState, useContext } from "react";
import FavoriteImagesContext from "../../store/favorite-images-context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchBreedImages } from "../../services/services";
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
  const [breedFound, setBreedFound] = useState(undefined);

  const backToAllBreedsLink = (
    <Link to="/">Check out the breed list to find all breeds</Link>
  );

  useEffect(() => {
    fetchBreedImages(breed)
      .then((value) => {
        setImgUrls(value.message);
        setBreedFound(true);
      })
      .catch((err) => {
        setBreedFound(false);
      });
  }, []);

  return (
    <>
      {breedFound !== undefined && !breedFound && (
        <div>
          <h3>Breed {breed} not found</h3>
          <div>{backToAllBreedsLink}</div>
        </div>
      )}

      {breedFound && (
        <div>
          <h3>{breed} pictures</h3>
          {imgUrls.length === 0 && (
            <div>
              <h3>No images found</h3>
              <div>{backToAllBreedsLink}</div>
            </div>
          )}
          {imgUrls.map((url, i) => {
            const favorited =
              favImgContext.favoriteImages.findIndex((el) => el.url === url) ===
              -1
                ? false
                : true;
            return (
              <div key={url}>
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
      )}
    </>
  );
};

export default BreedPictures;
