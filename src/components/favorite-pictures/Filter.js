import { useContext, useState } from "react";
import FavoriteImagesContext from "../../store/favorite-images-context";
import Dropdown from "../UI/Dropdown";

const Filter = (props) => {
  //global state 
  const favImgContext = useContext(FavoriteImagesContext);
 
  // sort all saved images by breed, pick unique values and add them to the filter dropdown options
  const breeds = favImgContext.favoriteImages.map((item) => {
    return item.breed;
  });
  const uniqueBreeds = [...new Set(breeds)].concat("All breeds");
  const options = uniqueBreeds.map((breedName) => {
    return { label: breedName, value: breedName };
  });

  //component state
  const [value, setValue] = useState("All breeds");

  
  const handleChange = (event) => {
    setValue(event.target.value);
    props.onSelected(event.target.value);
  };

  return (
    <>
      <h4>Filter Component</h4>
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
