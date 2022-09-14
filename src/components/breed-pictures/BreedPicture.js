import Button from "../UI/Button";

const BreedPicture = ({ url, add, remove, showRemoveButton }) => {

  return (
    <>
      <img src={url} alt="" width="200px" />
      {!showRemoveButton && <Button onClick={() => {add(url);}}>
        Add to Favorites
      </Button>}
      {showRemoveButton && <Button onClick={() => {remove(url);}}>
        Remove from favs
      </Button>}
    </>
  );
};

export default BreedPicture;
