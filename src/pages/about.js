import React, { useEffect } from "react";
import styles from "../../styles/about.module.css";
import HamBtn from "../../components/Landing/Navbar/HamBtn/Btn";

const About = () => {
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement("span");
      sparkle.classList.add(styles.sparkle);
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = "50%";
      sparkle.style.animationDuration = Math.random() * 1.5 + 1 + "s";

      document.querySelector(`.${styles.sparkles}`).appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    };

    const interval = setInterval(createSparkle, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HamBtn />
      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>About</h1>

        {/* First Container */}
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src="/Hambtn.png" alt="Placeholder" className={styles.image} />
          </div>
          <div className={styles.contentContainer}>
            <h2>PSIT</h2>
            <p>
              Since its inception in 2004, Pranveer Singh Institute of
              Technology (PSIT), Kanpur has emerged as a leader in education,
              celebrating numerous accomplishments. At PSIT, we prioritize
              building a strong foundation for our students. Our institute
              fosters an environment conducive to intellectual growth, free
              thought, and personal development. Our academic approach
              challenges students with dynamic learning experiences, equipping
              them with essential skills, insights, attitudes, and practical
              know-how to excel in their careers and life
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src="/logo.png" alt="Placeholder" className={styles.image} />
          </div>
          <div className={styles.contentContainer}>
            <h2>Ignitia</h2>
            <p>
              PSIT extends beyond academics, offering abundant opportunities for
              students to demonstrate their talents and leadership skills. Among
              these is our most anticipated event: College Fest Ignitia 2024.
              We're excited to present a two-day cultural spectacle where you'll
              find yourself immersed in the unfolding hues of our cultural
              celebration.
            </p>
          </div>
        </div>

        {/* Third Container */}
        <div className={styles.sparkles}></div>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <h2>Abhivraddhi</h2>
            <p>
              PSIT extends beyond academics, offering abundant opportunities for
              students to demonstrate their talents and leadership skills. Among
              these is our most anticipated event: College Fest Ignitia 2024.
              We're excited to present a two-day cultural spectacle where you'll
              find yourself immersed in the unfolding hues of our cultural
              celebration.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/theme.png" alt="Placeholder" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
