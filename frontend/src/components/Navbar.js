import styles from "./css/Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src="/logo-transparent.png" alt="logo" />
      </div>

      <div className={styles.menuWrapper}>
        <div className={styles.menu}>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/cases">Live cases</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles.icons}>
            <a href="https://github.com/hejsaga">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sagaswahn/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
