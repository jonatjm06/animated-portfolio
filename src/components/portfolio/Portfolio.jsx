import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import learnchess from "/learnchess.png";
import fruitrot from "/fruitrot.png";

const items = [
  {
    id: 1,
    title: "Learn Chess Online",
    img: learnchess,
    desc: "An interactive web app to help beginners learn chess through guided lessons, puzzles, and visual move hints. I focused on a clean UI, responsive layout, and making the experience friendly for users new to the game.",
  },
  {
    id: 2,
    title: "Fruit Rot Detector",
    img: fruitrot,
    desc: "A computer vision project that classifies fresh vs. rotten fruit from images. I worked on data preprocessing, model training, and evaluation to build an end-to-end pipeline for simple quality control.",
  },
  {
    id: 3,
    title: "Vanilla JS Dashboard",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A lightweight dashboard built with vanilla JavaScript to practice working without frameworks. It uses dynamic DOM updates, modular code structure, and basic state handling to display and filter data.",
  },
  {
    id: 4,
    title: "Music Discovery App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "A simple music discovery interface where users can browse tracks and explore playlists with a clean, responsive UI. This project helped me refine layout, styling, and working with API-style content.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
