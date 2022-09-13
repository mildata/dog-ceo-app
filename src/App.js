import { Route, Routes } from "react-router";
import "./App.module.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import BreedsListPage from "./pages/BreedsListPage";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
