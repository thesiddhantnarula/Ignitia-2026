import React, { useEffect, useState } from "react";
import Image from "next/image";
import Particle from "./Particle";
import styles from "../../styles/mobile/HeroSection.module.css";

const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticles = [];

      for (let i = 0; i < 1; i++) {
        const angle = Math.random() * 360;
        const distance = 200 + Math.random() * 100;
        const duration = 3 + Math.random() * 2;
        const id = Date.now() + i;

        newParticles.push({ id, angle, distance, duration });

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, duration * 1000 + 600);
      }

      setParticles((prev) => [...prev, ...newParticles]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.newCircle}></div>

      <div className={styles.circleWrapper}>
        <Image
          src="/ring-4.png"
          alt="Rotating Circle"
          className={styles.circleImage}
          width={960}
          height={960}
          priority
        />
        <Image
          src="/hero.png"
          alt="Hero"
          className={styles.heroImage}
          width={700}
          height={900}
          priority
        />
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            angle={particle.angle}
            distance={particle.distance}
            duration={particle.duration}
          />
        ))}
      </div>

      <div className={styles.infoBox}>
        <h2 className={styles.infoHeading}>About Ignitia</h2>
        <Image
          src="/about.png"
          alt="Ignitia"
          className={styles.infoImage}
          width={400}
          height={300}
          priority
        />
        <p className={styles.infoContent}>
          Ignitia is an innovative platform that brings together cutting-edge
          technology and intuitive design. Our mission is to create seamless
          user experiences while delivering exceptional performance and value.
          Join us as we redefine the digital world, one step at a time.
        </p>
      </div>

      <div className={styles.infoBox}>
        <h2 className={styles.infoHeading}>About Abhivriddhi</h2>
        <Image
          src="/theme.png"
          alt="Ignitia"
          className={styles.infoImage}
          width={400}
          height={300}
          priority
        />
        <p className={styles.infoContent}>
          PSIT extends beyond academics, offering abundant opportunities for
          students to demonstrate their talents and leadership skills. Among
          these is our most anticipated event: College Fest Ignitia 2024. We're
          excited to present a two-day cultural spectacle where you'll find
          yourself immersed in the unfolding hues of our cultural celebration.
        </p>
      </div>

      {/* <div className={styles.imageWrapper}>
        <div className={styles.imageItem}>
          <Image
            src="/tab/home.png"
            alt="Image 1"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/tab/event.png"
            alt="Image 2"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/tab/sponsor.png"
            alt="Image 3"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/tab/team.png"
            alt="Image 4"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/tab/archive.png"
            alt="Image 5"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className={styles.imageItem}>
          <Image
            src="/tab/contact.png"
            alt="Image 6"
            width={300}
            height={300}
            layout="intrinsic"
          />
        </div>
      </div> */}

      <div className={styles.bottomNav}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/x.png"
            alt="Twitter"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/youtube.png"
            alt="LinkedIn"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/insta.png"
            alt="Instagram"
            width={30}
            height={30}
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
