import React from "react";
import styles from "../../styles/mobile/Navbar.module.css";
import HamBtn from "../../components/Landing/Navbar/HamBtn/Btn";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.rightSection}>
        <div className={styles.hamBtn} id="hamBtn">
          <HamBtn />
        </div>
      </div>

      <div className={styles.middleSection}>
        <img src="/ignitia-logo.png" alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.leftSection}>
        <img
          src="/Regbtn.png"
          alt="Register Now"
          className={styles.registerBtn}
        />
      </div>
    </nav>
  );
};

export default Navbar;
