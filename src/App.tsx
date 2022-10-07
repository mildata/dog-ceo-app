import styles from "./App.module.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import FavoriteImagesProvider from "./store/FavoriteImagesProvider";

function App() {
  return (
    <FavoriteImagesProvider>
      <div className={styles.container}>
        <div className={styles["header-wrap"]}> 
            <Header />
        </div>
        <div className={styles["content-wrap"]}> 
          <main className={styles.content}>
            <Content />
          </main>
        </div>
      </div>
    </FavoriteImagesProvider>
  );
}

export default App;
