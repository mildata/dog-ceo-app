import BreedPicturesPage from "../pages/BreedPicturesPage";
import BreedsListPage from "../pages/BreedsListPage";
import FavoritePicturesPage from "../pages/FavoritePicturesPage";
import BreedPictures from "./breed-pictures/BreedPictures";
import BreedsList from "./breeds/BreedsList";
import styles from "./Content.module.scss";
import FavoritePictures from "./favorite-pictures/FavoritePictures";

const Content = (props) => {
  return (
    <>
      <div>
        <h1>Content</h1>
        
        <BreedsListPage>
          <BreedsList />
        </BreedsListPage>

        <BreedPicturesPage>
          <BreedPictures />
        </BreedPicturesPage>

        <FavoritePicturesPage>
          <FavoritePictures />
        </FavoritePicturesPage>
      </div>
    </>
  );
};

export default Content;
