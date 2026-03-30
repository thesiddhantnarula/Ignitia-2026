// components/HeroSection.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Particle from "./Particle";
import styles from "../styles/HeroSection.module.css";

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
    </div>
  );
};

export default HeroSection;
