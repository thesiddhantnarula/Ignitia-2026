import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import styles from "./btn.module.scss";
import HamPokerChip from "./PokerChip";
import MenuLines from "./MenuLines";
import Link from "next/link";
import HamMenu from "./HamMenu/HamMenu";
import React from "react";

export default function HamBtn() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);
  const BtnRef = useRef(null);
  const pokerChipRef = useRef(null);
  const hamIconRef = useRef(null);
  const overlayRef = useRef(null);
  const mapsRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animation = () => {
    const tl = gsap.timeline();
    if (isHamOpen) {
      if (window.innerWidth > 585) {
        tl.to(BtnRef.current, {
          y: "0",
          x: "0",
          duration: 0.5,
          scale:
            window.innerWidth > 1920
              ? 1.5
              : window.innerWidth > 1050
              ? 1
              : window.innerWidth > 900
              ? 0.8
              : 0.7,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 90,
              duration: 0.5,
              scale: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 0,
              duration: 0.1,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 1,
              delay: 0.05,
              duration: 0.1,
              ease: "power2.in",
            },
            "<"
          )
          .to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            "<"
          )
          .set(overlayRef.current, {
            pointerEvents: "none",
          })
          .to(
            mapsRef.current,
            {
              opacity: 0,
              duration: 0.5,
            },
            "<"
          );
      } else {
        tl.to(BtnRef.current, {
          y: "0",
          x: "0",
          duration: 0.5,
          scale: 0.7,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 90,
              duration: 0.75,
              // opacity: 0,
              scale: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 0,
              duration: 0.1,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 1,
              delay: 0.05,
              duration: 0.1,
              ease: "power2.in",
            },
            "<"
          )
          .to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          )
          .set(overlayRef.current, {
            pointerEvents: "none",
          });
      }
    } else {
      if (window.innerWidth > 585) {
        tl.to(BtnRef.current, {
          y: `${window.innerHeight / 2 - 100}`,
          x: "-50%",
          duration: 0.5,
          scale: window.innerWidth > 1200 ? 8 : 6,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 0,
              duration: 0.75,
              ease: "none",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 0,
              duration: 0.1,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 1,
              delay: 0.05,
              duration: 0.1,
              ease: "power2.in",
            },
            "<"
          )
          .to(
            overlayRef.current,
            {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          )
          .set(overlayRef.current, {
            pointerEvents: "unset",
          })
          .to(
            mapsRef.current,
            {
              delay: 0.5,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
      } else {
        tl.to(BtnRef.current, {
          y: `${window.innerHeight / 3.5}`,
          x: `${-window.innerWidth / 3.25}`,
          duration: 0.5,
          scale: 2.8,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 0,
              duration: 1,
              opacity: 1,
              ease: "none",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 0,
              duration: 0.1,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            hamIconRef.current,
            {
              opacity: 1,
              delay: 0.05,
              duration: 0.1,
              ease: "power2.in",
            },
            "<"
          )
          .to(
            overlayRef.current,
            {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          )
          .set(overlayRef.current, {
            pointerEvents: "unset",
          });
      }
    }
  };

  const handleClick = () => {
    if (!isHamOpen) {
      setIsHamOpen(true);
      animation();
      document
        .querySelector("body")
        ?.setAttribute("style", "overflow-y: hidden;");
      setIsHoverDisabled(true);
      setTimeout(() => {
        setIsHoverDisabled(false);
      }, 1000);
    }
    console.log(mapsRef.current);
  };

  const handleClose = () => {
    setIsHamOpen(false);
    animation();
    document
      .querySelector("body")
      ?.setAttribute("style", "overflow-y: scroll;");
    setIsHoverDisabled(true);
    setTimeout(() => {
      setIsHoverDisabled(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    if (!isHamOpen && !isHoverDisabled)
      gsap.to(pokerChipRef.current, {
        rotate: 120,
        duration: 0.5,
      });
  };

  const handleMouseLeave = () => {
    if (!isHamOpen && !isHoverDisabled)
      gsap.to(pokerChipRef.current, {
        rotate: 90,
        duration: 0.5,
      });
  };

  return (
    <>
      <div className={styles.hamOverlay} ref={overlayRef} />
      <div
        className={styles.btn}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="atharvHamBtn"
        ref={BtnRef}
      >
        {isHamOpen && <HamMenu isHamOpen={isHamOpen} />}
        <HamPokerChip
          ref={pokerChipRef}
          svgClass={styles.pokerChip}
          isHamOpen={isHamOpen}
        />
        {/* Add the logo image in the center of the button */}
        <img
          src="/ignitia.svg"
          alt="Ignitia Logo"
          className={styles.logo}
        />
        <div
          className={styles.hamIcon}
          style={{ width: isHamOpen ? "40%" : "" }}
          ref={hamIconRef}
        >
          <MenuLines svgClass={styles.menuLines} isHamOpen={isHamOpen} />
        </div>
      </div>

      {isHamOpen && (
        <div className={styles.closeBtn} onClick={handleClose}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3432_1022)">
              <path
                d="M37.3337 37.3334L2.66699 2.66675M37.3337 2.66675L2.66699 37.3334"
                stroke="#FFE887"
                strokeWidth="4.33333"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3432_1022">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </>
  );
}
