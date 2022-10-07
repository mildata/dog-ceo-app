import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRandomBreedImage } from "../../services/services";
import styles from "./Breed.module.scss";

type Props = {
  breed: string
};

const Breed = ({ breed }: Props) => {
  const [imgUrl, setImgUrl] = useState(null);

  // fetch a random image of a breed from an API
  useEffect(() => {
    const getImageUrl = async () => {
      const response = await fetchRandomBreedImage(breed);
      if (response) {
        setImgUrl(response.message);
      } else {
        setImgUrl(null);
      }
    };
    getImageUrl();
  }, [breed]);

  return (
    <>
      <li className={styles["list-item"]}>
        {imgUrl && (
          <Link to={`breed/${breed}`}>
            <div className={styles["img-wrap"]}>
              <img src={imgUrl} alt="" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles["link-wrap"]}>
              <h3 className={styles.link}>{breed}</h3>
            </div>
          </Link>
        )}
      </li>
    </>
  );
};

export default Breed;
