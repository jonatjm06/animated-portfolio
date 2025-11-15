import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: [0, 10, 0],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 2,
      repeatType: "loop",
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};

const Hero = () => {
  const handleScrollClick = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HELLO THERE</motion.h2>

          <motion.h1 variants={textVariants}>
            I&apos;m{" "}
            <TypeAnimation
              sequence={[
                "Jonat",
                2000,
                "a Machine Learning Engineer",
                2000,
                "a Cyber Security Enthusiast",
                2000,
                "a Python Developer",
                2000,
                "a Web Developer",
                2000,
              ]}
              speed={50}
              className="text-animation"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p className="subtitle" variants={textVariants}>
            I design and build data-driven, secure applications using Python,
            machine learning and modern web technologies with a strong focus
            on reliability, usability, and real-world impact.
          </motion.p>

          <motion.div className="buttons" variants={textVariants}>
            <motion.a
              href="/Jonat_John_Mathew_Resume.pdf"
              download
              className="btn primary-btn"
              variants={textVariants}
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#projects"
              className="btn secondary-btn"
              variants={textVariants}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.button
            type="button"
            className="scroll-cta"
            onClick={handleScrollClick}
            animate="scrollButton"
            variants={textVariants}
          >
            Scroll down to know more
          </motion.button>

          <motion.img
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down indicator"
            variants={textVariants}
            className="scrollIcon"
          />
        </motion.div>

        <div className="imageContainer">
          <img
            src="/moon2.png"
            alt="Illustration representing development and cyber security"
          />
        </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        Developer • ML • CyberSec • Python
      </motion.div>
    </section>
  );
};

export default Hero;
