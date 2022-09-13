import { useEffect, useState } from "react";
import { fetchAllBreeds } from "../../services/services";
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
      <ul>
        {allBreeds.map((breed,i) => {
          return <Breed breed={breed} key={`${breed}-${i}`} />;
        })}
      </ul>
    </>
  );
};

export default BreedsList;
