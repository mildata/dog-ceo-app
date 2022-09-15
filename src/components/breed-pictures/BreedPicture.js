import Button from "../UI/Button";
import styles from "./BreedPicture.module.scss";
import heartInactive from "../../assets/images/heart-inactive.png";
import heartActive from "../../assets/images/heart-active.png";

const BreedPicture = ({ url, add, remove, showRemoveButton }) => {

  return (
    <div className={styles["btn-wrap"]}>
      <img src={url} alt="" className={styles.image} />
      {!showRemoveButton && <Button onClick={() => {add(url)}} className={styles.button}>
        <img src={heartInactive} className={styles.favorite} alt=""/>
      </Button>}
      {showRemoveButton && <Button onClick={() => {remove(url);}} className={styles.button}>
      <img src={heartActive} className={styles.button && styles.unfavorite} alt=""/>
      </Button>}
    </div>
  );
};

export default BreedPicture;
