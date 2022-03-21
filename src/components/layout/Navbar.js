import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/logodark.svg";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Bussiness" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.item_link} to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.item_link} to="/helps">About Us</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.item_link} to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.item_link} to="/projects">Projetos</Link>
        </li>

        </ul>
        <ul className={styles.listLogin}>
        <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link className={styles.item_linkLogin} to="/login">Log In</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
