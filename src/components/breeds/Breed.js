import { Link } from "react-router-dom";
import styles from "./Breed.module.scss";

const Breed = ({ breed }) => {
  return (
    <>
      <li className={styles["list-item"]}>
        <Link to={`breed/${breed}`} >{breed}</Link>
      </li>
    </>
  );
};

export default Breed;
