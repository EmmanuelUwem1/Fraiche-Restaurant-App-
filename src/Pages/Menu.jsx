import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import {motion} from 'framer-motion'
import MealCard from '../Components/MealCard.jsx'
import Footer from '../Sections/Footer.jsx'
import Header from '../Components/Header.jsx'
import jollofRiceImg from '../assets/jollof-rice.jpg'
import friesImg from '../assets/fries.jpg'
import sauceImg from '../assets/sauce.jpg'
import friedRiceImg from '../assets/fried-rice.jpg'

function Menu() {
    const container = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.35,
        duration: 0.5,
        
        // when: "beforeChildren",
      },
      opacity: 1 , 
    },
  };
    
    
  return (
    <>
    <Header />
    <motion.div 
    variants={container}
    initial={{ opacity: 0 }}
    animate="animate"
    exit={{ opacity: 0}}

    className="cards-cont ma-tb ovf-x-h" >
        <MealCard meal="Jollof Rice" price={2000} mealImage={jollofRiceImg} delay={0}/>
        <MealCard
         meal="Fries" price={1800} mealImage={friesImg} delay={0.15} />
        <MealCard
         meal="Fried Rice" price={2200} mealImage={friedRiceImg} delay={0.15*2} />
        <MealCard meal="Sauce" price={1900} mealImage={sauceImg} delay={0.15*3}/>
        <MealCard meal="Jollof Rice" price={2000} mealImage={jollofRiceImg} delay={0.15*4}/>
        <MealCard meal="Fries" price={1800} mealImage={friesImg} delay={0.15*5}/>
        <MealCard meal="Fried Rice" price={2200} mealImage={friedRiceImg} delay={0.15*6}/>
        <MealCard meal="Sauce" price={1900} mealImage={sauceImg} delay={0.15*7}/>
        <MealCard meal="Jollof Rice" price={2000} mealImage={jollofRiceImg} delay={0.15*8}/>
        <MealCard meal="Fries" price={1800} mealImage={friesImg} delay={0.15*9}/>
        <MealCard meal="Fried Rice" price={2200} mealImage={friedRiceImg} delay={0.15*10}/>
        <MealCard meal="Sauce" price={1900} mealImage={sauceImg} delay={0.15*11}/>
      </motion.div>
      <Footer />
      <ScrollRestoration />
      </>
  )
}

export default Menu