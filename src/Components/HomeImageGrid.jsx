import React from 'react'
import { useState } from 'react'
import '../App.css'
import friesImg from '../assets/fries.jpg'
import egusiSoupImg from '../assets/egusi-soup.jpg'
import grillImg from '../assets/grill.jpg'
import chickenStew from "../assets/chicken-stew.jpg";
import noodleAndRice from "../assets/noodle&rice.jpg";
import noodle2 from "../assets/noodle-2.jpg";
import ofeakwuRice from "../assets/ofeakwu-rice.jpg";
import noodle1 from "../assets/noodle-1.jpg";
import chickenAndFries from "../assets/chicken&fries.jpg";
import jollofGoatMeat from "../assets/jollof-goatMeat-rice.jpg";
import yamAndFriedEgg from "../assets/yam&fried-egg.jpg";
function HomeImageGrid() {
 
  const [source, setSource] = useState("../assets/yam&fried-egg.jpg"  );
  console.log(source);
  
    setInterval (()=>{
        
            setSource("../assets/yam&fried-egg.jpg");
        
        const secondImg = setTimeout (()=>{
            setSource("../assets/jollof-goatMeat-rice.jpg")
            return source;
         }, 5000);
        const thirdImg = setTimeout (()=>{
            setSource("../assets/chicken&fries.jpg")
            return source;

         }, 10000);
        const fourthImg = setTimeout (()=>{
            setSource("../assets/noodle-1.jpg")
            return source;

         }, 15000);
         console.log(source);

    },20000);
      console.log(source);

 


  
  return (
    <div className="main-imgs">
                <div className="img-cont span-2 image-2 ">
                  <img src={grillImg} alt="Meal Image" />
                  <img src={jollofGoatMeat} alt="Meal Image" />
                  <img src={yamAndFriedEgg} alt="Meal Image" />
                   <img src={chickenAndFries}  alt="Meal Image" />
                </div>
                <div className="span-1-container">
                  <div className="img-cont span-1 image-1 ">
                    <img src={source}  alt="Meal Image" />
                    {/* <img src={chickenStew}  alt="Meal Image" />
                    <img src={noodle1}  alt="Meal Image" />
                    <img src={ofeakwuRice}  alt="Meal Image" /> */}
                  </div>
                  <div className="img-cont span-1 row-2 image-3 ">
                    <img src={egusiSoupImg} alt="Meal Image" />
                    {/* <img src={noodle2} alt="Meal Image" />
                    <img src={noodleAndRice} alt="Meal Image" />
                    <img src={jollofGoatMeat} alt="Meal Image" /> */}
                  </div>

                </div>
                
            </div>
  )
}

export default HomeImageGrid