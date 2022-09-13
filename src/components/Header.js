import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to='/'>Home</Link>
      <Link to='favorite-pictures'>Favorites</Link>
    </div>
  );
};

export default Header;
