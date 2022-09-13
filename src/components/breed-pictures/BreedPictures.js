import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchBreedImages } from "../../services/services";
import BreedPicture from "./BreedPicture";

const BreedPictures = () => {
  const { breed } = useParams();
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
            return <BreedPicture url={url} key={i} />;
          })}
        </div>
      )}
    </>
  );
};

export default BreedPictures;
