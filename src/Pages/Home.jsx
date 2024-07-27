import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";
// components or Sections
import Header from "../Components/Header";
import MealCard from "../Components/MealCard.jsx";
import InfoSection from "../Sections/InfoSection.jsx";
import NewsLetter from "../Sections/NewsLetter.jsx";
import AboutChef from "../Sections/AboutChef.jsx";
import RestaurantVideo from "../Sections/RestaurantVideo";
import Footer from "../Sections/Footer.jsx";
import HomeImageGrid from "../Components/HomeImageGrid";
// images used
import RestaurantBackground from "../assets/Home-background.jpg";
import friedRiceImg from "../assets/fried-rice.jpg";
import jollofRiceImg from "../assets/jollof-rice.jpg";
import sauceImg from "../assets/sauce.jpg";
import friesImg from "../assets/fries.jpg";

function Home() {
  const container = {
    animate: {
      transition: {
        delayChildren: 0.4,
        // staggerChildren: 0.35,
      },
    },
  };

  const slideUp = {
    initial: {
      opacity: 0,
      y: "-1rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {  duration: .8, type: "tween" },
    },
  };
  const slideDown = {
    initial: {
      opacity: 0,
      y: "1rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {  duration: .8, type: "tween" },
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
      transition: {  duration: .8, type: "tween" },
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
      transition: {  duration: .8, type: "tween" },
    },
  };
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, x: "-2rem" }}
        animate={{ opacity: 1, x: "0rem" }}
        exit={{ opacity: 0, x: "-2rem" }}
        // transition={{ duration: 0.2 }}
        
        className="Home ovf-x-h"
        id="Home"
      >
        <img
          src={RestaurantBackground}
          alt="RestaurantBackground"
          className="Home-bg-img"
        ></img>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="main-text-cont"
        >
          <motion.p
            variants={slideDown}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5}}
            className="bold"
          >
            <span className="bold">Where</span>
            <span className="green bold"> flavour</span>
          </motion.p>
          <motion.p
            variants={slideUp}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5}}

            className="bold"
          >
            Meets Passion
          </motion.p>
          <p className="smaller">experience fraiche's mastery</p>
          <div className="main-cta">
            <button className="sec-btn">Order Now</button>
            <button className="pri-btn">Make Reservation</button>
          </div>
        </motion.div>
        <HomeImageGrid />
      </motion.section>

      <section id="feat" className="ovf-x-h">
        <div className="label">
          <span className="heading3">Featured Meals</span>
          <Link to="/menu" className="colored-small pointer link">
            see more
          </Link>
        </div>
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          className="cards-cont"
        >
          <MealCard
            meal="Jollof Rice"
            price={2000}
            mealImage={jollofRiceImg}
            delay={0}
          />
          <MealCard
            meal="Fries"
            price={1800}
            mealImage={friesImg}
            delay={0.20}
          />
          <MealCard
            meal="Fried Rice"
            price={2200}
            mealImage={friedRiceImg}
            delay={0.20 * 2}
          />
          <MealCard
            meal="Sauce"
            price={1900}
            mealImage={sauceImg}
            delay={0.20 * 3}
          />
        </motion.div>
      </section>
      <InfoSection className="InfoSection" />
      <NewsLetter />
      <AboutChef />
      <RestaurantVideo />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Home;
