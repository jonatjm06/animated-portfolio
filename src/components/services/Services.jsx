import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

import "./services.scss";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const handleWhatIDoClick = () => {
    const list = document.querySelector("#services-list");
    if (list) list.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="services"
      id="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I turn ideas into secure,
          <br />
          data-driven digital experiences.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="Collaboration and teamwork" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Dare</motion.b> to be
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Different</motion.b>
          </h1>
          <button type="button" onClick={handleWhatIDoClick}>
            WHAT I DO?
          </button>
        </div>
      </motion.div>

      <motion.div
        className="listContainer"
        id="services-list"
        variants={variants}
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Development</h2>
          <p>
            I build responsive, accessible websites using modern front-end
            tools and clean, well-structured code. I focus on usability,
            performance, and making your product look great on any device.
          </p>
          <button type="button">View project</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ML Model Training</h2>
          <p>
            I design and train machine learning models end-to-end: data
            cleaning, feature engineering, model selection, and evaluation.
            From classic ML to deep learning, I care about both accuracy and
            reliability.
          </p>
          <button type="button">View project</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Content</h2>
          <p>
            I write clear technical content—docs, articles, and tutorials—that
            explain complex topics with simple language, diagrams, and real
            examples. Good documentation is part of good engineering.
          </p>
          <button type="button">View writing</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cybersecurity & CTF</h2>
          <p>
            I actively compete in Capture The Flag (CTF) events to sharpen my
            offensive security skills: finding vulnerabilities, exploiting
            misconfigurations, and strengthening defences based on what I learn.
          </p>
          <button type="button">View CTF work</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
