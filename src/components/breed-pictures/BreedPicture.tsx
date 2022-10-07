import Button from "../UI/Button";
import styles from "./BreedPicture.module.scss";
import heartInactive from "../../assets/images/heart-inactive.png";
import heartActive from "../../assets/images/heart-active.png";
import { vars } from "../../models/constants";

type Props = {
  url: string,
  handleImage: any,
  showRemoveButton: boolean
};

const BreedPicture = ({ url, handleImage, showRemoveButton }: Props) => {

  return (
    <div className={styles["btn-wrap"]}>
      <img src={url} alt="" className={styles.image} />
      {!showRemoveButton && <Button onClick={() => { handleImage(url, vars.add) }} type='button' className={styles.button}>
        <img src={heartInactive} className={styles.favorite} alt="" />
      </Button>}
      {showRemoveButton && <Button onClick={() => { handleImage(url, vars.remove); }} type='button' className={styles.button}>
        <img src={heartActive} className={styles.button && styles.unfavorite} alt="" />
      </Button>}
    </div>
  );
};

export default BreedPicture;
