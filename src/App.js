import styles from "./App.module.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import FavoriteImagesProvider from "./store/FavoriteImagesProvider";

function App() {
  return (
    <FavoriteImagesProvider>
      <div className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.content}>
          <Content />
        </main>
      </div>
    </FavoriteImagesProvider>
  );
}

export default App;
