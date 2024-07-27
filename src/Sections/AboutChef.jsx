import "../App.css";
import ChefImg from "../assets/cheff.jpg";
import { motion } from "framer-motion";

function AboutChef() {
  const container = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.35,
      },
    },
  };

  const slideRight = {
    initial: {
      opacity: 0,
      x: "-3rem",
    },
    animate: {
      opacity: 1,
      x: "0rem",
      transition: { ease: "easeInOut", duration: .8, type: "tween" },
    },
  };
  const slideLeft = {
    initial: {
      opacity: 0,
      x: "3rem",
    },
    animate: {
      opacity: 1,
      x: "0rem",
      transition: { ease: "easeInOut", duration: .8, type: "tween "},
    },
  };

  return (
    <motion.div
      variants={container}
      whileInView={"animate"}
      viewport={{ once: true }}
      className="about-chef ovf-x-h"
    >
      <motion.div
        initial={"initial"}
        variants={slideRight}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="img"
      >
        <img src={ChefImg} alt="Picture of Chef ItoroAbasi Ufot" />
      </motion.div>

      <motion.div
        initial={"initial"}
        variants={slideLeft}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="text-cont"
      >
        <p className="colored-small">About Chef</p>
        <p className="heading3">What we believe in</p>
        <p className="text">
          Chef itoro believs in sustainable, farm-to-table dining, using fresh,
          local ingredients to craft innovative dishes that celebrate natural
          flavours and nourish the soul, ensuring every meal is a unique
          experience.
        </p>
        <div className="sub">
          <span className="chef-name heading6">ItoroAbasi Ufot</span>
          <span className="chef-title heading-small">Chef UI</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default AboutChef;
