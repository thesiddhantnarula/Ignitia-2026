import React from "react";
import styles from "../styles/Sidebar.module.css";
import {
  FaHome,
  FaUser,
  FaTv,
  FaCalendarAlt,
  FaEnvelope,
  FaArchive,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <FaHome className={styles.icon} />
          <span>HOME</span>
        </li>
        <li className={styles.menuItem}>
          <FaUser className={styles.icon} />
          <span>ABOUT</span>
        </li>
        <li className={styles.menuItem}>
          <FaCalendarAlt className={styles.icon} />
          <span>EVENTS</span>
        </li>
        <li className={styles.menuItem}>
          <FaHandshake className={styles.icon} />
          <span>SPONSORS</span>
        </li>
      
        <li className={styles.menuItem}>
          <FaUsers className={styles.icon} />
          <span>OUR TEAM</span>
        </li>
        <li className={styles.menuItem}>
          <FaArchive className={styles.icon} />
          <span>ARCHIVE</span>
        </li>
        <li className={styles.menuItem}>
          <FaEnvelope className={styles.icon} />
          <span>CONTACT</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
