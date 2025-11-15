import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text moves down more gently
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  // Background layers move at different speeds for depth
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xStars = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const isServices = type === "services";

  return (
    <section
      className="parallax"
      ref={ref}
      style={{
        background: isServices
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
      }}
      aria-label={isServices ? "What I do" : "What I did"}
    >
      <motion.h1 style={{ y: yText }}>
        {isServices ? "What I Do?" : "What I Did?"}
      </motion.h1>

      <motion.div className="mountains" />

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${isServices ? "/planets.png" : "/sun.png"})`,
        }}
      />

      <motion.div
        className="stars"
        style={{ x: xStars }}
      />
    </section>
  );
};

export default Parallax;
