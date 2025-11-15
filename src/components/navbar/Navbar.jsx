import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar (likely mobile hamburger) */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          className="brand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Jonat John Mathew
        </motion.span>

        <div className="social">
          <a
            href="https://github.com/jonatjm06"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub - SoulReaper06"
          >
            <img src="/github.png" alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonat-j-mathew06/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn - Jonat J Mathew"
          >
            <img src="/linkedin.png" alt="LinkedIn icon" />
          </a>
          <a
            href="https://www.instagram.com/jjm_06_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram - jjm_06_"
          >
            <img src="/instagram.png" alt="Instagram icon" />
          </a>
          <a
            href="https://medium.com/@johnatj33"
            target="_blank"
            rel="noreferrer"
            aria-label="Medium - @johnatj33"
          >
            <img src="/medium.png" alt="Medium icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
