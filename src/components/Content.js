import { Route, Routes } from "react-router";
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
      <h1>Content</h1>
      <Routes>
        <Route
          path="/"
          element={
            <BreedsListPage>
              <BreedsList />
            </BreedsListPage>
          }
        />
        <Route
          path="/breed/:breed"
          element={
            <BreedPicturesPage>
              <BreedPictures />
            </BreedPicturesPage>
          }
        />
        <Route
          path="/favorite-pictures"
          element={
            <FavoritePicturesPage>
              <FavoritePictures />
            </FavoritePicturesPage>
          }
        />
        <Route path="*"/>
      </Routes>
    </>
  );
};

export default Content;
