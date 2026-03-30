import { useEffect, useRef } from "react";
import styles from "./CursorEffect.module.css";
import ignitia from "../../public/CursorEffect/ignitia.png";

export default function CursorEffect() {
  const containerRef = useRef(null);
  const lastParticleTime = useRef(0);
  const particleInterval = 37.5;
  const sparkCount = 1;
  const sparkParticleCount = 1;

  const icons = [ignitia.src, ignitia.src, ignitia.src, ignitia.src];

  function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
  }

  function circularRandom(r) {
    r = r * Math.sqrt(Math.abs(Math.random() - Math.random()));
    return { r };
  }

  const createSparks = (e) => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < sparkCount; i++) {
      const spark = { els: [] };

      for (let j = 0; j < sparkParticleCount; j++) {
        const icon = document.createElement("img");
        icon.src = icons[Math.floor(Math.random() * icons.length)];
        icon.classList.add(styles.icon);
        container.appendChild(icon);
        spark.els.push(icon);

        const particleSize = 100;
        const sparkRadius = 20;
        const { r } = circularRandom(sparkRadius);

        const randomRotation = Math.random() * 360;

        icon.style.width = `${lerp(particleSize, 1, r / sparkRadius)}px`;
        icon.style.height = `${lerp(particleSize, 1, r / sparkRadius)}px`;
        icon.style.opacity = "1";
        icon.style.position = "absolute";
        icon.style.transform = `rotate(${randomRotation}deg)`;
        icon.style.left = `${e.clientX}px`;
        icon.style.top = `${e.clientY}px`;

        setTimeout(() => {
          const newX = Math.random() * 60 - 30;
          const newY = Math.random() * 60 - 30;

          icon.style.transform = `translateX(${newX}px) translateY(${newY}px) rotate(${randomRotation}deg)`;
          icon.style.transition =
            "transform 0.8s ease-out, opacity 0.8s ease-out";

          setTimeout(() => {
            icon.style.opacity = "0";
            setTimeout(() => {
              container.removeChild(icon);
            }, 300);
          }, Math.random() * 300 + 500);
        }, 0);
      }
    }
  };

  const onMouseMove = (e) => {
    const currentTime = performance.now();

    if (currentTime - lastParticleTime.current >= particleInterval) {
      lastParticleTime.current = currentTime;
      createSparks(e);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={containerRef} className={styles.anime_container} />;
}
