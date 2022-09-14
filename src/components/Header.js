import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../assets/images/logo.png";
import heart from "../assets/images/heart.png";
import home from "../assets/images/home.png";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className={styles["nav-items"]}>
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #c44a4e" : "none",
          })}
          to="/"
        >
          <li className={styles["nav-item"]}>
            <img src={home} alt="" />
          </li>
        </NavLink>
        <NavLink 
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid #c44a4e" : "none",
        })}
        to="favorite-pictures">
          <li className={styles["nav-item"]}>
            <img src={heart} alt="" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
