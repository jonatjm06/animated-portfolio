// src/components/techstack/TechStack.jsx

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BallCanvas from "./canvas/Ball";
import { primaryTech, secondaryTech } from "../../constants";
import StarsCanvas from "../parallax/canvas/Star";
import "./techstack.scss";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section
      id="techstack"
      className="techstack-section"
      ref={sectionRef}
      aria-label="Technology stack"
    >
      <StarsCanvas className="stars"/>
      <motion.div
        className="techstack-inner"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="techstack-title" variants={itemVariants}>
          Tech Stack
        </motion.h2>
        <motion.p className="techstack-subtitle" variants={itemVariants}>
          A mix of web, machine learning, cloud and tooling I use to build and
          ship projects.
        </motion.p>

        {/* PRIMARY SKILLS – 3D balls */}
        <motion.div
          className="ballsContainer primary"
          variants={containerVariants}
        >
          {primaryTech.map((tech) => (
            <motion.article
              className="balls"
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 12 }}
            >
              <div
                role="img"
                aria-label={`${tech.name} technology icon`}
                className="ballCanvas-wrapper"
              >
                <BallCanvas icon={tech.icon} name={tech.name} />
              </div>
              <h5 className="ballname">{tech.name}</h5>
            </motion.article>
          ))}
        </motion.div>

        {/* SECONDARY SKILLS – playful chips */}
        <motion.div
          className="secondaryContainer"
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants}>
            Other tools & technologies
          </motion.h3>
          <div className="secondaryGrid">
            {secondaryTech.map((tech) => (
              <motion.div
                className="chip"
                key={tech.name}
                variants={chipVariants}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;

