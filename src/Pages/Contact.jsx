import React from "react";
import { motion } from "framer-motion";
// import { AnimatePresence } from 'framer-motion'
import "../App.css";
import "./Contact-Form-page.css";
import Header from "../Components/Header";
import Footer from "../Sections/Footer";
import RestaurantPic3 from "../assets/Restaurant Pic3.jpg";
import { ScrollRestoration } from "react-router-dom";

function Contact() {
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 0.5 }}
        className="Contact-Us"
      >
        <div className="  contact-heading">
          <img src={RestaurantPic3} alt="" />
          <span className="heading-text heading3 center">Contact Us</span>
        </div>

        <div className="form-wrapper">
          <div className="headings">
            <div className="heading3 left pl1">Just Say Hi</div>
            <div className="heading-small-white left pl0-5">
              Tell us about yourself and we'll contact you soon.
            </div>
          </div>
          <form action="#">
            <div className="row-flex ma-tp-btm-1">
              <div className="input-container">
                <div className="labeler">Full Name</div>
                <input type="text" name="Name" id="Name" />
              </div>

              <div className="input-container">
                <div className="labeler">E-mail</div>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="subject ma-tp-btm-1 input-container">
              <div className="labeler">Subject</div>
              <input type="text" name="subject" id="subject" />
            </div>
            <div className="message ma-tp-btm-1 input-container">
              <div className="labeler">Your Message</div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
        </div>
      </motion.section>
      <Footer />
      {/* </AnimatePresence> */}
      <ScrollRestoration />
    </>
  );
}

export default Contact;
