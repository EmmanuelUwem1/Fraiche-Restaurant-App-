import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
import "../App.css";
import "./Gallery-Grid.css";
import Header from "../Components/Header";
import Footer from "../Sections/Footer";

import fries from "../assets/fries.jpg";
import egusiSoup from "../assets/egusi-soup.jpg";
import grill from "../assets/grill.jpg";
import chickenStew from "../assets/chicken-stew.jpg";
import noodleAndRice from "../assets/noodle&rice.jpg";
import noodle2 from "../assets/noodle-2.jpg";
import ofeakwuRice from "../assets/ofeakwu-rice.jpg";
import noodle1 from "../assets/noodle-1.jpg";
import chickenAndFries from "../assets/chicken&fries.jpg";
import jollofGoatMeat from "../assets/jollof-goatMeat-rice.jpg";
import yamAndFriedEgg from "../assets/yam&fried-egg.jpg";

function Gallery() {
  const container = {
    animate: {
      opacity: 1,
      x: "0rem",
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.35,
      },
    },
  };
  const FadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, type: "tween" },
    },
  };
  return (
    <>
      <Header />
      <motion.section
        variants={container}
        initial={{ opacity: 0, x: "2rem" }}
        animate={"animate"}
        exit={{ opacity: 0, x: "2rem" }}
        transition={{ duration: 0.5 }}
        className="Gallery "
      >
        <div className="grid-1 grid">
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              
              src={fries}
              alt="Fries"
            />
          </div>
          <div className="col-span-1 row-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={grill}
              alt="Grill"
            />
          </div>
          <div className="col-span-1">
            {" "}
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={chickenStew}
              alt="Chicken Stew"
            />
          </div>

          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={egusiSoup}
              alt="egusi soup"
            />
          </div>
          <div className="col-span-1 grd-srt-3-4">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={noodleAndRice}
              alt="noodle and rice"
            />
          </div>
        </div>

        <div className="grid-2 grid">
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={noodle2}
              alt="Noodle"
            />
          </div>
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={ofeakwuRice}
              alt="ofeakwu Rice"
            />
          </div>
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={noodle1}
              alt="Noodle"
            />
          </div>
        </div>

        <div className="grid-3 grid">
          <div className="col-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={chickenAndFries}
              alt="Chicken and Fries"
            />
          </div>
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={jollofGoatMeat}
              alt="Jollof Goat meat"
            />
          </div>
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={yamAndFriedEgg}
              alt="Yam and fried egg"
            />
          </div>
        </div>
      </motion.section>

      <div className="xxlarge-text center">Thanks For Viewing</div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Gallery;
