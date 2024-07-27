import React from "react";
import { ScrollRestoration } from "react-router-dom";
import "../App.css";
import OopsImg from "../assets/oops.jpg";
import { Link } from "react-router-dom";

function Oops() {
  return (
    <section className="Oops flex ma-tb pd">
      <div className="oops-img w-50 img-container">
        <img src={OopsImg} alt="" />
      </div>
      <div className="oops-text w-50">
        <div className="h1">Oops Page Not Found</div>
        <div className="text ma-btm">
          It looks like you've taken the wrong turn. Don't worry it happens to
          the best of us! Here are some options to help you get back on track
        </div>

        <div className="links">
          <div>
            <Link to="/" className=" text link">
              Home
            </Link>
            <span className="text">Return to our homepage</span>
          </div>

          <div>
            <Link to="/menu" className="text link">
              Menu
            </Link>
            <span className="text">Check out our delicious offerings</span>
          </div>

          <div>
            <span className="link text">Reservations</span>
            <span className="text">Make a reservation</span>
          </div>

          <div>
            <span className="link text">Contact us</span>
            <span className="text">Get in touch with us.</span>
          </div>
        </div>

        <div className="text">
          If you believe this is an error, please let us know at{" "}
          <span className="link text">info@fraiche.com</span>
        </div>
        <div className="text">Bon Apetite, Fraiche Team</div>
      </div>
      <ScrollRestoration />
    </section>
  );
}

export default Oops;
