import React from "react";
import styles from "../styles/Socialbar.module.css";

const Socialbar = () => {
  return (
    <div className={styles.socialSidebar}>
      <ul className={styles.socialMenu}>
        <li className={styles.socialMenuItem}>
          <img src="/icons/youtube.png" alt="YouTube" className={styles.icon} />
        </li>
        <li className={styles.socialMenuItem}>
          <img src="/icons/insta.png" alt="Instagram" className={styles.icon} />
        </li>
        <li className={styles.socialMenuItem}>
          <img src="/icons/facebook.png" alt="Facebook" className={styles.icon} />
        </li>
        <li className={styles.socialMenuItem}>
          <img src="/icons/linkedin.png" alt="LinkedIn" className={styles.icon} />
        </li>
        <li className={styles.socialMenuItem}>
          <img src="/icons/x.png" alt="Twitter" className={styles.icon} />
        </li>
      </ul>
    </div>
  );
};

export default Socialbar;
