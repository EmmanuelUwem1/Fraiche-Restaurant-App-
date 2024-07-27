import "../App.css";
import { motion } from "framer-motion";
import Proptypes from "prop-types"

function MealCard(props) {
  const slideUp = {
    initial: {
      opacity: 0,
      y: "4rem",
    }
   
  }
  

  
  return (
    <motion.div
    variants={slideUp}
    initial="initial"
    whileInView={{
      opacity: 1,
      y: "0rem",
      transition: {
                   duration: .8, 
                   type: 'tween',
                   delay: props.delay
                  }
                }}
    viewport={{once: true}}
     className="card">
      <span className="img" ><img src={props.mealImage} alt="Meal Image" /> </span>
      <div className="card-label">
        <span className="name">{props.meal}</span>
        <span className="price">{"N" + props.price}</span>
      </div>
      <button className="pri-btn">Order Now</button>
    </motion.div>
  );
}

export default MealCard
