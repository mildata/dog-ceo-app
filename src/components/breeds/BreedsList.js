import { useEffect, useState } from "react";
import { fetchAllBreeds } from "../../services/services";
import { vars } from "../../models/constants";
import styles from "./BreedsList.module.scss";
import Breed from "./Breed";

const BreedsList = () => {
  const [allBreeds, setAllBreeds] = useState([]);
  const [showList, setShowList] = useState(false);

  // fetch all breeds from an API
  useEffect(() => {
    const getBreeds = async () => {
      const response = await fetchAllBreeds();
      if (response) {
        setShowList(true);
        setAllBreeds(Object.keys(response.message));
      } else {
        setShowList(false);
      }
    };
    getBreeds();
  }, []);

  return (
    <>
      <h1 className={styles.heading1}>Dog breeds</h1>
      {showList ? (
        <ul className={styles.list}>
          {allBreeds.map((breed, i) => {
            return <Breed breed={breed} key={`${breed}-${i}`} />;
          })}
        </ul>
      ) : (
        <h2 className={styles.heading2}>{vars.noDataToShow}</h2>
      )}
    </>
  );
};

export default BreedsList;
