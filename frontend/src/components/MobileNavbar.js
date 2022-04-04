import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IoClose } from "react-icons/io5";
import styles from "./css/MobileNavbar.module.css";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div style={showMenu ? { backgroundColor: "rgba(17, 18, 34, 0.975" } : {}}>
      <div className={styles.container}>
        <div className={styles.elements}>
          <div></div>
          <button className={styles.button} onClick={() => toggleMenu()}>
            {showMenu ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
      {showMenu && (
        <>
          <div className={styles.menu}>
            <div className={styles.links}>
              <Link to="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
              <Link to="/cases" onClick={() => setShowMenu(false)}>
                Live cases
              </Link>
              <Link to="/projects" onClick={() => setShowMenu(false)}>
                Projects
              </Link>
              <Link to="/about" onClick={() => setShowMenu(false)}>
                About
              </Link>
              <Link to="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </Link>
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
        </>
      )}
    </div>
  );
};

export default MobileNavbar;
