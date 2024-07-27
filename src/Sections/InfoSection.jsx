import "../App.css";
import { motion } from "framer-motion";
import historyImg from "../assets/history-img.jpg";
import aboutImg from "../assets/about-img.jpg";

function InfoSection() {
  const BtnStyle = {
    borderRadius: "0",
  };

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
      transition: { ease: "easeInOut", duration: 1.2, type: "tween" },
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
      transition: { ease: "easeInOut", duration: 1.2, type: "tween" },
    },
  };
  return (
    <>
      <motion.div
        variants={container}
        whileInView="animate"
        viewport={{ once: true }}
        className="history info ovf-x-h"
      >
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="img"
        >
          <img src={historyImg} alt="" />
        </motion.div>
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-cont"
        >
          <span className="heading3">History</span>
          <p className="text">
            Founded in 2001, Fraiche began as a small bistro in Paris. Over the
            decades, it has grown into a renowned brand, celebrated for its
            culinary excellence and charming ambiance worldwide.
          </p>
          <span className="pri-btn no-b-radius" style={BtnStyle}>
            Read More
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="About-us info ovf-x-h"
      >
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="text-cont"
        >
          <span className="heading3">About Us</span>
          <p className="text">
            Fraiche offers a delightful dining experinece with a blend of
            traditional and modern cusine, impeccable services, and a warm
            atmospher, making every visit a memorable culinary journey.
          </p>
          <span className="pri-btn " style={BtnStyle}>
            Read More
          </span>
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="img"
        >
          <img src={aboutImg} alt="" />
        </motion.div>
      </motion.div>
    </>
  );
}
export default InfoSection;
