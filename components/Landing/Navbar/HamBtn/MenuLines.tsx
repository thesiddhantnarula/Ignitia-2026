import React from "react";
import { useEffect, useState } from "react";

interface MenuLinesProps {
  svgClass: string;
  isHamOpen: boolean;
}

const MenuLines: React.FC<MenuLinesProps> = ({ svgClass, isHamOpen }) => {
  const [, setWindowWidth] = useState<number | null>(null);

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

  return (
    <>
      {isHamOpen ? (
        <svg
          className={svgClass}
          xmlns="http://www.w3.org/
2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M 10 10 L 90 90" />
          <path d="M 10 90 L 90 10" />
        </svg>
      ) : (
        <svg
          className={svgClass}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M 10 10 L 90 10" />
          <path d="M 10 50 L 90 50" />
          <path d="M 10 90 L 90 90" />
        </svg>
      )}
    </>
  );
};

export default MenuLines;
