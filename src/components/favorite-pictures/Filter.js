import { useContext, useState } from "react";
import styles from "./Filter.modules.scss";
import FavoriteImagesContext from "../../store/favorite-images-context";
import Dropdown from "../UI/Dropdown";
import { vars } from "../../models/constants";

const Filter = (props) => {
  //global state
  const favImgContext = useContext(FavoriteImagesContext);

  // sort all saved images by breed, pick unique values and add them to the filter dropdown options
  const breeds = favImgContext.favoriteImages.map((item) => {
    return item.breed;
  });
  const uniqueBreeds = [...new Set(breeds)];
  uniqueBreeds.unshift(vars.allBreeds);
  const options = uniqueBreeds.map((breedName) => {
    return { label: breedName, value: breedName };
  });

  //component state
  const [value, setValue] = useState(vars.allBreeds);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onSelected(event.target.value);
  };

  return (
    <>
      {uniqueBreeds.length > 1 && (
        <Dropdown
          label={options.label}
          value={value}
          options={options}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Filter;
