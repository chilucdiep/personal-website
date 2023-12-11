import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styles from "./Blob.module.scss";

export function Blob() {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;

      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      const xPercentage = (clientX / containerWidth) * 100;
      const yPercentage = (clientY / containerHeight) * 100;

      setPosition({ x: `${xPercentage}%`, y: `${yPercentage}%` });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animationProps = useSpring({
    left: position.x,
    top: position.y,
    config: { duration: 700 },
  });

  return (
    <div className={styles.Display}>
      <animated.div className={styles.Blob} style={animationProps} />
      <animated.div className={styles.Blob2} style={animationProps} />
    </div>
  );
}
