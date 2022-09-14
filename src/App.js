import "./App.module.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import FavoriteImagesProvider from "./store/FavoriteImagesProvider";

function App() {
  return (
    <FavoriteImagesProvider>
      <Header />
      {/* <Content /> */}
    </FavoriteImagesProvider>
  );
}

export default App;
