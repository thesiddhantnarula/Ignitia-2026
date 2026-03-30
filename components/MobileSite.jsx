import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/MobileSite.module.css"; 
import Navbar from "../components/mobile/Navbar";
import HeroSection from "../components/mobile/HeroSection";

const MobileSite = () => {
  return (
    <div className={styles.mobileContainer}>
        <Navbar />
        <HeroSection />
      <div className={`${styles.blurCircle} ${styles.topleft}`} />
      <div className={`${styles.blurCircle} ${styles.bottomright}`} />
    </div>
  );
};

export default MobileSite;
