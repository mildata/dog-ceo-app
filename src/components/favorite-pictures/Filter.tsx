import { useContext, useState } from "react";
import FavoriteImagesContext from "../../store/favorite-images-context";
import Dropdown from "../UI/Dropdown";
import { vars } from "../../models/constants";
import { Option } from "../../models/types";

type Props = {
  onSelected: (input: string) => void
}

const Filter = ({ onSelected }: Props) => {
  //global state 
  const favImgContext = useContext(FavoriteImagesContext);

  // sort all saved images by breed, pick unique values and add them to the filter dropdown options
  const breeds = favImgContext?.favoriteImages.map((item) => {
    return item.breed;
  });
  const uniqueBreeds = [...new Set(breeds)];
  uniqueBreeds.unshift(vars.allBreeds);
  const options: Option[] = uniqueBreeds.map(breedName => {
    let option: Option = { value: breedName || '', label: breedName || '' };
    return option;
  });

  //component state
  const [value, setValue] = useState(vars.allBreeds);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
    onSelected(event.target?.value);
  };

  return (
    <>
      {uniqueBreeds.length > 1 && (
        <Dropdown
          value={value}
          options={options}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Filter;
