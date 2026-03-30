import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/Home.module.css";
import Socialbar from "../../components/Socialbar";
import HeroSection from "../../components/HeroSection";
import Logo from "../../components/Logo";
import CursorEffect from "../../components/CursorEffect/CursorEffect";
import MobileSite from "../../components/MobileSite"; 

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileSite />;
  }

  return (
    <>
      <div className={styles.container}>
        <CursorEffect />
        <Navbar />
        <Sidebar />
        <Socialbar />
        <HeroSection />
        <div className={`${styles.blurCircle} ${styles.topleft}`} />
        <div className={`${styles.blurCircle} ${styles.bottomright}`} />
      </div>
    </>
  );
}
