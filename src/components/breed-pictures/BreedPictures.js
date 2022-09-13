import { useParams } from "react-router";

const BreedPictures = () => {
  const { breed } = useParams();
  return (
    <>
      <h3>Breed name: {breed}</h3>
    </>
  );
};

export default BreedPictures;
