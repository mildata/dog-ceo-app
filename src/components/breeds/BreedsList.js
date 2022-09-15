import { useEffect, useState } from "react";
import { fetchAllBreeds } from "../../services/services";
import styles from "./BreedsList.module.scss";
import Breed from "./Breed";

const BreedsList = () => {
  const [allBreeds, setAllBreeds] = useState([]);

  useEffect(() => {
    fetchAllBreeds().then((value) => {
      setAllBreeds(Object.keys(value.message));
    });
  }, []);

  return (
    <>
    <h1 className={styles.heading1}>Dog breeds</h1>
    <ul className={styles.list}>
        {allBreeds.map((breed,i) => {
          return <Breed breed={breed} key={`${breed}-${i}`} />;
        })}
      </ul>
    </>
  );
};

export default BreedsList;
