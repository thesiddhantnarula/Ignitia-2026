import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/mobile/HeroSection.module.css";

const Particle = ({ angle, distance, duration }) => {
  const imageSources = ["/music-assets/1.webp", "/music-assets/2.webp", "/music-assets/3.webp", "/music-assets/4.webp", "/music-assets/5.webp"]; 

  const [selectedImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  });

  const initialStyle = {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0)",
  };

  const [animStyle, setAnimStyle] = useState(initialStyle);

  useEffect(() => {
    const scaleInTimeout = setTimeout(() => {
      setAnimStyle({
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
      });
    }, 10);

    const rad = (angle * Math.PI) / 180;
    const translateX = Math.cos(rad) * distance;
    const translateY = Math.sin(rad) * distance;
    const moveTimeout = setTimeout(() => {
      setAnimStyle({
        opacity: 0,
        transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(1)`,
        transition: `transform ${duration}s linear, opacity ${duration}s linear`,
      });
    }, 600);

    return () => {
      clearTimeout(scaleInTimeout);
      clearTimeout(moveTimeout);
    };
  }, [angle, distance, duration]);

  return (
    <div className={styles.particleWrapper} style={animStyle}>
      <Image src={selectedImage} alt="Particle" width={16} height={16} />
    </div>
  );
};

export default Particle;
